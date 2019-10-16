
import React from 'react';


import {StyleSheet, View, Text} from 'react-native';

const PrePost =  props => {
  return (
    <View style = {styles.screen}>
      <Text>The pre/post care screen!</Text>

    </View>
  );
};

const styles = StyleSheet.create( {
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

)

export default PrePost;
