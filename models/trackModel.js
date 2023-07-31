const { v4: uuidv4 } = require("uuid");

const tracks = [
  {
    id: "1",
    name: "Track 1",
    artistId: "1",
    albumId: "1",
    duration: 180,
  },
  {
    id: "2",
    name: "Track 2",
    artistId: "2",
    albumId: "2",
    duration: 240,
  },
  {
    id: "3",
    name: "Track 3",
    artistId: "3",
    albumId: "3",
    duration: 210,
  },
];

const getAllTracks = () => {
  return tracks;
};

const getTrackById = (id) => {
  return tracks.find((track) => track.id === id);
};

const createTrack = (track) => {
  track.id = uuidv4();
  tracks.push(track);
  return track;
};

const updateTrack = (id, updatedTrack) => {
  const index = tracks.findIndex((track) => track.id === id);
  if (index !== -1) {
    updatedTrack.id = id;
    tracks[index] = updatedTrack;
    return updatedTrack;
  }
  return null;
};

const deleteTrack = (id) => {
  const index = tracks.findIndex((track) => track.id === id);
  if (index !== -1) {
    tracks.splice(index, 1);
  }
};

module.exports = {
  getAllTracks,
  getTrackById,
  createTrack,
  updateTrack,
  deleteTrack,
};
