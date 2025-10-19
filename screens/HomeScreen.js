import { FontAwesome6 } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { collection, getDocs,  query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Image,  Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import styles from './Style/style';
import { Button } from 'react-native-elements';
import { db } from './firebase'

function HomeScreen({ navigation, route}) {

  const { user } = route.params;


  return (
   <SafeAreaView style={{backgroundColor: "#0722b2", flex: 1}}>
  <View style={{flex: 1, padding: 20}}>
    
    {/* Header Simplificado */}
    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20}}>
      
      {/* Mensagem de Boas-vindas */}
      <View>
        <Text style={{fontWeight: "bold", fontSize: 20, color: "white"}}>
          Bem-vind@,
        </Text>
        <Text style={{color: "white", fontSize: 16}}>
          {user.nome.split(" ")[0]}
        </Text>
      </View>

      {/* Botão de Logout */}
      <Button 
        title="Logout" 
        onPress={() => navigation.navigate('Login')}
        buttonStyle={{backgroundColor: "red"}}
        titleStyle={{fontSize: 14}}
      />
    </View>

  </View>
</SafeAreaView>
  );
}


export default HomeScreen;