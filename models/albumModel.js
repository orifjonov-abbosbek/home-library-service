const { v4: uuidv4 } = require("uuid");

const albums = [
  {
    id: "1",
    name: "Album 1",
    year: 2020,
    artistId: "1",
  },
  {
    id: "2",
    name: "Album 2",
    year: 2018,
    artistId: "2",
  },
  {
    id: "3",
    name: "Album 3",
    year: 2019,
    artistId: "3",
  },
];

const getAllAlbums = () => {
  return albums;
};

const getAlbumById = (id) => {
  return albums.find((album) => album.id === id);
};

const createAlbum = (album) => {
  album.id = uuidv4();
  albums.push(album);
  return album;
};

const updateAlbum = (id, updatedAlbum) => {
  const index = albums.findIndex((album) => album.id === id);
  if (index !== -1) {
    updatedAlbum.id = id;
    albums[index] = updatedAlbum;
    return updatedAlbum;
  }
  return null;
};

const deleteAlbum = (id) => {
  const index = albums.findIndex((album) => album.id === id);
  if (index !== -1) {
    albums.splice(index, 1);
  }
};

module.exports = {
  getAllAlbums,
  getAlbumById,
  createAlbum,
  updateAlbum,
  deleteAlbum,
};
