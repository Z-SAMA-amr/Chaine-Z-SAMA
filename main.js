/* ============ Icônes ============ */
const S = 'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';
const ICON = {
  youtube:   `<svg viewBox="0 0 24 24" ${S}><rect x="2.5" y="5.5" width="19" height="13" rx="3.5"/><path d="M10 9.2v5.6l4.8-2.8z" fill="currentColor"/></svg>`,
  tiktok:    `<svg viewBox="0 0 24 24" ${S}><path d="M14 3v11.2a3.7 3.7 0 1 1-3.7-3.7"/><path d="M14 3c.3 2.4 1.9 4.1 4.5 4.3"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" ${S}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".8" fill="currentColor"/></svg>`,
  twitch:    `<svg viewBox="0 0 24 24" ${S}><path d="M4 3h16v11l-4 4h-4l-3 3v-3H4z"/><path d="M12 7.5v4M16 7.5v4"/></svg>`,
  discord:   `<svg viewBox="0 0 24 24" ${S}><path d="M5 6.5c2-1 4-1.5 7-1.5s5 .5 7 1.5c1.4 3 2 6 1.8 10.5-1.6 1.1-3.200 1.800-4.800 2.200l-1-2c-1 .3-2 .4-3 .4s-2-.1-3-.4l-1 2c-1.600-.4-3.200-1.100-4.800-2.200C3 12.500 3.600 9.500 5 6.500z"/><circle cx="9" cy="12" r="1.2" fill="currentColor"/><circle cx="15" cy="12" r="1.2" fill="currentColor"/></svg>`
};
const PLAY = '<svg viewBox="0 0 24 24"><path d="M6 4l14 8-14 8z" fill="currentColor"/></svg>';
const $ = (s, r=document) => r.querySelector(s);
const byId = id => CONFIG.platforms.find(x => x.id === id);
const fmt = n => n.toLocaleString("fr-FR");

/* ============ Rendu ============ */
(function render(){
  const B = CONFIG.brand, P = CONFIG.platforms;
  $("#loaderBrand").textContent = B;
  $("#logoName").textContent = B;
  $("#logoMark").textContent = B[0];
  $("#avInit").textContent = B[0];
  $("#heroTitle").innerHTML = `<em>${B}</em><span>CRÉATEUR</span>`;
  $("#heroLead").textContent = CONFIG.tagline;
  $("#copy").textContent = `© ${new Date().getFullYear()} ${B}. TOUS DROITS RÉSERVÉS.`;
  $("#mail").textContent = CONFIG.email;
  $("#tz").textContent = CONFIG.tzLabel;
  if (CONFIG.demo) $("#notice").hidden = false;

  const links = [["plateformes","PLATEFORMES"],["videos","VIDÉOS"],["contenu","CONTENU"],["apropos","À PROPOS"],["planning","PLANNING"],["collab","COLLAB"],["faq","FAQ"]];
  $("#navLinks").innerHTML = links.map(l => `<a href="#${l[0]}" data-sec="${l[0]}">${l[1]}</a>`).join("");

  $("#heroChips").innerHTML = P.slice(0,4).map(p => `<a class="chip-link" href="${p.url}" target="_blank" rel="noopener">${ICON[p.id]}${p.name}</a>`).join("");

  const max = Math.max(...P.map(p => p.followers));
  $("#hudRows").innerHTML = P.map(p => `<div class="row"><span>${p.name.toUpperCase()}</span><div class="bar"><i style="width:${Math.max(6, p.followers/max*100)}%"></i></div><b>${fmt(p.followers)}</b></div>`).join("");

  $("#platGrid").innerHTML = P.map(p => `
    <article class="panel plat">
      <div class="plat-top"><div class="ico">${ICON[p.id]}</div><div><h3>${p.name}</h3><div class="handle">${p.handle}</div></div></div>
      <div class="big">${fmt(p.followers)}<small>${p.unit}</small></div>
      <p>${p.desc}</p>
      <a class="link" href="${p.url}" target="_blank" rel="noopener">[ ${p.cta} ]</a>
    </article>`).join("");

  const srcs = ["tout", ...new Set(CONFIG.videos.map(v => v.p))];
  $("#filters").innerHTML = srcs.map((s,i) => `<button type="button" data-f="${s}" aria-pressed="${i===0}">${s==="tout" ? "Tout" : byId(s).name}</button>`).join("");
  $("#vidGrid").innerHTML = CONFIG.videos.map((v,i) => `
    <a class="vid" data-p="${v.p}" href="${byId(v.p).url}" target="_blank" rel="noopener">
      <div class="thumb" style="--h:${v.h}">
        <span class="src">${byId(v.p).name}</span><span class="play">${PLAY}</span>
        <span class="ep">EP.${String(CONFIG.videos.length - i).padStart(2,"0")}</span><span class="dur">${v.dur}</span>
      </div>
      <h3>${v.t}</h3>
      <div class="meta">${v.views} // ${v.when}</div>
    </a>`).join("");

  $("#pilGrid").innerHTML = CONFIG.pillars.map(p => `
    <article class="panel pil">
      <div class="tag">FORMAT // ${p.n}.0</div>
      <div class="num">${p.n}</div>
      <h3>${p.title}</h3><p>${p.text}</p>
      <div class="kv">${p.kv.map(k => `<div><span>${k[0]}</span><b>${k[1]}</b></div>`).join("")}</div>
    </article>`).join("");

  $("#aboutTitle").textContent = CONFIG.about.title;
  $("#aboutText").innerHTML = CONFIG.about.text.map(t => `<p>${t}</p>`).join("");
  $("#badges").innerHTML = CONFIG.about.badges.map(b => `<div class="badge"><b>${b[0]}</b><span>${b[1]}</span></div>`).join("");
  $("#aud").innerHTML = `<h3>AUDIENCE // RÉPARTITION</h3>` + CONFIG.audience.map(a => `
    <div class="row"><span>${a[0].toUpperCase()}</span><div class="bar"><i style="width:${a[1]}%"></i></div><b>${a[1]}%</b></div>`).join("");

  const days = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
  $("#sched").innerHTML = CONFIG.schedule.map(s => `
    <div class="slot" data-d="${s.d}"><span class="day">${days[s.d]}</span><span class="time">${s.t}</span><span class="what">${s.title}</span><span class="pill">${s.p}</span></div>`).join("");

  $("#colGrid").innerHTML = CONFIG.collab.map(c => `
    <article class="panel col"><h3>${c.title}</h3><p>${c.text}</p><ul>${c.list.map(l => `<li>${l}</li>`).join("")}</ul></article>`).join("");

  $("#comGrid").innerHTML = CONFIG.comments.map(c => `
    <article class="panel com"><p>« ${c.t} »</p><footer><span>${c.who} // ${c.where}</span>${CONFIG.demo ? '<span class="ex">EXEMPLE</span>' : ""}</footer></article>`).join("");

  $("#faqList").innerHTML = CONFIG.faq.map((f,i) => `
    <details><summary><span class="n">${String(i+1).padStart(2,"0")}</span><span>${f[0]}</span><span class="x">+</span></summary><div class="ans">${f[1]}</div></details>`).join("");

  $("#socials").innerHTML = P.map(p => `
    <a href="${p.url}" target="_blank" rel="noopener">${ICON[p.id]}<span>${p.name}</span><em>${p.handle}</em></a>`).join("");
})();

/* ============ Loader ============ */
(function loader(){
  const el = $("#loader"), bar = $("#loaderBar"), pct = $("#loaderPct"), t0 = performance.now(), dur = 1100;
  function step(t){
    const p = Math.min(1, (t - t0) / dur);
    bar.style.width = (p * 100) + "%"; pct.textContent = Math.round(p * 100);
    if (p < 1) requestAnimationFrame(step); else setTimeout(() => el.classList.add("done"), 150);
  }
  requestAnimationFrame(step);
})();

/* ============ Navigation, progression, scroll-spy ============ */
(function nav(){
  const navEl = $("#nav"), burger = $("#burger"), prog = $("#progress"), pct = $("#scrollPct");
  burger.addEventListener("click", () => {
    const o = navEl.classList.toggle("open");
    burger.setAttribute("aria-expanded", o); burger.textContent = o ? "✕" : "☰";
  });
  navEl.addEventListener("click", e => { if (e.target.closest(".nav-links a")) { navEl.classList.remove("open"); burger.setAttribute("aria-expanded","false"); burger.textContent = "☰"; } });
  function onScroll(){
    const h = document.documentElement.scrollHeight - innerHeight;
    const p = h > 0 ? Math.min(100, Math.max(0, scrollY / h * 100)) : 0;
    prog.style.width = p + "%"; pct.textContent = Math.round(p) + "%";
  }
  addEventListener("scroll", onScroll, { passive:true }); onScroll();
  if ("IntersectionObserver" in window){
    const links = [...document.querySelectorAll(".nav-links a")];
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) links.forEach(a => a.classList.toggle("active", a.dataset.sec === e.target.id));
    }), { rootMargin:"-45% 0px -50% 0px" });
    links.forEach(a => { const s = document.getElementById(a.dataset.sec); if (s) io.observe(s); });
  }
})();

/* ============ Filtres vidéos ============ */
$("#filters").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  const f = b.dataset.f;
  document.querySelectorAll("#filters button").forEach(x => x.setAttribute("aria-pressed", x === b));
  document.querySelectorAll("#vidGrid .vid").forEach(v => { v.hidden = !(f === "tout" || v.dataset.p === f); });
});

/* ============ Planning + compte à rebours ============ */
(function schedule(){
  const OFF = CONFIG.utcOffset * 3600e3;
  const nowL = () => new Date(Date.now() + OFF);
  const today = nowL().getUTCDay();
  document.querySelectorAll(".slot").forEach(s => {
    if (+s.dataset.d === today){ s.classList.add("today"); s.querySelector(".pill").textContent = "Aujourd'hui // " + s.querySelector(".pill").textContent; }
  });
  function next(){
    const n = nowL(); let best = null;
    CONFIG.schedule.forEach(ev => {
      const [h,m] = ev.t.split(":").map(Number);
      for (let add = 0; add < 8; add++){
        const c = new Date(Date.UTC(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate() + add, h, m));
        if (c.getUTCDay() === ev.d && c > n){ if (!best || c < best.at) best = { at:c, ev }; break; }
      }
    });
    return best && { ms: best.at - n, ev: best.ev };
  }
  const out = $("#count"), title = $("#nextTitle"), z = v => String(v).padStart(2,"0");
  function tick(){
    const nx = next(); if (!nx){ out.textContent = "--"; return; }
    let s = Math.floor(nx.ms / 1000);
    const d = Math.floor(s / 86400); s -= d * 86400;
    const h = Math.floor(s / 3600); s -= h * 3600;
    const m = Math.floor(s / 60); s -= m * 60;
    out.innerHTML = (d ? `<small>${d}J</small>` : "") + `${z(h)}:${z(m)}:${z(s)}`;
    title.textContent = `${nx.ev.p} // ${nx.ev.title}`;
  }
  tick(); setInterval(tick, 1000);
})();

/* ============ Contact : copier l'e-mail ============ */
$("#copyMail").addEventListener("click", () => {
  const note = $("#copied"), mail = $("#mail");
  const fallback = () => { const r = document.createRange(); r.selectNodeContents(mail); const s = getSelection(); s.removeAllRanges(); s.addRange(r); note.textContent = "Adresse sélectionnée : copie-la avec Ctrl+C"; };
  if (navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(CONFIG.email).then(() => { note.textContent = "Adresse copiée"; }).catch(fallback);
  } else fallback();
});
$("#noticeClose").addEventListener("click", () => { $("#notice").hidden = true; });