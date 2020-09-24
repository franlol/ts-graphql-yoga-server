import mongoose from 'mongoose';

const dbInit = async (): Promise<void> => {
  try {
    await mongoose.connect('mongodb://localhost/messages-gql-yogaServer', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Database Up and Runing.');
  } catch (err) {
    console.log('Database error', err);
  }
}

export default dbInit;
