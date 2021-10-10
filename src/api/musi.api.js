import axios from "axios";

export const getArtistsList = async(artistName) => {
    const response = await axios.get(`https://api.mixcloud.com/discover/rock/latest/?metadata=1`);
    return response;
}
export const getPopularList = async() => {
    const response = await axios.get(`https://api.mixcloud.com/popular/?metadata=1`);
    return response;
}
export const getSearch = async() => {
    const response = await axios.get(`https://api.mixcloud.com/discover/rock/latest/?metadata=1`);
    return response;
}
export const getMumbai = async() => {
    const response = await axios.get(`https://api.mixcloud.com/discover/funk+city:Mumbai/?metadata=1`);
    return response;
}