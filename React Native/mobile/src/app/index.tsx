import { Alert, Image, StatusBar, Text, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";


import { Input } from "@/components/input";
import { colors } from '@/assets/styles/colors';
import { Button } from '@/components/button';


import applicationVersion from '../../package.json'
import { useState } from 'react';

export default function Home() {

  const [code, setCode] = useState("");


  function handleAcessCredential() {
    if(!code.trim()){
      return Alert.alert("Ingresso", "Informe o codigo do ingresso!")
    }
  }

  return (


    <View className='flex-1 bg-green-500 items-center justify-center p-8 gap-16'>
      
      <StatusBar barStyle="light-content" />

      <Image source={require("@/assets/logo.png")}

        className='h-16'
        resizeMode="contain" />


      <View className="w-full mt-12 gap-3">
        <Input>
        <MaterialCommunityIcons
          name="ticket-confirmation-outline"
          size={24} color={colors.green[200]}
        />
          <Input.Field 
          placeholder="Digite o codigo do ingresso..."
          onChangeText={setCode}
          />
        </Input>

        <Button onPress={handleAcessCredential} title='Acessar credencial'/>

        <Link
           href="/register"
           className='text-gray-100 text-base font-bold text-center mt-8'
        >
          Ainda não possui ingresso? {code}
        </Link>
        
      </View>


      <View className='flex-2 justify-end item-start w-full'>
        <Text className='text-white'>Version App: {applicationVersion.version}</Text>
      </View>

    </View>
    

  )
}


