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

  const getAllPlaylists = () =>
    playlists.map((p) => ({ ...p, songs: [...p.songs] }));

  const removePlaylist = (playlistName) => {
    const name = String(playlistName || "").trim();
    if (!name) return;
    playlists = playlists.filter(
      (p) => p.name.toLowerCase() !== name.toLowerCase()
    );
  };

  const addSongToPlaylist = (playlistName, song) => {
    const name = String(playlistName || "").trim();
    if (!name) return;

    const idx = playlists.findIndex(
      (p) => p.name.toLowerCase() === name.toLowerCase()
    );
    if (idx === -1) return;

    const newSong = {
      title: String(song?.title || "").trim(),
      artist: String(song?.artist || "").trim(),
      genre: String(song?.genre || "").trim(),
      duration: Number(song?.duration) || 0,
      favorite: false,
    };
    if (!newSong.title) return;

    const target = playlists[idx];
    const updated = { ...target, songs: [...target.songs, newSong] };
    playlists = [
      ...playlists.slice(0, idx),
      updated,
      ...playlists.slice(idx + 1),
    ];
  };

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
