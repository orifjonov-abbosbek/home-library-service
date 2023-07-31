const favoritesModel = require("../models/favoritesModel");

const getFavorites = (req, res) => {
  const favorites = favoritesModel.getFavorites();
  res.status(200).json(favorites);
};

const addTrackToFavorites = (req, res) => {
  const { id } = req.params;
  const added = favoritesModel.addTrackToFavorites(id);

  if (added) {
    res.status(201).json({ message: "Track added to favorites" });
  } else {
    res.status(404).json({ error: "Track not found" });
  }
};

const removeTrackFromFavorites = (req, res) => {
  const { id } = req.params;
  const removed = favoritesModel.removeTrackFromFavorites(id);

  if (removed) {
    res.status(204).json({ message: "Track removed from favorites" });
  } else {
    res.status(404).json({ error: "Track not found in favorites" });
  }
};

const addAlbumToFavorites = (req, res) => {
  const { id } = req.params;
  const added = favoritesModel.addAlbumToFavorites(id);

  if (added) {
    res.status(201).json({ message: "Album added to favorites" });
  } else {
    res.status(404).json({ error: "Album not found" });
  }
};

const removeAlbumFromFavorites = (req, res) => {
  const { id } = req.params;
  const removed = favoritesModel.removeAlbumFromFavorites(id);

  if (removed) {
    res.status(204).json({ message: "Album removed from favorites" });
  } else {
    res.status(404).json({ error: "Album not found in favorites" });
  }
};

const addArtistToFavorites = (req, res) => {
  const { id } = req.params;
  const added = favoritesModel.addArtistToFavorites(id);

  if (added) {
    res.status(201).json({ message: "Artist added to favorites" });
  } else {
    res.status(404).json({ error: "Artist not found" });
  }
};

const removeArtistFromFavorites = (req, res) => {
  const { id } = req.params;
  const removed = favoritesModel.removeArtistFromFavorites(id);

  if (removed) {
    res.status(204).json({ message: "Artist removed from favorites" });
  } else {
    res.status(404).json({ error: "Artist not found in favorites" });
  }
};

module.exports = {
  getFavorites,
  addTrackToFavorites,
  removeTrackFromFavorites,
  addAlbumToFavorites,
  removeAlbumFromFavorites,
  addArtistToFavorites,
  removeArtistFromFavorites,
};
