import { useEffect, useRef, useState } from 'react';

const sections = [
  { id: 'info-collect', num: '01', title: 'Information we collect' },
  { id: 'info-use', num: '02', title: 'How we use your information' },
  { id: 'info-sharing', num: '03', title: 'Information sharing' },
  { id: 'data-security', num: '04', title: 'Data storage & security' },
  { id: 'your-rights', num: '05', title: 'Your rights & account deletion' },
  { id: 'children', num: '06', title: "Children's privacy" },
  { id: 'no-real-money', num: '07', title: 'No real money, no advice, no guarantee' },
  { id: 'cookies', num: '08', title: 'Cookies & tracking' },
  { id: 'changes', num: '09', title: 'Changes to this policy' },
  { id: 'contact', num: '10', title: 'Contact us' },
];

const tickerItems = [
  'NIFTY 50 · SIMULATED', 'SENSEX · SIMULATED', '₹10,00,000 VIRTUAL BALANCE',
  'ZERO REAL MONEY MOVED', 'NSE/BSE PRICES · REFERENCE ONLY', 'PAPER TRADES ONLY',
];

function Rule() {
  return <div className="h-px bg-[var(--color-paper-line)] my-10" />;
}

function SectionHeading({ num, children, id }) {
  return (
    <div className="flex items-baseline gap-4 mb-5">
      <span className="font-mono text-xs tracking-widest text-[var(--color-ledger-green)] pt-1">
        {num}
      </span>
      <h2
        id={id}
        className="font-display text-2xl md:text-[1.75rem] font-medium text-[var(--color-ink)] scroll-mt-28"
      >
        {children}
      </h2>
    </div>
  );
}

function Sub({ children }) {
  return (
    <h3 className="font-display italic text-lg text-[var(--color-ink-soft)] mt-6 mb-2">
      {children}
    </h3>
  );
}

function P({ children }) {
  return <p className="text-[15px] leading-7 text-[var(--color-ink)]/90 mb-3">{children}</p>;
}

function Ul({ children }) {
  return <ul className="space-y-2 mb-4 pl-0">{children}</ul>;
}

function Li({ children }) {
  return (
    <li className="flex gap-3 text-[15px] leading-7 text-[var(--color-ink)]/90">
      <span className="text-[var(--color-ledger-green)] mt-1 shrink-0">–</span>
      <span>{children}</span>
    </li>
  );
}

export default function App() {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-paper)]">
      {/* Ticker strip */}
      <div className="bg-[var(--color-ledger-green-deep)] text-[#EDE7D3] overflow-hidden border-b border-black/10">
        <div className="flex whitespace-nowrap ticker-track font-mono text-[11px] tracking-widest py-2">
          {[...tickerItems, ...tickerItems].map((t, i) => (
            <span key={i} className="mx-6 flex items-center gap-6 opacity-90">
              {t}
              <span className="text-[var(--color-amber)]">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-[var(--color-paper-line)]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-14 md:py-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-full border-2 border-[var(--color-ledger-green)] flex items-center justify-center font-display italic text-lg text-[var(--color-ledger-green)]">
              S
            </div>
            <span className="font-mono text-xs tracking-[0.2em] text-[var(--color-ink-soft)] uppercase">
              Stocksy · Privacy Policy
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.05] text-[var(--color-ink)] max-w-3xl">
            No real money.
            <br />
            <span className="italic text-[var(--color-ledger-green)]">Ever.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-7 text-[var(--color-ink-soft)]">
            Stocksy is a paper-trading and learning app. This page explains, in
            plain terms, what we collect, why, and the choices you have. No
            deposits, no withdrawals, no real broker — ever.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 font-mono text-xs text-[var(--color-ink-soft)] border border-[var(--color-paper-line)] rounded-full px-4 py-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-ledger-green)]" />
            Last updated 30 July 2026
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 md:py-16 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12">
        {/* Sidebar */}
        <nav className="hidden md:block">
          <div className="sticky top-10">
            <p className="font-mono text-[11px] tracking-widest text-[var(--color-ink-soft)] uppercase mb-4">
              Contents
            </p>
            <ul className="space-y-1 border-l border-[var(--color-paper-line)]">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={`block pl-4 -ml-px py-1.5 text-sm border-l-2 transition-colors ${
                      active === s.id
                        ? 'border-[var(--color-ledger-green)] text-[var(--color-ink)] font-medium'
                        : 'border-transparent text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]'
                    }`}
                  >
                    <span className="font-mono text-[10px] mr-2 text-[var(--color-ledger-green)]">
                      {s.num}
                    </span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Main content */}
        <main className="max-w-2xl">
          <div className="bg-white/40 border border-[var(--color-paper-line)] rounded-lg px-5 py-4 mb-12 text-[13px] leading-6 text-[var(--color-ink-soft)]">
            <strong className="text-[var(--color-ledger-green-deep)]">Important —</strong>{' '}
            Stocksy is a paper (virtual/demo) trading and learning application.
            No real money is ever invested, deposited, withdrawn, or
            transferred through the Platform, and the Platform does not
            connect to any real stockbroker. All balances, trades, and
            profits/losses shown are simulated using virtual currency for
            practice and educational purposes only. See Section 07 for full
            details.
          </div>

          <SectionHeading num="01" id="info-collect">
            Information we collect
          </SectionHeading>
          <Sub>a) Information you provide directly</Sub>
          <P>When you create an account, we collect only the following:</P>
          <Ul>
            <Li>Name</Li>
            <Li>Email address</Li>
            <Li>
              Profile photo — only if you choose to sign in with Google, and
              only the photo already on your Google account
            </Li>
          </Ul>
          <P>
            We do not ask for, and the Platform does not request, your PAN,
            bank account details, card details, address, or any government
            ID. We do not collect this information because the Platform
            never handles real money.
          </P>

          <Sub>b) Information collected automatically</Sub>
          <P>
            The Platform does not use analytics SDKs, advertising SDKs, or
            tracking libraries of any kind. We do not request any device
            permissions (no camera, location, contacts, storage, microphone,
            or similar access).
          </P>
          <P>
            Like virtually any online service, our servers automatically log
            basic technical information needed to operate securely — such as
            IP address, timestamp, and request/error logs. This is standard
            server-operation data, not used for tracking or advertising, and
            is not linked to your identity beyond what's needed for security
            and debugging.
          </P>

          <Sub>c) Information generated by using the Platform</Sub>
          <P>To provide the paper-trading experience, we store the data you generate while using the app:</P>
          <Ul>
            <Li>Your virtual wallet balance(s) and virtual fund transfers between wallets</Li>
            <Li>Your simulated orders, trades, and portfolio/watchlist data</Li>
            <Li>Basic account activity such as login history</Li>
          </Ul>

          <Rule />

          <SectionHeading num="02" id="info-use">
            How we use your information
          </SectionHeading>
          <P>We use the information above only to:</P>
          <Ul>
            <Li>Create and maintain your account</Li>
            <Li>Let you sign in via Google or email/password</Li>
            <Li>Operate the paper-trading features (virtual wallet, simulated orders, portfolio tracking)</Li>
            <Li>Respond to support requests you send us</Li>
            <Li>Maintain the security and proper functioning of the Platform</Li>
          </Ul>
          <P>
            We do not use your information for advertising, we do not run
            ads on the Platform, and we do not build advertising or
            tracking profiles.
          </P>

          <Rule />

          <SectionHeading num="03" id="info-sharing">
            Information sharing
          </SectionHeading>
          <P>We do not sell, rent, or trade your personal information to anyone.</P>
          <P>
            The only third party your information is shared with is Google,
            and only if you choose "Sign in with Google" — in that case,
            Google processes your sign-in per its own privacy policy. If you
            sign in with email/password instead, no data is shared with
            Google or any other third party.
          </P>
          <P>
            We do not currently integrate any other third-party services,
            analytics providers, or advertising networks in the Platform.
          </P>

          <Rule />

          <SectionHeading num="04" id="data-security">
            Data storage &amp; security
          </SectionHeading>
          <Ul>
            <Li>Your account data is stored in a PostgreSQL database; Redis is used for short-lived caching/session data.</Li>
            <Li>Passwords are never stored in plain text — they are hashed using bcrypt before storage.</Li>
            <Li>Authentication is handled using JSON Web Tokens (JWT). The Platform does not use tracking cookies.</Li>
          </Ul>
          <P>
            We take reasonable technical measures to protect your
            information against unauthorized access, alteration, or
            disclosure. No method of transmission or storage is 100% secure,
            and we cannot guarantee absolute security.
          </P>

          <Rule />

          <SectionHeading num="05" id="your-rights">
            Your rights &amp; account deletion
          </SectionHeading>
          <P>
            You may request access to, correction of, or deletion of your
            personal data at any time by contacting us (Section 10).
          </P>
          <P>
            When you delete your account, your personal data and app data are
            removed immediately and are not retained beyond what may be
            legally required.
          </P>
          <P>
            You do not need to have the app installed to request deletion —
            you can also do so via our website or by emailing our support
            address below.
          </P>

          <Rule />

          <SectionHeading num="06" id="children">
            Children's privacy
          </SectionHeading>
          <P>
            The Platform is intended for users aged 18 and above. We do not
            knowingly collect personal information from anyone under 18. If
            you believe a user under 18 has provided us with personal
            information, please contact us and we will take steps to delete
            it.
          </P>

          <Rule />

          <SectionHeading num="07" id="no-real-money">
            No real money, no investment advice, no guarantee
          </SectionHeading>
          <Ul>
            <Li>
              Stocksy is a simulation/education tool. Users cannot invest,
              deposit, or withdraw real money through the Platform, and the
              Platform is not connected to any real stockbroker or exchange
              account.
            </Li>
            <Li>
              Each new account receives virtual currency (₹10,00,000 in
              virtual funds) which can be moved between virtual wallets and
              used to place simulated orders.
            </Li>
            <Li>
              To make the simulation realistic, the Platform uses real-time
              market prices (last traded price and related data) for
              NSE/BSE-listed instruments when calculating simulated trade
              outcomes. These are simulated executions only — no real order
              is ever placed on any exchange.
            </Li>
            <Li>
              We do not provide investment advice, and nothing on the
              Platform should be treated as a recommendation to buy or sell
              any real security. Simulated results do not guarantee, and are
              not indicative of, real trading outcomes or profits.
            </Li>
            <Li>Users cannot lose real money on the Platform under any circumstance.</Li>
          </Ul>

          <Rule />

          <SectionHeading num="08" id="cookies">
            Cookies &amp; tracking technologies
          </SectionHeading>
          <P>
            The Platform does not use cookies. Sessions are managed using
            JWT tokens issued at login.
          </P>

          <Rule />

          <SectionHeading num="09" id="changes">
            Changes to this policy
          </SectionHeading>
          <P>
            We may update this Privacy Policy from time to time as the
            Platform evolves. When we do, we will revise the "Last Updated"
            date at the top of this page. We encourage you to review this
            page periodically.
          </P>

          <Rule />

          <SectionHeading num="10" id="contact">
            Contact us
          </SectionHeading>
          <P>
            If you have any questions about this Privacy Policy or how your
            information is handled, contact us at:
          </P>
          <div className="border border-[var(--color-paper-line)] rounded-lg p-6 mt-4 font-mono text-sm leading-7 text-[var(--color-ink)]">
            <p className="font-display text-lg not-italic mb-1">Stocksy</p>
            <p>Attn: Aniket Chakke (Founder)</p>
            <p>Pune, Maharashtra, India</p>
            <p className="mt-2">
              Email:{' '}
              <a
                href="mailto:indiastocksy@gmail.com"
                className="text-[var(--color-ledger-green)] underline underline-offset-2"
              >
                indiastocksy@gmail.com
              </a>
            </p>
            <p>
              Website:{' '}
              <a
                href="https://stocksy.online"
                className="text-[var(--color-ledger-green)] underline underline-offset-2"
              >
                stocksy.online
              </a>
            </p>
          </div>

          <p className="mt-10 text-xs italic text-[var(--color-ink-soft)] leading-6">
            This Privacy Policy governs use of the Stocksy Platform and is
            governed by the laws of India, with courts in Pune, Maharashtra
            having jurisdiction.
          </p>
        </main>
      </div>

      <footer className="border-t border-[var(--color-paper-line)] py-8">
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-[var(--color-ink-soft)] font-mono">
          <span>© {new Date().getFullYear()} Stocksy. Paper trading only.</span>
          <span>stocksy.online</span>
        </div>
      </footer>
    </div>
  );
}
