"use client";

import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type SidebarSettings = { disabled: boolean; isHoverOpen: boolean };

export type SidebarStore = {
  isOpen: boolean;
  isHover: boolean;
  settings: SidebarSettings;
  toggleOpen: () => void;
  setIsOpen: (isOpen: boolean) => void;
  setIsHover: (isHover: boolean) => void;
  getOpenState: () => boolean;
  setSettings: (settings: Partial<SidebarSettings>) => void;
};

export const useSidebarStore = create<SidebarStore>()(
  persist(
    devtools(
      immer((set, get) => ({
        isOpen: true,
        isHover: false,
        settings: { disabled: false, isHoverOpen: false },

        toggleOpen: () => {
          set((state) => {
            state.isOpen = !state.isOpen;
          });
          // set({ isOpen: !get().isOpen });
        },

        setIsOpen: (isOpen: boolean) => {
          set((state) => {
            state.isOpen = isOpen;
          });
          // set({ isOpen });
        },

        setIsHover: (isHover: boolean) => {
          set((state) => {
            state.isHover = isHover;
          });
          // set({ isHover });
        },

        getOpenState: () => {
          const { isOpen, isHover, settings } = get();
          return !settings.disabled && (isOpen || (settings.isHoverOpen && isHover));
        },

        setSettings: (settings: Partial<SidebarSettings>) => {
          set((state) => {
            Object.assign(state.settings, settings);
          });
          // set(
          //   produce((state: SidebarStore) => {
          //     state.settings = { ...state.settings, ...settings };
          //   }),
          // );
        },
      })),
      { name: "sidebar" }, // Display name on Redux DevTools
    ),
    {
      name: "sidebar",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
    },
  ),
);

export default useSidebarStore;
