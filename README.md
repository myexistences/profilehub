# 🌐 ProfileHub

> **Your digital calling card – elegant, animated, and 100 % yours.**

[Live Preview »](https://profilehub-la2b.vercel.app/)   
[![GitHub Stars](https://img.shields.io/github/stars/rabbanyhmm/profilehub?style=flat-square)](https://github.com/rabbanyhmm/profilehub/stargazers)  [![GitHub Forks](https://img.shields.io/github/forks/rabbanyhmm/profilehub?style=flat-square)](https://github.com/rabbanyhmm/profilehub/fork)

---

## ✨ Highlights

| Visual                          | Interaction                                          |
| ------------------------------- | ---------------------------------------------------- |
| 🎥 Full‑screen background video | 🔊 Custom volume slider & mute toggle                |
| ❄️ Animated snow overlays       | 🔗 One‑click social links (YouTube, GitHub, Discord) |
| 🖼️ Avatar + animated username  | 🌍 Location badge                                    |
| 📝 Status / quote line          | 📈 Page‑view counter (static placeholder)            |

All assets are **mobile‑responsive**, lightweight, and free of external frameworks.

---

## 🖼️ Preview

![ProfileHub Screenshot](https://i.imgur.com/PcTori4.png)

---

## 📂 Directory Layout

```
profilehub/
├── index.html         # Main page (HTML5)
├── styles.css         # All custom styles & animations
├── background.mp4     # Replace with your own video (≤ 20 MB for GitHub)
├── assets/            # Optional folder for icons / images
└── README.md          # You are here
```

---

## 📥 Quick‑Start

### 1 · Clone / Download

```bash
# SSH
git clone git@github.com:rabbanyhmm/profilehub.git
# – or HTTPS –
# git clone https://github.com/rabbanyhmm/profilehub.git
cd profilehub
```

> Alternatively, [download the ZIP](https://github.com/rabbanyhmm/profilehub/archive/refs/heads/main.zip) and extract.

### 2 · Personalise

Open **`index.html`** in your favourite editor and change:

| Section                         | What to Edit                       |
| ------------------------------- | ---------------------------------- |
| `<img class="avatar" …>`        | Link to your avatar (PNG/GIF/WebP) |
| `<h1 class="username">`         | Your display name                  |
| `<h3 class="description">`      | Quote / tagline                    |
| `<span class="location">`       | Location text                      |
| `.social-links > a`             | Your profile URLs                  |
| `<source src="background.mp4">` | Your own background video          |

Optional: tweak colours, fonts, or animations inside **`styles.css`**.

### 3 · Preview Locally

Simply double‑click **`index.html`** – no build tools needed.

### 4 · Deploy Publicly *(1‑click)*

| Platform             | Instructions                                      |
| -------------------- | ------------------------------------------------- |
| **GitHub Pages**     | Settings → Pages → Branch **`main /root`** → Save |
| **Vercel**           | `Import Project` → Framework `Other` → Deploy     |
| **Netlify**          | `New site from Git` → pick repo → Deploy          |
| **Cloudflare Pages** | Connect GitHub → Select repo → Deploy             |

> The site is fully static – any free static host will work.

---

## 🛡️ Copyright & Personal Store

This template is provided **for personal portfolios and non‑commercial sites only**. Commercial resale, distribution in paid bundles, or inclusion in a **"template store"** is **not permitted** without written consent.

Add your own copyright footer by inserting the following snippet before `</body>`:

```html
<footer class="copyright">
  © <span id="year"></span> Your Name – All Rights Reserved
</footer>
<script>
  document.getElementById('year').textContent = new Date().getFullYear();
</script>
```

> Remove or modify the notice only for **personal use**. If you wish to offer ProfileHub in a commercial product, please open an issue to discuss licensing.

---

## ♻️ Attribution

Created and maintained by **[existence](https://github.com/rabbanyhmm)**. Feel free to fork & customise – a ★ or PR is always appreciated!

---

## 📜 License

Released under the **MIT License** for personal, open‑source projects. See [`LICENSE`](LICENSE).

---
