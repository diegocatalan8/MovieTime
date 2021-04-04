import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {View, Text, ScrollView, StyleSheet} from "react-native";
import {Title} from "react-native-paper";
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
                    {newMovies &&(
                        <View styles={styles.news}>
                            <Title styles={styles.newsTitle}>Nuevas Peliculas</Title>
                        </View>
                    )}
            </ScrollView>
);
}

const styles = StyleSheet.create({
    news:{
        marginVertical:10,
    },

    newsTitle:{
        marginBottom:10,
        marginHorizontal:20,
        fontWeight: "bold",
        fontSize:20,
    },
});