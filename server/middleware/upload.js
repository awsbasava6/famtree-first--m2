import multer from "multer";

import multerS3 from "multer-s3";

import { v4 as uuidv4 } from "uuid";

import s3 from "../config/s3.js";

const upload = multer({

  storage: multerS3({

    s3: s3,

    bucket:
      process.env.AWS_BUCKET_NAME,


    contentType:
      multerS3.AUTO_CONTENT_TYPE,

    key: function (
      req,
      file,
      cb
    ) {

      const uniqueFileName =
        `${uuidv4()}-${file.originalname}`;

      cb(null, uniqueFileName);
    },

  }),

});

export default upload;
