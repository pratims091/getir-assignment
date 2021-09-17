import http from 'http';
import logger from './utils/logger';
import app from './app';

const server = new http.Server(app);

server.listen(process.env.PORT, () => logger.info(`Server listening on PORT: ${process.env.PORT}`));
