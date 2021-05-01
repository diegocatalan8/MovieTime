import React, {useState, useEffect} from "react";
import {StyleSheet, ScrollView, View, Image, TouchableWithoutFeedback} from "react-native";
import {Text, Title, Button} from "react-native-paper";
import {map} from "lodash";
import {getPopularMoviesApi, getVideoMovieApi} from "../api/movies";
import {BASE_PATH_IMG} from "../utils/constants"
import {noImage} from "../assets/jpg/default.jpeg";
import usePreferences from "../hooks/usePreferences"


export default function Popular(props){
    const {navigation} = props;
    const {theme} =usePreferences();
    console.log(theme);
    const [movies, setMovies] = useState(null);
    const [showBtnMore, setShowBtnMore] = useState(true);
    const [page, setPage] = useState(1);
    


    
    useEffect(()=>{
        getPopularMoviesApi(page).then((response)=>{
            const totalPages = response.total_pages;
            if(page<totalPages){
                if(!movies){
                    setMovies(response.results);
                }else{
                    setMovies([...movies, ...response.results ]);
                }
            }else{
                setShowBtnMore(false);
            }
        })

    }, [page])

    
    return(
       
        <ScrollView>
       
            {map(movies, (movie, index)=>(
                <Movie key={index} movie={movie} theme={theme} navigation = {navigation}/>  
            ))}
            {showBtnMore &&(
                <Button
                mode="contained"
                contentStyle={styles.loadMoreContainer}
                style={styles.loadMore}
                labelStyle={{color: theme === "dark" ? "#fff" : "#000"}}
                onPress={()=>{
                    setPage(page+1);

                }}
                >
                    Cargar mas...
                </Button>
            )}
          
        </ScrollView>
       
    );
}

function Movie(props){
    const {movie, navigation} = props;
    const {id, poster_path, title, release_date, vote_count, vote_average}=movie;

   const goMovie = () => {
       navigation.navigate("movie",{id});
   }
    
    return(
        <TouchableWithoutFeedback onPress={goMovie}>
        <View style={styles.movie}>
                <View style={styles.left}>
                    <Image
                    style={styles.image}
                    source={poster_path ? {uri:`${BASE_PATH_IMG}/w500${poster_path}`}:noImage}
                    />
                </View>

                <View>
                    <Title>{title}</Title>
                    <Text style={{fontSize:12, color: "#8697a5", marginTop:5}}>{release_date}</Text>
                    <Text>{vote_count} votos</Text>
                </View>
        </View>
        </TouchableWithoutFeedback>
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
    },
    loadMoreContainer:{
        paddingTop:10,
        paddingBottom:30,
    },
    loadMore:{
        backgroundColor:"transparent",
    }
}
);