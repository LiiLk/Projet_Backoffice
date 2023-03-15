// src/store.ts
import { createPinia } from 'pinia';

export const setupPinia = (): ReturnType<typeof createPinia> => {
  return createPinia();
};
