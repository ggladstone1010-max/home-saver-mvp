import type { DemoState } from "./types";
export const STORAGE_KEY="home-saver-demo-v7";
export const demoStorage={
  load(fallback:DemoState){if(typeof window==="undefined")return fallback;try{const raw=window.localStorage.getItem(STORAGE_KEY);return raw?{...fallback,...JSON.parse(raw)} as DemoState:fallback}catch{return fallback}},
  save(state:DemoState){if(typeof window!=="undefined")window.localStorage.setItem(STORAGE_KEY,JSON.stringify(state))},
  clear(){if(typeof window!=="undefined")window.localStorage.removeItem(STORAGE_KEY)},
};
