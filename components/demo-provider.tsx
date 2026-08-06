"use client";
import { createContext,useContext,useEffect,useState } from "react";
import { defaultState } from "@/lib/demo";
import { demoStorage } from "@/lib/storage";
import type { DemoState } from "@/lib/types";
type DemoContextValue={state:DemoState;ready:boolean;update:(patch:Partial<DemoState>)=>void;replace:(state:DemoState)=>void;reset:()=>void};
const DemoContext=createContext<DemoContextValue|null>(null);
export function DemoProvider({children}:{children:React.ReactNode}){const[state,setState]=useState(defaultState),[ready,setReady]=useState(false);useEffect(()=>{const timer=window.setTimeout(()=>{setState(demoStorage.load(defaultState));setReady(true)},0);return()=>window.clearTimeout(timer)},[]);const replace=(next:DemoState)=>{setState(next);demoStorage.save(next)};const update=(patch:Partial<DemoState>)=>replace({...state,...patch});const reset=()=>{demoStorage.clear();setState(defaultState)};return <DemoContext.Provider value={{state,ready,update,replace,reset}}>{children}</DemoContext.Provider>}
export function useDemo(){const value=useContext(DemoContext);if(!value)throw new Error("useDemo must be used within DemoProvider");return value}
