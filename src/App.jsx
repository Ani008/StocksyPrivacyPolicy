import Landing from './pages/Landing.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';

// Two pages, so a path check is enough and no router dependency is needed.
// Cloudflare Pages serves index.html for any path when the project has no
// top-level 404.html, so /privacy works on a direct visit or refresh.
const PRIVACY_PATHS = new Set(['/privacy', '/privacy-policy']);

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '').toLowerCase() || '/';
  return PRIVACY_PATHS.has(path) ? <PrivacyPolicy /> : <Landing />;
}
