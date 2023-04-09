import { create } from "zustand";

export const useProfileStore = create((set) => ({
  profileName: "",
  profilePic: "",
  twitterUrl: "",
  about: "",
  isAuthenticated: false,
  setProfileName: async (name) => set({ profileName: name }),
  setProfilePic: async (pic) => set({ profilePic: pic }),
  setTwitterUrl: async (url) => set({ twitterUrl: url }),
  setAboutUrl: async (about) => set({ about: about }),
  setIsAuthenticated: async (val) => set({ isAuthenticated: val }),
}));
