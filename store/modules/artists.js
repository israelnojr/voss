const state = {
  loadedArtists: []
};

const mutations = {
  setArtists(state, artists) {
    state.loadedArtists = artists;
  }
};

const actions = {
  nuxtServerInit(vuexContext, context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        vuexContext.commit("setArtists", [
          {
            id: 1,
            name: "Kiss Daniel",
            slug: "jaman-jaman"
          },
          {
            id: 2,
            name: "Ice Price",
            slug: "jaman-jaman"
          },
          {
            id: 3,
            name: "Joe Boy",
            slug: "jaman-jaman"
          },
          {
            id: 4,
            name: "J Jamani",
            slug: "jaman-jaman"
          },
          {
            id: 5,
            name: "Fire Boy",
            slug: "jaman-jaman"
          },
          {
            id: 6,
            name: "2face Idibia",
            slug: "jaman-jaman"
          }
        ]);
        resolve();
      }, 2000);
    });
    context.commit("setArtists", artists);
  }
};

const getters = {
  loadedArtists(state) {
    return state.loadedArtists;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
