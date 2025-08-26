import { Credential } from "@/components/credential";
import { FontAwesome } from "@expo/vector-icons";
import { Header } from "@/components/header";
import { StatusBar, Text, View, ScrollView, TouchableOpacity, Alert, Modal } from "react-native";
import { colors } from "@/assets/styles/colors";
import { Button } from "@/components/button";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { QRCode } from "@/components/qrcode";
import {Redirect} from "expo-router";

import { userBadgeStore } from "@/store/badge-store"


export default function Ticket() {

  const [image, setImage] = useState("");
  const [expandQRCode, setExpandQRCode] = useState<boolean>(false);

  const badgeStore = userBadgeStore();


  async function handleSelectImage() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4]
      })

      if (result.assets) {
        setImage(result.assets[0].uri)
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Foto", "Nao foi possivel selecionar a imagem");
    }
  }

  if(!badgeStore.data?.checkInURL){
    return <Redirect href="/" />
  }

  return (
    <View className="flex-1 bg-green-500">
      <StatusBar barStyle="light-content" />
      <Header title="" />

      <ScrollView className="-mt-28" contentContainerClassName="px-8" showsVerticalScrollIndicator={false}>
        <Credential
          image={image}
          data = {badgeStore.data}
          onChangeAvatar={handleSelectImage}
          onExpandQRCode={() => setExpandQRCode(true)}
        />

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
          Monstre ao mundo que voce vai participar do {badgeStore.data.eventTitle}
        </Text>

        <Button title="Compartilhar" />

        <TouchableOpacity 
          activeOpacity={0.7}
          className="mt-10"
          onPress={() => badgeStore.remove()}
        >
          <Text className="text-base text-white font-bold text-center">
            Remover Ingresso
          </Text>
        </TouchableOpacity>
      </ScrollView>


      <Modal visible={expandQRCode} statusBarTranslucent={true} animationType="slide">
        <View className="flex-1 bg-green-500 items-center justify-center">
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setExpandQRCode(false)}
          >
            <QRCode value="teste" size={300} />
            <Text className="font-body text-orange-500 text-sm mt-10 text-center">
              Fechar QRCode teste
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}