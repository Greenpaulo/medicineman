const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
  
    console.log(`MongoDB connected ${conn.connection.host}`.magenta.underline.bold);
    
  } catch (err) {
    console.error("Connection to MongoDB failed - check internet connection!".red.bold);
    process.exit(1);
  }
}

module.exports = connectDB;