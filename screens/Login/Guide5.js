//written by: Ariela Chomski
//fifth screen of guide sequence
//outro

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default class Guide5 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>therAPPy</Text>
        <Text style={styles.loginText}>Hope you find this app helpful!</Text>
        <Text style={styles.loginText}>Have a good day! ^_^</Text>
        <View style={styles.rowContainer}>
          <View style={styles.leftView}>
            <TouchableOpacity
              style={styles.leftBtn}
              onPress={() => this.props.navigation.navigate('Guide4Screen')}>
              <Text style={styles.loginText}>Back!</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rightView}>
            <TouchableOpacity
              style={styles.rightBtn}
              onPress={() =>
                this.props.navigation.navigate('CapsSurvey1Screen')
              }>
              <Text style={styles.loginText}>Next!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //therappy1: #707590
    //therappylessblue: #707586
    backgroundColor: '#f2e9e1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 1,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    //therappy1: #584d9b
    //therappylessblue: #584d9b
    //therappyteal: #20c0b0
    //therappyAIAIAIAI: #fdfdfb
    //lime green: #cbe86b
    color: '#7f58ff',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: '#000000',
  },
  forgot: {
    color: 'black',
    fontSize: 14,
  },
  loginText: {
    color: 'black',
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
  },
  rightBtn: {
    width: '45%',
    backgroundColor: '#7f58ff',
    borderRadius: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightView: {
    flex: 1,
    marginTop: 25,
  },
  leftView: {
    flex: 1,
    marginLeft: 90,
    marginTop: 25,
  },
  leftBtn: {
    width: '45%',
    backgroundColor: '#7f58ff',
    borderRadius: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
