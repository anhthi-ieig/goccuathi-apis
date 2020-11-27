import mongoose from 'mongoose';
import express from 'express';

const app = express();

mongoose.connect(process.env.DB_ADDRESS, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once('open', () => {
  console.log('Database is connected');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
