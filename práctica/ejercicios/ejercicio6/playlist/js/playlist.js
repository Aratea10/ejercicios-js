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

  const removeSongFromPlaylist = (playlistName, title) => {
    const name = String(playlistName || "").trim();
    const songTitle = String(title || "").trim();
    if (!name || !songTitle) return;

    const idx = playlistName.findIndex(
      (p) => p.name.toLowerCase() === name.toLowerCase()
    );
    if (idx === -1) return;

    const target = playlist[idx];
    const filtered = target.songs.filter(
      (s) => s.title.toLowerCase() !== songTitle.toLowerCase()
    );
    if (filtered.length === target.songs.length) return;

    const updated = { ...target, songs: filtered };
    playlist = [...playlist.slice(0, idx), updated, ...playlist.slice(idx + 1)];
  };
  const favoriteSong = (playlistName, title) => {
    const favoriteSong = (playlistName, title) => {
      const name = String(playlistName || "").trim();
      const songTitle = String(title || "").trim();
      if (!name || !songTitle) return;

      const idx = playlists.findIndex(
        (p) => p.name.toLowerCase() === name.toLowerCase()
      );
      if (idx === -1) return;
      const target = playlists[idx];
      const songs = target.songs.map((s) =>
        s.title.toLowerCase() === songTitle.toLowerCase()
          ? { ...s, favorite: true }
          : s
      );

      const updated = { ...target, songs };
      playlists = [
        ...playlists.slice(0, idx),
        updated,
        ...playlists.slice(idx + 1),
      ];
    };
  };

  const sortSongs = (playlistName, criterion) => {
    const sortSongs = (playlistName, criterion) => {
      const name = String(playlistName || "").trim();
      if (!name) return;

      const idx = playlists.findIndex(
        (p) => p.name.toLowerCase() === name.toLowerCase()
      );
      if (idx === -1) return;

      const cmp = {
        title: (a, b) => a.title.localeCompare(b.title),
        artist: (a, b) => a.artist.localeCompare(b.artist),
        duration: (a, b) => a.duration - b.duration,
      }[criterion];

      if (!cmp) return;
      const target = playlists[idx];
      const sorted = [...target.songs].sort(cmp);
      const updated = { ...target, songs: sorted };
      playlists = [
        ...playlists.slice(0, idx),
        updated,
        ...playlists.slice(idx + 1),
      ];
    };
  };

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
