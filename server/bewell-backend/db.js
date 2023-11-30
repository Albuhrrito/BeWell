const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mogo, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('banana peels...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
