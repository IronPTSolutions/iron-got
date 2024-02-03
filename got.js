const episodes = require("./episodes.json");

const gameOfThrones = {
  getEpisodes() {
    return Promise.resolve(episodes.episodes);
  },

  getRandomEpisode() {
    const randomIndex = Math.floor(Math.random() * episodes.episodes.length);

    return Promise.resolve(episodes.episodes[randomIndex]);
  },
};

module.exports = gameOfThrones;
