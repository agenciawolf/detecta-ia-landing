
export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Verifique se seu parceiro tem perfil ativo no Tinder, Bumble ou Hinge. Resultado em até 2 minutos. Discreta e segura.">
  <meta name="robots" content="noindex, nofollow">
  <title>Verificar Perfil no Tinder · Resultado em 2 min | Detecta.ia</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    /* ===================================================================
       DESIGN TOKENS
    =================================================================== */
    :root {
      --t-orange: #FF7854;
      --t-pink:   #FD267A;
      --t-mid:    #FE3C72;

      --grad:      linear-gradient(135deg, #FF7854 0%, #FE3C72 50%, #FD267A 100%);
      --grad-h:    linear-gradient(90deg,  #FF7854 0%, #FE3C72 50%, #FD267A 100%);
      --grad-cta:  linear-gradient(135deg, #FF7854 0%, #FE3C72 60%, #FD267A 100%);
      --grad-soft: linear-gradient(135deg, rgba(255,120,84,0.15), rgba(253,38,122,0.08));

      --void:     #0A0510;
      --surface:  #120A14;
      --surface2: #1A0E1E;
      --surface3: #241428;
      --border:   #2E1832;
      --border2:  #3D2042;

      --text-primary:   #F5EAF0;
      --text-secondary: #C8A0B8;
      --text-muted:     #8A5A78;
      --text-faint:     #5A3550;

      --success: #10B981;
      --warning: #F59E0B;
      --error:   #EF4444;
      --info:    #3B82F6;

      --font-display: 'Plus Jakarta Sans', sans-serif;
      --font-body:    'DM Sans', sans-serif;
      --font-mono:    'JetBrains Mono', monospace;

      --sp-1: 4px; --sp-2: 8px; --sp-3: 12px; --sp-4: 16px;
      --sp-5: 20px; --sp-6: 24px; --sp-8: 32px; --sp-10: 40px;
      --sp-12: 48px; --sp-16: 64px; --sp-20: 80px;

      --r-sm: 6px; --r-md: 10px; --r-lg: 14px;
      --r-xl: 20px; --r-2xl: 28px; --r-full: 9999px;

      --shadow-flame: 0 8px 32px rgba(253,38,122,0.3);
      --shadow-glow:  0 0 40px rgba(255,120,84,0.2);
      --shadow-card:  0 4px 24px rgba(0,0,0,0.5);
      --shadow-deep:  0 16px 64px rgba(0,0,0,0.7);

      --glass-bg:     rgba(26, 14, 30, 0.65);
      --glass-border: rgba(255,120,84,0.15);
      --glass-blur:   blur(16px) saturate(180%);
    }

    /* ===================================================================
       KEYFRAMES
    =================================================================== */
    @keyframes float {
      0%   { transform: translate(0,0) scale(1); }
      100% { transform: translate(20px,30px) scale(1.08); }
    }
    @keyframes pulse {
      0%,100% { opacity:1; }
      50%     { opacity:0.3; }
    }
    @keyframes animationIn {
      0%   { opacity:0; transform:translateY(24px); filter:blur(8px); }
      100% { opacity:1; transform:translateY(0);    filter:blur(0); }
    }
    @keyframes shimmer {
      from { transform:translateX(-100%) skewX(-15deg); }
      to   { transform:translateX(200%)  skewX(-15deg); }
    }
    @keyframes scanLine {
      0%   { top:-4px; }
      100% { top:100%; }
    }
    @keyframes gradientShift {
      0%   { background-position:0% 50%; }
      50%  { background-position:100% 50%; }
      100% { background-position:0% 50%; }
    }
    @keyframes marquee {
      0%   { transform:translateX(0); }
      100% { transform:translateX(-50%); }
    }
    @keyframes textSlide {
      0%   { transform:translateY(110%); opacity:0; }
      100% { transform:translateY(0);    opacity:1; }
    }
    @keyframes spin { to { transform:rotate(360deg); } }
    @keyframes ripple {
      0%   { box-shadow:0 0 0 0 rgba(253,38,122,0.4); }
      100% { box-shadow:0 0 0 20px rgba(253,38,122,0); }
    }
    @keyframes morphBlob {
      0%,100% { border-radius:60% 40% 30% 70%/60% 30% 70% 40%; }
      25%     { border-radius:30% 60% 70% 40%/50% 60% 30% 60%; }
      50%     { border-radius:50% 60% 30% 60%/30% 50% 70% 50%; }
      75%     { border-radius:60% 30% 50% 40%/70% 40% 60% 30%; }
    }
    @keyframes slideInLeft {
      0%   { opacity:0; transform:translateX(-40px); }
      100% { opacity:1; transform:translateX(0); }
    }
    @keyframes slideInRight {
      0%   { opacity:0; transform:translateX(40px); }
      100% { opacity:1; transform:translateX(0); }
    }
    @keyframes scaleIn {
      0%   { opacity:0; transform:scale(0.85); }
      100% { opacity:1; transform:scale(1); }
    }
    @keyframes bounceIn {
      0%   { opacity:0; transform:scale(0.3); }
      50%  { opacity:1; transform:scale(1.06); }
      70%  { transform:scale(0.95); }
      100% { transform:scale(1); }
    }
    @keyframes tiltHover {
      0%,100% { transform:perspective(600px) rotateY(0deg) rotateX(0deg); }
      25%     { transform:perspective(600px) rotateY(2deg) rotateX(-1deg); }
      75%     { transform:perspective(600px) rotateY(-2deg) rotateX(1deg); }
    }
    @keyframes borderGlow {
      0%,100% { border-color:rgba(255,120,84,0.2); box-shadow:0 0 8px rgba(255,120,84,0.1); }
      50%     { border-color:rgba(253,38,122,0.5); box-shadow:0 0 20px rgba(253,38,122,0.2); }
    }
    @keyframes typing {
      0%   { width:0; }
      100% { width:100%; }
    }
    @keyframes blink {
      0%,50% { border-color:var(--t-orange); }
      51%,100% { border-color:transparent; }
    }
    @keyframes popIn {
      0%   { opacity:0; transform:scale(0) rotate(-12deg); }
      70%  { transform:scale(1.1) rotate(2deg); }
      100% { opacity:1; transform:scale(1) rotate(0deg); }
    }
    @keyframes glowPulse {
      0%,100% { filter:drop-shadow(0 0 6px rgba(253,38,122,0.3)); }
      50%     { filter:drop-shadow(0 0 20px rgba(253,38,122,0.6)); }
    }

    /* ===================================================================
       RESET & BASE
    =================================================================== */
    *,*::before,*::after { box-sizing:border-box; margin:0; padding:0; }
    html { scroll-behavior:smooth; scroll-padding-top:20px; }
    body {
      font-family: var(--font-body);
      background: var(--void);
      color: var(--text-primary);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow-x: hidden;
    }
    ::selection { background:rgba(253,38,122,0.3); color:var(--text-primary); }
    ::-webkit-scrollbar { width:5px; }
    ::-webkit-scrollbar-track { background:var(--surface); }
    ::-webkit-scrollbar-thumb { background:var(--t-mid); border-radius:3px; }
    img { max-width:100%; display:block; }
    a { text-decoration:none; color:inherit; }

    /* ===================================================================
       UTILITY
    =================================================================== */
    .container { max-width:1080px; margin:0 auto; padding:0 var(--sp-6); }
    .section-label {
      font-family:var(--font-mono); font-size:10px; letter-spacing:0.25em;
      color:var(--t-orange); text-transform:uppercase;
      display:flex; align-items:center; gap:8px; margin-bottom:var(--sp-3);
    }
    .section-label::before { content:''; display:inline-block; width:20px; height:1px; background:var(--t-orange); }
    .section-title {
      font-family:var(--font-display); font-weight:800;
      letter-spacing:-0.04em; line-height:1.05;
      background:var(--grad); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
    }
    .grad-text {
      background:var(--grad); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
    }

    /* ===================================================================
       BLOCO 1 — HERO
    =================================================================== */
    .top-bar { height:3px; background:var(--grad-h); }

    .hero {
      position:relative; overflow:hidden;
      background:var(--void);
      padding: var(--sp-16) 0 var(--sp-12);
      min-height:100svh; display:flex; align-items:center;
    }
    .hero-blobs { position:absolute; inset:0; pointer-events:none; overflow:hidden; z-index:0; }
    .hero-blob {
      position:absolute; filter:blur(80px); opacity:0.35;
      animation: morphBlob 12s ease-in-out infinite, float 8s ease-in-out infinite alternate;
    }
    .hero-blob-1 { width:340px; height:340px; background:var(--t-orange); top:-80px; left:-60px; animation-delay:0s; }
    .hero-blob-2 { width:280px; height:280px; background:var(--t-pink); bottom:-40px; right:-40px; animation-delay:-4s; }
    .hero-blob-3 { width:200px; height:200px; background:var(--t-mid); top:40%; left:60%; animation-delay:-8s; }

    .hero-content { position:relative; z-index:1; text-align:center; }

    .hero-badge {
      display:inline-flex; align-items:center; gap:var(--sp-2);
      background:rgba(255,120,84,0.08); border:1px solid rgba(255,120,84,0.2);
      border-radius:var(--r-full); padding:6px 16px;
      font-family:var(--font-mono); font-size:10px; letter-spacing:0.12em;
      color:var(--t-orange); text-transform:uppercase;
      margin-bottom:var(--sp-6);
    }
    .pulse-dot {
      width:6px; height:6px; border-radius:50%; background:var(--t-orange);
      animation:pulse 1.5s ease-in-out infinite;
    }

    .hero-headline {
      font-family:var(--font-display); font-size:clamp(36px,8vw,72px);
      font-weight:800; letter-spacing:-0.05em; line-height:1;
      color:var(--text-primary);
      margin-bottom:var(--sp-5);
      overflow:hidden;
    }
    .hero-headline .word {
      display:inline-block;
      animation: textSlide 0.8s cubic-bezier(0.16,1,0.3,1) forwards;
      opacity:0;
    }
    .hero-headline .word:nth-child(2) { animation-delay:0.1s; }
    .hero-headline .word:nth-child(3) { animation-delay:0.2s; }
    .hero-headline .word:nth-child(4) { animation-delay:0.3s; }
    .hero-headline .word:nth-child(5) { animation-delay:0.4s; }

    .hero-sub {
      font-size:clamp(15px,2.5vw,18px); color:var(--text-secondary);
      max-width:540px; margin:0 auto var(--sp-8); line-height:1.7;
    }

    /* CTA Button */
    .btn-cta {
      display:inline-flex; align-items:center; justify-content:center; gap:var(--sp-2);
      background:var(--grad-cta); color:#fff;
      font-family:var(--font-display); font-size:15px; font-weight:700;
      letter-spacing:0.06em; text-transform:uppercase;
      padding:16px 40px; border-radius:var(--r-full);
      border:none; cursor:pointer;
      box-shadow:var(--shadow-flame);
      position:relative; overflow:hidden;
      transition:transform 0.2s, box-shadow 0.2s;
    }
    .btn-cta:hover { transform:translateY(-2px); box-shadow:0 12px 40px rgba(253,38,122,0.4); }
    .btn-cta:active { transform:translateY(0); }
    .btn-cta::after {
      content:''; position:absolute; top:0; left:-100%; width:60%; height:100%;
      background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent);
      animation:shimmer 2.5s ease-in-out infinite;
    }

    .hero-microcopy {
      font-family:var(--font-mono); font-size:11px; letter-spacing:0.08em;
      color:var(--text-muted); margin-top:var(--sp-4);
    }

    .hero-stats {
      display:grid; grid-template-columns:repeat(3,1fr); gap:var(--sp-4);
      max-width:480px; margin:var(--sp-10) auto 0;
    }
    .hero-stat {
      text-align:center; padding:var(--sp-4);
      background:var(--surface2); border:1px solid var(--border);
      border-radius:var(--r-lg);
    }
    .hero-stat-value {
      font-family:var(--font-display); font-size:clamp(22px,4vw,32px); font-weight:800;
      letter-spacing:-0.03em; line-height:1;
      background:var(--grad); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
    }
    .hero-stat-label { font-size:11px; color:var(--text-muted); margin-top:4px; }

    /* ===================================================================
       BLOCO 2 — TRUST STRIP
    =================================================================== */
    .trust-strip {
      background:var(--surface); border-top:1px solid var(--border); border-bottom:1px solid var(--border);
      padding:var(--sp-4) 0; overflow:hidden;
    }
    .trust-marquee {
      display:flex; gap:var(--sp-8); white-space:nowrap;
      animation:marquee 30s linear infinite;
    }
    .trust-item {
      display:inline-flex; align-items:center; gap:var(--sp-2);
      font-size:13px; color:var(--text-muted); flex-shrink:0;
    }
    .trust-item span:first-child { font-size:16px; }

    @media(max-width:480px) {
      .trust-marquee { animation:none; flex-wrap:wrap; justify-content:center; gap:var(--sp-3); white-space:normal; }
      .trust-item { font-size:11px; }
    }

    /* ===================================================================
       BLOCO 3 — FUNIL INTERATIVO
    =================================================================== */
    .funnel-section {
      padding:var(--sp-16) 0;
      background:var(--void);
    }
    .funnel-headline {
      font-family:var(--font-display); font-size:clamp(28px,5vw,44px);
      font-weight:800; letter-spacing:-0.04em; text-align:center;
      color:var(--text-primary); margin-bottom:var(--sp-10);
    }

    /* Funnel Card */
    .funnel-card {
      max-width:520px; margin:0 auto;
      background:rgba(26,14,40,0.7);
      backdrop-filter:blur(20px) saturate(180%); -webkit-backdrop-filter:blur(20px) saturate(180%);
      border:1px solid rgba(93,40,120,0.3);
      border-radius:var(--r-2xl); overflow:hidden;
      box-shadow:var(--shadow-deep);
    }
    .funnel-card-bar { height:3px; background:var(--grad-h); }
    .funnel-card-inner { padding:var(--sp-8); }

    /* Step A — Form */
    .form-title {
      font-family:var(--font-display); font-size:22px; font-weight:800;
      letter-spacing:-0.03em; color:var(--text-primary); margin-bottom:var(--sp-1);
    }
    .form-subtitle { font-size:14px; color:var(--text-muted); margin-bottom:var(--sp-6); }

    .input-group { display:flex; flex-direction:column; gap:var(--sp-1); margin-bottom:var(--sp-4); }
    .input-label {
      font-family:var(--font-mono); font-size:10px; letter-spacing:0.15em;
      text-transform:uppercase; color:var(--text-muted);
    }
    .input {
      background:rgba(18,10,20,0.8); border:1px solid var(--border2);
      border-radius:var(--r-md); padding:12px 16px;
      font-family:var(--font-body); font-size:14px; color:var(--text-primary);
      outline:none; transition:border-color 0.2s, box-shadow 0.2s; width:100%;
    }
    .input::placeholder { color:var(--text-faint); }
    .input:focus { border-color:var(--t-mid); box-shadow:0 0 0 3px rgba(253,38,122,0.15); }
    .input-hint { font-size:11px; color:var(--text-faint); margin-top:2px; }

    .btn-form {
      width:100%; margin-top:var(--sp-4);
      display:flex; align-items:center; justify-content:center; gap:var(--sp-2);
      background:var(--grad-cta); color:#fff;
      font-family:var(--font-display); font-size:14px; font-weight:700;
      letter-spacing:0.08em; text-transform:uppercase;
      padding:14px; border-radius:var(--r-lg);
      border:none; cursor:pointer;
      box-shadow:var(--shadow-flame);
      position:relative; overflow:hidden;
      transition:transform 0.2s;
    }
    .btn-form:hover { transform:translateY(-2px); }
    .btn-form::after {
      content:''; position:absolute; top:0; left:-100%; width:60%; height:100%;
      background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent);
      animation:shimmer 2.5s ease-in-out infinite;
    }

    /* Step B — Search Animation */
    .search-anim { display:none; }
    .search-anim.active { display:block; }
    .terminal-window {
      background:rgba(10,5,16,0.9); border:1px solid var(--border);
      border-radius:var(--r-lg); overflow:hidden;
    }
    .terminal-header {
      display:flex; align-items:center; gap:6px;
      padding:10px 14px; background:rgba(18,10,20,0.8); border-bottom:1px solid var(--border);
    }
    .terminal-dot { width:8px; height:8px; border-radius:50%; }
    .terminal-dot.r { background:#EF4444; }
    .terminal-dot.y { background:#F59E0B; }
    .terminal-dot.g { background:#10B981; }
    .terminal-title { font-family:var(--font-mono); font-size:10px; color:var(--text-faint); margin-left:auto; }
    .terminal-body { padding:var(--sp-4); min-height:200px; position:relative; }
    .terminal-line {
      font-family:var(--font-mono); font-size:12px; color:var(--text-muted);
      padding:4px 0; display:flex; align-items:center; gap:8px;
      opacity:0; transform:translateY(8px);
      transition:opacity 0.4s, transform 0.4s;
    }
    .terminal-line.visible { opacity:1; transform:translateY(0); }
    .terminal-line .prefix { color:var(--t-orange); }
    .terminal-line.success { color:var(--success); }
    .terminal-line.success .prefix { color:var(--success); }

    .progress-bar-wrap {
      margin-top:var(--sp-4); background:var(--surface2); border-radius:var(--r-full);
      height:6px; overflow:hidden;
    }
    .progress-bar-fill {
      height:100%; width:0%; border-radius:var(--r-full);
      background:var(--grad-h); transition:width 0.5s ease;
    }
    .progress-label {
      font-family:var(--font-mono); font-size:10px; color:var(--text-faint);
      text-align:right; margin-top:4px;
    }

    /* Step C — Results */
    .results-screen { display:none; }
    .results-screen.active { display:block; }
    .results-headline {
      font-family:var(--font-display); font-size:20px; font-weight:800;
      letter-spacing:-0.03em; color:var(--text-primary); margin-bottom:var(--sp-4);
    }

    .result-card {
      background:var(--surface2); border:1px solid var(--border);
      border-radius:var(--r-lg); padding:var(--sp-4);
      margin-bottom:var(--sp-3); position:relative; overflow:hidden;
    }
    .result-card-blur {
      filter:blur(6px); pointer-events:none; user-select:none;
    }
    .result-card-row { display:flex; align-items:center; gap:var(--sp-3); }
    .result-avatar {
      width:44px; height:44px; border-radius:50%;
      background:var(--grad-soft); border:2px solid var(--border2);
      display:flex; align-items:center; justify-content:center; font-size:18px;
    }
    .result-info { flex:1; }
    .result-name { font-size:14px; font-weight:600; color:var(--text-primary); }
    .result-app { font-family:var(--font-mono); font-size:10px; color:var(--t-orange); }
    .result-badge {
      font-family:var(--font-mono); font-size:9px; letter-spacing:0.1em;
      padding:4px 10px; border-radius:var(--r-full);
      background:rgba(16,185,129,0.1); border:1px solid rgba(16,185,129,0.3);
      color:var(--success); text-transform:uppercase;
    }

    .result-lock-overlay {
      position:absolute; inset:0; display:flex; align-items:center; justify-content:center;
      background:rgba(10,5,16,0.5); backdrop-filter:blur(2px);
    }
    .lock-icon { font-size:20px; }

    .results-benefits { margin:var(--sp-5) 0; }
    .benefit-item {
      font-size:13px; color:var(--text-secondary); padding:4px 0;
      display:flex; align-items:center; gap:var(--sp-2);
    }
    .benefit-check { color:var(--success); font-size:14px; }

    .btn-unlock {
      width:100%; margin-top:var(--sp-4);
      display:flex; align-items:center; justify-content:center; gap:var(--sp-2);
      background:var(--grad-cta); color:#fff;
      font-family:var(--font-display); font-size:14px; font-weight:700;
      letter-spacing:0.04em; text-transform:uppercase;
      padding:16px; border-radius:var(--r-lg);
      border:none; cursor:pointer;
      box-shadow:var(--shadow-flame);
      position:relative; overflow:hidden;
      transition:transform 0.2s;
      animation:glowPulse 2s ease-in-out infinite;
    }
    .btn-unlock:hover { transform:translateY(-2px); }
    .btn-unlock::after {
      content:''; position:absolute; top:0; left:-100%; width:60%; height:100%;
      background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent);
      animation:shimmer 2.5s ease-in-out infinite;
    }
    .unlock-microcopy {
      font-family:var(--font-mono); font-size:10px; color:var(--text-faint);
      text-align:center; margin-top:var(--sp-3);
    }

    /* ===================================================================
       BLOCO 4 — AGITACAO
    =================================================================== */
    .agitation-section {
      padding:var(--sp-16) 0;
      background:var(--surface);
    }
    .agitation-headline {
      font-family:var(--font-display); font-size:clamp(26px,5vw,40px);
      font-weight:800; letter-spacing:-0.04em; line-height:1.1;
      color:var(--text-primary); margin-bottom:var(--sp-5);
    }
    .agitation-body {
      font-size:15px; color:var(--text-secondary); line-height:1.8;
      max-width:680px; margin-bottom:var(--sp-8);
    }
    .symptom-grid {
      display:grid; grid-template-columns:repeat(2,1fr); gap:var(--sp-4);
      max-width:560px;
    }
    .symptom-card {
      background:var(--surface2); border:1px solid var(--border);
      border-radius:var(--r-lg); padding:var(--sp-5);
      display:flex; align-items:center; gap:var(--sp-3);
      transition:all 0.3s;
      opacity:0;
    }
    .symptom-card:hover { border-color:rgba(253,38,122,0.3); transform:translateY(-2px); }
    .symptom-icon {
      width:40px; height:40px; border-radius:var(--r-md); flex-shrink:0;
      background:rgba(253,38,122,0.08); border:1px solid rgba(253,38,122,0.15);
      display:flex; align-items:center; justify-content:center; font-size:18px;
    }
    .symptom-text { font-size:13px; font-weight:600; color:var(--text-primary); line-height:1.4; }

    @media(max-width:480px) {
      .symptom-grid { grid-template-columns:1fr; }
    }

    /* ===================================================================
       BLOCO 5 — COMO FUNCIONA
    =================================================================== */
    .steps-section {
      padding:var(--sp-16) 0;
      background:var(--void);
    }
    .steps-grid {
      display:grid; grid-template-columns:repeat(3,1fr); gap:var(--sp-6);
      margin-top:var(--sp-10);
    }
    .step-card {
      background:var(--glass-bg); border:1px solid var(--glass-border);
      backdrop-filter:var(--glass-blur); -webkit-backdrop-filter:var(--glass-blur);
      border-radius:var(--r-xl); padding:var(--sp-8);
      position:relative; overflow:hidden;
      transition:all 0.4s cubic-bezier(0.4,0,0.2,1);
      cursor:default;
      opacity:0;
    }
    .step-card::after {
      content:''; position:absolute; inset:0;
      background:radial-gradient(500px circle at var(--mouse-x,50%) var(--mouse-y,50%),rgba(255,120,84,0.08),transparent 40%);
      opacity:0; transition:opacity 0.4s; pointer-events:none;
    }
    .step-card:hover::after { opacity:1; }
    .step-card:hover { border-color:rgba(255,120,84,0.35); transform:translateY(-3px); }

    .step-number {
      font-family:var(--font-display); font-size:48px; font-weight:800;
      letter-spacing:-0.04em; line-height:1;
      background:var(--grad); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
      opacity:0.2; margin-bottom:var(--sp-4);
    }
    .step-icon {
      width:48px; height:48px; border-radius:var(--r-md);
      background:rgba(255,120,84,0.1); border:1px solid rgba(255,120,84,0.2);
      display:flex; align-items:center; justify-content:center;
      font-size:22px; margin-bottom:var(--sp-4);
    }
    .step-title {
      font-family:var(--font-mono); font-size:11px; letter-spacing:0.15em;
      text-transform:uppercase; color:var(--t-orange); margin-bottom:var(--sp-2);
    }
    .step-desc { font-size:13px; color:var(--text-muted); line-height:1.6; }

    @media(max-width:768px) {
      .steps-grid { grid-template-columns:1fr; max-width:400px; margin-left:auto; margin-right:auto; }
    }

    /* ===================================================================
       BLOCO 6 — PROVA SOCIAL
    =================================================================== */
    .social-section {
      padding:var(--sp-16) 0;
      background:var(--surface);
    }
    .social-stats {
      display:grid; grid-template-columns:repeat(3,1fr); gap:var(--sp-4);
      max-width:560px; margin:0 auto var(--sp-10);
    }
    .social-stat {
      text-align:center; padding:var(--sp-5);
      background:var(--surface2); border:1px solid var(--border);
      border-radius:var(--r-lg);
      opacity:0;
    }
    .social-stat-value {
      font-family:var(--font-display); font-size:clamp(24px,4vw,36px); font-weight:800;
      letter-spacing:-0.03em; line-height:1;
      background:var(--grad); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
    }
    .social-stat-label { font-size:12px; color:var(--text-muted); margin-top:4px; }

    .testimonials {
      display:grid; grid-template-columns:repeat(3,1fr); gap:var(--sp-6);
    }
    .testimonial-card {
      background:var(--glass-bg); border:1px solid var(--glass-border);
      backdrop-filter:var(--glass-blur); -webkit-backdrop-filter:var(--glass-blur);
      border-radius:var(--r-xl); padding:var(--sp-6);
      position:relative; overflow:hidden;
      transition:all 0.4s;
      opacity:0;
    }
    .testimonial-card::after {
      content:''; position:absolute; inset:0;
      background:radial-gradient(500px circle at var(--mouse-x,50%) var(--mouse-y,50%),rgba(255,120,84,0.08),transparent 40%);
      opacity:0; transition:opacity 0.4s; pointer-events:none;
    }
    .testimonial-card:hover::after { opacity:1; }
    .testimonial-card:hover { border-color:rgba(255,120,84,0.3); transform:translateY(-3px); }

    .testimonial-stars { color:#F59E0B; font-size:14px; margin-bottom:var(--sp-3); letter-spacing:2px; }
    .testimonial-status {
      font-family:var(--font-mono); font-size:10px; letter-spacing:0.1em;
      padding:3px 8px; border-radius:var(--r-sm);
      display:inline-block; margin-bottom:var(--sp-3);
    }
    .testimonial-status.found { background:rgba(239,68,68,0.1); border:1px solid rgba(239,68,68,0.2); color:var(--error); }
    .testimonial-status.clean { background:rgba(16,185,129,0.1); border:1px solid rgba(16,185,129,0.2); color:var(--success); }
    .testimonial-status.done { background:rgba(59,130,246,0.1); border:1px solid rgba(59,130,246,0.2); color:var(--info); }
    .testimonial-text { font-size:14px; color:var(--text-secondary); line-height:1.7; font-style:italic; margin-bottom:var(--sp-4); }
    .testimonial-author { font-size:12px; font-weight:600; color:var(--text-primary); }
    .testimonial-location { font-size:11px; color:var(--text-muted); }

    .app-chips {
      display:flex; flex-wrap:wrap; gap:var(--sp-2); justify-content:center;
      margin-top:var(--sp-8);
    }
    .app-chip {
      display:flex; align-items:center; gap:6px;
      background:var(--surface2); border:1px solid var(--border);
      border-radius:var(--r-md); padding:6px 14px;
      font-size:12px; font-weight:600; color:var(--text-secondary);
      transition:all 0.2s;
    }
    .app-chip:hover { border-color:var(--border2); background:var(--surface3); color:var(--text-primary); transform:scale(1.04); }

    @media(max-width:768px) {
      .testimonials { grid-template-columns:1fr; max-width:400px; margin-left:auto; margin-right:auto; }
      .social-stats { grid-template-columns:repeat(3,1fr); }
    }

    /* ===================================================================
       BLOCO 7 — CTA CENTRAL / OFERTA
    =================================================================== */
    .offer-section {
      padding:var(--sp-16) 0;
      background:var(--void);
    }
    .offer-card {
      max-width:600px; margin:0 auto;
      background:var(--surface); border:1px solid rgba(255,120,84,0.2);
      border-radius:var(--r-2xl); overflow:hidden;
      text-align:center;
      animation:borderGlow 3s ease-in-out infinite;
      position:relative;
    }
    .offer-card-bar { height:4px; background:var(--grad-h); }
    .offer-card-inner { padding:var(--sp-12) var(--sp-8); }
    .offer-headline {
      font-family:var(--font-display); font-size:clamp(24px,5vw,36px);
      font-weight:800; letter-spacing:-0.04em; line-height:1.1;
      background:var(--grad); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
      margin-bottom:var(--sp-6);
    }
    .offer-benefits { text-align:left; max-width:420px; margin:0 auto var(--sp-6); }
    .offer-benefit {
      font-size:14px; color:var(--text-secondary); padding:5px 0;
      display:flex; align-items:flex-start; gap:var(--sp-2);
    }
    .offer-benefit .check { color:var(--success); flex-shrink:0; margin-top:2px; }
    .offer-price {
      font-family:var(--font-display); font-size:clamp(36px,7vw,52px); font-weight:800;
      letter-spacing:-0.03em; line-height:1;
      background:var(--grad); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
      margin-bottom:var(--sp-2);
    }
    .offer-price-sub { font-size:14px; color:var(--text-muted); margin-bottom:var(--sp-6); }
    .offer-trust {
      font-family:var(--font-mono); font-size:10px; letter-spacing:0.1em;
      color:var(--text-faint); margin-top:var(--sp-4);
    }

    /* ===================================================================
       BLOCO 8 — FAQ
    =================================================================== */
    .faq-section {
      padding:var(--sp-16) 0;
      background:var(--surface);
    }
    .faq-list { max-width:680px; margin:var(--sp-8) auto 0; }
    .faq-item {
      border-bottom:1px solid var(--border);
    }
    .faq-question {
      width:100%; background:none; border:none; cursor:pointer;
      display:flex; align-items:center; justify-content:space-between;
      padding:var(--sp-5) 0;
      font-family:var(--font-body); font-size:15px; font-weight:600;
      color:var(--text-primary); text-align:left;
      transition:color 0.2s;
    }
    .faq-question:hover { color:var(--t-orange); }
    .faq-arrow {
      font-size:18px; color:var(--text-muted);
      transition:transform 0.3s;
      flex-shrink:0; margin-left:var(--sp-4);
    }
    .faq-item.open .faq-arrow { transform:rotate(180deg); }
    .faq-answer {
      max-height:0; overflow:hidden;
      transition:max-height 0.4s ease;
    }
    .faq-answer-inner {
      padding:0 0 var(--sp-5);
      font-size:14px; color:var(--text-muted); line-height:1.7;
    }

    /* ===================================================================
       BLOCO 9 — FECHAMENTO EMOCIONAL
    =================================================================== */
    .closing-section {
      padding:var(--sp-20) 0;
      background:var(--void);
      position:relative; overflow:hidden;
      text-align:center;
    }
    .closing-blobs { position:absolute; inset:0; pointer-events:none; overflow:hidden; }
    .closing-blob {
      position:absolute; filter:blur(100px); opacity:0.2;
      animation:morphBlob 15s ease-in-out infinite, float 10s ease-in-out infinite alternate;
    }
    .closing-blob-1 { width:300px; height:300px; background:var(--t-pink); top:10%; left:-10%; }
    .closing-blob-2 { width:250px; height:250px; background:var(--t-orange); bottom:10%; right:-5%; animation-delay:-5s; }

    .closing-content { position:relative; z-index:1; max-width:600px; margin:0 auto; }
    .closing-headline {
      font-family:var(--font-display); font-size:clamp(28px,6vw,48px);
      font-weight:800; letter-spacing:-0.04em; line-height:1.05;
      background:var(--grad); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
      margin-bottom:var(--sp-6);
    }
    .closing-body {
      font-size:15px; color:var(--text-secondary); line-height:1.8;
      margin-bottom:var(--sp-8);
    }
    .closing-microcopy {
      font-family:var(--font-mono); font-size:11px; color:var(--text-muted);
      margin-top:var(--sp-4);
    }

    /* ===================================================================
       BLOCO 10 — FOOTER
    =================================================================== */
    .footer-bar { height:2px; background:var(--grad-h); }
    .footer {
      padding:var(--sp-10) 0 var(--sp-6);
      background:var(--surface);
      text-align:center;
    }
    .footer-logo {
      display:inline-flex; align-items:center; gap:var(--sp-2);
      margin-bottom:var(--sp-3);
    }
    .footer-logo-d {
      font-family:var(--font-display); font-size:20px; font-weight:800;
      letter-spacing:-0.04em;
      background:var(--grad); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
    }
    .footer-logo-ia {
      font-family:var(--font-display); font-size:20px; font-weight:300;
      letter-spacing:-0.03em;
      background:var(--grad); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
      opacity:0.55;
    }
    .footer-tagline {
      font-family:var(--font-mono); font-size:10px; letter-spacing:0.15em;
      text-transform:uppercase; color:var(--text-faint);
      margin-bottom:var(--sp-6);
    }
    .footer-legal {
      font-size:11px; color:var(--text-faint); line-height:1.7;
      max-width:640px; margin:0 auto var(--sp-4);
    }
    .footer-copy {
      font-size:11px; color:var(--text-faint); opacity:0.6;
    }

    /* ===================================================================
       MOBILE OVERRIDES
    =================================================================== */
    @media(max-width:768px) {
      .hero { min-height:auto; padding:var(--sp-12) 0 var(--sp-8); }
      .hero-stats { grid-template-columns:repeat(3,1fr); gap:var(--sp-2); }
      .hero-stat { padding:var(--sp-3); }
      .hero-stat-value { font-size:20px; }
      .hero-stat-label { font-size:9px; }
      .btn-cta { width:100%; padding:16px; font-size:14px; }
      .offer-card-inner { padding:var(--sp-8) var(--sp-5); }
    }
    @media(max-width:480px) {
      .container { padding:0 var(--sp-4); }
      .hero-headline { font-size:clamp(30px,9vw,42px); }
      .hero-sub { font-size:14px; }
      .hero-stats { gap:var(--sp-2); }
      .funnel-card-inner { padding:var(--sp-5); }
      .steps-grid { gap:var(--sp-4); }
    }

    /* Reduced motion */
    @media(prefers-reduced-motion:reduce) {
      *, *::before, *::after {
        animation-duration:0.01ms !important;
        animation-iteration-count:1 !important;
        transition-duration:0.01ms !important;
      }
      .trust-marquee { animation:none; }
    }
  </style>
</head>
<body>

<!-- ================================================================
     TOP BAR
================================================================ -->
<div class="top-bar"></div>

<!-- ================================================================
     BLOCO 1 — HERO
================================================================ -->
<section class="hero" id="topo">
  <div class="hero-blobs">
    <div class="hero-blob hero-blob-1"></div>
    <div class="hero-blob hero-blob-2"></div>
    <div class="hero-blob hero-blob-3"></div>
  </div>
  <div class="container hero-content">
    <div class="hero-badge">
      <span class="pulse-dot"></span>
      VERIFICAÇÃO REAL · RESULTADO EM MINUTOS
    </div>
    <h1 class="hero-headline">
      <span class="word">Sua</span> <span class="word">intuição</span> <span class="word">está</span> <span class="word">gritando?</span>
    </h1>
    <p class="hero-sub">Verifique perfis públicos no Tinder, Bumble, Hinge e Badoo. Resultado em minutos — sem que ninguém saiba.</p>
    <a href="#busca" class="btn-cta">QUERO SABER A VERDADE</a>
    <p class="hero-microcopy">&#128274; Busca anônima · Resultado em minutos · Sem cadastro</p>
    <div class="hero-stats">
      <div class="hero-stat">
        <div class="hero-stat-value" data-target="48000">0</div>
        <div class="hero-stat-label">Verificações realizadas</div>
      </div>
      <div class="hero-stat">
        <div class="hero-stat-value" data-target="4.9" data-suffix="&#11088;">0</div>
        <div class="hero-stat-label">Avaliação média</div>
      </div>
      <div class="hero-stat">
        <div class="hero-stat-value" data-target="2" data-suffix=" min" data-prefix="< ">0</div>
        <div class="hero-stat-label">Tempo de resultado</div>
      </div>
    </div>
  </div>
</section>

<!-- ================================================================
     BLOCO 2 — TRUST STRIP
================================================================ -->
<section class="trust-strip">
  <div class="trust-marquee" id="trustMarquee">
    <div class="trust-item"><span>&#128274;</span> Busca 100% Anônima</div>
    <div class="trust-item"><span>&#9889;</span> Resultado Imediato</div>
    <div class="trust-item"><span>&#9989;</span> Apenas Dados Públicos</div>
    <div class="trust-item"><span>&#128737;&#65039;</span> Seus Dados Protegidos</div>
    <div class="trust-item"><span>&#128179;</span> Pagamento Único</div>
    <div class="trust-item"><span>&#9878;&#65039;</span> Conforme LGPD</div>
    <div class="trust-item"><span>&#128241;</span> Tinder · Bumble · Hinge · Badoo</div>
    <!-- Duplicate for seamless marquee -->
    <div class="trust-item"><span>&#128274;</span> Busca 100% Anônima</div>
    <div class="trust-item"><span>&#9889;</span> Resultado Imediato</div>
    <div class="trust-item"><span>&#9989;</span> Apenas Dados Públicos</div>
    <div class="trust-item"><span>&#128737;&#65039;</span> Seus Dados Protegidos</div>
    <div class="trust-item"><span>&#128179;</span> Pagamento Único</div>
    <div class="trust-item"><span>&#9878;&#65039;</span> Conforme LGPD</div>
    <div class="trust-item"><span>&#128241;</span> Tinder · Bumble · Hinge · Badoo</div>
  </div>
</section>

<!-- ================================================================
     BLOCO 3 — FUNIL INTERATIVO
================================================================ -->
<section class="funnel-section" id="busca">
  <div class="container">
    <h2 class="funnel-headline">Tire sua dúvida agora.</h2>
    <div class="funnel-card">
      <div class="funnel-card-bar"></div>
      <div class="funnel-card-inner">

        <!-- STEP A: Form -->
        <div id="stepForm">
          <div class="form-title">Inicie sua verificação</div>
          <div class="form-subtitle">Preencha com os dados que você tem pra começar a busca.</div>
          <div class="input-group">
            <label class="input-label">Nome</label>
            <input class="input" type="text" id="inputName" placeholder="Ex: João Silva" required>
          </div>
          <div class="input-group">
            <label class="input-label">Idade aproximada</label>
            <input class="input" type="text" id="inputAge" placeholder="Ex: 32 anos">
          </div>
          <div class="input-group">
            <label class="input-label">Cidade</label>
            <input class="input" type="text" id="inputCity" placeholder="Ex: São Paulo">
          </div>
          <div class="input-group">
            <label class="input-label">Telefone (opcional — aumenta a precisão)</label>
            <input class="input" type="tel" id="inputPhone" placeholder="Ex: (11) 99999-9999">
            <span class="input-hint">Usado apenas para cruzar com dados das plataformas. Não armazenamos.</span>
          </div>
          <button class="btn-form" id="btnSearch" type="button">VERIFICAR AGORA</button>
        </div>

        <!-- STEP B: Search Animation -->
        <div id="stepSearch" class="search-anim">
          <div class="terminal-window">
            <div class="terminal-header">
              <div class="terminal-dot r"></div>
              <div class="terminal-dot y"></div>
              <div class="terminal-dot g"></div>
              <span class="terminal-title">detecta.ia — busca ativa</span>
            </div>
            <div class="terminal-body" id="terminalBody">
              <div class="terminal-line" data-msg="Iniciando protocolo de busca em redes públicas..."><span class="prefix">&gt;</span> <span class="msg"></span></div>
              <div class="terminal-line" data-msg="Analisando parâmetros de nome e idade..."><span class="prefix">&gt;</span> <span class="msg"></span></div>
              <div class="terminal-line" data-msg="Consultando bases de dados abertas de perfis..."><span class="prefix">&gt;</span> <span class="msg"></span></div>
              <div class="terminal-line" data-msg="Cruzando informações geolocalizadas em apps..."><span class="prefix">&gt;</span> <span class="msg"></span></div>
              <div class="terminal-line" data-msg="Verificando compatibilidade em múltiplas plataformas..."><span class="prefix">&gt;</span> <span class="msg"></span></div>
              <div class="terminal-line" data-msg="Filtrando resultados públicos para relevância..."><span class="prefix">&gt;</span> <span class="msg"></span></div>
              <div class="terminal-line" data-msg="Identificando possíveis correspondências de perfil..."><span class="prefix">&gt;</span> <span class="msg"></span></div>
              <div class="terminal-line success" data-msg="Busca concluída. Resultados prontos para visualização."><span class="prefix">&#10003;</span> <span class="msg"></span></div>
            </div>
          </div>
          <div class="progress-bar-wrap">
            <div class="progress-bar-fill" id="progressBar"></div>
          </div>
          <div class="progress-label" id="progressLabel">0%</div>
        </div>

        <!-- STEP C: Results -->
        <div id="stepResults" class="results-screen">
          <div class="results-headline">Perfis localizados. O relatório completo está a um clique.</div>

          <div class="result-card">
            <div class="result-card-blur">
              <div class="result-card-row">
                <div class="result-avatar">&#128100;</div>
                <div class="result-info">
                  <div class="result-name">Perfil encontrado #1</div>
                  <div class="result-app">TINDER · Ativo recentemente</div>
                </div>
                <span class="result-badge">Match</span>
              </div>
            </div>
            <div class="result-lock-overlay"><span class="lock-icon">&#128274;</span></div>
          </div>

          <div class="result-card">
            <div class="result-card-blur">
              <div class="result-card-row">
                <div class="result-avatar">&#128100;</div>
                <div class="result-info">
                  <div class="result-name">Perfil encontrado #2</div>
                  <div class="result-app">BUMBLE · Última atividade: 2 dias</div>
                </div>
                <span class="result-badge">Match</span>
              </div>
            </div>
            <div class="result-lock-overlay"><span class="lock-icon">&#128274;</span></div>
          </div>

          <div class="results-benefits">
            <div class="benefit-item"><span class="benefit-check">&#10003;</span> Foto de perfil completa e ampliada</div>
            <div class="benefit-item"><span class="benefit-check">&#10003;</span> Descrição do perfil e interesses declarados</div>
            <div class="benefit-item"><span class="benefit-check">&#10003;</span> Em quais apps o perfil foi encontrado</div>
            <div class="benefit-item"><span class="benefit-check">&#10003;</span> Última atividade registrada (se disponivel)</div>
            <div class="benefit-item"><span class="benefit-check">&#10003;</span> Relatório completo para download</div>
          </div>

          <button class="btn-unlock" type="button">DESBLOQUEAR MEU RELATÓRIO — R$37,90</button>
          <p class="unlock-microcopy">&#128274; Pagamento 100% seguro · Sem assinatura · Privacidade garantida</p>
        </div>

      </div>
    </div>
  </div>
</section>

<!-- ================================================================
     BLOCO 4 — AGITACAO DO PROBLEMA
================================================================ -->
<section class="agitation-section">
  <div class="container">
    <div class="section-label">POR QUE VOCÊ ESTÁ AQUI</div>
    <h2 class="agitation-headline">Você sente. E não é coisa<br>da sua cabeça.</h2>
    <p class="agitation-body">Aquele frio na barriga quando ele vira o celular pra baixo. A pontada no peito quando ele demora pra responder, mas tá online. As desculpas que não se encaixam. Você percebe cada detalhe, mesmo quando tenta se convencer de que é paranoia. Não é. Sua intuição existe por um motivo.</p>
    <p class="agitation-body">Milhares de mulheres passam por isso todos os dias. A dúvida que não deixa dormir, os cenários que a mente cria de madrugada, a angústia de não saber se está exagerando ou se está certa. Viver assim é exaustivo. Você merece clareza, merece saber a verdade para poder tomar suas próprias decisões — seja qual for o resultado.</p>
    <p class="agitation-body" style="margin-bottom:var(--sp-8);">Buscar respostas não é desconfiança sem fundamento. É autocuidado. É respeito por você mesma e pelo seu direito à transparência no relacionamento.</p>
    <div class="symptom-grid">
      <div class="symptom-card"><div class="symptom-icon">&#128241;</div><div class="symptom-text">Celular sempre virado pra baixo</div></div>
      <div class="symptom-card"><div class="symptom-icon">&#127769;</div><div class="symptom-text">Online de madrugada, sem explicação</div></div>
      <div class="symptom-card"><div class="symptom-icon">&#128566;</div><div class="symptom-text">Mais distante sem motivo aparente</div></div>
      <div class="symptom-card"><div class="symptom-icon">&#128373;&#65039;</div><div class="symptom-text">Rotina cheia de "segredinhos" novos</div></div>
    </div>
  </div>
</section>

<!-- ================================================================
     BLOCO 5 — COMO FUNCIONA
================================================================ -->
<section class="steps-section">
  <div class="container">
    <div class="section-label" style="justify-content:center;">SIMPLES E RÁPIDO</div>
    <h2 class="section-title" style="text-align:center; font-size:clamp(28px,5vw,44px);">Sua busca em 3 passos.</h2>
    <div class="steps-grid">
      <div class="step-card">
        <div class="step-number">01</div>
        <div class="step-icon">&#9997;&#65039;</div>
        <div class="step-title">PREENCHA OS DADOS</div>
        <div class="step-desc">Informe o nome, idade aproximada e cidade da pessoa que você quer verificar.</div>
      </div>
      <div class="step-card">
        <div class="step-number">02</div>
        <div class="step-icon">&#128269;</div>
        <div class="step-title">AGUARDE A BUSCA</div>
        <div class="step-desc">Nossa ferramenta verifica dados públicos em Tinder, Bumble, Hinge e Badoo automaticamente.</div>
      </div>
      <div class="step-card">
        <div class="step-number">03</div>
        <div class="step-icon">&#9989;</div>
        <div class="step-title">RECEBA O RESULTADO</div>
        <div class="step-desc">Acesse o relatório e descubra se existem perfis públicos correspondentes à sua busca.</div>
      </div>
    </div>
  </div>
</section>

<!-- ================================================================
     BLOCO 6 — PROVA SOCIAL
================================================================ -->
<section class="social-section">
  <div class="container">
    <div class="section-label" style="justify-content:center;">QUEM JÁ USOU</div>
    <h2 class="section-title" style="text-align:center; font-size:clamp(28px,5vw,44px); margin-bottom:var(--sp-8);">Histórias reais de quem buscou a verdade.</h2>

    <div class="social-stats">
      <div class="social-stat">
        <div class="social-stat-value" data-target="48000">0</div>
        <div class="social-stat-label">Verificações no Brasil</div>
      </div>
      <div class="social-stat">
        <div class="social-stat-value" data-target="92" data-suffix="%">0</div>
        <div class="social-stat-label">Das usuárias recomendam</div>
      </div>
      <div class="social-stat">
        <div class="social-stat-value" data-target="2" data-suffix=" min" data-prefix="~">0</div>
        <div class="social-stat-label">Tempo médio de resultado</div>
      </div>
    </div>

    <div class="testimonials">
      <div class="testimonial-card">
        <div class="testimonial-stars">&#11088;&#11088;&#11088;&#11088;&#11088;</div>
        <div class="testimonial-status found">Perfil encontrado</div>
        <p class="testimonial-text">"Meu namorado tava esquisito demais, celular grudado o tempo todo. Usei o Detecta.ia e em 3 minutos apareceu o perfil dele no Tinder. Doeu, mas que alívio ter a verdade na mão pra poder seguir em frente."</p>
        <div class="testimonial-author">Ana Paula, 31 anos</div>
        <div class="testimonial-location">Belo Horizonte, MG</div>
      </div>
      <div class="testimonial-card">
        <div class="testimonial-stars">&#11088;&#11088;&#11088;&#11088;&#11088;</div>
        <div class="testimonial-status clean">Nenhum perfil encontrado</div>
        <p class="testimonial-text">"Tava surtando achando que tinha outra. Fiz a busca morrendo de medo e... nada. Não encontrou perfil nenhum. O alívio que senti não tem preço. Minha paz de espírito voltou."</p>
        <div class="testimonial-author">Patrícia Santos, 27 anos</div>
        <div class="testimonial-location">São Paulo, SP</div>
      </div>
      <div class="testimonial-card">
        <div class="testimonial-stars">&#11088;&#11088;&#11088;&#11088;&#11088;</div>
        <div class="testimonial-status done">Verificação concluída</div>
        <p class="testimonial-text">"Processo super simples, fiz tudo pelo celular em poucos minutos. Ninguém desconfiou de nada. Recomendo pra quem quer a verdade sem complicação."</p>
        <div class="testimonial-author">Juliana Faria, 35 anos</div>
        <div class="testimonial-location">Curitiba, PR</div>
      </div>
    </div>

    <div class="app-chips">
      <div class="app-chip">&#128293; Tinder</div>
      <div class="app-chip">&#128155; Bumble</div>
      <div class="app-chip">&#128142; Hinge</div>
      <div class="app-chip">&#128156; Badoo</div>
    </div>
  </div>
</section>

<!-- ================================================================
     BLOCO 7 — CTA CENTRAL / OFERTA
================================================================ -->
<section class="offer-section">
  <div class="container">
    <div class="offer-card">
      <div class="offer-card-bar"></div>
      <div class="offer-card-inner">
        <h2 class="offer-headline">Chega de viver na sombra da dúvida.</h2>
        <div class="offer-benefits">
          <div class="offer-benefit"><span class="check">&#10003;</span> Verificação completa em Tinder, Bumble, Hinge e Badoo</div>
          <div class="offer-benefit"><span class="check">&#10003;</span> Relatório detalhado com fotos, bio e última atividade</div>
          <div class="offer-benefit"><span class="check">&#10003;</span> Processo 100% anônimo e discreto</div>
          <div class="offer-benefit"><span class="check">&#10003;</span> Resultado em minutos, direto no seu celular</div>
          <div class="offer-benefit"><span class="check">&#10003;</span> Pagamento único — sem assinatura, sem surpresas</div>
          <div class="offer-benefit"><span class="check">&#10003;</span> Conformidade total com a LGPD</div>
        </div>
        <div class="offer-price">R$37,90</div>
        <div class="offer-price-sub">Menos que uma pizza. O preço da sua paz de espírito.</div>
        <a href="#busca" class="btn-cta" style="width:100%;max-width:400px;">DESBLOQUEAR MEU RELATÓRIO — R$37,90</a>
        <p class="offer-trust">&#128274; Pagamento seguro · Cobrança única · Dados protegidos pela LGPD</p>
      </div>
    </div>
  </div>
</section>

<!-- ================================================================
     BLOCO 8 — FAQ
================================================================ -->
<section class="faq-section">
  <div class="container">
    <div class="section-label" style="justify-content:center;">DÚVIDAS FREQUENTES</div>
    <h2 class="section-title" style="text-align:center; font-size:clamp(28px,5vw,40px);">Perguntas frequentes</h2>
    <div class="faq-list">

      <div class="faq-item">
        <button class="faq-question" type="button">
          Como funciona exatamente?
          <span class="faq-arrow">&#8964;</span>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">O Detecta.ia busca perfis públicos em aplicativos de namoro como Tinder, Bumble, Hinge e Badoo. Você preenche as informações que já tem (nome, idade, cidade), e a ferramenta faz uma verificação automática em dados públicos. Em poucos minutos, você recebe um relatório detalhado com os resultados.</div>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" type="button">
          A busca é anônima?
          <span class="faq-arrow">&#8964;</span>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">Sim, 100%. O processo de verificação não envia nenhuma notificação ou alerta para ninguém. Sua busca é completamente confidencial do início ao fim. Sua privacidade é nossa prioridade absoluta.</div>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" type="button">
          R$37,90 é cobrança única ou assinatura?
          <span class="faq-arrow">&#8964;</span>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">É pagamento único. Você paga R$37,90 uma vez e recebe o relatório completo. Sem assinatura, sem cobrança recorrente, sem pegadinha. Transparência total.</div>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" type="button">
          É legal fazer essa verificação?
          <span class="faq-arrow">&#8964;</span>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">Sim, totalmente legal. O Detecta.ia trabalha exclusivamente com dados públicos disponíveis nas plataformas de namoro — informações que os próprios usuários escolheram tornar públicas. Estamos em total conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018) e demais legislações aplicáveis.</div>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" type="button">
          E se não encontrar nenhum perfil?
          <span class="faq-arrow">&#8964;</span>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">Se a busca não encontrar perfis, isso significa que não há presença pública nos aplicativos verificados. Essa resposta, por si só, já traz uma enorme paz de espírito. Saber que não há nada é tão valioso quanto qualquer outro resultado.</div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ================================================================
     BLOCO 9 — FECHAMENTO EMOCIONAL
================================================================ -->
<section class="closing-section">
  <div class="closing-blobs">
    <div class="closing-blob closing-blob-1"></div>
    <div class="closing-blob closing-blob-2"></div>
  </div>
  <div class="container closing-content">
    <div class="section-label" style="justify-content:center;">VOCÊ MERECE SABER</div>
    <h2 class="closing-headline">Permita-se ter a verdade.</h2>
    <p class="closing-body">Viver com a incerteza é um peso que ninguém deveria carregar sozinha. A dúvida corrói por dentro, rouba seu sono, sua energia, sua paz. E muitas vezes, a única forma de seguir em frente é encarar a realidade de frente.</p>
    <p class="closing-body">Buscar a verdade não é fraqueza. É coragem. É respeito por você mesma e pelo seu direito de tomar decisões informadas sobre a sua própria vida. Seja qual for o resultado, você vai sair dessa com mais clareza e mais força.</p>
    <p class="closing-body">Dê a si mesma essa chance. Você merece a paz de espírito.</p>
    <a href="#busca" class="btn-cta">QUERO SABER A VERDADE</a>
    <p class="closing-microcopy">Sua verdade, sua liberdade. &#128274; Busca anônima e segura.</p>
  </div>
</section>

<!-- ================================================================
     BLOCO 10 — FOOTER
================================================================ -->
<div class="footer-bar"></div>
<footer class="footer">
  <div class="container">
    <div class="footer-logo">
      <svg width="24" height="28" viewBox="0 0 32 36" fill="none"><defs><linearGradient id="ft-g" x1="2" y1="35" x2="30" y2="1" gradientUnits="userSpaceOnUse"><stop stop-color="#FF7854"/><stop offset="1" stop-color="#FD267A"/></linearGradient></defs><path d="M12 1C12 1 19.5 8.5 20.5 15.5C21.5 21 18.5 25.5 16 27.5C17.5 22.5 14.5 19 13.5 15.5C13.5 15.5 15.5 24 9.5 28C5.5 31 2 28.5 2 25C2 18 7 13 9.5 10.5C9 15 11.5 18 11.5 18C10 12 11.5 4.5 12 1Z" fill="url(#ft-g)"/><circle cx="24" cy="28.5" r="7" stroke="url(#ft-g)" stroke-width="1.8" fill="none"/><path d="M29 33.5L32.5 37" stroke="#FD267A" stroke-width="2" stroke-linecap="round"/><path d="M21 28.5L23 31L27.5 26" stroke="#FD267A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span class="footer-logo-d">Detecta</span><span class="footer-logo-ia">.ia</span>
    </div>
    <p class="footer-tagline">TRANSPARÊNCIA EM RELACIONAMENTOS</p>
    <p class="footer-legal">O Detecta.ia é uma ferramenta de busca e verificação de dados públicos disponíveis em aplicativos de namoro. Não acessamos informações privadas, mensagens, localização ou dados protegidos de dispositivos pessoais. Todo o processo é anônimo e está em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018) e demais legislações aplicáveis. O Detecta.ia não possui afiliação com Tinder, Bumble, Hinge, Badoo ou qualquer outra plataforma de namoro mencionada.</p>
    <p class="footer-copy">&copy; 2026 Detecta.ia. Todos os direitos reservados.</p>
  </div>
</footer>

<!-- ================================================================
     JAVASCRIPT
================================================================ -->
<script>
(function(){
  'use strict';

  /* ── Smooth scroll for all CTAs ── */
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      e.preventDefault();
      var target = document.querySelector(a.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth'});
    });
  });

  /* ── Parallax on hero blobs ── */
  window.addEventListener('mousemove', function(e){
    var mx = (e.clientX / window.innerWidth - 0.5) * 2;
    var my = (e.clientY / window.innerHeight - 0.5) * 2;
    document.querySelectorAll('.hero-blob').forEach(function(b, i){
      var speed = (i + 1) * 15;
      b.style.transform = 'translate(' + (mx * speed) + 'px, ' + (my * speed) + 'px)';
    });
  });

  /* ── Flashlight effect on glass cards ── */
  document.querySelectorAll('.step-card,.testimonial-card').forEach(function(card){
    card.addEventListener('mousemove', function(e){
      var r = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', (e.clientX - r.left) + 'px');
      card.style.setProperty('--mouse-y', (e.clientY - r.top) + 'px');
    });
  });

  /* ── 3D tilt on step cards ── */
  document.querySelectorAll('.step-card').forEach(function(card){
    card.addEventListener('mousemove', function(e){
      var r = card.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5;
      var y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = 'perspective(800px) rotateY(' + (x*6) + 'deg) rotateX(' + (-y*6) + 'deg) translateY(-3px)';
    });
    card.addEventListener('mouseleave', function(){
      card.style.transform = '';
      card.style.transition = 'transform 0.5s cubic-bezier(0.4,0,0.2,1)';
      setTimeout(function(){ card.style.transition = ''; }, 500);
    });
  });

  /* ── Animated counters ── */
  function animateCounter(el, target, prefix, suffix){
    prefix = prefix || '';
    suffix = suffix || '';
    var current = 0;
    var steps = 40;
    var step = target / steps;
    var count = 0;
    var timer = setInterval(function(){
      count++;
      current += step;
      if(count >= steps){ current = target; clearInterval(timer); }
      if(target >= 1000){
        el.textContent = prefix + Math.floor(current/1000) + 'K+';
      } else if(Number.isInteger(target)){
        el.textContent = prefix + Math.floor(current) + suffix;
      } else {
        el.textContent = prefix + current.toFixed(1) + suffix;
      }
    }, 30);
  }

  var counterObs = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        var el = entry.target;
        var target = parseFloat(el.getAttribute('data-target'));
        var suffix = el.getAttribute('data-suffix') || '';
        var prefix = el.getAttribute('data-prefix') || '';
        animateCounter(el, target, prefix, suffix);
        counterObs.unobserve(el);
      }
    });
  }, {threshold:0.5});

  document.querySelectorAll('[data-target]').forEach(function(el){
    counterObs.observe(el);
  });

  /* ── IntersectionObserver for staggered animations ── */
  var animSel = '.symptom-card,.step-card,.testimonial-card,.social-stat,.offer-card';
  var animObs = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        var siblings = entry.target.parentElement.querySelectorAll(animSel);
        var idx = Array.from(siblings).indexOf(entry.target);
        entry.target.style.animationDelay = (idx * 0.1) + 's';
        entry.target.style.animation = 'animationIn 0.7s cubic-bezier(0.16,1,0.3,1) forwards';
        animObs.unobserve(entry.target);
      }
    });
  }, {threshold:0.1});
  document.querySelectorAll(animSel).forEach(function(el){
    el.style.opacity = '0';
    animObs.observe(el);
  });

  /* ── FAQ Accordion ── */
  document.querySelectorAll('.faq-question').forEach(function(btn){
    btn.addEventListener('click', function(){
      var item = btn.parentElement;
      var answer = item.querySelector('.faq-answer');
      var inner = answer.querySelector('.faq-answer-inner');
      var isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item.open').forEach(function(openItem){
        openItem.classList.remove('open');
        openItem.querySelector('.faq-answer').style.maxHeight = '0';
      });

      if(!isOpen){
        item.classList.add('open');
        answer.style.maxHeight = inner.scrollHeight + 'px';
      }
    });
  });

  /* ── FUNNEL STATE MACHINE ── */
  var stepForm = document.getElementById('stepForm');
  var stepSearch = document.getElementById('stepSearch');
  var stepResults = document.getElementById('stepResults');
  var btnSearch = document.getElementById('btnSearch');
  var progressBar = document.getElementById('progressBar');
  var progressLabel = document.getElementById('progressLabel');
  var terminalLines = document.querySelectorAll('#terminalBody .terminal-line');

  var searchMessages = [
    'Iniciando protocolo de busca em redes públicas...',
    'Analisando parâmetros de nome e idade...',
    'Consultando bases de dados abertas de perfis...',
    'Cruzando informações geolocalizadas em apps...',
    'Verificando compatibilidade em múltiplas plataformas...',
    'Filtrando resultados públicos para relevância...',
    'Identificando possíveis correspondências de perfil...',
    'Busca concluída. Resultados prontos para visualização.'
  ];

  btnSearch.addEventListener('click', function(){
    var name = document.getElementById('inputName').value.trim();
    if(!name){
      document.getElementById('inputName').style.borderColor = 'var(--error)';
      document.getElementById('inputName').focus();
      return;
    }

    // Transition to Step B
    stepForm.style.display = 'none';
    stepSearch.classList.add('active');

    var totalDuration = 13000; // 13 seconds
    var msgInterval = totalDuration / searchMessages.length;
    var startTime = Date.now();

    // Progress bar animation
    var progressTimer = setInterval(function(){
      var elapsed = Date.now() - startTime;
      var pct = Math.min(100, Math.round((elapsed / totalDuration) * 100));
      progressBar.style.width = pct + '%';
      progressLabel.textContent = pct + '%';
      if(pct >= 100) clearInterval(progressTimer);
    }, 100);

    // Typing effect for terminal messages
    searchMessages.forEach(function(msg, i){
      setTimeout(function(){
        var line = terminalLines[i];
        line.classList.add('visible');
        var msgSpan = line.querySelector('.msg');
        var chars = msg.split('');
        var charIdx = 0;
        var typeTimer = setInterval(function(){
          if(charIdx < chars.length){
            msgSpan.textContent += chars[charIdx];
            charIdx++;
          } else {
            clearInterval(typeTimer);
          }
        }, 18);
      }, i * msgInterval);
    });

    // Transition to Step C
    setTimeout(function(){
      stepSearch.classList.remove('active');
      stepSearch.style.display = 'none';
      stepResults.classList.add('active');
    }, totalDuration + 500);
  });

  // Reset input border on focus
  document.getElementById('inputName').addEventListener('focus', function(){
    this.style.borderColor = '';
  });

})();
</script>
</body>
</html>
`;
    return new Response(html, {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
        'cache-control': 'public, max-age=3600',
      },
    });
  },
};
