import { create } from 'zustand'

export const useProfileStore = create((set) => ({
  profileName: "",
  profilePic: "",
  isAuthenticated: false,
  setProfileName: async (name) => set({ profileName: name }),
  setProfilePic:async (pic) => set({profilePic: pic }),
  setIsAuthenticated:async (val) => set({isAuthenticated: val }),
}))