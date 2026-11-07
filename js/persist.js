/* Remember swaps, ticked items and sound settings on this device */
(() => {
  const KEY = 'family-feast-v1';
  const planId = () => { const p = dash.data('plan').data; return p.length ? p[0].date + ':' + p.length : ''; };
  const read = () => { try { return JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) { return null; } };
  const save = () => {
    const mp = window.mp, A = window.mpAudio;
    if (!mp || !mp.plan) return;
    try {
      localStorage.setItem(KEY, JSON.stringify({ planId: planId(), plan: mp.plan, ticked: [...mp.ticked], hideTicked: mp.hideTicked, musicOn: A ? A.musicOn : true, sfxOn: A ? A.sfxOn : true }));
    } catch (e) { /* private browsing: nothing saved */ }
  };
  window.addEventListener('dash-ready', () => {
    if (!window.mpEnsurePlan()) return;
    const s = read();
    if (s && s.planId === planId()) {
      const recipes = dash.data('recipes').data;
      const byId = Object.fromEntries(recipes.map((r) => [r.id, r]));
      Object.entries(s.plan || {}).forEach(([slot, id]) => {
        const def = byId[window.mp.defaults[slot]];
        if (slot in window.mp.plan && byId[id] && !(def && def.pinned)) window.mp.plan[slot] = id;
      });
      (s.ticked || []).forEach((t) => window.mp.ticked.add(t));
      window.mp.hideTicked = !!s.hideTicked;
      document.querySelectorAll('[data-hide-ticked]').forEach((b) => b.setAttribute('aria-pressed', String(window.mp.hideTicked)));
    }
    if (s && window.mpAudio) {
      if (s.musicOn === false) window.mpAudio.musicOn = false;
      if (s.sfxOn === false) window.mpAudio.sfxOn = false;
      if (window.mpAudio.onchange) window.mpAudio.onchange();
    }
    window.mpRedraw();
  });
  const redraw = window.mpRedraw;
  window.mpRedraw = () => { redraw(); save(); };
  document.addEventListener('change', () => setTimeout(save, 0));
  document.addEventListener('click', () => setTimeout(save, 0));
  document.addEventListener('visibilitychange', () => { if (document.hidden) save(); });
})();
