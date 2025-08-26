import { Alert, Image, StatusBar, View } from 'react-native';
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { Link, router } from "expo-router";


import { Input } from "@/components/input";
import { colors } from '@/assets/styles/colors';
import { Button } from '@/components/button';
import { useState } from 'react';

import axios from 'axios';
import { api } from "@/server/api";

export default function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const EVENT_ID = "f014cb5e-ba08-4c83-bed2-5b3ca62480c1";

  async function  handleRegister() {
    try {
      // Verifies if the fields are filled
      if (!name.trim() || !email.trim()) {
        return Alert.alert("Inscrição", "Preencha todos os campos");
      }

      // Set the loading state to true
      setIsLoading(true);

      // Sends a request to the API to register the attendee
      const registerResponse = await api.post(`events/${EVENT_ID}/attendees`, {
        name,
        email
      })

      // Verifies if the response is successful
      if(registerResponse.data.attendeeId){
        // Shows an alert with a success message and navigates to the ticket screen
        Alert.alert("Inscrição", "Inscrição realizada com sucesso", [
          {text: "OK", onPress: () => router.push("/ticket") },
        ]);

      }

      
    } catch (error) {
      // Logs the error
      console.log(error);

      // Set the loading state to false
      setIsLoading(false);

      // Verifies if the error is an Axios error
      if(axios.isAxiosError(error)){
        // Verifies if the error message includes "already registered"
        if(String(error.response?.data.mensage).includes("already registered")){
          // Shows an alert with an error message
          return Alert.alert("Inscrição", "Este email já está cadastrado!");
        }
      }

      // Shows an alert with an error message
      Alert.alert("Inscrição", "Não foi possível fazer a inscrição")
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
          <FontAwesome6
            name="user-circle"
            size={24} color={colors.green[200]}
          />
          <Input.Field placeholder="Nome completo" onChangeText={setName} />
        </Input>

        <Input>
          <MaterialIcons
            name="alternate-email"
            size={24} color={colors.green[200]}
          />
          <Input.Field placeholder="Email" keyboardType='email-address' onChangeText={setEmail} />
        </Input>

        <Button onPress={handleRegister} title='Realizar Inscrição' isLoading={isLoading} />

        <Link
          href="/"
          className='text-gray-100 text-base font-bold text-center mt-8'
        >
          Já possui ingresso ?
        </Link>

      </View>

    </View>

  )
}


