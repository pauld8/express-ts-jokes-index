import app from './app';
import config from './config';
import mongoose from './mongoose';

mongoose.init();

mongoose.db.once('open', () => {
  console.log(`Mongoose connected on ${config.db.url}`);

  app.listen(config.port, () => {
    console.log(`App listening on http://localhost:${config.port}`);
  });
});
