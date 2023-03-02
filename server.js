const mongoose = require('mongoose');
mongoose
  .connect(
    'mongodb+srv://qor:0989@ais.smqldtl.mongodb.net/test',
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


const express = require('express');
const path = require('path');
const app = express();
  
app.listen(3000, function () {
   console.log('listening on 3000')
}); 

app.use(express.static(path.join(__dirname, 'my_app/build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/my_app/build/index.html'));
});