const axios = require("axios");

axios
  .get("https://api.spotify.com/v1/search?q=smokeweed&type=track", {
    headers: {
      Authorization:
        "Bearer BQB4wMoVsJl5gfmaQahfwghl26wGGnDXZDDNvAWySf4-aEqqybs4p5xMcoZna_5YW5hSdKWakPW_eHe5HAWHzNbhqoHcRntSTw6r04CSSP2SYvcmy7qN-qjUypT9I2Ugj9kJGVu39GWX0xX0uIiEcWRuoAXZHMTrwJHvsaBRrMb1O1VzRCphVCeMmfNg2V46GOCIkWtzk_UNWDCehzQ",
    },
  })
  .then((data) => {
    console.log(data.data.tracks.items[0].id);
  });
