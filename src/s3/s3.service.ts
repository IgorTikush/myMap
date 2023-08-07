import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import * as config from 'config';

@Injectable()
export class S3Service {
  protected s3: any;

  constructor() {
    this.s3 = new AWS.S3();

    AWS.config.credentials = {
      accessKeyId: config.get('aws.accessKey'),
      secretAccessKey: config.get('aws.keyId'),
    };
    AWS.config.region = 'ap-east-1';
  }

  async getSignedLinkToUpload() {
    // const {
    //   hk = false,
    //   isUserExtensions = false,
    //   method,
    // } = options;

    const bucket = config.get('aws.bucketName') as string;

    const params = {
      Bucket: bucket,
      // Key: urlKey,
      Expires: 1200,
      // StorageClass: IntelligentStorageClass,
      ContentType: 'application/jpeg',
    };

    return this.s3.getSignedUrl('putObject', params);
  }
}
