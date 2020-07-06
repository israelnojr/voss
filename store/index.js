import Vuex from "vuex";
import artists from "./modules/artists";
import songs from "./modules/songs";
const createStore = () => {
  return new Vuex.Store({
    modules: {
      artists,
      songs
    }
  });
};

export default createStore;
