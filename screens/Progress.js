
import React from 'react';


import {StyleSheet, View, Text} from 'react-native';

const Progress =  props => {
  return (
    <View style = {styles.screen}>
      <Text>The progress screen!</Text>

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

export default Progress;
