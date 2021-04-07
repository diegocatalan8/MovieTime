import {API_HOST, API_KEY, LANG} from "../utils/constants";


//peticion para obtener las peliculas nuevas
export function getNewsMoviesApi(page = 1){
        const url =`${API_HOST}/movie/now_playing?api_key=${API_KEY}&language=${LANG}&page=${page}`;

        return fetch(url)
        .then((response)=>{
                return response.json();
        })
        .then((results)=>{
            return results;
        })
}