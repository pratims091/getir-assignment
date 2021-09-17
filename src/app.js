import express from 'express';
import middleware from './middleware';
import apiRoutes from './api';

const app = express();

// separating all the middlewares in a different file
middleware(app);

app.use('/api', apiRoutes);

// Handle 404 error
app.use((req, res) => {
  res.status(404)
    .send({ code: 404, msg: 'The page you are looking for, could not be found on this server.' });
});

// All errors are sent back as JSON
app.use((err, req, res, next) => {
  // Fallback to default node handler
  if (res.headersSent) {
    next(err);
    return;
  }
  if (process.env.NODE_ENV === 'production') {
    // Notify this error using sentry/rollbar...etc
    res.status(500)
      .send({ code: 500, msg: 'Oops! Something went wrong, please try again later.' });
  } else {
    // Send the actual errors in non production environment
    res.status(500)
      .send({ code: 500, msg: 'Oops! Something went wrong, please try again later.', error: err });
  }
});

export default app;
