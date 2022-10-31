const baseUrl = 'https://api.jikan.moe/v4';

const endpoint = {
    airing : `${baseUrl}/seasons/now`,
    topAnime : `${baseUrl}/top/anime`,
    upcoming : `${baseUrl}/seasons/upcoming`,
    search : `${baseUrl}/anime?q=`
}

export default endpoint;