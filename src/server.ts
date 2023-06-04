import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import router from './routes/users';

const app = express();

app.use(express.json());

app.use(router);

const uri = process.env.MONGODB_URI;

if (typeof uri === 'string') {
  mongoose
    .connect(uri)
    .then(() => {
      console.log('🎲 -> MongoDB Connection Succeeded! ✓');
    })
    .catch((err) => {
      console.log('❌ -> Error in DB connection', err.message);
    });
} else {
  console.log('❌ -> MONGODB_URI is not defined or is not a string');
}

app.listen(3000, () => console.log('🔥 Server is running 🚀'));
