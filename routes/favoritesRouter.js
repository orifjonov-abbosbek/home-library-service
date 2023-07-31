const express = require("express");
const router = express.Router();

const {
  getFavorites,
  addTrackToFavorites,
  removeTrackFromFavorites,
  addAlbumToFavorites,
  removeAlbumFromFavorites,
  addArtistToFavorites,
  removeArtistFromFavorites,
} = require("../controllers/favoritesController");

router.get("/", getFavorites);

router.post("/track/:id", addTrackToFavorites);

router.delete("/track/:id", removeTrackFromFavorites);

router.post("/album/:id", addAlbumToFavorites);

router.delete("/album/:id", removeAlbumFromFavorites);

router.post("/artist/:id", addArtistToFavorites);

router.delete("/artist/:id", removeArtistFromFavorites);

module.exports = router;
