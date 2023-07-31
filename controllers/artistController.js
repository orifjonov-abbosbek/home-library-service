const artistModel = require("../models/artistModel");
const { v4: uuidv4 } = require("uuid");

const getAllArtists = (req, res) => {
  const artists = artistModel.getAllArtists();
  res.status(200).json(artists);
};

const getArtistById = (req, res) => {
  const { id } = req.params;
  const artist = artistModel.getArtistById(id);

  if (!artist) {
    return res.status(404).json({ error: "Artist not found" });
  }

  res.status(200).json(artist);
};

const createArtist = (req, res) => {
  const { name, grammy } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  const newArtist = {
    id: uuidv4(),
    name,
    grammy: !!grammy,
  };

  const createdArtist = artistModel.createArtist(newArtist);

  res.status(201).json(createdArtist);
};

const updateArtist = (req, res) => {
  const { id } = req.params;
  const { name, grammy } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  const updatedArtist = artistModel.updateArtist(id, { name, grammy });

  if (!updatedArtist) {
    return res.status(404).json({ error: "Artist not found" });
  }

  res.status(200).json(updatedArtist);
};

const deleteArtist = (req, res) => {
  const { id } = req.params;

  const deletedArtist = artistModel.deleteArtist(id);

  if (!deletedArtist) {
    return res.status(404).json({ error: "Artist not found" });
  }

  res.status(204).json({ message: "Artist deleted successfully" });
};

module.exports = {
  getAllArtists,
  getArtistById,
  createArtist,
  updateArtist,
  deleteArtist,
};
