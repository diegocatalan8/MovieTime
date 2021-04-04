import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {View, Text, ScrollView, StyleSheet} from "react-native";
import {getNewsMoviesApi} from "../api/movies"

export default function Home(){
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
       //componente para que la pantalla sea con escroll y el atributo indica que el escroll sea invicible
            <ScrollView showsVerticalScrollIndicator={false}>

            </ScrollView>
);
}

const style = StyleSheet.create({

});