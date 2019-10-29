var express = require('express');
var router = express.Router();
const fs = require('fs');

const jsonReader = (filePath, cb) => {
  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      return cb && cb(err);
    }
    try {
      const object = JSON.parse(fileData);
      return cb && cb(null, object);
    } catch (err) {
      return cb && cb(err);
    }
  });
};

/* GET todos. */
router.get('/', (req, res, next) => {
  jsonReader('./data/todos.json', (err, data) => {
    if (err) {
      console.log(error);
      return;
    }
    res.send(data);
  });
});

module.exports = router;
