const express = require('express');
const router = express.Router();
const multer = require('multer');
const AWS = require('aws-sdk');
const paramsConfig = require('../utils/params-config');

const storage = multer.memoryStorage({
  destination: (req, file, cb) => {
    cb(null, '');
  }
});

//image is the key
const upload = multer({storage}).single('image');
const s3 = new AWS.S3({
  apiVersion: '2006-03-01'
});

// const upload = require('../services/file-upload');

// const singleUpload = upload.single('image');

router.post('/image-upload', upload, (req, res) => {
    console.log("post('/api/image-upload'", req.file);
    const params = paramsConfig(req.file);
    s3.upload(params, (err, data) => {
        if(err) {
            console.log(err);
            res.status(500).send(err);
        }
        res.json(data);
    });
});

// router.get('/users', (req, res) => {
//     res.json({"which": "which"})
// });

module.exports = router;
