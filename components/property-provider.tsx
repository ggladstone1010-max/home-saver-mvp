"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Property } from "@/lib/types";

type Status = "loading" | "ready" | "empty" | "error";
type PropertyContext = {
  properties: Property[];
  status: Status;
  error: string | null;
  reload: () => void;
};

const Context = createContext<PropertyContext | null>(null);

export function PropertyProvider({ children }: { children: React.ReactNode }) {
  const [properties, setProperties] = useState<Property[]>([]);
  const [status, setStatus] = useState<Status>("loading");
  const [error, setError] = useState<string | null>(null);
  const [version, setVersion] = useState(0);

  useEffect(() => {
    let active = true;
    fetch("/api/properties")
      .then(async (response) => {
        const json = (await response.json()) as {
          properties?: Property[];
          error?: string;
          detail?: string;
        };
        if (!response.ok) throw new Error(json.detail || json.error || `HTTP ${response.status}`);
        if (!active) return;
        const rows = json.properties ?? [];
        setProperties(rows);
        setError(null);
        setStatus(rows.length ? "ready" : "empty");
      })
      .catch((reason: unknown) => {
        if (!active) return;
        const message = reason instanceof Error ? reason.message : String(reason);
        if (process.env.NODE_ENV === "development") {
          console.error("[PropertyProvider] Property API failed:", message);
        }
        setProperties([]);
        setError(message);
        setStatus("error");
      });
    return () => {
      active = false;
    };
  }, [version]);

  return (
    <Context.Provider
      value={{
        properties,
        status,
        error,
        reload: () => {
          setStatus("loading");
          setError(null);
          setVersion((value) => value + 1);
        },
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useProperties() {
  const value = useContext(Context);
  if (!value) throw new Error("useProperties must be used within PropertyProvider");
  return value;
}
