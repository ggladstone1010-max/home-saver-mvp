"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";
import { Logo } from "./app-shell";
import { Icon } from "./icons";

export const heroCopy = {
  active: "A" as const,
  variants: {
    A: "Start getting exposure to property while you save for your own home.",
    B: "Get started on the property ladder in around 9 minutes, not 9 years.",
    C: "What if your home deposit could participate in the property market too?",
  },
};

const steps = [
  ["Create your Home Saver plan", "Tell us about your savings, savings rate, goals and the kind of home you’re working towards."],
  ["Build your home goal assets", "Continue saving and, when available and appropriate, eligible users may choose residential-property exposure through the Brickfloor fund."],
  ["Discover homes coming within reach", "See properties that may fit your deposit, savings trajectory and indicative borrowing capacity over approximately nine months."],
  ["Move from saver to buyer", "When you’re ready, connect with the advisers you need and explore matched property opportunities."],
];

const benefits = [
  ["building", "Property exposure", "An optional pathway to participate in residential property before you can afford an entire home."],
  ["chart", "Your buying plan", "Track your deposit, savings trajectory and estimated buying position."],
  ["home", "Homes coming within reach", "See selected properties matched to where your finances may be heading."],
  ["users", "Your adviser network", "Keep your broker, buyer’s agent, financial adviser and other professionals available when you need them."],
];

const inventory = [
  ["New Developments", "Selected new residential developments available through participating partners."],
  ["Pre-Market", "Properties Brickfloor knows may be coming to market, potentially allowing eligible buyers to express interest earlier."],
  ["Brickfloor Opportunities", "Properties where Brickfloor has a Market Price Guarantee relationship and a Home Saver buyer may have a relevant opportunity."],
];

const faqs = [
  ["Is this a bank account?", "No. Home Saver is a planning experience. The future Brickfloor Residential Fund would be an investment product, not a bank account or cash deposit."],
  ["Do I actually own a property?", "Not through the current Home Saver MVP. A future fund investment may provide exposure to a diversified residential-property portfolio, rather than ownership of an individual home."],
  ["What does ‘property exposure’ mean?", "It means the value of an eligible future investment would be linked to a residential-property portfolio. It would not necessarily track your preferred home, suburb or the wider market exactly."],
  ["Can the investment fall in value?", "Yes. Investment values can rise or fall and returns would not be guaranteed."],
  ["Can I withdraw my money when I need it?", "Future withdrawal and liquidity terms would be set out in formal disclosure documents. People planning to buy soon should consider their need for accessible deposit funds."],
  ["How quickly can I get started?", "You can build a Home Saver plan now. Residential-property investment functionality is coming soon and would remain subject to eligibility and formal product requirements."],
  ["What does ‘9 minutes’ actually mean?", "The 9-minute concept refers to the approximate setup journey for gaining residential-property exposure once the investment product is available. It does not mean purchasing or owning an entire home in nine minutes."],
  ["What does it cost?", "The current planning demo does not collect money. Any future product fees would be disclosed before a separate investment application."],
  ["What happens when I’m ready to buy?", "You can review homes coming within reach and choose when to involve your broker, buyer’s agent, conveyancer or other advisers."],
  ["How are homes selected for me?", "Home Saver compares active opportunities with your preferences and projected nine-month buying position. Results are indicative and availability is not guaranteed."],
  ["When will the investment feature launch?", "A launch date has not been announced. You can join priority access to receive future updates."],
];

export function LandingPage() {
  useEffect(() => trackEvent("landing_page_view"), []);
  const start = () => {
    trackEvent("start_plan");
    trackEvent("onboarding_started");
    trackEvent("LANDING_PRIMARY_CTA_CLICK");
  };

  return (
    <main className="welcome merged-landing">
      <nav className="welcome-nav">
        <Logo />
        <Link href="/sign-in" onClick={() => trackEvent("LANDING_SIGN_IN_CLICK")}>Sign in</Link>
      </nav>

      <section className="merge-hero">
        <div className="merge-hero-copy">
          <span className="hero-kicker">Home Saver</span>
          <h1>{heroCopy.variants[heroCopy.active]}</h1>
          <p className="nine-device">Get on the property ladder in around 9 minutes, not 9 years.</p>
          <p className="merge-lead">Build your deposit, track your progress and see the homes coming within reach — with the option for eligible users to gain exposure to Australian residential property while they save.</p>
          <div className="coming-label"><i />Property investment feature — coming soon</div>
          <div className="hero-actions">
            <Link className="button button-primary" href="/onboarding" onClick={start}>Build my Home Saver plan <Icon name="arrow" /></Link>
            <a className="button button-secondary" href="#how-it-works">See how it works</a>
          </div>
          <p className="nine-clarifier">By “9 minutes”, we mean getting started with residential-property exposure through Home Saver once the investment feature is available — not purchasing a home.</p>
        </div>
        <HomeSaverPreview />
      </section>

      <section className="market-question">
        <div><span className="eyebrow">A different path</span><h2>What if your deposit could participate in the property market too?</h2><p>Many aspiring buyers save their deposit largely in cash while the price of the home they hope to buy can continue to move.</p><p>Home Saver is being designed to give eligible users the option of gaining exposure to a diversified portfolio of Australian residential property while they continue saving for a home of their own.</p></div>
        <div className="path-cards">
          <article><small>Traditional path</small><h3>Cash savings</h3><p>Build deposit <b>→</b> eventually purchase property</p></article>
          <article className="home-saver-path"><small>Home Saver path</small><h3>Cash + optional property exposure</h3><p>Build home goal assets <b>→</b> track buying capacity <b>→</b> discover homes <b>→</b> purchase when ready</p></article>
        </div>
        <p className="risk-strip"><Icon name="shield" />Investment values can rise or fall. Residential-property fund performance will not necessarily match the price of the particular home or suburb you ultimately want to buy.</p>
      </section>

      <section className="nine-section">
        <span className="eyebrow">Property exposure earlier</span>
        <h2>Get started with property exposure in around 9 minutes, not 9 years.</h2>
        <p>A simple Home Saver journey can take you from setting up your plan to understanding how optional residential-property exposure could fit into your home-buying journey.</p>
        <Link className="button button-primary" href="/investment-pledge">Join priority access <Icon name="arrow" /></Link>
        <small>Coming soon. Investment eligibility, risks, fees and formal product terms would apply.</small>
      </section>

      <section className="merge-steps" id="how-it-works">
        <div className="landing-heading"><span className="eyebrow">How Home Saver works</span><h2>Four steps towards owning.</h2><p>Start where you are. Home Saver helps you understand what comes next.</p></div>
        <div>{steps.map(([title, copy], index) => <article key={title}><span>{index + 1}</span>{index === 1 && <small>Optional investment pathway</small>}<h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="more-than-save">
        <div className="landing-heading"><span className="eyebrow">One connected journey</span><h2>More than a place to save.</h2></div>
        <div>{benefits.map(([icon, title, copy]) => <article key={title}><span><Icon name={icon} /></span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="property-preview">
        <div><span className="eyebrow">Matched opportunities</span><h2>See the homes coming within reach.</h2><p>Home Saver is not another generic property portal. It matches selected opportunities to where your finances may be heading over approximately the next nine months.</p><Link className="button button-primary" href="/onboarding" onClick={start}>Preview homes coming within reach <Icon name="arrow" /></Link></div>
        <div className="preview-inventory">{inventory.map(([title, copy], index) => <article key={title}><div><Image src={`/property-${index + 1}.svg`} alt="Demonstration property" fill sizes="(max-width: 720px) 100vw, 320px" /></div><small>{title}</small><p>{copy}</p></article>)}</div>
      </section>

      <section className="research-trust">
        <div><span className="eyebrow">Historical consumer research</span><h2>We started by asking aspiring homeowners what actually matters.</h2><p>Brickfloor previously surveyed 400 Australian renters aged 18–34 as part of its original Home Deposit Saver research.</p><small>This historical research informed early product exploration. It is not evidence of current or future investment performance.</small></div>
        <div><span className="trust-mark"><Icon name="building" /></span><h2>Built by an Australian PropTech team with a track record.</h2><p>Home Saver is being developed by Brickfloor, the Australian property technology company behind the Market Price Guarantee.</p><small>Award and media logos will only be added when approved source assets and exact award descriptions are available.</small></div>
      </section>

      <section className="landing-faq">
        <div className="landing-heading"><span className="eyebrow">Questions, answered clearly</span><h2>Home Saver FAQ</h2></div>
        <div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<Icon name="chevron" /></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="merge-final">
        <span className="eyebrow">Start with a plan</span><h2>Start building your path to home ownership.</h2><p>Understand where you stand today, what could come within reach next, and how Home Saver may help you participate in residential property along the way.</p>
        <div className="hero-actions"><Link className="button button-primary" href="/onboarding" onClick={start}>Build my Home Saver plan</Link><Link className="button button-secondary" href="/investment-pledge">Join priority access</Link></div>
      </section>

      <footer className="landing-footer"><Logo /><p>Home Saver provides indicative planning information only. It is not financial, credit or property advice. Investing involves risk.</p><Link href="/onboarding" onClick={start}>Build my plan</Link></footer>
    </main>
  );
}

function HomeSaverPreview() {
  return <div className="merge-phone"><div className="phone-top"><Logo /><span>•••</span></div><div className="phone-balance"><small>Your home goal assets</small><strong>$58,000</strong><span>Illustrative only</span></div><div className="phone-chart"><i /><i /><i /><i /><i /><i /></div><div className="phone-cards"><article><Icon name="home" /><span><small>Homes within reach</small><b>8 projected</b></span></article><article><Icon name="building" /><span><small>Property exposure</small><b>Coming soon</b></span></article></div><p><Icon name="sparkle" />Your next step: complete your plan</p></div>;
}
