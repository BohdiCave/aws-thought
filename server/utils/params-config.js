const {v4: uuidv4} = require('uuid');

const params = fileName => {
  const myFile = fileName.originalname.split('.');
  const fileType = myFile[myFile.length - 1];

  const imageParams = {
    Bucket: 'user-images-ad182fe1-2d8d-47bf-bab0-b84e47d4d082',
    Key: `${uuidv4()}.${fileType}`,
    Body: fileName.buffer
  };

  return imageParams;
};

module.exports = params;