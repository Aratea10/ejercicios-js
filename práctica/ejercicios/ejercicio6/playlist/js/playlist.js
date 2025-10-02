const musicCatalog = () => {
  let playlists = [];

  const createPlaylist = (playlistName) => {
    const name = String(playlistName || "").trim();
    if (!name) return;
    const exists = playlists.some(
      (p) => p.name.toLowerCase() === name.toLowerCase()
    );
    if (exists) return;
    playlists = [...playlists, { name, songs: [] }];
  };

  const getAllPlaylists = () => playlists.map((p) => ({ ...p, songs: [...p.songs] }));
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