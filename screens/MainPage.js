
import React from 'react';


import {StyleSheet, View, Text, Button} from 'react-native';

const MainPage =  props => {
  return (
    <View style = {styles.screen}>
      <Text>Welcome to HealthAloha!</Text>

      <Button title="Survey"
       color='#9b59b6'
       style={{height:80,backgroundColor:'#1e90ff'}}
       onPress = {
        () => {
          props.navigation.navigate({routeName: 'SurveyScreen'});
        }

      }/>
      <Button title="Pre-op/Post-op Care"
       color='#3498db'
       style={{height:80,backgroundColor:'#1e90ff'}}
       onPress = {
        () => {
          props.navigation.navigate({routeName: 'PrePostScreen'});
        }

      }/>
      <Button title="Improve My Health"
       color='#1abc9c'
       style={{height:80,backgroundColor:'#1e90ff'}}
       onPress = {
        () => {
          props.navigation.navigate({routeName: 'EducationScreen'});
        }

      }/>
      <Button title="How am I doing"
       color="#FE434C"
       style={{size:80,marginTop:10, backgroundColor:'#FE434C'}}
       onPress = {
        () => {
          props.navigation.navigate({routeName: 'ProgressScreen'});
        }

      }/>

    </View>
  );
};

const styles = StyleSheet.create( {
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  }
}

)

export default MainPage;

