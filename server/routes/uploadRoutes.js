import express from "express";

import upload
from "../middleware/upload.js";

import Media
from "../models/Media.js";

const router =
  express.Router();




/* =========================
   UPLOAD FILE
========================= */

router.post(

  "/",

  upload.single("image"),

  async (req, res) => {

    try {

      /* DETECT FILE TYPE */

      let fileType =
        "document";

      if (
        req.file.mimetype.startsWith(
          "image"
        )
      ) {

        fileType =
          "image";

      } else if (
        req.file.mimetype.startsWith(
          "video"
        )
      ) {

        fileType =
          "video";
      }

      /* SAVE TO MONGODB */

      const media =
        new Media({

          fileName:
            req.file.originalname,

          fileUrl:
            req.file.location,

          fileType:
            fileType,

          category:
            req.body.category ||
            "general",

        });

      await media.save();

      console.log(
        "✅ Media Saved:",
        media
      );

      /* RESPONSE */

      res.status(200).json({

        success: true,

        message:
          "Upload Successful",

        imageUrl:
          req.file.location,

        media,

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        error:
          error.message,

      });
    }
  }
);




/* =========================
   GET ALL MEDIA
========================= */

router.get(
  "/all",

  async (req, res) => {

    try {

      const media =
        await Media.find()
          .sort({
            createdAt: -1,
          });

      res.status(200).json({

        success: true,

        count:
          media.length,

        media,

      });

    } catch (error) {

      res.status(500).json({

        success: false,

        error:
          error.message,

      });
    }
  }
);




/* =========================
   DELETE MEDIA
========================= */

router.delete(
  "/:id",

  async (req, res) => {

    try {

      const media =
        await Media.findByIdAndDelete(
          req.params.id
        );

      res.status(200).json({

        success: true,

        message:
          "Media Deleted",

        media,

      });

    } catch (error) {

      res.status(500).json({

        success: false,

        error:
          error.message,

      });
    }
  }
);

export default router;
