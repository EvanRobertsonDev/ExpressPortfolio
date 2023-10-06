process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
var app = express();
const PORT = process.env.PORT || 3030;
module.exports = app;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
