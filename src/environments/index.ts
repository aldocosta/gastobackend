import * as dotenv from 'dotenv';

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

export const appConfig = {
  PORT: process.env.APP_PORT,
  API_VERSION: process.env.API_VERSION,
  BASE_URL: `${process.env.APP_VERSION}/${process.env.APP_PREFIX}`,
};

export const authConfig = {
  SECRET_KEY: process.env.SECRET_KEY,
  EXPIRE: Number(process.env.EXPIRE) || 3600,
  CRYPTO_SECRET_KEY: process.env.CRYPTO_SECRET_KEY,
  CRYPTO_ALGORITHM:process.env.CRYPTO_ALGORITHM
};

export const mongoDbConfig = {
  MONGO_CORE_URL: process.env.MONGO_CORE_URL,
};

export const mongoDbConfigName = {
  MONGO_CORE_URL: 'MONGO_CORE_URL',
};

// export const rabbitMqConnection = {
//   PREFIX: process.env.RABBIT_MQ_PREFIX,
//   URL: process.env.RABBIT_MQ_URL,
//   PORT: process.env.RABBIT_MQ_PORT,
//   USER: process.env.RABBIT_MQ_USER,
//   PASSWORD: process.env.RABBIT_MQ_PASSWORD,
//   MESSAGE_TTL: Number(process.env.RABBIT_MQ_RETRY_MESSAGE_TIME) || 180000,
//   RABBITMQ_TTL: Number(process.env.RABBIT_MQ_TTL) || 7200000,
//   PREFETCH_COUNT: Number(process.env.PREFETCH_COUNT) || 50,
//   RABBIT_MQ_RETRY_TIME_LIMIT:
//     Number(process.env.RABBIT_MQ_RETRY_TIME_LIMIT) || 200,
// };

// export const rabbitMqReportQueueNames = {
//   RABBIT_MQ_MERCHANT_CREATE_OR_UPDATE_QUEUE:
//     process.env.RABBIT_MQ_MERCHANT_CREATE_OR_UPDATE_QUEUE,
//   RABBIT_MQ_MERCHANT_CREATE_PIX_ON_REPORT:
//     process.env.RABBIT_MQ_MERCHANT_CREATE_PIX_ON_REPORT,
//   RABBIT_MQ_MERCHANT_UPDATE_PIX_ON_REPORT:
//     process.env.RABBIT_MQ_MERCHANT_UPDATE_PIX_ON_REPORT,
//   RABBIT_MQ_MERCHANT_CREATE_WITHDRAW_ON_REPORT:
//     process.env.RABBIT_MQ_MERCHANT_CREATE_WITHDRAW_ON_REPORT,
//   RABBIT_MQ_MERCHANT_UPDATE_WITHDRAW_ON_REPORT:
//     process.env.RABBIT_MQ_MERCHANT_UPDATE_WITHDRAW_ON_REPORT,
// };

// export const typeOrmConfig = {
//   TYPEORM_CONNECTION: process.env.TYPEORM_CONNECTION,
//   TYPEORM_HOST: process.env.TYPEORM_HOST,
//   TYPEORM_USERNAME: process.env.TYPEORM_USERNAME,
//   TYPEORM_PASSWORD: process.env.TYPEORM_PASSWORD,
//   TYPEORM_DATABASE: process.env.TYPEORM_DATABASE,
//   TYPEORM_PORT: Number(process.env.TYPEORM_PORT),
//   TYPEORM_SYNCHRONIZE: process.env.TYPEORM_SYNCHRONIZE,
//   TYPEORM_LOGGING: Boolean(process.env.TYPEORM_LOGGING),
//   TYPEORM_ENTITIES: process.env.TYPEORM_ENTITIES,
//   TYPEORM_MIGRATIONS: process.env.TYPEORM_MIGRATIONS,
// };
