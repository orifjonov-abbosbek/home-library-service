const trackModel = require("../models/trackModel");
const { v4: uuidv4 } = require("uuid");

const getAllTracks = (req, res) => {
  const tracks = trackModel.getAllTracks();
  res.status(200).json(tracks);
};

const getTrackById = (req, res) => {
  const { id } = req.params;
  const track = trackModel.getTrackById(id);

  if (!track) {
    return res.status(404).json({ error: "Track not found" });
  }

  res.status(200).json(track);
};

const createTrack = (req, res) => {
  const { name, artistId, albumId, duration } = req.body;

  if (!name || !duration) {
    return res.status(400).json({ error: "Name and duration are required" });
  }

  const newTrack = {
    id: uuidv4(),
    name,
    artistId,
    albumId,
    duration,
  };

  const createdTrack = trackModel.createTrack(newTrack);

  res.status(201).json(createdTrack);
};

const updateTrack = (req, res) => {
  const { id } = req.params;
  const { name, artistId, albumId, duration } = req.body;

  if (!name || !duration) {
    return res.status(400).json({ error: "Name and duration are required" });
  }

  const updatedTrack = trackModel.updateTrack(id, {
    name,
    artistId,
    albumId,
    duration,
  });

  if (!updatedTrack) {
    return res.status(404).json({ error: "Track not found" });
  }

  res.status(200).json(updatedTrack);
};

const deleteTrack = (req, res) => {
  const { id } = req.params;

  const deletedTrack = trackModel.deleteTrack(id);

  if (!deletedTrack) {
    return res.status(404).json({ error: "Track not found" });
  }

  res.status(204).json({ message: "Track deleted successfully" });
};

module.exports = {
  getAllTracks,
  getTrackById,
  createTrack,
  updateTrack,
  deleteTrack,
};
