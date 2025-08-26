import { create } from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type BaggeStore = {
  id: string
  name: string
  email: string
  eventTitle: string
  checkInURL: string
  image?: string
}


type StateProps = {
  data: BaggeStore | null
  save: (data: BaggeStore) => void
  remove: () => void
  updateAvatar: (uri: string) => void
}

export const userBadgeStore = create(
  persist<StateProps>(
    (set) => ({
  data: null, 

  save: (data: BaggeStore) => set(()=> ({ data: data })),
  remove: () => set(() =>  ({ data: null})),
  updateAvatar: (uri: string) => set((state)=> ({
    data: state.data ?{...state.data, image: uri} : state.data,
  }))
}), {
  name: "nlw-unite:badge",
  storage: createJSONStorage(() => AsyncStorage),
}))