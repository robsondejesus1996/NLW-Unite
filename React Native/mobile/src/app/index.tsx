import { Alert, Image, StatusBar, Text, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link, Redirect } from "expo-router";


import { Input } from "@/components/input";
import { colors } from '@/assets/styles/colors';
import { Button } from '@/components/button';


import applicationVersion from '../../package.json'
import { useState } from 'react';


import { api } from "@/server/api";
import { userBadgeStore} from "@/store/badge-store"

export default function Home() {
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const badgeStore = userBadgeStore();

  async function handleAcessCredential() {
    try {
      if (!code.trim()) {
        return Alert.alert("Ingresso", "Informe o codigo do ingresso!")
      }
      setIsLoading(true);

      const { data } = await api.get(`/attendees/${code}/badge`)
      badgeStore.save(data.badge);
     

    } catch (error) {
      console.log(error);
      setIsLoading(false);
      Alert.alert("Ingresso", "Ingresso não encontrado!");
    }
  }

  if(badgeStore.data?.checkInURL){
    return <Redirect href="/ticket"/>
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

        <Button onPress={handleAcessCredential} title='Acessar credencial' isLoading={isLoading} />

        <Link
          href="/register"
          className='text-gray-100 text-base font-bold text-center mt-8'
        >
          Ainda não possui ingresso?
        </Link>

      </View>


      <View className='flex-2 justify-end item-start w-full'>
        <Text className='text-white'>Version App: {applicationVersion.version}</Text>
      </View>

    </View>


  )
}


