const axios = require('axios');

axios.get('https://api.spotify.com/v1/search?q=baan poolview freestyle&type=track', {
    headers: {
        'Authorization': 'Bearer BQBUELMVWw1YFLci8s31kDqLVFUoyG-RoyBIodMNorZEiLgzCNb77x4kkmG5oRQisgxC7eOsO0bI-6l0aucvHcXroJlAdTvI4YvtlTs_JMg_4edJ3m14QWZH0PVgldnoAWDuETXukYXA6yaOfJ5YtNS-e-EHGuwYkPljruQmpH3HkQLJC9nPXQH8KVjoEVH5NPmLouPAbzGh7iqRtT4'
    }
}).then((data) => {
    console.log(data.data.tracks.items[0].id);
})