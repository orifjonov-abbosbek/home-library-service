const albumModel = require("../models/albumModel");
const { v4: uuidv4 } = require("uuid");

const getAllAlbums = (req, res) => {
  const albums = albumModel.getAllAlbums();
  res.status(200).json(albums);
};

const getAlbumById = (req, res) => {
  const { id } = req.params;
  const album = albumModel.getAlbumById(id);

  if (!album) {
    return res.status(404).json({ error: "Album not found" });
  }

  res.status(200).json(album);
};

const createAlbum = (req, res) => {
  const { name, year, artistId } = req.body;

  if (!name || !year) {
    return res.status(400).json({ error: "Name and year are required" });
  }

  const newAlbum = {
    id: uuidv4(),
    name,
    year,
    artistId,
  };

  const createdAlbum = albumModel.createAlbum(newAlbum);

  res.status(201).json(createdAlbum);
};

const updateAlbum = (req, res) => {
  const { id } = req.params;
  const { name, year, artistId } = req.body;

  if (!name || !year) {
    return res.status(400).json({ error: "Name and year are required" });
  }

  const updatedAlbum = albumModel.updateAlbum(id, { name, year, artistId });

  if (!updatedAlbum) {
    return res.status(404).json({ error: "Album not found" });
  }

  res.status(200).json(updatedAlbum);
};

const deleteAlbum = (req, res) => {
  const { id } = req.params;

  const deletedAlbum = albumModel.deleteAlbum(id);

  if (!deletedAlbum) {
    return res.status(404).json({ error: "Album not found" });
  }

  res.status(204).json({ message: "Album deleted successfully" });
};

module.exports = {
  getAllAlbums,
  getAlbumById,
  createAlbum,
  updateAlbum,
  deleteAlbum,
};
