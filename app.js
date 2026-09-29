const $ = (s) => document.querySelector(s);
const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// صورة تلقائية عندما لا تضع صورة حقيقية
function art(title, color, i = 0) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='${color}'/><stop offset='1' stop-color='#0b0d17'/></linearGradient></defs><rect width='800' height='450' fill='url(#g)'/><circle cx='${620 - i * 110}' cy='${120 + i * 50}' r='${90 + i * 25}' fill='#fff' opacity='.09'/><rect x='40' y='60' width='120' height='8' rx='4' fill='#fff' opacity='.3'/><text x='40' y='410' font-family='sans-serif' font-size='36' font-weight='700' fill='#fff' opacity='.9'>${esc(title)}</text></svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}
const img = (src, g, i = 0) => src || art(g.title, g.accent, i);

function layout(home) {
  const p = home ? "" : "index.html";
  $("#header").innerHTML = `<div class="wrap nav">
    <a class="brand" href="${p || "#"}"><span class="logo">${esc(SITE.logo)}</span>${esc(SITE.name)}</a>
    <button class="burger" aria-label="Menu">☰</button>
    <nav class="links"><a href="${p}#games">My Games</a><a href="${p}#about">About Me</a><a href="${p}#projects">My Projects</a><a href="${p}#contact">Contact</a></nav></div>`;
  $("#footer").innerHTML = `<div class="wrap">© ${new Date().getFullYear()} ${esc(SITE.name)} — Made with ♥ for players</div>`;
  const links = $(".links");
  $(".burger").onclick = () => links.classList.toggle("open");
  links.onclick = () => links.classList.remove("open");
}

function reveal() {
  const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))), { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}

function socials() {
  return SITE.socials.map((s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a>`).join("");
}

function home() {
  document.title = `${SITE.name} — ${SITE.tagline}`;
  $("#hero").innerHTML = `<small>${esc(SITE.tagline)}</small><h1>${esc(SITE.hero)}</h1>
    <p>${esc(SITE.about)}</p><a class="btn p" href="#games">Play My Games</a> <a class="btn" href="#contact">Contact Me</a>`;
  $("#gamesGrid").innerHTML = GAMES.map((g) => `<article class="card reveal" style="--c:${g.accent}">
    <a class="img" href="game.html?id=${g.id}"><img src="${img(g.cover, g)}" alt="${esc(g.title)}" loading="lazy"></a>
    <div class="body"><span class="tag">${esc(g.genre)}</span><h3>${esc(g.title)}</h3><p>${esc(g.short)}</p>
    <a class="btn p" href="game.html?id=${g.id}">Play Game</a></div></article>`).join("");
  $("#aboutText").innerHTML = `<p>${esc(SITE.about)}</p><div class="chips">${SITE.skills.map((s) => `<span>${esc(s)}</span>`).join("")}</div>`;
  $("#stats").innerHTML = SITE.stats.map((s) => `<div class="stat"><b class="grad">${esc(s[0])}</b><span>${esc(s[1])}</span></div>`).join("");
  $("#projectsGrid").innerHTML = PROJECTS.map((p) => `<a class="card reveal" href="${esc(p.link)}"><div class="body"><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p><span class="tag">View project →</span></div></a>`).join("");
  $("#contactBox").innerHTML = `<h2>Contact</h2><p style="color:var(--mute)">Have an idea, a collab or a question? Let's talk.</p><br>
    <a class="btn p" href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a><div class="socials">${socials()}</div>`;
}

function gamePage() {
  const id = new URLSearchParams(location.search).get("id");
  const g = GAMES.find((x) => x.id === id) || GAMES[0];
  document.title = `${g.title} — ${SITE.name}`;
  const d = SITE.developer;
  const shots = (g.screenshots || []).map((s, i) => `<img src="${img(s, g, i + 1)}" alt="${esc(g.title)} screenshot ${i + 1}" loading="lazy">`).join("");
  $("#game").style.setProperty("--c", g.accent);
  $("#game").innerHTML = `<div class="wrap">
    <a class="back" href="index.html#games">← Back to games</a>
    <div class="g-hero"><div><span class="tag">${esc(g.genre)}</span><h1>${esc(g.title)}</h1><p>${esc(g.short)}</p>
      <a class="btn p" href="${esc(g.playUrl)}" target="_blank" rel="noopener">${esc(g.playLabel)}</a></div>
      <img src="${img(g.cover, g)}" alt="${esc(g.title)}"></div>
    <section class="reveal"><h2>About the Game</h2><p style="color:var(--mute);max-width:75ch">${esc(g.description)}</p></section>
    <section class="reveal"><h2>Gameplay Features</h2><ul class="feat">${g.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul></section>
    <section class="reveal"><h2>Screenshots</h2><div class="shots">${shots}</div></section>
    ${g.video ? `<section class="reveal"><h2>Gameplay Video</h2><div class="video"><iframe src="${esc(g.video)}" allowfullscreen loading="lazy" title="Gameplay"></iframe></div></section>` : ""}
    <section class="reveal"><h2>Info</h2><div class="info">
      <div><h3>Platform</h3><p>${esc(g.platform)}</p><p>Status: ${esc(g.status)} · ${esc(g.release)}</p></div>
      <div><h3>Developer</h3><p>${esc(d.name)} — ${esc(d.role)}</p><p>${esc(d.location)}</p></div></div></section></div>`;
}

const isGame = document.body.dataset.page === "game";
layout(!isGame);
isGame ? gamePage() : home();
reveal();
