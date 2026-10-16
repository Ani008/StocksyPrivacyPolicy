import { useEffect, useState } from 'react';
import { PLAY_STORE_URL, WEB_APP_URL, PRIVACY_PATH, SUPPORT_EMAIL } from '../lib/links.js';
import { getPlatform } from '../lib/platform.js';

const steps = [
  {
    title: 'Create your account',
    body: 'Sign up with email or Google. Every new account starts with ₹10,00,000 in virtual cash.',
  },
  {
    title: 'Place a simulated order',
    body: 'Pick a stock, see its live price, and buy or sell. Orders fill inside the simulation and never reach an exchange.',
  },
  {
    title: 'Watch what happens',
    body: 'Follow your holdings and positions as prices move, and see your profit or loss update.',
  },
];

const features = [
  {
    title: 'Live market prices',
    body: 'Real-time prices for NSE and BSE stocks and indices drive every simulated trade.',
  },
  {
    title: 'Delivery and intraday',
    body: 'Practise holding a stock for months or trading it within the day.',
  },
  {
    title: 'Watchlists and price alerts',
    body: 'Follow the stocks you care about, set alerts, and place Buy or Sell GTT orders.',
  },
  {
    title: 'Trade journal',
    body: 'Write down why you made each trade, then look back at it later.',
  },
  {
    title: 'Virtual wallets',
    body: 'Move virtual funds between wallets to keep different experiments apart.',
  },
];

const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white';

// A sample order slip. Every number is illustrative and labelled as such.
function OrderSlip() {
  return (
    <figure className="max-w-sm mx-auto md:mx-0 md:ml-auto w-full">
      <div className="relative bg-white text-[var(--color-ink)] rounded-sm shadow-2xl shadow-black/30 px-6 pt-6 pb-7 slip-tilt">
        <p className="font-display text-xl">Order slip</p>
        <p className="text-sm text-[var(--color-ink-soft)] mt-0.5">Simulated order</p>

        <span
          className="stamp absolute right-4 top-5 font-display font-semibold text-lg text-[var(--color-ledger-red)] border-2 border-[var(--color-ledger-red)] rounded-sm px-2.5 py-0.5"
          aria-hidden="true"
        >
          Paper trade
        </span>

        <dl className="mt-8 text-sm">
          {[
            ['Order', 'Buy, delivery'],
            ['Stock', 'SAMPLE'],
            ['Quantity', '25'],
            ['Price', '₹1,248.50'],
            ['Order value', '₹31,212.50'],
          ].map(([label, value]) => (
            <div
              key={label}
              className="flex items-baseline justify-between py-2.5 border-b border-dashed border-[var(--color-paper-line)]"
            >
              <dt className="text-[var(--color-ink-soft)]">{label}</dt>
              <dd className="font-mono tabular-nums">{value}</dd>
            </div>
          ))}
          <div className="flex items-baseline justify-between pt-4">
            <dt className="font-medium">Virtual balance after</dt>
            <dd className="font-mono tabular-nums font-medium text-[var(--color-ledger-green)]">
              ₹9,68,787.50
            </dd>
          </div>
        </dl>

        <p className="mt-6 text-sm text-[var(--color-ink-soft)]">
          Filled in the simulation. No real money moved.
        </p>
      </div>
      <figcaption className="mt-4 text-xs text-white/65 text-center md:text-right">
        An example order. The stock and numbers are illustrative.
      </figcaption>
    </figure>
  );
}

export default function Landing() {
  const [platform] = useState(getPlatform);
  const [showIosNote, setShowIosNote] = useState(false);

  const isIos = platform === 'ios';
  // Android visitors most likely want the app; everyone else most likely
  // wants to use it on the web right now.
  const downloadIsPrimary = platform === 'android';

  useEffect(() => {
    document.title = 'Stocksy - Learn to trade with virtual cash';
  }, []);

  const primary = `border border-white bg-white text-[var(--color-ledger-green-deep)] hover:bg-[#EDE7D3] ${focusRing}`;
  const secondary = `border border-white/50 text-white hover:bg-white/10 ${focusRing}`;
  const buttonBase =
    'flex flex-col items-start justify-center min-h-14 px-6 py-2.5 rounded-md text-left transition-colors';

  const downloadClass = `${buttonBase} ${downloadIsPrimary ? primary : secondary}`;
  const loginClass = `${buttonBase} ${downloadIsPrimary ? secondary : primary}`;

  const downloadLabel = (
    <>
      <span className="font-medium leading-tight">Download the app</span>
      <span className="text-xs opacity-75">{isIos ? 'Not on the App Store' : 'Google Play'}</span>
    </>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[var(--color-ledger-green-deep)] text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10 pt-6 pb-16 md:pb-24">
          <header className="flex items-center justify-between">
            <a href="/" className={`inline-flex items-center gap-3 rounded ${focusRing}`} aria-label="Stocksy home">
              <span className="w-9 h-9 rounded-full border-2 border-white/80 flex items-center justify-center font-display italic text-lg">
                S
              </span>
              <span className="font-display text-xl">Stocksy</span>
            </a>
            <a
              href={PRIVACY_PATH}
              className={`text-sm text-white/75 hover:text-white underline underline-offset-4 rounded ${focusRing}`}
            >
              Privacy policy
            </a>
          </header>

          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-14 md:gap-16 items-center mt-14 md:mt-24">
            <div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] max-w-xl text-balance">
                Learn to trade with ₹10,00,000 in virtual cash.
              </h1>
              <p className="mt-6 max-w-lg text-[17px] leading-8 text-white/80">
                Stocksy gives you virtual money and live Indian market prices, so you can place
                trades, track a portfolio, and make mistakes without risking a rupee. No real
                money is ever deposited, invested or withdrawn.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                {isIos ? (
                  <button
                    type="button"
                    className={downloadClass}
                    aria-expanded={showIosNote}
                    aria-controls="ios-note"
                    onClick={() => setShowIosNote((v) => !v)}
                  >
                    {downloadLabel}
                  </button>
                ) : (
                  <a
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={downloadClass}
                  >
                    {downloadLabel}
                  </a>
                )}

                <a href={WEB_APP_URL} className={loginClass}>
                  <span className="font-medium leading-tight">Log in</span>
                  <span className="text-xs opacity-75">Use Stocksy in your browser</span>
                </a>
              </div>

              {isIos && showIosNote && (
                <p
                  id="ios-note"
                  role="status"
                  className="mt-5 max-w-lg text-sm leading-6 text-white/85 border-l-2 border-white/40 pl-4"
                >
                  Stocksy isn&rsquo;t available on the App Store. On iPhone and iPad, log in to use
                  it in Safari, then tap Share and choose Add to Home Screen to keep it on your
                  Home Screen like an app.
                </p>
              )}
            </div>

            <OrderSlip />
          </div>
        </div>
      </section>

      {/* How it works — a real sequence, so numbered */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <h2 className="font-display text-3xl md:text-4xl text-[var(--color-ink)] max-w-lg text-balance">
          From sign-up to first trade in a few minutes
        </h2>
        <ol className="mt-12 grid md:grid-cols-3 gap-10 md:gap-12">
          {steps.map((s, i) => (
            <li key={s.title} className="border-t border-[var(--color-ink)] pt-5">
              <span className="font-display text-4xl text-[var(--color-ledger-green)]" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="mt-3 font-medium text-lg text-[var(--color-ink)]">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-7 text-[var(--color-ink-soft)]">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* What's inside */}
      <section className="border-t border-[var(--color-paper-line)]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24 grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">
          <h2 className="font-display text-3xl md:text-4xl text-[var(--color-ink)] max-w-xs">
            What you can practise
          </h2>
          <dl className="divide-y divide-[var(--color-paper-line)] border-y border-[var(--color-paper-line)]">
            {features.map((f) => (
              <div key={f.title} className="py-5 grid sm:grid-cols-[13rem_1fr] gap-1 sm:gap-6">
                <dt className="font-medium text-[var(--color-ink)]">{f.title}</dt>
                <dd className="text-[15px] leading-7 text-[var(--color-ink-soft)]">{f.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <footer className="border-t border-[var(--color-paper-line)] py-8">
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-[var(--color-ink-soft)]">
          <p className="max-w-md leading-6">
            Stocksy is a paper-trading app for learning. Nothing here is investment advice.
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
            <a href={PRIVACY_PATH} className="underline underline-offset-2 hover:text-[var(--color-ink)]">
              Privacy policy
            </a>
            <a href={`mailto:${SUPPORT_EMAIL}`} className="underline underline-offset-2 hover:text-[var(--color-ink)]">
              {SUPPORT_EMAIL}
            </a>
            <span>© {new Date().getFullYear()} Stocksy</span>
          </nav>
        </div>
      </footer>
    </div>
  );
}
