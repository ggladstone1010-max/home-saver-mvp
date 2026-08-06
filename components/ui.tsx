"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Icon } from "./icons";

export function Button({ children, href, variant = "primary", className = "", type = "button", onClick }: { children: React.ReactNode; href?: string; variant?: "primary" | "secondary" | "ghost"; className?: string; type?: "button" | "submit"; onClick?:()=>void }) {
  const styles = `button button-${variant} ${className}`;
  return href ? <Link href={href} className={styles}>{children}</Link> : <button type={type} onClick={onClick} className={styles}>{children}</button>;
}
export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) { return <div className={`card ${className}`}>{children}</div>; }
export function ProgressRing({ value, current, target }: { value: number; current: string; target: string }) {
  return <div className="progress-ring" style={{ "--progress": `${value * 3.6}deg` } as React.CSSProperties}><div className="progress-inner"><span className="eyebrow">Deposit saved</span><strong>{value}%</strong><span>{current} <em>of {target}</em></span></div></div>;
}
export function StatsCard({ icon, label, value, note, tone = "purple" }: { icon: string; label: string; value: string; note: string; tone?: string }) {
  return <Card className="stat-card"><div className={`icon-box ${tone}`}><Icon name={icon}/></div><div><p>{label}</p><strong>{value}</strong><small>{note}</small></div></Card>;
}
export function PropertyCard({ property }: { property: { id:number; suburb:string; address:string; price:number; type:string; beds:number; baths:number; parking:number; match:number; reason:string; image:string; tag:string } }) {
  const [saved, setSaved] = useState(false);
  return <Card className="property-card"><div className="property-image"><Image src={property.image} alt={`Placeholder home in ${property.suburb}`} fill sizes="(max-width: 768px) 100vw, 33vw"/><span className="property-tag">{property.tag}</span><span className="match-badge">{property.match}% match</span><button aria-label={saved ? "Remove from favourites" : "Save to favourites"} onClick={() => setSaved(!saved)} className={`heart ${saved ? "saved" : ""}`}><Icon name="heart"/></button></div><div className="property-body"><div><span className="suburb">{property.suburb}</span><h3>{property.address}</h3></div><strong className="price">${property.price.toLocaleString("en-AU")}</strong><p className="property-type">{property.type}</p><div className="property-meta"><span><Icon name="bed" size={17}/>{property.beds}</span><span><Icon name="bath" size={17}/>{property.baths}</span><span><Icon name="car" size={17}/>{property.parking}</span></div><p className="match-reason"><Icon name="sparkle" size={15}/>{property.reason}</p></div></Card>;
}
export function Toggle({ defaultOn = true, label }: { defaultOn?: boolean; label: string }) { const [on,setOn]=useState(defaultOn); return <button className="toggle-row" onClick={()=>setOn(!on)} aria-pressed={on}><span>{label}</span><span className={`toggle ${on?"on":""}`}><i/></span></button>; }
export function Field({ label, defaultValue, type="text", suffix }: { label:string; defaultValue?:string|number; type?:string; suffix?:string }) { return <label className="field"><span>{label}</span><div>{suffix && <b>{suffix}</b>}<input type={type} defaultValue={defaultValue}/></div></label>; }
