import axios from "axios";


// creating instance of base URL

const instance= axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;