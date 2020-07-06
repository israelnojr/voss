const state = {
  loadedSongs: []
};

const mutations = {
  setSongs(state, songs) {
    state.loadedSongs = songs;
  }
};

const actions = {
  nuxtServerInit(vuexContext, context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        vuexContext.commit("setSongs", [
          {
            id: 1,
            name: "Hello Loving me",
            artist: "Agnes Booma",
            album: "Find Soul",
            url: "~/assets/audio/ringtone-6.mp3",
            cover_art_url: "~/assets/images/cover/small/6.jpg",
            tab: "trending"
          },
          {
            id: 2,
            name: "Hey not me",
            artist: "Rasomi Pelina",
            album: "Find Soul",
            url: "~/assets/audio/ringtone-6.mp3",
            cover_art_url: "~/assets/images/cover/small/6.jpg",
            tab: "recent"
          },
          {
            id: 3,
            name: "One Ticket",
            artist: "Kiss Daniel",
            album: "Find Soul",
            url: "~/assets/audio/ringtone-6.mp3",
            cover_art_url: "~/assets/images/cover/small/6.jpg",
            tab: "international"
          },
          {
            id: 4,
            name: "Lets Play Jumah",
            artist: "Melina Logan",
            album: "Find Soul",
            url: "~/assets/audio/ringtone-6.mp3",
            cover_art_url: "~/assets/images/cover/small/6.jpg",
            tab: "recent"
          },
          {
            id: 5,
            name: "Hello Baby",
            artist: "Magaret Kaiu",
            album: "Find Soul",
            url: "~/assets/audio/ringtone-6.mp3",
            cover_art_url: "~/assets/images/cover/small/6.jpg",
            tab: "trending"
          },
          {
            id: 6,
            name: "We won't last",
            artist: "Israel Geiah",
            album: "Find Soul",
            url: "~/assets/audio/ringtone-6.mp3",
            cover_art_url: "~/assets/images/cover/small/6.jpg",
            tab: "trending"
          },
          {
            id: 7,
            name: "Tested you well",
            artist: "Ibukun Blessing",
            album: "Find Soul",
            url: "~/assets/audio/ringtone-6.mp3",
            cover_art_url: "~/assets/images/cover/small/6.jpg",
            tab: "trending"
          },
          {
            id: 8,
            name: "Merry Xmass",
            artist: "Zion Bliss",
            album: "Find Soul",
            url: "~/assets/audio/ringtone-6.mp3",
            cover_art_url: "~/assets/images/cover/small/6.jpg",
            tab: "international"
          }
        ]);
        resolve();
      }, 2000);
    });
    context.commit("setSongs", songs);
  }
};

const getters = {
  loadedSongs(state) {
    return state.loadedSongs;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
