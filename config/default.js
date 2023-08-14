const config = {};

config.mongo = 'mongodb://localhost:27017';
config.jwtRefreshSecret = 'someRefreshSecret';
config.jwtAccessSecret = 'someAccessSecret';

config.aws = {
  bucketName: 'my-map-pictures',
  accessKey: 'AKIA4EDQCLL4FGZYTLSW',
  keyId: 'R9nVwcmL6wZTXQmlo7jl3DLqIRNcpbjWisfvBLZq',
};

module.exports = config;
