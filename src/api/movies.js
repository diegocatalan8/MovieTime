import { result } from "lodash";
import {API_HOST, API_KEY, LANG} from "../utils/constants";


//peticion para obtener las peliculas nuevas
export function getNewsMoviesApi(page = 1){
        const url =`${API_HOST}/movie/now_playing?api_key=${API_KEY}&language=${LANG}&page=${page}`;

        return fetch(url)
        .then((response)=>{
                return response.json();
        })
        .then((result)=>{
            return result;
        })
}

//peticion para obtener el genero de las peliculas
export function getGenreMovieApi(idGenres){
        const url = `${API_HOST}/genre/movie/list?api_key=${API_KEY}&lenguage=${LANG}`;

        return fetch(url)
        .then((response)=>{
                return response.json();
        })
        .then((result)=>{
                const arrayGenres = [];
                idGenres.forEach(id => {
                        result.genres.forEach((item)=>{
                                if(item.id === id) arrayGenres.push(item.name);

                                
                        })
                });
                return arrayGenres;
        })
}