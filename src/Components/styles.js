import { Dimensions, StyleSheet } from 'react-native'


const deviceW = Dimensions.get('window').width;
const deviceH = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    main: {
      backgroundColor: 'white',
    },
    name: {
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 10,
      marginTop: 10
    },  
    view_name: {
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
    },  
    description: {
      marginLeft: 10
    },
    card: {
      alignSelf: 'center',
      margin: 10,
      width: deviceW - 10,
      height: deviceH/2.3,
      borderColor: "black",
      borderWidth: 1,
      borderRadius: 5
    },
    small_image: {
      alignSelf: "center",
      width: deviceW - 20,
      height: deviceH/3 - 50,
    },
    full_image: {
      alignSelf: "center",
      width: deviceW,
      height: deviceH-100,
      resizeMode: 'contain',
    },
  });