const config = {};

config.mongo = 'mongodb://localhost:27017';
config.jwtRefreshSecret = 'someRefreshSecret';
config.jwtAccessSecret = 'someAccessSecret';

config.aws = {
  bucketName: 'pictures',
  accessKey: '',
  keyId: '',
};

module.exports = config;
