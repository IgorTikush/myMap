const config = {};

config.mongo = process.env.DB_PATH;
config.jwtRefreshSecret = process.env.JWT_REFRESH_SECRET;
config.jwtAccessSecret = process.env.JWT_ACCESS_SECRET;

config.aws = {
  bucketName: process.env.BUCKET_NAME,
  accessKey: process.env.AWS_ACCESS_KEY,
  keyId: process.env.AWS_KEY_ID,
};

module.exports = config;

