
import React from 'react';


import {StyleSheet, View, Text} from 'react-native';

const Education =  props => {
  return (
    <View style = {styles.screen}>
      <Text>The survey screen!</Text>

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

export default Education;
