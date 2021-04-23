import React, {useState, useEffect} from "react";
import {View, Text} from "react-native";
import {getPopularMoviesApi} from "../api/movies";


export default function Popular(props){
    const {navigatio} = props;
    const [movies, setMovies] = useState(null);
    useEffect(()=>{
        getPopularMoviesApi(1).then((response)=>{
            setMovies(response.results);
        })

    }, [])
    return(
        <View>
            <Text>Estamos en POPULAR</Text>
    </View>
    );
}