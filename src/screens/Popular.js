import React, {useState, useEffect} from "react";
import {StyleSheet, ScrollView, View, Image} from "react-native";
import {Text} from "react-native-paper";
import {map} from "lodash";
import {getPopularMoviesApi} from "../api/movies";
import {BASE_PATH_IMG} from "../utils/constants"
import {noImage} from "../assets/jpg/default.jpeg";


export default function Popular(props){
    const {navigatio} = props;
    const [movies, setMovies] = useState(null);
    


    
    useEffect(()=>{
        getPopularMoviesApi(1).then((response)=>{
            setMovies(response.results);
        })

    }, [])

    
    return(
        <ScrollView>
       
            {map(movies, (movie, index)=>(
                <Movie key={index} movie={movie} />  
               
            ))}
          
        </ScrollView>
    );
}

function Movie(props){
    
  
    const {movie} = props;
    const {poster_path}=movie;


    
    return(
        <View style={styles.movie}>
                <View style={styles.left}>
                    <Image
                    style={styles.image}
                    source={poster_path ? {uri:`${BASE_PATH_IMG}/w500${poster_path}`}:noImage}
                    />
                </View>

                <View>
                    <Text>right</Text>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    
    
    movie: {
        marginBottom: 20,
        flexDirection:"row",
        alignItems:"center",
    },
    left:{
        marginRight:20,

    },
    image:{
        width:100,
        height:150,
    }
}
);