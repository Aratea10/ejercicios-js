const musicCatalog = () => {
  let playlists = [];

  const createPlaylist = (playlistName) => {};
  const getAllPlaylists = () => {};
  const removePlaylist = (playlistName) => {};
  const addSongToPlaylist = (playlistName, song) => {};
  const removeSongFromPlaylist = (playlistName, title) => {};
  const favoriteSong = (playlistName, title) => {};
  const sortSongs = (playlistName, criterion) => {};
  return {
    createPlaylist,
    addSongToPlaylist,
    removeSongFromPlaylist,
    sortSongs,
    getAllPlaylists,
    removePlaylist,
    favoriteSong,
  };
};

export default musicCatalog;