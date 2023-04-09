const config = {};

config.mongo = process.env.DB_PATH;
config.jwtRefreshSecret = process.env.JWT_REFRESH_SECRET;
config.jwtAccessSecret = process.env.JWT_ACCESS_SECRET;

module.exports = config;

