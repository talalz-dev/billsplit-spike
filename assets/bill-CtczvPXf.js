(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`spike-shared-style`,t=`
:root {
  --color-bg: #f3f4f8;
  --color-surface: #ffffff;
  --color-border: #e6e8ef;
  --color-text: #1c1f26;
  --color-text-muted: #6b7080;
  --color-text-faint: #9aa0ae;
  --color-success: #1f9d6a;
  --color-success-soft: #e3f5ec;
  --color-discount: #2f8f6b;
  --color-skeleton: #e4e6ee;
  --p1: #e7ecff; --p2: #fde9ee; --p3: #e3f5ec; --p4: #fff2dc;
  --font-sans: system-ui, -apple-system, "Segoe UI", "SF Arabic", "Noto Sans Arabic", Tahoma, sans-serif;
  --text-xs: 0.75rem; --text-sm: 0.875rem; --text-base: 1rem; --text-lg: 1.125rem;
  --text-xl: 1.25rem; --text-amount: 1.75rem;
  --space-2: 8px; --space-3: 12px; --space-4: 16px; --space-5: 20px;
  --radius-md: 14px; --radius-lg: 20px; --radius-full: 9999px;
  --shadow-sm: 0 1px 2px rgba(28, 31, 38, 0.05);
  --shadow-md: 0 6px 16px rgba(28, 31, 38, 0.07);
  --ease: cubic-bezier(0.2, 0.8, 0.2, 1);
}
* { box-sizing: border-box; }
body { margin: 0; background: var(--color-bg); color: var(--color-text); font-family: var(--font-sans); }
.topbar { position: sticky; top: 0; z-index: 5; padding: 14px 16px 12px;
  background: color-mix(in srgb, var(--color-bg) 86%, transparent);
  backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid color-mix(in srgb, var(--color-border) 70%, transparent); }
.topbar-row { display: flex; align-items: center; justify-content: space-between; margin: 8px 0; }
.page-title { font-weight: 700; font-size: var(--text-lg); }
.recon { display: flex; align-items: center; gap: 8px; background: var(--color-success-soft); color: #155e43;
  border-radius: var(--radius-md); padding: 9px 12px; font-size: var(--text-sm); }
.ready-pill { display: inline-flex; align-items: center; gap: 6px; font-size: var(--text-xs); font-weight: 600;
  padding: 5px 10px; border-radius: var(--radius-full); background: var(--color-skeleton); color: var(--color-text-muted); }
.ready-pill.ready { background: var(--color-success); color: #fff; }
.banner-wrap { display: grid; grid-template-rows: 1fr; transition: grid-template-rows .5s var(--ease); }
.banner-wrap.collapsed { grid-template-rows: 0fr; }
.banner-wrap > div { overflow: hidden; }
.banner { display: flex; align-items: center; justify-content: center; gap: 10px; background: var(--color-success);
  color: #fff; font-weight: 700; font-size: var(--text-xl); padding: 16px; border-radius: var(--radius-lg);
  margin-bottom: 10px; }
.skel { background: linear-gradient(90deg, var(--color-skeleton) 0%, #eef0f5 50%, var(--color-skeleton) 100%);
  background-size: 200% 100%; animation: shimmer 1.2s infinite; border-radius: var(--radius-lg); }
@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
main { padding: 16px; display: grid; gap: 12px; max-width: 480px; margin: 0 auto; }
.card { background: var(--color-surface); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); padding: var(--space-4); }
.card.skel-card { height: 76px; }
.person-name { font-weight: 700; font-size: var(--text-base); }
.person-amount { font-weight: 750; font-size: var(--text-amount); font-variant-numeric: tabular-nums; margin: 4px 0 8px; }
.line-row { display: flex; justify-content: space-between; font-size: var(--text-sm); color: var(--color-text-muted);
  padding: 4px 0; border-top: 1px solid var(--color-border); }
.line-row:first-of-type { border-top: none; }
.line-charge.discount { color: var(--color-discount); }
.summary-card .summary-row { display: flex; justify-content: space-between; font-size: var(--text-sm); padding: 4px 0; }
.summary-card .summary-row.total { font-weight: 700; border-top: 1px solid var(--color-border); margin-top: 6px; padding-top: 8px; }
.summary-card.skel { height: 160px; }
.failure { padding: 24px; color: #7a2320; background: #fdeceb; margin: 16px; border-radius: var(--radius-md); }
`;function n(){if(document.getElementById(e))return;let n=document.createElement(`style`);n.id=e,n.textContent=t,document.head.appendChild(n)}function r(e){let t=document.createElement(`bdi`);return t.dir=`ltr`,t.textContent=e,t}function i(e,t,n){let r=document.getElementById(e);return r||(r=document.createElement(t),r.id=e,n.appendChild(r)),r}function a(){n(),document.body.dataset.billReady=`false`;let e=i(`topbar`,`div`,document.body);e.className=`topbar`,e.innerHTML=``;let t=document.createElement(`div`);t.className=`banner-wrap collapsed`,t.id=`banner-wrap`;let r=document.createElement(`div`),a=document.createElement(`div`);a.className=`banner`,a.id=`banner`,r.appendChild(a),t.appendChild(r),e.appendChild(t);let o=document.createElement(`div`);o.className=`topbar-row`;let s=document.createElement(`span`);s.className=`page-title`,s.textContent=`Bill split`;let c=document.createElement(`span`);c.className=`ready-pill`,c.id=`ready-pill`,c.textContent=`Calculating…`,o.appendChild(s),o.appendChild(c),e.appendChild(o);let l=document.createElement(`div`);l.className=`recon skel`,l.id=`recon`,l.style.height=`36px`,e.appendChild(l);let u=i(`results`,`main`,document.body);u.innerHTML=``;let d=document.createElement(`section`);d.className=`people`,d.id=`people`;for(let e=0;e<4;e++){let e=document.createElement(`div`);e.className=`card skel skel-card`,d.appendChild(e)}u.appendChild(d);let f=document.createElement(`section`);f.className=`card summary-card skel`,f.id=`summary`,u.appendChild(f);let p=i(`failure`,`div`,document.body);p.hidden=!0}function o(e){n();let t=document.getElementById(`people`);t.innerHTML=``;for(let n of e.people){let e=document.createElement(`div`);e.className=`card person-card`;let i=document.createElement(`div`);i.className=`person-name`,i.textContent=n.name,e.appendChild(i);let a=document.createElement(`div`);a.className=`person-amount`,a.appendChild(r(n.amount)),e.appendChild(a);for(let t of n.lines){let n=document.createElement(`div`);n.className=t.kind===`charge`&&t.label===`Discount`?`line-row line-charge discount`:`line-row`;let i=document.createElement(`span`);i.className=`line-left`,i.textContent=t.detail?`${t.label} · ${t.detail}`:t.label;let a=document.createElement(`span`);a.className=`line-amount`,a.appendChild(r(t.amount)),n.appendChild(i),n.appendChild(a),e.appendChild(n)}t.appendChild(e)}let i=document.getElementById(`summary`);i.className=`card summary-card`,i.innerHTML=``;let a=document.createElement(`div`);a.className=`person-name`,a.textContent=`Bill summary`,i.appendChild(a);for(let t of e.summary){let e=document.createElement(`div`);e.className=t.label===`Total`?`summary-row total`:`summary-row`;let n=document.createElement(`span`);n.textContent=t.rate?`${t.label} (${t.rate})`:t.label;let a=document.createElement(`span`);a.appendChild(r(t.amount)),e.appendChild(n),e.appendChild(a),i.appendChild(e)}let o=document.getElementById(`recon`);o.className=`recon`,o.style.height=``,o.innerHTML=``;let s=document.createElement(`span`);s.textContent=`✓`;let c=document.createElement(`span`);c.textContent=e.reconciliation,o.appendChild(s),o.appendChild(c);let l=performance.now();window.__billReadyMs=l,window.spikeOutcome=e;let u=document.getElementById(`banner`),d=document.createElement(`span`);d.textContent=`✓`;let f=document.createElement(`span`);f.textContent=`Ready in `,f.appendChild(r((l/1e3).toFixed(1))),f.append(` s`),u.innerHTML=``,u.appendChild(d),u.appendChild(f);let p=document.getElementById(`banner-wrap`);p.classList.remove(`collapsed`);let m=document.getElementById(`ready-pill`);m.classList.add(`ready`),m.textContent=`✓ Ready · ${(l/1e3).toFixed(1)} s`,document.body.dataset.billReady=`true`,window.setTimeout(()=>{p.classList.add(`collapsed`)},2600)}function s(e){n();let t=document.getElementById(`failure`);t.hidden=!1,t.className=`failure`,t.textContent=e;let r=document.getElementById(`results`);r&&(r.hidden=!0)}var c=`{
  "people": ["Ana", "Ben", "Cy", "Dee"],
  "items": [
    {"name": "Burger", "price": 12.10, "people": ["Ana"]},
    {"name": "Pizza", "price": 10.00, "people": ["Ana", "Ben", "Cy"]}
  ],
  "service_percent": 10,
  "tax_percent": 8,
  "discount_percent": 15
}
`;export{a as i,s as n,o as r,c as t};