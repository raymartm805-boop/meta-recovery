import { useMemo, useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  ExternalLink,
  Eye,
  Fingerprint,
  LockKeyhole,
  Menu,
  Search,
  ShieldCheck,
  Smartphone,
  X,
} from 'lucide-react';
import './index.css';

const guides = [
  {
    title: 'Start with the official recovery page',
    category: 'Recover access',
    detail: 'Open the service’s official website or app yourself and use its account recovery flow. Check the URL carefully before entering any information.',
    icon: LockKeyhole,
  },
  {
    title: 'Secure your email and phone',
    category: 'Secure your account',
    detail: 'Protect the email inbox and phone number connected to the account. Update their passwords and recovery details if you think they may be exposed.',
    icon: Smartphone,
  },
  {
    title: 'Turn on two-step verification',
    category: 'Secure your account',
    detail: 'When you regain access, enable two-step verification in the official security settings. Save backup codes somewhere private and offline.',
    icon: Fingerprint,
  },
  {
    title: 'Watch for recovery scams',
    category: 'Stay safe',
    detail: 'Do not share passwords, login links, or one-time codes with anyone claiming they can recover an account. Legitimate support will not ask you to send them a sign-in code.',
    icon: Eye,
  },
];

const safetyChecks = [
  'I opened the service’s official website or app myself',
  'I have not shared a password or one-time sign-in code',
  'I secured the email account linked to my profile',
  'I enabled two-step verification where available',
];

function App() {
  const [query, setQuery] = useState('');
  const [checked, setChecked] = useState<number[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const filteredGuides = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return guides;
    return guides.filter((guide) =>
      `${guide.title} ${guide.category} ${guide.detail}`.toLowerCase().includes(normalizedQuery),
    );
  }, [query]);

  const toggleCheck = (index: number) => {
    setChecked((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index],
    );
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Meta Recovery home">
          <span className="brand-mark"><ShieldCheck size={20} strokeWidth={2.2} /></span>
          <span>META<span className="brand-light"> RECOVERY</span></span>
        </a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
          <a href="#guides" onClick={() => setMenuOpen(false)}>Recovery guides</a>
          <a href="#checklist" onClick={() => setMenuOpen(false)}>Safety checklist</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a className="nav-cta" href="#guides" onClick={() => setMenuOpen(false)}>Get started <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> A safer way forward</div>
            <h1>Take back control.<br /><span>One safe step at a time.</span></h1>
            <p className="hero-intro">Clear, practical guidance for recovering access to an account and protecting it afterward. No passwords, sign-in codes, or account details needed here.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#guides">Explore recovery guides <ArrowDown size={17} /></a>
              <a className="text-link" href="#checklist">View safety checklist <ArrowUpRight size={16} /></a>
            </div>
            <div className="trust-note"><LockKeyhole size={15} /> Independent educational resource · Never share your sign-in codes</div>
          </div>
          <div className="hero-art" aria-label="Account security illustration" role="img">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="hero-glow" />
            <div className="security-card">
              <div className="card-top"><span className="mini-label">ACCOUNT SECURITY</span><span className="card-dots">•••</span></div>
              <div className="shield-graphic"><ShieldCheck size={58} strokeWidth={1.45} /></div>
              <div className="secure-label"><span className="secure-check"><Check size={12} /></span><span><strong>Your next step</strong><small>Start with the official source</small></span></div>
              <div className="card-progress"><span /></div>
              <div className="card-caption">Take it one step at a time</div>
            </div>
            <div className="floating-badge"><CheckCircle2 size={17} /><span>Safety first</span></div>
          </div>
          <a className="scroll-hint" href="#guides"><span /> Scroll to explore</a>
        </section>

        <section className="value-strip" aria-label="Our principles">
          <div><LockKeyhole size={19} /><span><strong>Privacy first</strong><small>No credentials collected</small></span></div>
          <div><ShieldCheck size={19} /><span><strong>Safety focused</strong><small>Official channels only</small></span></div>
          <div><CircleHelp size={19} /><span><strong>Plain-language help</strong><small>Practical steps, no pressure</small></span></div>
        </section>

        <section className="guides section-wrap" id="guides">
          <div className="section-heading">
            <div><div className="eyebrow">YOUR RECOVERY ROADMAP</div><h2>Small steps. Stronger security.</h2><p>Choose a guide to find a safe place to start.</p></div>
            <label className="search-box"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search guides" aria-label="Search recovery guides" />{query && <button aria-label="Clear search" onClick={() => setQuery('')}><X size={15} /></button>}</label>
          </div>
          <div className="guide-grid">
            {filteredGuides.map((guide) => {
              const Icon = guide.icon;
              return <article className="guide-card" key={guide.title}><div className="guide-icon"><Icon size={21} /></div><div className="guide-category">{guide.category}</div><h3>{guide.title}</h3><p>{guide.detail}</p><a href="#checklist" className="card-link">See safety checklist <ArrowUpRight size={15} /></a></article>;
            })}
            {filteredGuides.length === 0 && <div className="empty-state">No guides match “{query}”. Try searching for “security” or “recovery”.</div>}
          </div>
        </section>

        <section className="official-callout">
          <div className="official-icon"><ExternalLink size={23} /></div>
          <div><div className="eyebrow">KEEP YOUR ACCOUNT SAFE</div><h2>Use the service’s official recovery tools.</h2><p>Find the recovery link from the service’s own website or app. Avoid sponsored search results, unsolicited messages, and third-party “recovery agents.”</p></div>
          <a className="button button-outline" href="https://www.facebook.com/help/" target="_blank" rel="noreferrer">Visit Meta Help Center <ExternalLink size={15} /></a>
        </section>

        <section className="checklist-section section-wrap" id="checklist">
          <div className="checklist-copy"><div className="eyebrow">A MOMENT TO CHECK IN</div><h2>Your personal<br /><span>safety checklist.</span></h2><p>Mark the steps you’ve completed. Your checklist stays only in this page and is cleared if you refresh.</p><div className="check-progress"><div className="progress-track"><span style={{ width: `${(checked.length / safetyChecks.length) * 100}%` }} /></div><span>{checked.length} of {safetyChecks.length} complete</span></div></div>
          <div className="checklist-card">{safetyChecks.map((item, index) => <button key={item} className={checked.includes(index) ? 'check-item checked' : 'check-item'} onClick={() => toggleCheck(index)} aria-pressed={checked.includes(index)}><span className="checkbox">{checked.includes(index) && <Check size={15} />}</span><span>{item}</span></button>)}<div className="checklist-foot"><LockKeyhole size={15} /> This checklist is not sent or saved anywhere.</div></div>
        </section>

        <section className="faq-section section-wrap" id="faq">
          <div className="faq-heading"><div className="eyebrow">GOOD TO KNOW</div><h2>Questions, answered.</h2><p>Keeping recovery clear, safe, and in your hands.</p></div>
          <div className="faq-list">{[
            ['Can you recover my account for me?', 'No. We are an independent educational resource, not an account recovery service. We cannot access accounts or contact a platform on your behalf. Use the official provider’s own recovery process.'],
            ['Should I share a login code with a recovery helper?', 'No. Never share a password, one-time code, backup code, or password-reset link. Anyone asking you for one may be trying to take over your account.'],
            ['Is this an official Meta support site?', 'No. META RECOVERY is not affiliated with or endorsed by Meta. For Meta products, visit the official Meta Help Center directly.'],
          ].map(([question, answer], index) => <div className="faq-item" key={question}><button onClick={() => setActiveFaq(activeFaq === index ? null : index)} aria-expanded={activeFaq === index}><span>{question}</span><ChevronDown className={activeFaq === index ? 'chevron rotated' : 'chevron'} size={19} /></button>{activeFaq === index && <p>{answer}</p>}</div>)}</div>
        </section>
      </main>

      <footer className="footer"><a className="brand" href="#home"><span className="brand-mark"><ShieldCheck size={18} /></span><span>META<span className="brand-light"> RECOVERY</span></span></a><p>Independent educational resource. Not affiliated with Meta or any social platform.</p><a href="https://www.facebook.com/help/" target="_blank" rel="noreferrer">Official Meta Help Center <ExternalLink size={13} /></a><span className="copyright">© {new Date().getFullYear()} META RECOVERY</span></footer>
    </div>
  );
}

export default App;
