import { create } from "zustand";

export const useAppStore = create((set) => ({
  identifier: localStorage.getItem("identifier") || "",
  updateIdentifier(id) {
    set({ identifier: id });
  },
  token: localStorage.getItem("token") || "",
  updateToken(token) {
    set({ token: token });
  },
  isLogged: false,
  updateIsLogged(boolean) {
    set({ isLogged: boolean });
  },
}));
