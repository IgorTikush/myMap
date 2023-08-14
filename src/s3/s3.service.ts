import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import * as config from 'config';
import { uid } from 'uid';

@Injectable()
export class S3Service {
  protected s3: any;

  constructor() {
    this.s3 = new AWS.S3();

    this.s3.config.credentials = {
      accessKeyId: config.get('aws.accessKey'),
      secretAccessKey: config.get('aws.keyId'),
    };
    this.s3.config.region = 'ap-southeast-1';
  }

  async getSignedLinkToUpload(mapId: string) {
    // const {
    //   hk = false,
    //   isUserExtensions = false,
    //   method,
    // } = options;

    const bucket = config.get('aws.bucketName') as string;
    console.log(bucket);
    const params = {
      Bucket: bucket,
      Key: `${mapId}/${uid(25)}.jpeg`,
      Expires: 1200,
      // StorageClass: IntelligentStorageClass,
      ContentType: 'image/jpeg',
    };

    const url = await this.s3.getSignedUrl('putObject', params);
    console.log(this.s3);
    return { uploadUrl: url };
  }
}
