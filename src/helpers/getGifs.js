const APIKEY = '0NuttsaCx4253ui7E9STekurd3bR7vxZ';

export const getGifs = (async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${APIKEY}`;
    const res = await fetch(url);
    const {data} = await res.json();

    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;

});