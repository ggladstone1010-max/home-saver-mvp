"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/data";
import { Icon } from "./icons";
import { useDemo } from "./demo-provider";
import { calculatePlan } from "@/lib/demo";

export function Logo({ light=false }: { light?:boolean }) { return <Link href="/dashboard" className={`logo ${light?"light":""}`}><span><Icon name="home" size={19}/></span>Home Saver</Link>; }
export function AppShell({ children, title, subtitle }: { children:React.ReactNode; title:string; subtitle?:string }) {
 const path=usePathname();
 const {profile}=useDemo(); const plan=calculatePlan(profile); const initials=`${profile.firstName[0]||"H"}${profile.lastName[0]||"S"}`.toUpperCase();
 return <div className="app-layout"><aside className="sidebar"><Logo/><nav>{navItems.map(item=><Link key={item.href} href={item.href} className={path===item.href?"active":""}><Icon name={item.icon}/><span>{item.label}</span></Link>)}</nav><div className="sidebar-goal"><span>Deposit goal</span><strong>{plan.progress}% complete</strong><div><i style={{width:`${plan.progress}%`}}/></div><small>{new Intl.NumberFormat("en-AU",{style:"currency",currency:"AUD",maximumFractionDigits:0}).format(plan.remaining)} to go</small></div><Link href="/profile" className="user-chip"><span>{initials}</span><div><b>{profile.firstName} {profile.lastName}</b><small>View profile</small></div><Icon name="chevron" size={16}/></Link></aside><main className="app-main"><header className="topbar"><div><p className="mobile-logo"><Logo/></p><h1>{title}</h1>{subtitle&&<p>{subtitle}</p>}</div><div className="top-actions"><button aria-label="Notifications"><Icon name="bell"/></button><span>{initials}</span></div></header><div className="page-content">{children}</div></main><nav className="bottom-nav">{navItems.map(item=><Link key={item.href} href={item.href} className={path===item.href?"active":""}><Icon name={item.icon}/><span>{item.label}</span></Link>)}</nav></div>;
}
