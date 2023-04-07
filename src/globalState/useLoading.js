import { create } from "zustand";

export const useLoading = create((set) => ({
	isLoading: false,
	loadingMessage: '',
	setLoadingMessage: (m) => set({ loadingMessage: m, isLoading: true }),
	finishLoading: () => set({ loadingMessage: '', isLoading: false })
}));
