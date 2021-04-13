const fs = require('fs')

module.exports = (filename, data) => {
  fs.writeFile(filename, data, function(err) {
    if (err) console.log(err);
    console.log('Sucess! File has been written.');
  });
};
