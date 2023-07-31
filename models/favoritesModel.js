const favorites = {
  artists: ["1"],
  albums: ["1"],
  tracks: ["1"],
};

const getFavorites = () => {
  return favorites;
};

const addTrackToFavorites = (trackId) => {
  if (!favorites.tracks.includes(trackId)) {
    favorites.tracks.push(trackId);
  }
};

const removeTrackFromFavorites = (trackId) => {
  const index = favorites.tracks.indexOf(trackId);
  if (index !== -1) {
    favorites.tracks.splice(index, 1);
  }
};

const addAlbumToFavorites = (albumId) => {
  if (!favorites.albums.includes(albumId)) {
    favorites.albums.push(albumId);
  }
};

const removeAlbumFromFavorites = (albumId) => {
  const index = favorites.albums.indexOf(albumId);
  if (index !== -1) {
    favorites.albums.splice(index, 1);
  }
};

const addArtistToFavorites = (artistId) => {
  if (!favorites.artists.includes(artistId)) {
    favorites.artists.push(artistId);
  }
};

const removeArtistFromFavorites = (artistId) => {
  const index = favorites.artists.indexOf(artistId);
  if (index !== -1) {
    favorites.artists.splice(index, 1);
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
