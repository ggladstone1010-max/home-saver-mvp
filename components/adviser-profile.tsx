"use client";

import { useRouter } from "next/navigation";
import { useDemo } from "./demo-provider";
import { AppShell } from "./app-shell";
import { Button, Card } from "./ui";
import { Icon } from "./icons";

export function AdviserProfile() {
  const { state, replace, reset } = useDemo();
  const router = useRouter();

  return (
    <AppShell title="Profile & Data Sharing" subtitle="You choose who supports you and when.">
      <div className="trust-banner">
        <Icon name="check" />
        <div><h2>Your personal information is not sold.</h2><p>Introductions are only made with your permission.</p></div>
      </div>
      <div className="two-col">
        <Card>
          <span className="eyebrow">What Brickfloor stores</span>
          <h2>Your Home Saver record</h2>
          {["Contact details", "Deposit and monthly savings", "Home goal and preferred suburbs", "Buying readiness and adviser choices", "Optional fund interest and seller signals"].map((item) => <p className="share-row" key={item}><Icon name="check" />{item}</p>)}
        </Card>
        <Card className="adviser-card">
          <span className="eyebrow">Your professional team</span>
          <h2>Manage support on your terms</h2>
          <p>Add professionals you already use, request a mock Brickfloor introduction and control exactly what each adviser can see.</p>
          <Button href="/advisers" variant="secondary">Manage advisers</Button>
        </Card>
      </div>
      <Card>
        <h2>Professional introductions</h2>
        <label className="consent-row">
          <span><b>Allow selected professional introductions</b><small>Brickfloor only shares information after you explicitly confirm an introduction request.</small></span>
          <input type="checkbox" checked={state.thirdPartyIntroductions} onChange={(event) => replace({ ...state, thirdPartyIntroductions: event.target.checked })} />
        </label>
        <p className="privacy-note">Detailed expenses, unrelated debts and private notes are not included in adviser updates.</p>
      </Card>
      <div className="form-actions">
        <button className="button reset-button" onClick={() => { if (window.confirm("Reset all demo data?")) { reset(); router.push("/"); } }}>Reset demo</button>
        <button className="button button-secondary" onClick={() => router.push("/")}>Sign out</button>
      </div>
    </AppShell>
  );
}
