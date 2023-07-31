const { v4: uuidv4 } = require("uuid");

const artists = [
  {
    id: "1",
    name: "Artist 1",
    grammy: true,
  },
  {
    id: "2",
    name: "Artist 2",
    grammy: false,
  },
  {
    id: "3",
    name: "Artist 3",
    grammy: true,
  },
];

const getAllArtists = () => {
  return artists;
};

const getArtistById = (id) => {
  return artists.find((artist) => artist.id === id);
};

const createArtist = (artist) => {
  artist.id = uuidv4();
  artists.push(artist);
  return artist;
};

const updateArtist = (id, updatedArtist) => {
  const index = artists.findIndex((artist) => artist.id === id);
  if (index !== -1) {
    updatedArtist.id = id;
    artists[index] = updatedArtist;
    return updatedArtist;
  }
  return null;
};

const deleteArtist = (id) => {
  const index = artists.findIndex((artist) => artist.id === id);
  if (index !== -1) {
    artists.splice(index, 1);
  }
};

module.exports = {
  getAllArtists,
  getArtistById,
  createArtist,
  updateArtist,
  deleteArtist,
};
