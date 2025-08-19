import "@/assets/styles/global.css";

import { Slot } from "expo-router";


import { Loading } from "@/components/loading";


import { useFonts, Roboto_700Bold, Roboto_500Medium, Roboto_400Regular } from "@expo-google-fonts/roboto"

export default function Layout() {

  const [fontsLoded] = useFonts({
    Roboto_700Bold, 
    Roboto_500Medium,
    Roboto_400Regular
  })


  if(!fontsLoded){
    return <Loading />
  }

  return <Slot /> 
 
}
