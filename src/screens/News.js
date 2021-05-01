import React, {useState, useEffect} from "react";
import {StyleSheet, View, ScrollView, Dimensions, Image, TouchableWithoutFeedback} from "react-native";
import {Button, Text} from "react-native-paper";
import {map} from "lodash";
import {getNewsMoviesApi} from "../api/movies"


export default function News(props){
   const {navigation} = props;
   const [movies, setMovies] = useState(null);
   const [page, setPage] = useState(1);

   useEffect(()=>{
      getNewsMoviesApi(page).then((response)=>{
        setMovies(response.results);
      })
   }, []);


   return(
         <ScrollView>
                  {map(movies, (movie, index)=>(
                     <Movie key={index} movie={movie}/>) 
                  )}
         </ScrollView>
   );
}

function Movie(props){
   const {movie}= props;
   const {title}=movie;
   return(
         <View>
            <Text>{title}</Text>
         </View>
   );
}