import { StyleSheet, Text, View,api,TouchableOpacity,TextInput} from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';




export default function SearchScreen({navigation}) {
  return (
    <View>
      <View style={styles.backgroundStyle}>
        <AntDesign style={styles.iconStyle} name="search1" size={30} color="black" />
        <TextInput
          style={styles.inputStyle}
          placeholder="Ara"
          autoCorrect={false}
          autoCapitalize="none"
        />
         
      </View>

      
      <View style={styles.margin}>
      <TouchableOpacity
          style={styles.squareButton}
          onPress={() => navigation.navigate('Api')}
        >
         
          <Text style={styles.buttonText}>Yemekler</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.margin}>
      <TouchableOpacity
          style={styles.squareButton}
          onPress={() => navigation.navigate('CarApi')}
          
        >
          <Text style={styles.buttonText}>Arabalar</Text>

        </TouchableOpacity>
      </View>
    </View>
)
}

const styles = StyleSheet.create({
  backgroundStyle:{
  backgroundColor:'lightgray',
  flexDirection:'row',
  margin:10,
  height:50,
  alignItems:'center',
  borderRadius:20,
  },
  iconStyle:{
  marginHorizontal:15,
  },
  inputStyle:{
      flex:1,
      fontSize:18,
  },
  buttonText:{
    color:'black',
    fontSize:20,
  },
  squareButton: {
    width: 350, 
    height: 250,
    backgroundColor: 'lightgray', 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 10,
    marginTop:20,
    marginLeft:20,
    marginRight:20,

  },
})