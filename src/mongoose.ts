import mongoose from 'mongoose';
import { Connection } from 'mongoose';
import config from './config';

export default class Mongoose {
  static _db: Connection;

  static init() {
    if (Mongoose._db) {
      return;
    }

    mongoose.connect(config.db.url as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    Mongoose._db = mongoose.connection;
  }

  static get db() {
    return Mongoose._db;
  }
}
