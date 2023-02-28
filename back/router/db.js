const mongoose = require('mongoose');
mongoose
  .connect(
    'mongosh "mongodb+srv://cluster0.rhhbzyq.mongodb.net/myFirstDatabase" --apiVersion 1 --username AIS',
    {
      // useNewUrlPaser: true,
      // useUnifiedTofology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    }
  )
  .then(() => console.log('MongoDB conected'))
  .catch((err) => {
    console.log(err);
  });

module.exports = connectDB;