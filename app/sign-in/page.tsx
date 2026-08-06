"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Logo } from "@/components/app-shell";
import { Icon } from "@/components/icons";
import { useDemo } from "@/components/demo-provider";

export default function SignIn(){const {profile}=useDemo();const [email,setEmail]=useState(profile.email),[password,setPassword]=useState("demo1234"),[error,setError]=useState("");const router=useRouter();const submit=(e:FormEvent)=>{e.preventDefault();if(!/^\S+@\S+\.\S+$/.test(email)||!password){setError("Enter an email and password to continue.");return}router.push("/dashboard")};return <main className="auth-page"><div className="auth-panel"><Logo/><span className="eyebrow">Welcome back</span><h1>Sign in to Home Saver</h1><p>This is a mock sign-in. Any valid email and password will work.</p><form onSubmit={submit}><label className="field"><span>Email address</span><div><input type="email" value={email} onChange={e=>setEmail(e.target.value)}/></div></label><label className="field"><span>Password</span><div><input type="password" value={password} onChange={e=>setPassword(e.target.value)}/></div></label>{error&&<p className="form-error">{error}</p>}<button className="button button-primary wide" type="submit">Sign in <Icon name="arrow"/></button></form><small>New to Home Saver? <Link href="/onboarding">Create an account</Link></small></div></main>}
