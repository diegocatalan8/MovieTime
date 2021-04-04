import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {View, Text} from "react-native";
import {getNewsMoviesApi} from "../api/movies"

export default function Movie(){
    //Creamos un estado para obtener las peliculas
    const [newMovies, setMovies] = useState(null);
    //usamos useEfect
    useEffect(()=>{
        getNewsMoviesApi().then((response)=>{
            setMovies(response.result);
        });
    });

    //retornamos el componente
   return( 
<View>
    <Text>Estamos en MOVIE</Text>
</View>
);
}