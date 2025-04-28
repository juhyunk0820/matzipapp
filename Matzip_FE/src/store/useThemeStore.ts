import {create} from 'zustand';

const useThemeStore = create(set => ({
  theme: 'light',
  isSystem: false,
  setTheme: (theme: 'light' | 'dark') => set({theme}),
}));
