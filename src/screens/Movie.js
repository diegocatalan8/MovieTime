import React, {useState, useEffect} from "react";
import {View, ScrollView, StyleSheet, Image} from "react-native";
import {IconButton, Text, Title} from "react-native-paper";
import {getMovieByIdApi} from "../api/movies";
import {map} from "lodash";
import ModalVideo from "../components/ModalVideo";
import {BASE_PATH_IMG} from "../utils/constants";

export default function Movie(props){
     const {route} = props;
     const {id} = route.params;
     //console.log(id);
     const [movie, setMovie] = useState(null);
     const [image, setImage] = useState(null);
     const [showVideo, setShowVideo] = useState(false);
     
  
     useEffect(() => {
    getMovieByIdApi(id).then((response) => {
      setMovie(response);
      setImage(response.poster_path);
    });
  }, []);

  if(!movie) return null;
   return( 
     <React.Fragment>
          <ScrollView showsHorizontalScrollIndicator={false}>
               <MovieImage posterPath={image}/>
               <MovieTrailer setShowVideo={setShowVideo}/>
               <MovieTitle movie={movie}/>
               <Text style={styles.overview}>{movie.overview}</Text>
               <Text style={[styles.overview, {marginBottom:30}]}>Fecha de lanzamiento: {movie.release_date}</Text>
          </ScrollView>
          <ModalVideo show={showVideo} setShow={setShowVideo} idMovie={id}/>
          
     </React.Fragment>    
);
}

function MovieImage(props){
          const {posterPath} = props;
          
          return(
               <View style={styles.viewPoster}>
                         <Image style={styles.poster} source={{uri:`${BASE_PATH_IMG}/w500${posterPath}`}}/>
               </View>
          );
}
function MovieTrailer(props){
     const {setShowVideo} = props;//duda de que se setShowVideo

     return(
          <View style={styles.viewPlay}>
                    <IconButton
                    icon="play"
                    color="#000"
                    size={30}
                    style={styles.play}
                    onPress={()=> setShowVideo(true)}
                    />
                    
          </View>
     );


}
function MovieTitle(props){
     const {movie} =props;
     
     return(
          <View style={styles.viewInfo}>
               <Title>{movie.title}</Title>
               <View style={styles.viewGenres}>
          
               {map(movie.genres, (genre) => (
                    <Text key={genre.id} style={styles.genre}>
                      {genre.name}
                    </Text>
                  ))}
               </View>
          </View>
     );

}

const styles = StyleSheet.create({
     viewPoster:{
          shadowColor: "#000",
          shadowOffset:{
               width:0,
               height:10,
          },
          shadowOpacity:1,
          textShadowRadius:10
     },
     poster:{
          width:"100%",
          height:500,
          borderBottomLeftRadius:30,
          borderBottomRightRadius:30,
     
     },
     viewPlay:{
          justifyContent:"flex-end",
          alignItems:"flex-end",

     },
     play:{
          backgroundColor:"#fff",
          marginTop:-40,
          marginRight:30,
          width:60,
          height:60,
          borderRadius:100,
     },
     viewInfo:{
          marginHorizontal:30,
     },
     viewGenres:{
          flexDirection:"row",

     },
     genre:{
          marginRight:20,
          color:"#8697a5"
     },
     overview:{
          marginHorizontal:30,
          marginTop:20,
          textAlign:"justify",
          color:"#8697a5",
     }
});