import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {View, Text, ScrollView, StyleSheet} from "react-native";
import {Title} from "react-native-paper";
import CarouselVertical from "../components/CarouselVertical";
import {getNewsMoviesApi, getAllGenresApi} from "../api/movies"


export default function Home(props){
    //destructuramos props
    const {navigation} = props;
    //Creamos un estado para obtener las peliculas
    const [newMovies, setNewMovies] = useState(null);
    //creamos un estado para obtener los generos de las peliculas
    const [genreMovies, setGenreMovies]= useState(null);
   
    //usamos useEfect para getNewsMoviesApi
    useEffect(()=>{
        getNewsMoviesApi().then((response)=>{
            setNewMovies(response.results);
        });
    }, []);
//usamos useEfect para getAllGenresApi
    useEffect(()=>{
            getAllGenresApi().then((response)=>{
                setGenreMovies(response);
            })
    }, []);
    

    //retornamos el componente
   return( 
       //componente para que la pantalla sea con escroll y el atributo indica que el escroll sea invicible
            <ScrollView showsVerticalScrollIndicator={false}>
            {newMovies && (
                <View style={styles.news}>
                  <Title style={styles.newsTitle}>Nuevas películas</Title>
                  <CarouselVertical data={newMovies} navigation={navigation} />
                </View>
              )}
                    <View style={styles.genres}>
                        <Title style={styles.genresTitle}>Películas por genero</Title>
                    </View>
            </ScrollView>
);
}

const styles = StyleSheet.create({
    news:{
        marginVertical:10
    },

    newsTitle:{
        marginBottom:10,
        marginHorizontal:20,
        fontWeight: "bold",
        fontSize:22,
    },

    genres:{
        marginTop:20,
        marginBottom:50

    },
    genresTitle:{
        marginHorizontal:20,
        fontWeight:"bold",
        fontSize:26,
    }
});