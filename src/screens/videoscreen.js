import React from 'react';
import {View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import YoutubePlayer from 'react-native-youtube-iframe';
const video = () => {

  return (
    <View>
      <TouchableOpacity>
      <YoutubePlayer
        height={300}
        play={false}
        videoId={'FWKNGUeIX7w'}
      /></TouchableOpacity>
      <YoutubePlayer 
      height={300}
      play={false}
       videoId={"EiVoWp5b93s"}/>
    </View>
  );
};

export default video