import{l as e,o as t,r as n,s as r,t as i,u as a}from"./cart-BRs5hpzH.js";var o=matchMedia(`(prefers-reduced-motion: reduce)`).matches,s=new URLSearchParams(location.search).get(`p`),c=r[s]||r[`gin-50`],l=c.kind===`gin`,u=`${c.name} ${c.format}`;document.title=`${u} · Gincana`,document.getElementById(`crumb-name`).textContent=u,document.querySelectorAll(`[data-nav]`).forEach(e=>e.toggleAttribute(`aria-current`,e.dataset.nav===c.sku));var d=[[`Ginepro`,`ginepro`],[`Erbaceo`,`melissa, salvia sclarea`],[`Agrumato`,`bergamotto, pompelmo`],[`Speziato`,`coriandolo, cardamomo, pepe`],[`Floreale`,`calendula, fava di tonka`],[`Minerale`,`sale rosa`]],f=l?{eyebrow:`Perfect serve`,title:[`Il Gin Tonic`,`Gincana`],img:`shop/pd-serve.webp`,alt:`Gin tonic Gincana nel calice, con ginepro, scorza di limone e rosmarino`,steps:[[`Un calice colmo di ghiaccio`,`Cubetti grandi e asciutti: si sciolgono piano e non annacquano il drink.`],[`5 cl di Gincana`,`Versato direttamente sul ghiaccio, per raffreddarlo prima della tonica.`],[`15 cl di tonica ben fredda`,`Lungo il manico del cucchiaio, così le bollicine restano dove devono stare.`],[`Limone e rosmarino`,`Una scorza di limone, un rametto di rosmarino e tre bacche di ginepro. Niente di più.`]]}:{eyebrow:`Abbinamenti`,title:[`Sul`,`tagliere`],img:`shop/tagliere.webp`,alt:`Tagliere di salumi e formaggi`,steps:[[`Formaggi stagionati`,`Grana, pecorino, erborinati: la dolcezza intensa bilancia il sale.`],[`Salumi`,`Sul tagliere dell'aperitivo, accanto al crudo e al salame nostrano.`],[`Carni`,`Con bolliti e arrosti, dove di solito si mette la mostarda.`],[`Con un Gin Tonic`,`Il barattolo vicino alla bottiglia: l'aperitivo è già pronto.`]]},p=[[`Dove nasce Gincana?`,`Sul Lago d'Iseo, il Sebino: è l'idea di tre amici e della ricetta che li ha stupiti più delle altre. Il gin è ispirato al lago ed è distillato e imbottigliato da una distilleria partner a Meda, in Brianza.`],[`Che differenza c'è tra 20 e 50 cl?`,`Nessuna nel bicchiere: stesso gin, stesse 12 botaniche, stessi 43% vol. Il 20 cl è perfetto per assaggiarlo o regalarlo, il 50 cl è la bottiglia da tenere a casa.`],[`Come si conserva una bottiglia aperta?`,`In piedi, al riparo da luce e calore, con il tappo ben chiuso. Il gin non scade: i profumi restano al meglio per circa un anno dall'apertura.`],[`Posso spedirlo come regalo?`,`Sì. Al checkout indichi l'indirizzo di chi lo riceve e, se vuoi, un messaggio da mettere nel pacco. Il prezzo non compare mai nella spedizione.`],[`Spedite anche all'estero?`,`Per ora spediamo in tutta Italia. Per altri Paesi scrivici a info@gincana.it e troviamo una soluzione.`]],m=(e,t=``)=>e.map((t,n)=>`<span class="rv-line" style="--d:${n}"><span>${n===e.length-1?`<i class="script">${t}</i>`:t}</span></span>`).join(``),h=[[`Il gin`,`${c.desc.map(e=>`<p>${e}</p>`).join(``)}<dl class="pd-specs">${c.specs.map(([e,t])=>`<div><dt>${e}</dt><dd>${t}</dd></div>`).join(``)}</dl>`],[`Botaniche`,`<p>Dodici botaniche intorno al ginepro, divise in sei famiglie: è così che il sorso passa dal secco al fresco, fino al finale balsamico.</p><dl class="fam">${d.map(([e,t])=>`<div><dt>${e}</dt><dd>${t}</dd></div>`).join(``)}</dl>`]],g=[[`Il prodotto`,`${c.desc.map(e=>`<p>${e}</p>`).join(``)}<dl class="pd-specs">${c.specs.map(([e,t])=>`<div><dt>${e}</dt><dd>${t}</dd></div>`).join(``)}</dl>`],[`Abbinamenti`,`<p>Nata per stare in tavola con il gin: formaggi stagionati ed erborinati, taglieri di salumi, bolliti e arrosti. Provala con un Gin Tonic Gincana accanto.</p>`]],_=[`Spedizione e resi`,`<p>Spediamo in tutta Italia con corriere tracciato: <b>Standard €6,90</b> (2–4 giorni lavorativi) o <b>Express €12,90</b> (24–48 ore). Sopra <b>€150</b> la spedizione standard è gratuita.</p><p>Le bottiglie viaggiano in imballi protetti. Alla consegna il corriere può chiedere un documento: l'alcol si consegna solo a maggiorenni. Hai 14 giorni dal ricevimento per il recesso, su prodotti integri e sigillati.</p>`],v=[...l?h:g,_],y=c.spin?[c.images[0],{spin:c.spin,src:`${c.spin.dir}00.webp`,alt:`Gincana 50 cl a 360°: trascina per far girare la bottiglia`},...c.images.slice(1)]:c.images,b=document.getElementById(`pd-root`);b.innerHTML=`
<section class="pd" aria-labelledby="pd-title">
  <div class="gallery" data-reveal>
    <ul class="g-thumbs" aria-label="Foto del prodotto">
      ${y.map((e,t)=>`<li><button type="button" data-g="${t}" aria-label="${e.spin?`Bottiglia a 360°`:`Foto ${t+1} di ${y.length}`}" ${t?``:`aria-current="true"`} ${e.spin?`data-spin-thumb`:``}><img src="${e.src.replace(/\.webp$/,`-t.webp`)}" alt="" loading="lazy" />${e.spin?`<b class="t360" aria-hidden="true">360°</b>`:``}</button></li>`).join(``)}
    </ul>
    <div class="g-stage" aria-live="polite">
      ${y.map((e,t)=>e.spin?`<figure class="v360" data-spin><img src="${e.src}" alt="${e.alt}" draggable="false" loading="lazy" /><p class="v360-hint" aria-hidden="true"><svg viewBox="0 0 40 12"><path d="M6 2 1 6l5 4M34 2l5 4-5 4M1 6h38"/></svg><span>Trascina per girare</span></p></figure>`:`<figure ${t?``:`data-on`}><img src="${e.src}" alt="${e.alt}" ${t?`loading="lazy"`:`fetchpriority="high"`} /></figure>`).join(``)}
      <p class="g-count" aria-hidden="true"><b>01</b> / ${String(y.length).padStart(2,`0`)}</p>
      <div class="g-nav"><button type="button" class="g-arrow" data-step="-1" aria-label="Foto precedente"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></button><button type="button" class="g-arrow" data-step="1" aria-label="Foto successiva"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></button></div>
      <span class="g-bar" aria-hidden="true"><i></i></span>
    </div>
  </div>

  <div class="info">
    <p class="s-eyebrow" data-reveal>${l?`Premium London Dry Gin · ${c.format}`:`La linea gastronomica · ${c.format}`}</p>
    <h1 id="pd-title" data-reveal-lines>${m(c.title)}</h1>
    <div class="price-row" data-reveal style="--d:2"><span class="price">${e(c.price)}</span><span class="unit">${c.unit} · IVA inclusa</span></div>
    <p class="pitch" data-reveal style="--d:3">${c.line}</p>
    ${l?`<div data-reveal style="--d:4"><span class="opt-label">Formato</span>
      <div class="formats">${[`gin-20`,`gin-50`].map(t=>{let n=r[t];return`<a href="prodotto.html?p=${t}" ${t===c.sku?`aria-current="page"`:``}><b>${n.format}</b><span>${e(n.price)}</span></a>`}).join(``)}</div></div>`:``}
    <div data-reveal style="--d:5"><span class="opt-label" id="qty-l">Quantità</span>
      <div class="buy">
        <div class="gc-stepper" role="group" aria-labelledby="qty-l">
          <button type="button" data-q="-1" aria-label="Togli uno">−</button>
          <input id="qty" type="number" inputmode="numeric" min="1" max="24" value="1" aria-label="Quantità" />
          <button type="button" data-q="1" aria-label="Aggiungi uno">+</button>
        </div>
        <button type="button" class="btn btn--solid magnetic buy-btn" data-add="${c.sku}" data-qty-from="#qty"><span>Aggiungi al carrello · <b class="buy-total">${e(c.price)}</b></span></button>
      </div>
    </div>
    <ul class="assure" data-reveal style="--d:6">
      <li><span><b>Spedizione gratuita</b> sopra €150, altrimenti da €6,90.</span></li>
      <li><span><b>Consegna in 2–4 giorni</b> lavorativi in tutta Italia.</span></li>
      <li><span><b>Pagamento sicuro</b>: carte, PayPal, Klarna, Apple Pay, Google Pay e bonifico.</span></li>
      ${l?`<li><span>Vendita riservata ai <b>maggiori di 18 anni</b>. Bevi responsabilmente.</span></li>`:``}
    </ul>
    <div class="tabs" data-reveal style="--d:7">
      <div class="tablist" role="tablist" aria-label="Dettagli">
        ${v.map(([e],t)=>`<button type="button" role="tab" id="tab-${t}" aria-controls="tp-${t}" aria-selected="${t===0}" ${t?`tabindex="-1"`:``}>${e}</button>`).join(``)}
        <span class="tab-ink" aria-hidden="true"></span>
      </div>
      ${v.map(([,e],t)=>`<div class="tabpanel" role="tabpanel" id="tp-${t}" aria-labelledby="tab-${t}" ${t?`hidden`:``}>${e}</div>`).join(``)}
    </div>
  </div>
</section>

${l?`<section class="look" aria-labelledby="look-t">
  <div class="look-head">
    <p class="s-eyebrow" data-reveal>Da vicino</p>
    <h2 class="s-h2" id="look-t" data-reveal-lines>${m([`Fatto per stare`,`in compagnia`])}</h2>
    <p class="look-lead" data-reveal style="--d:2">Vetro spesso, tappo in legno, etichetta verde e oro. E dentro dodici botaniche intorno al ginepro: un gin da tenere sul tavolo, non in fondo alla credenza.</p>
  </div>
  <figure class="look-a" data-look style="--sp:-6"><div class="look-img"><img src="shop/pd-dettaglio.webp" alt="Dettaglio del tappo in legno e dell'etichetta Gincana" loading="lazy" /></div><figcaption><span>01</span>Tappo in legno, sigillo di carta</figcaption></figure>
  <figure class="look-b" data-look style="--sp:4"><div class="look-img"><img src="shop/pd-botaniche.webp" alt="Le botaniche di Gincana intorno alla bottiglia" loading="lazy" /></div><figcaption><span>02</span>Dodici botaniche, il ginepro al centro</figcaption></figure>
  <figure class="look-c" data-look style="--sp:-3"><div class="look-img"><img src="shop/pd-aperitivo.webp" alt="Aperitivo tra amici con Gincana" loading="lazy" /></div><figcaption><span>03</span>L'aperitivo, tra amici</figcaption></figure>
</section>`:``}

<section class="serve" aria-labelledby="serve-t">
  <div class="serve-img"><img src="${f.img}" alt="${f.alt}" loading="lazy" /></div>
  <div class="serve-text">
    <p class="s-eyebrow" data-reveal>${f.eyebrow}</p>
    <h2 class="s-h2" id="serve-t" data-reveal-lines>${m(f.title)}</h2>
    <ol class="steps-serve">${f.steps.map(([e,t],n)=>`<li data-reveal style="--d:${n}"><div><b>${e}</b><span>${t}</span></div></li>`).join(``)}</ol>
  </div>
</section>

<section class="faq" aria-labelledby="faq-t">
  <div><p class="s-eyebrow" data-reveal>Domande</p><h2 class="s-h2" id="faq-t" data-reveal-lines>${m([`Prima di`,`ordinare`])}</h2></div>
  <div class="faq-list">${p.map(([e,t],n)=>`<details data-reveal style="--d:${n}"><summary>${e}<i aria-hidden="true"></i></summary><div class="ans"><p>${t}</p></div></details>`).join(``)}</div>
</section>

<section class="related" aria-labelledby="rel-t">
  <p class="s-eyebrow" data-reveal>Lo shop</p>
  <h2 class="s-h2" id="rel-t" data-reveal-lines>${m([`Completa il`,`viaggio`])}</h2>
  <div class="rel-grid">
    ${t.map((t,n)=>{let i=r[t],a=i.images[1]?.src;return`
      <article class="card" ${t===c.sku?`data-current`:``} data-reveal style="--d:${n}">
        <a class="card-img" href="prodotto.html?p=${t}" aria-label="${i.name} ${i.format}"><img src="${i.images[0].src}" alt="" loading="lazy" />${a?`<img src="${a}" alt="" loading="lazy" />`:``}</a>
        <div class="card-row"><h3><a href="prodotto.html?p=${t}">${i.name}</a> <small>${i.format}</small></h3><span class="c-price">${e(i.price)}</span><p class="c-line">${i.line}</p></div>
        <button type="button" class="btn btn--ghost c-add magnetic" data-add="${t}"><span>Aggiungi</span></button>
      </article>`}).join(``)}
  </div>
</section>

<div class="sticky-buy" aria-hidden="true">
  <img src="${a(c)}" alt="" />
  <p>${c.name}<small>${c.format} · ${e(c.price)}</small></p>
  <button type="button" class="btn btn--solid" data-add="${c.sku}" data-qty-from="#qty" tabindex="-1"><span>Aggiungi</span></button>
</div>`,i(),n();var x=[...b.querySelectorAll(`.g-stage figure`)],S=[...b.querySelectorAll(`.g-thumbs button`)],C=b.querySelector(`.g-count b`),w=0,T=function(e){if(e=(e+x.length)%x.length,e===w)return;let t=x[w];t.removeAttribute(`data-on`),t.setAttribute(`data-leaving`,``),x[e].setAttribute(`data-on`,``),setTimeout(()=>t.removeAttribute(`data-leaving`),o?0:1100),S.forEach((t,n)=>t.toggleAttribute(`aria-current`,n===e)),C.textContent=String(e+1).padStart(2,`0`),w=e};S.forEach(e=>e.addEventListener(`click`,()=>T(Number(e.dataset.g))));var E=b.querySelector(`.g-stage`),D=b.querySelector(`.g-bar i`),O=()=>{D.style.transform=`scaleX(${(w+1)/x.length})`};O();var k=T;T=e=>{k(e),O(),A(),x[w].hasAttribute(`data-spin`)&&N?.start()},b.querySelectorAll(`.g-arrow`).forEach(e=>e.addEventListener(`click`,t=>{t.stopPropagation(),T(w+Number(e.dataset.step))}));function A(){x.forEach(e=>{let t=e.querySelector(`img`);t.style.transform=``,t.style.transformOrigin=``}),E.removeAttribute(`data-zoom`)}var j=e=>{if(x[w].hasAttribute(`data-spin`))return;let t=E.getBoundingClientRect(),n=x[w].querySelector(`img`);n.style.transformOrigin=`${((e.clientX-t.left)/t.width*100).toFixed(1)}% ${((e.clientY-t.top)/t.height*100).toFixed(1)}%`,n.style.transform=`scale(2)`};E.addEventListener(`pointermove`,e=>{E.hasAttribute(`data-zoom`)&&e.pointerType===`mouse`&&j(e)}),E.addEventListener(`pointerleave`,A);var M=null;E.addEventListener(`pointerdown`,e=>{M=e.clientX}),E.addEventListener(`pointerup`,e=>{if(M==null||e.target.closest(`.g-arrow`)||x[w].hasAttribute(`data-spin`)){M=null;return}let t=e.clientX-M;M=null,Math.abs(t)>40?T(w+(t<0?1:-1)):E.hasAttribute(`data-zoom`)?A():o||(E.setAttribute(`data-zoom`,``),j(e))}),addEventListener(`keydown`,e=>{document.documentElement.hasAttribute(`data-overlay`)||e.target.closest(`input, textarea`)||(e.key===`ArrowRight`&&!e.target.closest(`[role="tab"]`)&&T(w+1),e.key===`ArrowLeft`&&!e.target.closest(`[role="tab"]`)&&T(w-1))});var N=null;{let e=b.querySelector(`.v360`);if(e){let{dir:t,frames:n}=c.spin,r=e.querySelector(`img`),i=Array.from({length:n},(e,n)=>`${t}${String(n).padStart(2,`0`)}.webp`),a=[],s=!1,l=0,u=0,d=null,f=!1,p=0,m=-1,h=()=>{s||(s=!0,i.forEach((e,t)=>{let n=new Image;n.decoding=`async`,n.src=e,a[t]=n}))},g=()=>{let e=(Math.round(l)%n+n)%n;e!==m&&(!a[e]||a[e].complete)&&(m=e,r.src=i[e])},_=()=>{p=0,e.hasAttribute(`data-on`)&&(d||(Math.abs(u)>.01?(l+=u,u*=.94):!f&&!o&&(l+=.16)),g(),p=requestAnimationFrame(_))},v=()=>{h(),p||=requestAnimationFrame(_)},y=()=>n/Math.max(240,e.clientWidth*1.4);e.addEventListener(`pointerdown`,t=>{t.button||(f=!0,u=0,d={x:t.clientX,t:performance.now(),id:t.pointerId},e.setPointerCapture?.(t.pointerId),e.setAttribute(`data-drag`,``),e.setAttribute(`data-touched`,``),v())}),e.addEventListener(`pointermove`,e=>{if(!d||e.pointerId!==d.id)return;let t=performance.now(),n=-(e.clientX-d.x)*y();l+=n,u=u*.5+n/Math.max(8,t-d.t)*16*.5,d.x=e.clientX,d.t=t});let b=()=>{d&&(d=null,e.removeAttribute(`data-drag`),u=Math.max(-3,Math.min(3,u)))};e.addEventListener(`pointerup`,b),e.addEventListener(`pointercancel`,b),N={start:v},new IntersectionObserver((e,t)=>{e[0].isIntersecting&&(setTimeout(h,1200),t.disconnect())}).observe(e)}}var P=[...b.querySelectorAll(`[data-look]`)];if(P.length){let e=new IntersectionObserver(t=>t.forEach(t=>{t.isIntersecting&&(t.target.setAttribute(`data-in`,``),e.unobserve(t.target))}),{rootMargin:`0px 0px -12% 0px`});if(P.forEach(t=>e.observe(t)),!o){let e=()=>{for(let e of P){let t=e.getBoundingClientRect();if(t.bottom<-200||t.top>innerHeight+200)continue;let n=(t.top+t.height/2-innerHeight/2)/innerHeight;e.querySelector(`img`).style.transform=`translate3d(0, ${(n*Number(e.style.getPropertyValue(`--sp`))).toFixed(2)}%, 0) scale(1.12)`}requestAnimationFrame(e)};requestAnimationFrame(e)}}var F=b.querySelector(`#qty`),I=b.querySelector(`.buy-total`),L=e=>Math.max(1,Math.min(24,Math.round(Number(e)||1)));function R(t){F.value=L(t),I.textContent=e(c.price*Number(F.value))}b.querySelectorAll(`[data-q]`).forEach(e=>e.addEventListener(`click`,()=>R(Number(F.value)+Number(e.dataset.q)))),F.addEventListener(`change`,()=>R(F.value));var z=[...b.querySelectorAll(`[role="tab"]`)],B=b.querySelector(`.tab-ink`);function V(){let e=z.find(e=>e.getAttribute(`aria-selected`)===`true`);e&&(B.style.transform=`translateX(${e.offsetLeft}px) scaleX(${e.offsetWidth/100})`)}function H(e,t){z.forEach((t,n)=>{let r=n===e;t.setAttribute(`aria-selected`,String(r)),t.tabIndex=r?0:-1,b.querySelector(`#tp-${n}`).hidden=!r}),t&&z[e].focus(),V()}z.forEach((e,t)=>{e.addEventListener(`click`,()=>H(t)),e.addEventListener(`keydown`,e=>{e.key===`ArrowRight`&&H((t+1)%z.length,!0),e.key===`ArrowLeft`&&H((t-1+z.length)%z.length,!0)})}),addEventListener(`resize`,V),document.fonts?.ready.then(V),V(),b.querySelectorAll(`.faq details`).forEach(e=>e.addEventListener(`toggle`,()=>{e.open&&b.querySelectorAll(`.faq details`).forEach(t=>{t!==e&&(t.open=!1)})}));var U=b.querySelector(`.serve-img img`);if(!o){let e=()=>{let t=U.parentElement.getBoundingClientRect();if(t.bottom>0&&t.top<innerHeight){let e=(t.top+t.height/2-innerHeight/2)/innerHeight;U.style.transform=`translate3d(0, ${(e*-7).toFixed(2)}%, 0)`}requestAnimationFrame(e)};requestAnimationFrame(e)}var W=b.querySelector(`.sticky-buy`),G=b.querySelector(`.buy-btn`),K=document.querySelector(`.s-footer`),q=!0,J=!1,Y=()=>{let e=!q&&!J;W.toggleAttribute(`data-show`,e),W.setAttribute(`aria-hidden`,String(!e)),W.querySelector(`button`).tabIndex=e?0:-1};new IntersectionObserver(([e])=>{q=e.isIntersecting||e.boundingClientRect.top>innerHeight,Y()}).observe(G),new IntersectionObserver(([e])=>{J=e.isIntersecting,Y()}).observe(K);