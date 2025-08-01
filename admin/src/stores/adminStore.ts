import { UserResponse } from "src/types/auth.type";
import { create } from 'zustand';

interface AdminStore {
  user: UserResponse | null;
  setUser: (user: UserResponse) => void;
  clearUser: () => void;
}

export const useAdminStore = create<AdminStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));