import { Credential } from "@/components/credential";
import {FontAwesome } from "@expo/vector-icons";
import { Header } from "@/components/header";
import { StatusBar, Text, View, ScrollView, TouchableOpacity, Alert } from "react-native";
import { colors } from "@/assets/styles/colors";
import { Button } from "@/components/button";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";


export default function Ticket(){

  const [image, setImage] = useState("");


  async function handleSelectImage() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images, 
        allowsEditing: true, 
        aspect: [4, 4]
      })

      if(result.assets){
        setImage(result.assets[0].uri)
      }
    }catch (error) {
      console.log(error); 
      Alert.alert("Foto", "Nao foi possivel selecionar a imagem");
    }
  }

  return(
    <View className="flex-1 bg-green-500">
      <StatusBar barStyle="light-content" />
      <Header title="" />

      {/* Colocar o classeNamen nesse ScrollView -- className="-mt-28 -z-10" */}
      <ScrollView className="-mt-28" contentContainerClassName="px-8" showsVerticalScrollIndicator={false}> 
        <Credential image={image} onChangeAvatar={handleSelectImage}/>

        <FontAwesome
          name="angle-double-down"
          size={24}
          color={colors.gray[300]}
          className="self-center my-6"
        />

        <Text className="text-white font-bold text-2xl mt-4">
          Compartilhar credencial
        </Text>

        <Text className="text-white font-regular text-base mt-1 mb-6">
          Montre ao mundo que voce vai participar do Unite Summit!
        </Text>

        <Button title="Compartilhar"/>

        <TouchableOpacity activeOpacity={0.7} className="mt-10">
            <Text className="text-base text-white font-bold text-center">Remover Ingresso</Text>
          </TouchableOpacity>
      </ScrollView>
    </View>
  )
}