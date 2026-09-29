'use client';

import { useSyncExternalStore } from 'react';

import type { StoreApi, UseBoundStore } from 'zustand';

/**
 * A custom hook for safety reading a Zustand store during generics T and F
 * @template T - The data type of entire Zustand store state.
 * @template F - The data of selected state slice (selector).
 */
export const useStoreHydration = <T, F>(
  store: UseBoundStore<StoreApi<T>>,
  selector: (state: T) => F,
): F | undefined => {
  return useSyncExternalStore(
    store.subscribe,
    () => selector(store.getState()), // Snapshots on Client
    () => undefined, // Snapshots on Server (First Render -> Avoid Hydration Mismatch)
  );
};

export default useStoreHydration;
