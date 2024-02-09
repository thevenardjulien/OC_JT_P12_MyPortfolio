import { create } from "zustand";

interface AppStore {
  updateIdentifier: (identifier: string) => void;
  updateToken: (token: string) => void;
  isLogged: boolean;
  updateIsLogged: (isLogged: boolean) => void;
  token: string;
  identifier: string;
}

export const useAppStore = create<AppStore>((set) => ({
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
