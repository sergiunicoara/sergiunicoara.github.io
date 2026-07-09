/* Fundaluri SVG detaliate, tematice, cu animații — alese automat după cuvinte-cheie
   din versetele afișate pe pagina curentă. */

const SCENES = [
  {
    id: "templu",
    keywords: ["altar", "jertfă", "jertfele", "jertfa", "templu", "chivot", "preot", "preoți",
               "arderi", "sfânt", "slujbă", "Silo", "Casa Domnului", "tămâie", "efodul", "tabernacol"],
    svg: `<svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg">
<defs><style>
  .s-smoke{animation:s-smokeUp 2.8s ease-out infinite;}
  .s-smoke:nth-child(2){animation-delay:.9s;}
  .s-smoke:nth-child(3){animation-delay:1.8s;}
  .s-flame{animation:s-flick .7s ease-in-out infinite alternate;transform-origin:200px 292px;}
  @keyframes s-smokeUp{0%{transform:translate(0,0);opacity:.7}100%{transform:translate(0,-80px) scaleX(2);opacity:0}}
  @keyframes s-flick{from{transform:scaleX(.85) scaleY(1.1)}to{transform:scaleX(1.15) scaleY(.9)}}
</style></defs>
<!-- ground -->
<ellipse cx="200" cy="460" rx="200" ry="18" fill="currentColor" opacity=".25"/>
<!-- steps -->
<rect x="20" y="440" width="360" height="12" rx="3" fill="currentColor" opacity=".7"/>
<rect x="45" y="428" width="310" height="12" rx="3" fill="currentColor" opacity=".6"/>
<!-- temple body -->
<rect x="72" y="220" width="256" height="210" fill="currentColor" opacity=".25"/>
<!-- pediment / roof -->
<polygon points="200,95 40,220 360,220" fill="currentColor" opacity=".85"/>
<circle cx="200" cy="95" r="14" fill="currentColor"/>
<!-- cornice -->
<rect x="40" y="216" width="320" height="10" fill="currentColor" opacity=".8"/>
<!-- 6 columns -->
<rect x="78"  y="226" width="22" height="202" rx="3" fill="currentColor" opacity=".88"/>
<rect x="126" y="226" width="22" height="202" rx="3" fill="currentColor" opacity=".88"/>
<rect x="174" y="226" width="22" height="202" rx="3" fill="currentColor" opacity=".88"/>
<rect x="207" y="226" width="22" height="202" rx="3" fill="currentColor" opacity=".88"/>
<rect x="255" y="226" width="22" height="202" rx="3" fill="currentColor" opacity=".88"/>
<rect x="303" y="226" width="22" height="202" rx="3" fill="currentColor" opacity=".88"/>
<!-- door -->
<rect x="172" y="332" width="56" height="96" rx="4" fill="currentColor" opacity=".12"/>
<rect x="172" y="332" width="56" height="96" rx="4" fill="none" stroke="currentColor" stroke-width="3" opacity=".5"/>
<!-- altar -->
<rect x="160" y="296" width="80" height="36" rx="4" fill="currentColor" opacity=".85"/>
<rect x="148" y="328" width="104" height="10" rx="3" fill="currentColor" opacity=".65"/>
<!-- flame -->
<g class="s-flame">
  <ellipse cx="200" cy="284" rx="20" ry="26" fill="currentColor" opacity=".9"/>
  <ellipse cx="200" cy="268" rx="12" ry="17" fill="currentColor" opacity=".75"/>
  <ellipse cx="200" cy="256" rx="6"  ry="10" fill="currentColor" opacity=".5"/>
</g>
<!-- smoke -->
<ellipse class="s-smoke" cx="200" cy="250" rx="8"  ry="13" fill="currentColor" opacity=".5"/>
<ellipse class="s-smoke" cx="194" cy="244" rx="6"  ry="10" fill="currentColor" opacity=".4"/>
<ellipse class="s-smoke" cx="207" cy="238" rx="7"  ry="11" fill="currentColor" opacity=".3"/>
</svg>`
  },
  {
    id: "razboi",
    keywords: ["război", "luptă", "sabie", "suliță", "oaste", "bătălie", "arme", "vitejii",
               "filisteni", "oștire", "înfrângere", "biruit", "ucis", "doborât", "tabie"],
    svg: `<svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg">
<defs><style>
  .r-swL{animation:r-swingL 1.4s ease-in-out infinite alternate;transform-origin:130px 310px;}
  .r-swR{animation:r-swingR 1.4s ease-in-out infinite alternate;transform-origin:270px 310px;}
  .r-clash{animation:r-flash 2.8s ease-in-out infinite;}
  .r-dust{animation:r-dustFly 2s ease-out infinite;}
  .r-dust:nth-child(2){animation-delay:.7s;}
  .r-dust:nth-child(3){animation-delay:1.4s;}
  @keyframes r-swingL{from{transform:rotate(-18deg)}to{transform:rotate(12deg)}}
  @keyframes r-swingR{from{transform:rotate(18deg)}to{transform:rotate(-12deg)}}
  @keyframes r-flash{0%,100%{opacity:0}50%{opacity:.9}}
  @keyframes r-dustFly{0%{transform:translate(0,0) scale(1);opacity:.6}100%{transform:translate(20px,-30px) scale(.3);opacity:0}}
</style></defs>
<!-- ground -->
<ellipse cx="200" cy="470" rx="200" ry="20" fill="currentColor" opacity=".3"/>
<!-- LEFT WARRIOR -->
<g transform="translate(0,0)">
  <!-- body -->
  <ellipse cx="128" cy="340" rx="24" ry="38" fill="currentColor" opacity=".75"/>
  <!-- head -->
  <circle cx="128" cy="290" r="24" fill="currentColor" opacity=".9"/>
  <!-- helmet crest -->
  <path d="M108,278 Q128,248 148,278" fill="currentColor" opacity=".9"/>
  <rect x="120" y="246" width="16" height="32" rx="4" fill="currentColor"/>
  <!-- shield -->
  <ellipse cx="90" cy="335" rx="20" ry="32" fill="currentColor" opacity=".7"/>
  <line x1="90" y1="303" x2="90" y2="367" stroke="currentColor" stroke-width="3" opacity=".4"/>
  <!-- sword arm -->
  <g class="r-swL">
    <line x1="148" y1="320" x2="218" y2="260" stroke="currentColor" stroke-width="6" stroke-linecap="round" opacity=".9"/>
    <!-- blade -->
    <polygon points="215,258 230,240 222,252 218,260" fill="currentColor" opacity=".9"/>
  </g>
  <!-- legs -->
  <line x1="116" y1="378" x2="104" y2="455" stroke="currentColor" stroke-width="14" stroke-linecap="round" opacity=".8"/>
  <line x1="140" y1="378" x2="155" y2="455" stroke="currentColor" stroke-width="14" stroke-linecap="round" opacity=".8"/>
</g>
<!-- RIGHT WARRIOR -->
<g transform="translate(0,0)">
  <ellipse cx="272" cy="340" rx="24" ry="38" fill="currentColor" opacity=".75"/>
  <circle cx="272" cy="290" r="24" fill="currentColor" opacity=".9"/>
  <path d="M252,278 Q272,248 292,278" fill="currentColor" opacity=".9"/>
  <rect x="264" y="246" width="16" height="32" rx="4" fill="currentColor"/>
  <ellipse cx="310" cy="335" rx="20" ry="32" fill="currentColor" opacity=".7"/>
  <line x1="310" y1="303" x2="310" y2="367" stroke="currentColor" stroke-width="3" opacity=".4"/>
  <g class="r-swR">
    <line x1="252" y1="320" x2="182" y2="260" stroke="currentColor" stroke-width="6" stroke-linecap="round" opacity=".9"/>
    <polygon points="185,258 170,240 178,252 182,260" fill="currentColor" opacity=".9"/>
  </g>
  <line x1="260" y1="378" x2="248" y2="455" stroke="currentColor" stroke-width="14" stroke-linecap="round" opacity=".8"/>
  <line x1="284" y1="378" x2="296" y2="455" stroke="currentColor" stroke-width="14" stroke-linecap="round" opacity=".8"/>
</g>
<!-- clash spark -->
<g class="r-clash">
  <circle cx="200" cy="258" r="10" fill="currentColor" opacity=".9"/>
  <line x1="200" y1="258" x2="185" y2="242" stroke="currentColor" stroke-width="2"/>
  <line x1="200" y1="258" x2="215" y2="242" stroke="currentColor" stroke-width="2"/>
  <line x1="200" y1="258" x2="200" y2="240" stroke="currentColor" stroke-width="2"/>
  <line x1="200" y1="258" x2="188" y2="270" stroke="currentColor" stroke-width="2"/>
  <line x1="200" y1="258" x2="212" y2="270" stroke="currentColor" stroke-width="2"/>
</g>
<!-- dust -->
<ellipse class="r-dust" cx="160" cy="460" rx="14" ry="8" fill="currentColor" opacity=".5"/>
<ellipse class="r-dust" cx="200" cy="465" rx="10" ry="6" fill="currentColor" opacity=".4"/>
<ellipse class="r-dust" cx="240" cy="458" rx="12" ry="7" fill="currentColor" opacity=".3"/>
</svg>`
  },
  {
    id: "imparat",
    keywords: ["împărat", "împăratul", "tron", "palat", "domnie", "coroană", "sceptru",
               "uns", "uns-ul", "rege", "împărăție", "domn", "David", "Saul"],
    svg: `<svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg">
<defs><style>
  .k-torch{animation:k-flick .6s ease-in-out infinite alternate;}
  .k-torch:nth-child(2){animation-delay:.3s;}
  .k-ray{animation:k-rays 3s ease-in-out infinite;}
  @keyframes k-flick{from{transform:scaleX(.8) scaleY(1.15)}to{transform:scaleX(1.2) scaleY(.85)}}
  @keyframes k-rays{0%,100%{opacity:.3}50%{opacity:.7}}
</style></defs>
<!-- floor -->
<rect x="0" y="445" width="400" height="60" fill="currentColor" opacity=".25"/>
<!-- rays from throne -->
<g class="k-ray">
  <line x1="200" y1="200" x2="50"  y2="80"  stroke="currentColor" stroke-width="2" opacity=".4"/>
  <line x1="200" y1="200" x2="350" y2="80"  stroke="currentColor" stroke-width="2" opacity=".4"/>
  <line x1="200" y1="200" x2="200" y2="60"  stroke="currentColor" stroke-width="2" opacity=".4"/>
  <line x1="200" y1="200" x2="80"  y2="180" stroke="currentColor" stroke-width="2" opacity=".3"/>
  <line x1="200" y1="200" x2="320" y2="180" stroke="currentColor" stroke-width="2" opacity=".3"/>
</g>
<!-- throne base / steps -->
<rect x="60"  y="400" width="280" height="48" rx="4" fill="currentColor" opacity=".7"/>
<rect x="80"  y="368" width="240" height="36" rx="4" fill="currentColor" opacity=".65"/>
<!-- throne seat -->
<rect x="110" y="280" width="180" height="90" rx="6" fill="currentColor" opacity=".6"/>
<!-- throne back -->
<rect x="120" y="180" width="160" height="110" rx="8" fill="currentColor" opacity=".7"/>
<!-- throne sides / arms -->
<rect x="105" y="290" width="25" height="60" rx="4" fill="currentColor" opacity=".75"/>
<rect x="270" y="290" width="25" height="60" rx="4" fill="currentColor" opacity=".75"/>
<!-- crown on top of throne back -->
<polygon points="200,120 152,162 167,140 183,162 200,138 217,162 233,140 248,162 264,162 200,120"
  fill="currentColor" opacity=".95"/>
<rect x="155" y="158" width="90" height="24" rx="3" fill="currentColor" opacity=".95"/>
<!-- jewels in crown -->
<circle cx="200" cy="162" r="7" fill="currentColor" opacity=".6"/>
<circle cx="175" cy="166" r="5" fill="currentColor" opacity=".5"/>
<circle cx="225" cy="166" r="5" fill="currentColor" opacity=".5"/>
<!-- figure on throne (silhouette) -->
<ellipse cx="200" cy="250" rx="30" ry="40" fill="currentColor" opacity=".8"/>
<circle  cx="200" cy="200" r="22"           fill="currentColor" opacity=".85"/>
<!-- sceptre -->
<line x1="235" y1="210" x2="268" y2="350" stroke="currentColor" stroke-width="6" stroke-linecap="round" opacity=".8"/>
<circle cx="235" cy="206" r="9" fill="currentColor" opacity=".9"/>
<!-- torches left and right -->
<g transform="translate(70,290)">
  <rect x="-5" y="0" width="10" height="50" rx="3" fill="currentColor" opacity=".8"/>
  <g class="k-torch" style="transform-origin:0px 0px">
    <ellipse cx="0" cy="-12" rx="10" ry="16" fill="currentColor" opacity=".9"/>
    <ellipse cx="0" cy="-22" rx="5"  ry="9"  fill="currentColor" opacity=".65"/>
  </g>
</g>
<g transform="translate(330,290)">
  <rect x="-5" y="0" width="10" height="50" rx="3" fill="currentColor" opacity=".8"/>
  <g class="k-torch" style="transform-origin:0px 0px">
    <ellipse cx="0" cy="-12" rx="10" ry="16" fill="currentColor" opacity=".9"/>
    <ellipse cx="0" cy="-22" rx="5"  ry="9"  fill="currentColor" opacity=".65"/>
  </g>
</g>
</svg>`
  },
  {
    id: "pustie",
    keywords: ["pustie", "pustiul", "cort", "nisip", "tabăra", "tabără", "drum", "călătorie",
               "Nob", "Zif", "câmpii", "stepă"],
    svg: `<svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg">
<defs><style>
  .d-sun{animation:d-pulse 4s ease-in-out infinite;}
  .d-sand{animation:d-drift 3s ease-in-out infinite;}
  .d-sand:nth-child(2){animation-delay:1.2s;}
  .d-sand:nth-child(3){animation-delay:2.4s;}
  @keyframes d-pulse{0%,100%{r:38}50%{r:46}}
  @keyframes d-drift{0%{transform:translate(0,0)}50%{transform:translate(18px,4px)}100%{transform:translate(0,0)}}
</style></defs>
<!-- sky -->
<rect x="0" y="0" width="400" height="320" fill="currentColor" opacity=".08"/>
<!-- sun -->
<circle class="d-sun" cx="320" cy="80" r="42" fill="currentColor" opacity=".7"/>
<circle cx="320" cy="80" r="28" fill="currentColor" opacity=".4"/>
<!-- sun rays -->
<line x1="320" y1="28" x2="320" y2="10" stroke="currentColor" stroke-width="4" opacity=".5"/>
<line x1="320" y1="132" x2="320" y2="150" stroke="currentColor" stroke-width="4" opacity=".5"/>
<line x1="268" y1="80" x2="250" y2="80" stroke="currentColor" stroke-width="4" opacity=".5"/>
<line x1="372" y1="80" x2="390" y2="80" stroke="currentColor" stroke-width="4" opacity=".5"/>
<line x1="284" y1="44" x2="271" y2="31" stroke="currentColor" stroke-width="4" opacity=".4"/>
<line x1="356" y1="116" x2="369" y2="129" stroke="currentColor" stroke-width="4" opacity=".4"/>
<line x1="284" y1="116" x2="271" y2="129" stroke="currentColor" stroke-width="4" opacity=".4"/>
<line x1="356" y1="44"  x2="369" y2="31"  stroke="currentColor" stroke-width="4" opacity=".4"/>
<!-- dune 1 (far) -->
<path d="M-10,360 Q100,290 200,320 Q300,350 410,300 L410,520 L-10,520 Z" fill="currentColor" opacity=".4"/>
<!-- dune 2 (near) -->
<path d="M-10,420 Q80,360 190,390 Q300,420 410,370 L410,520 L-10,520 Z" fill="currentColor" opacity=".6"/>
<!-- tent -->
<polygon points="170,230 80,370 260,370" fill="currentColor" opacity=".85"/>
<rect x="105" y="340" width="50" height="30" fill="currentColor" opacity=".2"/>
<rect x="105" y="340" width="50" height="30" fill="none" stroke="currentColor" stroke-width="2" opacity=".5"/>
<!-- tent guy ropes -->
<line x1="170" y1="230" x2="50"  y2="300" stroke="currentColor" stroke-width="2" opacity=".5"/>
<line x1="170" y1="230" x2="290" y2="300" stroke="currentColor" stroke-width="2" opacity=".5"/>
<line x1="50"  y1="300" x2="45"  y2="320" stroke="currentColor" stroke-width="2" opacity=".4"/>
<line x1="290" y1="300" x2="295" y2="320" stroke="currentColor" stroke-width="2" opacity=".4"/>
<!-- second smaller tent -->
<polygon points="310,280 260,360 360,360" fill="currentColor" opacity=".6"/>
<!-- drifting sand particles -->
<ellipse class="d-sand" cx="80"  cy="390" rx="20" ry="5" fill="currentColor" opacity=".35"/>
<ellipse class="d-sand" cx="250" cy="405" rx="16" ry="4" fill="currentColor" opacity=".28"/>
<ellipse class="d-sand" cx="340" cy="395" rx="18" ry="5" fill="currentColor" opacity=".3"/>
</svg>`
  },
  {
    id: "pastor",
    keywords: ["oi", "oile", "turmă", "păstor", "oaie", "miei", "mielușea", "câmp", "câmpul",
               "David", "pășune", "Betleem"],
    svg: `<svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg">
<defs><style>
  .p-sheep{animation:p-graze 3s ease-in-out infinite;}
  .p-sheep:nth-child(2){animation-delay:1s;}
  .p-sheep:nth-child(3){animation-delay:2s;}
  .p-cloud{animation:p-drift 8s linear infinite;}
  .p-cloud:nth-child(2){animation-delay:4s;}
  @keyframes p-graze{0%,100%{transform:translateX(0)}50%{transform:translateX(12px)}}
  @keyframes p-drift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}
</style></defs>
<!-- sky gradient suggestion -->
<rect x="0" y="0" width="400" height="280" fill="currentColor" opacity=".07"/>
<!-- clouds -->
<g class="p-cloud" opacity=".35">
  <ellipse cx="80"  cy="80" rx="45" ry="22" fill="currentColor"/>
  <ellipse cx="110" cy="68" rx="32" ry="24" fill="currentColor"/>
  <ellipse cx="55"  cy="75" rx="28" ry="18" fill="currentColor"/>
</g>
<g class="p-cloud" opacity=".28" style="animation-delay:-3s">
  <ellipse cx="260" cy="110" rx="38" ry="19" fill="currentColor"/>
  <ellipse cx="288" cy="98"  rx="26" ry="20" fill="currentColor"/>
</g>
<!-- hills -->
<path d="M-10,310 Q100,220 220,280 Q340,340 410,260 L410,520 L-10,520 Z" fill="currentColor" opacity=".45"/>
<path d="M-10,370 Q90,300 200,340 Q310,380 410,330 L410,520 L-10,520 Z" fill="currentColor" opacity=".6"/>
<!-- tree -->
<rect x="306" y="280" width="12" height="100" rx="4" fill="currentColor" opacity=".8"/>
<ellipse cx="312" cy="260" rx="36" ry="44" fill="currentColor" opacity=".75"/>
<ellipse cx="300" cy="275" rx="24" ry="30" fill="currentColor" opacity=".6"/>
<!-- SHEPHERD figure -->
<line x1="148" y1="340" x2="148" y2="440" stroke="currentColor" stroke-width="16" stroke-linecap="round" opacity=".8"/>
<ellipse cx="148" cy="310" rx="22" ry="36" fill="currentColor" opacity=".85"/>
<circle  cx="148" cy="278" r="20" fill="currentColor" opacity=".9"/>
<!-- shepherd crook -->
<line x1="162" y1="290" x2="198" y2="400" stroke="currentColor" stroke-width="5" stroke-linecap="round" opacity=".8"/>
<path d="M198,400 Q215,420 200,435 Q185,448 175,435" fill="none" stroke="currentColor" stroke-width="5" opacity=".8"/>
<!-- SHEEP 1 -->
<g class="p-sheep" transform="translate(40,400)">
  <ellipse cx="0"  cy="0" rx="30" ry="20" fill="currentColor" opacity=".75"/>
  <circle  cx="-18" cy="-8" r="14" fill="currentColor" opacity=".8"/>
  <line x1="-10" y1="18" x2="-14" y2="42" stroke="currentColor" stroke-width="5" stroke-linecap="round" opacity=".7"/>
  <line x1="10"  y1="18" x2="14"  y2="42" stroke="currentColor" stroke-width="5" stroke-linecap="round" opacity=".7"/>
</g>
<!-- SHEEP 2 -->
<g class="p-sheep" transform="translate(230,415)">
  <ellipse cx="0"  cy="0" rx="26" ry="17" fill="currentColor" opacity=".7"/>
  <circle  cx="-16" cy="-7" r="12" fill="currentColor" opacity=".75"/>
  <line x1="-8" y1="15" x2="-12" y2="36" stroke="currentColor" stroke-width="5" stroke-linecap="round" opacity=".65"/>
  <line x1="8"  y1="15" x2="12"  y2="36" stroke="currentColor" stroke-width="5" stroke-linecap="round" opacity=".65"/>
</g>
<!-- SHEEP 3 (small, far) -->
<g class="p-sheep" transform="translate(310,390)">
  <ellipse cx="0"  cy="0" rx="19" ry="13" fill="currentColor" opacity=".55"/>
  <circle  cx="-12" cy="-5" r="9" fill="currentColor" opacity=".6"/>
  <line x1="-5" y1="12" x2="-8"  y2="27" stroke="currentColor" stroke-width="4" stroke-linecap="round" opacity=".5"/>
  <line x1="5"  y1="12" x2="8"   y2="27" stroke="currentColor" stroke-width="4" stroke-linecap="round" opacity=".5"/>
</g>
</svg>`
  },
  {
    id: "apa",
    keywords: ["apă", "apele", "râu", "mare", "Iordan", "fântână", "pârâu", "lac", "vad",
               "bea", "setea", "trecut Iordanul"],
    svg: `<svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg">
<defs><style>
  .w-wave{animation:w-flow 2.5s ease-in-out infinite;}
  .w-wave:nth-child(2){animation-delay:.6s;}
  .w-wave:nth-child(3){animation-delay:1.2s;}
  .w-wave:nth-child(4){animation-delay:1.8s;}
  .w-ripple{animation:w-rip 2s ease-out infinite;}
  .w-ripple:nth-child(2){animation-delay:.7s;}
  @keyframes w-flow{0%,100%{d:path("M-10,0 Q100,-22 200,0 T410,0")}50%{d:path("M-10,0 Q100,22 200,0 T410,0")}}
  @keyframes w-rip{0%{transform:scale(.4);opacity:.7}100%{transform:scale(2.2);opacity:0}}
</style></defs>
<!-- sky/land -->
<rect x="0"   y="0"   width="400" height="240" fill="currentColor" opacity=".08"/>
<path d="M0,200 Q80,160 160,200 Q240,240 400,190 L400,0 L0,0 Z" fill="currentColor" opacity=".18"/>
<!-- far bank -->
<path d="M-10,250 Q100,210 200,240 Q300,270 410,230 L410,280 L-10,280 Z" fill="currentColor" opacity=".45"/>
<!-- water body -->
<rect x="0" y="275" width="400" height="245" fill="currentColor" opacity=".35"/>
<!-- waves -->
<g transform="translate(0,310)"><path class="w-wave" d="M-10,0 Q100,-22 200,0 T410,0" fill="none" stroke="currentColor" stroke-width="5" opacity=".8"/></g>
<g transform="translate(0,360)"><path class="w-wave" d="M-10,0 Q100,-22 200,0 T410,0" fill="none" stroke="currentColor" stroke-width="4" opacity=".65"/></g>
<g transform="translate(0,410)"><path class="w-wave" d="M-10,0 Q100,-22 200,0 T410,0" fill="none" stroke="currentColor" stroke-width="4" opacity=".5"/></g>
<g transform="translate(0,460)"><path class="w-wave" d="M-10,0 Q100,-22 200,0 T410,0" fill="none" stroke="currentColor" stroke-width="3" opacity=".4"/></g>
<!-- ripples in water -->
<g class="w-ripple" transform="translate(130,380)"><ellipse rx="22" ry="10" fill="none" stroke="currentColor" stroke-width="2" opacity=".6"/></g>
<g class="w-ripple" transform="translate(280,430)" style="animation-delay:.5s"><ellipse rx="18" ry="8" fill="none" stroke="currentColor" stroke-width="2" opacity=".5"/></g>
<!-- near bank / shore -->
<path d="M-10,480 Q80,455 180,475 Q280,495 410,465 L410,520 L-10,520 Z" fill="currentColor" opacity=".6"/>
<!-- reeds on bank -->
<line x1="50"  y1="480" x2="48"  y2="390" stroke="currentColor" stroke-width="5" stroke-linecap="round" opacity=".7"/>
<ellipse cx="48" cy="388" rx="6" ry="14" fill="currentColor" opacity=".7"/>
<line x1="68"  y1="475" x2="66"  y2="400" stroke="currentColor" stroke-width="4" stroke-linecap="round" opacity=".6"/>
<ellipse cx="66" cy="398" rx="5" ry="11" fill="currentColor" opacity=".6"/>
<line x1="340" y1="472" x2="338" y2="392" stroke="currentColor" stroke-width="5" stroke-linecap="round" opacity=".65"/>
<ellipse cx="338" cy="390" rx="6" ry="13" fill="currentColor" opacity=".65"/>
<line x1="358" y1="478" x2="356" y2="398" stroke="currentColor" stroke-width="4" stroke-linecap="round" opacity=".6"/>
<!-- rocks -->
<ellipse cx="200" cy="488" rx="28" ry="14" fill="currentColor" opacity=".55"/>
<ellipse cx="165" cy="494" rx="18" ry="10" fill="currentColor" opacity=".45"/>
</svg>`
  },
  {
    id: "cetate",
    keywords: ["cetate", "cetatea", "poartă", "porții", "zid", "zidurile", "Ierusalim",
               "Abel", "turnul", "întăritură", "Hebron", "Gat", "Ghibeea"],
    svg: `<svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg">
<defs><style>
  .c-flag{animation:c-wave 1.8s ease-in-out infinite;}
  .c-torch{animation:c-flick .65s ease-in-out infinite alternate;}
  .c-torch:nth-child(2){animation-delay:.32s;}
  @keyframes c-wave{0%,100%{transform:skewX(0deg)}50%{transform:skewX(18deg)};transform-origin:left center}
  @keyframes c-flick{from{transform:scaleX(.8) scaleY(1.2)}to{transform:scaleX(1.2) scaleY(.8)}}
</style></defs>
<!-- sky -->
<rect x="0" y="0" width="400" height="250" fill="currentColor" opacity=".07"/>
<!-- distant hills -->
<path d="M-10,240 Q80,190 180,230 Q280,270 410,210 L410,0 L-10,0 Z" fill="currentColor" opacity=".12"/>
<!-- main WALL -->
<rect x="0"   y="260" width="400" height="180" fill="currentColor" opacity=".55"/>
<!-- wall texture - horizontal line -->
<line x1="0" y1="310" x2="400" y2="310" stroke="currentColor" stroke-width="2" opacity=".3"/>
<line x1="0" y1="360" x2="400" y2="360" stroke="currentColor" stroke-width="2" opacity=".3"/>
<line x1="0" y1="410" x2="400" y2="410" stroke="currentColor" stroke-width="2" opacity=".3"/>
<!-- battlements / merlons along top -->
<rect x="0"   y="240" width="36" height="24" rx="2" fill="currentColor" opacity=".8"/>
<rect x="52"  y="240" width="36" height="24" rx="2" fill="currentColor" opacity=".8"/>
<rect x="104" y="240" width="36" height="24" rx="2" fill="currentColor" opacity=".8"/>
<rect x="156" y="240" width="36" height="24" rx="2" fill="currentColor" opacity=".8"/>
<rect x="208" y="240" width="36" height="24" rx="2" fill="currentColor" opacity=".8"/>
<rect x="260" y="240" width="36" height="24" rx="2" fill="currentColor" opacity=".8"/>
<rect x="312" y="240" width="36" height="24" rx="2" fill="currentColor" opacity=".8"/>
<rect x="364" y="240" width="36" height="24" rx="2" fill="currentColor" opacity=".8"/>
<!-- LEFT TOWER -->
<rect x="0" y="130" width="100" height="310" rx="4" fill="currentColor" opacity=".7"/>
<!-- tower battlements -->
<rect x="0"   y="110" width="22" height="24" rx="2" fill="currentColor" opacity=".85"/>
<rect x="28"  y="110" width="22" height="24" rx="2" fill="currentColor" opacity=".85"/>
<rect x="56"  y="110" width="22" height="24" rx="2" fill="currentColor" opacity=".85"/>
<rect x="78"  y="110" width="22" height="24" rx="2" fill="currentColor" opacity=".85"/>
<!-- tower window -->
<rect x="36"  y="170" width="28" height="40" rx="3" fill="currentColor" opacity=".15"/>
<rect x="36"  y="170" width="28" height="40" rx="3" fill="none" stroke="currentColor" stroke-width="2" opacity=".5"/>
<!-- RIGHT TOWER -->
<rect x="300" y="130" width="100" height="310" rx="4" fill="currentColor" opacity=".7"/>
<rect x="300" y="110" width="22" height="24" rx="2" fill="currentColor" opacity=".85"/>
<rect x="328" y="110" width="22" height="24" rx="2" fill="currentColor" opacity=".85"/>
<rect x="356" y="110" width="22" height="24" rx="2" fill="currentColor" opacity=".85"/>
<rect x="378" y="110" width="22" height="24" rx="2" fill="currentColor" opacity=".85"/>
<rect x="336" y="170" width="28" height="40" rx="3" fill="currentColor" opacity=".15"/>
<rect x="336" y="170" width="28" height="40" rx="3" fill="none" stroke="currentColor" stroke-width="2" opacity=".5"/>
<!-- FLAG on left tower -->
<line x1="50" y1="60" x2="50" y2="120" stroke="currentColor" stroke-width="4" opacity=".7"/>
<g class="c-flag" style="transform-origin:50px 65px">
  <polygon points="50,63 90,70 50,82" fill="currentColor" opacity=".85"/>
</g>
<!-- GATE arch -->
<path d="M148,440 L148,310 Q200,268 252,310 L252,440 Z" fill="currentColor" opacity=".18"/>
<path d="M148,440 L148,310 Q200,268 252,310 L252,440 Z" fill="none" stroke="currentColor" stroke-width="4" opacity=".6"/>
<!-- gate doors hint -->
<line x1="200" y1="275" x2="200" y2="440" stroke="currentColor" stroke-width="2" opacity=".3"/>
<!-- torches on wall -->
<g transform="translate(120,280)">
  <rect x="-4" y="0" width="8" height="28" rx="2" fill="currentColor" opacity=".75"/>
  <g class="c-torch" style="transform-origin:0px 0px">
    <ellipse cx="0" cy="-9" rx="7" ry="12" fill="currentColor" opacity=".9"/>
    <ellipse cx="0" cy="-18" rx="4" ry="7" fill="currentColor" opacity=".6"/>
  </g>
</g>
<g transform="translate(280,280)">
  <rect x="-4" y="0" width="8" height="28" rx="2" fill="currentColor" opacity=".75"/>
  <g class="c-torch" style="transform-origin:0px 0px">
    <ellipse cx="0" cy="-9" rx="7" ry="12" fill="currentColor" opacity=".9"/>
    <ellipse cx="0" cy="-18" rx="4" ry="7" fill="currentColor" opacity=".6"/>
  </g>
</g>
<!-- ground -->
<ellipse cx="200" cy="492" rx="200" ry="22" fill="currentColor" opacity=".3"/>
</svg>`
  },
  {
    id: "noapte",
    keywords: ["noapte", "noaptea", "stele", "întuneric", "vis", "somn", "cer", "lună",
               "lumina", "întâlnire", "Dumnezeu a vorbit"],
    svg: `<svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg">
<defs><style>
  .n-star{animation:n-twink 2.5s ease-in-out infinite;}
  .n-star:nth-child(2){animation-delay:.5s;}
  .n-star:nth-child(3){animation-delay:1s;}
  .n-star:nth-child(4){animation-delay:1.5s;}
  .n-star:nth-child(5){animation-delay:2s;}
  .n-star:nth-child(6){animation-delay:.8s;}
  .n-star:nth-child(7){animation-delay:1.3s;}
  .n-moon{animation:n-glow 4s ease-in-out infinite;}
  @keyframes n-twink{0%,100%{opacity:.9;r:5}50%{opacity:.3;r:3}}
  @keyframes n-glow{0%,100%{opacity:.8}50%{opacity:.5}}
</style></defs>
<!-- dark sky -->
<rect x="0" y="0" width="400" height="360" fill="currentColor" opacity=".22"/>
<!-- moon -->
<g class="n-moon">
  <circle cx="300" cy="100" r="55" fill="currentColor" opacity=".75"/>
  <!-- crescent shadow -->
  <circle cx="320" cy="90"  r="48" fill="currentColor" opacity=".35"/>
</g>
<!-- moon glow ring -->
<circle cx="300" cy="100" r="72" fill="none" stroke="currentColor" stroke-width="8" opacity=".2"/>
<!-- stars -->
<circle class="n-star" cx="50"  cy="60"  r="5" fill="currentColor" opacity=".9"/>
<circle class="n-star" cx="130" cy="40"  r="4" fill="currentColor" opacity=".8"/>
<circle class="n-star" cx="80"  cy="130" r="3" fill="currentColor" opacity=".7"/>
<circle class="n-star" cx="200" cy="55"  r="5" fill="currentColor" opacity=".9"/>
<circle class="n-star" cx="155" cy="110" r="3" fill="currentColor" opacity=".75"/>
<circle class="n-star" cx="250" cy="40"  r="4" fill="currentColor" opacity=".8"/>
<circle class="n-star" cx="370" cy="70"  r="5" fill="currentColor" opacity=".85"/>
<!-- more static small stars -->
<circle cx="35"  cy="100" r="2" fill="currentColor" opacity=".6"/>
<circle cx="110" cy="170" r="2" fill="currentColor" opacity=".5"/>
<circle cx="175" cy="80"  r="2" fill="currentColor" opacity=".6"/>
<circle cx="230" cy="140" r="2" fill="currentColor" opacity=".5"/>
<circle cx="340" cy="130" r="2" fill="currentColor" opacity=".55"/>
<circle cx="380" cy="160" r="2" fill="currentColor" opacity=".5"/>
<!-- star cross shapes -->
<line x1="50" y1="55" x2="50" y2="65"  stroke="currentColor" stroke-width="1.5" opacity=".5"/>
<line x1="45" y1="60" x2="55" y2="60"  stroke="currentColor" stroke-width="1.5" opacity=".5"/>
<line x1="200" y1="50" x2="200" y2="60" stroke="currentColor" stroke-width="1.5" opacity=".5"/>
<line x1="195" y1="55" x2="205" y2="55" stroke="currentColor" stroke-width="1.5" opacity=".5"/>
<!-- distant hills silhouette -->
<path d="M-10,320 Q60,260 150,300 Q240,340 310,290 Q360,260 410,295 L410,400 L-10,400 Z"
  fill="currentColor" opacity=".45"/>
<!-- near ground -->
<path d="M-10,370 Q100,340 200,365 Q300,390 410,355 L410,520 L-10,520 Z"
  fill="currentColor" opacity=".6"/>
<!-- figure lying down (sleeping / praying) -->
<ellipse cx="200" cy="418" rx="65" ry="22" fill="currentColor" opacity=".75"/>
<circle  cx="258" cy="410" r="18"           fill="currentColor" opacity=".8"/>
<!-- divine light beam from moon -->
<path d="M300,155 L185,400" stroke="currentColor" stroke-width="3" opacity=".2"/>
<path d="M285,160 L175,405" stroke="currentColor" stroke-width="2" opacity=".15"/>
</svg>`
  },
  {
    id: "munte",
    keywords: ["munte", "muntele", "deal", "stâncă", "vârf", "Ghilboa", "Carmel", "înălțimi",
               "coborâse", "urca", "suit"],
    svg: `<svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg">
<defs><style>
  .m-cloud{animation:m-drift 10s linear infinite;}
  .m-cloud:nth-child(2){animation-delay:-5s;}
  .m-mist{animation:m-mist 5s ease-in-out infinite;}
  @keyframes m-drift{from{transform:translateX(-120px)}to{transform:translateX(500px)}}
  @keyframes m-mist{0%,100%{opacity:.25;transform:translateX(0)}50%{opacity:.45;transform:translateX(14px)}}
</style></defs>
<!-- sky -->
<rect x="0" y="0" width="400" height="300" fill="currentColor" opacity=".09"/>
<!-- FAR mountain (smallest) -->
<polygon points="330,260 400,120 470,260" fill="currentColor" opacity=".3"/>
<!-- MIDDLE mountain -->
<polygon points="50,280 180,80 310,280" fill="currentColor" opacity=".5"/>
<!-- snow cap middle -->
<polygon points="180,80 155,155 205,155" fill="currentColor" opacity=".8"/>
<!-- FRONT mountain (tallest, main) -->
<polygon points="-10,320 200,40 410,320" fill="currentColor" opacity=".7"/>
<!-- snow cap front -->
<polygon points="200,40 162,140 238,140" fill="currentColor" opacity=".9"/>
<!-- ridge line detail -->
<line x1="200" y1="40" x2="162" y2="140" stroke="currentColor" stroke-width="2" opacity=".5"/>
<line x1="200" y1="40" x2="238" y2="140" stroke="currentColor" stroke-width="2" opacity=".5"/>
<!-- mist at mountain base -->
<ellipse class="m-mist" cx="120" cy="305" rx="110" ry="30" fill="currentColor" opacity=".3"/>
<ellipse class="m-mist" cx="310" cy="315" rx="90"  ry="24" fill="currentColor" opacity=".25"/>
<!-- clouds -->
<g class="m-cloud" opacity=".35">
  <ellipse cx="80"  cy="160" rx="55" ry="25" fill="currentColor"/>
  <ellipse cx="108" cy="148" rx="35" ry="26" fill="currentColor"/>
  <ellipse cx="55"  cy="155" rx="30" ry="20" fill="currentColor"/>
</g>
<g class="m-cloud" opacity=".3">
  <ellipse cx="280" cy="190" rx="45" ry="22" fill="currentColor"/>
  <ellipse cx="308" cy="178" rx="30" ry="22" fill="currentColor"/>
</g>
<!-- ground -->
<path d="M-10,330 Q80,305 180,325 Q280,345 410,318 L410,520 L-10,520 Z" fill="currentColor" opacity=".55"/>
<!-- small pine trees at base -->
<polygon points="48,328 32,375 64,375" fill="currentColor" opacity=".7"/>
<polygon points="48,353 35,390 61,390" fill="currentColor" opacity=".65"/>
<polygon points="350,320 334,368 366,368" fill="currentColor" opacity=".65"/>
<polygon points="350,344 337,382 363,382" fill="currentColor" opacity=".6"/>
</svg>`
  },
  {
    id: "rugaciune",
    keywords: ["rugăciune", "rugat", "plâns", "suflet", "inimă", "jelit", "postit",
               "Ana", "jelit", "necaz", "durere", "Doamne", "cerut", "juruință"],
    svg: `<svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg">
<defs><style>
  .pr-ray{animation:pr-shine 3s ease-in-out infinite;}
  .pr-ray:nth-child(2){animation-delay:.5s;}
  .pr-ray:nth-child(3){animation-delay:1s;}
  .pr-ray:nth-child(4){animation-delay:1.5s;}
  .pr-ray:nth-child(5){animation-delay:2s;}
  .pr-glow{animation:pr-glow 4s ease-in-out infinite;}
  @keyframes pr-shine{0%,100%{opacity:.15}50%{opacity:.7}}
  @keyframes pr-glow{0%,100%{opacity:.4}50%{opacity:.9}}
</style></defs>
<!-- divine light source top -->
<g class="pr-glow">
  <circle cx="200" cy="80" r="36" fill="currentColor" opacity=".5"/>
  <circle cx="200" cy="80" r="22" fill="currentColor" opacity=".7"/>
</g>
<!-- light rays fanning down -->
<line class="pr-ray" x1="200" y1="80" x2="60"  y2="380" stroke="currentColor" stroke-width="3" opacity=".5"/>
<line class="pr-ray" x1="200" y1="80" x2="120" y2="400" stroke="currentColor" stroke-width="4" opacity=".55"/>
<line class="pr-ray" x1="200" y1="80" x2="200" y2="420" stroke="currentColor" stroke-width="5" opacity=".6"/>
<line class="pr-ray" x1="200" y1="80" x2="280" y2="400" stroke="currentColor" stroke-width="4" opacity=".55"/>
<line class="pr-ray" x1="200" y1="80" x2="340" y2="380" stroke="currentColor" stroke-width="3" opacity=".5"/>
<!-- ground -->
<ellipse cx="200" cy="470" rx="200" ry="22" fill="currentColor" opacity=".3"/>
<!-- kneeling figure -->
<!-- torso leaning forward -->
<ellipse cx="200" cy="390" rx="28" ry="22" fill="currentColor" opacity=".8" transform="rotate(-30,200,390)"/>
<!-- head bowed -->
<circle cx="178" cy="368" r="22" fill="currentColor" opacity=".85"/>
<!-- arms outstretched / folded -->
<line x1="192" y1="390" x2="145" y2="418" stroke="currentColor" stroke-width="14" stroke-linecap="round" opacity=".75"/>
<line x1="192" y1="390" x2="220" y2="420" stroke="currentColor" stroke-width="14" stroke-linecap="round" opacity=".75"/>
<!-- hands/wrists joined -->
<ellipse cx="182" cy="424" rx="16" ry="10" fill="currentColor" opacity=".7"/>
<!-- kneeling legs -->
<line x1="210" y1="406" x2="200" y2="460" stroke="currentColor" stroke-width="20" stroke-linecap="round" opacity=".8"/>
<line x1="225" y1="420" x2="240" y2="465" stroke="currentColor" stroke-width="16" stroke-linecap="round" opacity=".7"/>
<!-- light pool on ground -->
<ellipse cx="200" cy="468" rx="80" ry="18" fill="currentColor" opacity=".2"/>
</svg>`
  },
  {
    id: "fuga",
    keywords: ["fugi", "fugit", "fuga", "urmărit", "ascuns", "scăpat", "pribeag",
               "gonit", "alergat", "departe", "refugiu", "peștera", "Adulam", "Engheddi"],
    svg: `<svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg">
<defs><style>
  .f-run{animation:f-step 0.5s ease-in-out infinite alternate;}
  .f-dust{animation:f-puff 1.2s ease-out infinite;}
  .f-dust:nth-child(2){animation-delay:.4s;}
  .f-dust:nth-child(3){animation-delay:.8s;}
  @keyframes f-step{from{transform:translateY(0)}to{transform:translateY(-8px)}}
  @keyframes f-puff{0%{transform:scale(.5) translate(0,0);opacity:.7}100%{transform:scale(2) translate(-20px,-10px);opacity:0}}
</style></defs>
<!-- rocky landscape -->
<rect x="0" y="0" width="400" height="280" fill="currentColor" opacity=".07"/>
<!-- rocks background -->
<ellipse cx="60"  cy="280" rx="70" ry="40" fill="currentColor" opacity=".35"/>
<ellipse cx="340" cy="260" rx="80" ry="45" fill="currentColor" opacity=".3"/>
<!-- cave mouth -->
<path d="M40,200 Q80,140 140,200 L140,320 L40,320 Z" fill="currentColor" opacity=".6"/>
<path d="M42,202 Q80,145 138,202 L138,318 L42,318 Z" fill="currentColor" opacity=".15"/>
<!-- ground -->
<path d="M-10,320 Q80,295 200,315 Q320,335 410,305 L410,520 L-10,520 Z" fill="currentColor" opacity=".55"/>
<!-- RUNNING FIGURE -->
<g class="f-run" transform="translate(220,0)">
  <!-- head -->
  <circle cx="0" cy="220" r="20" fill="currentColor" opacity=".9"/>
  <!-- body leaning forward -->
  <ellipse cx="0" cy="260" rx="18" ry="30" fill="currentColor" opacity=".85" transform="rotate(15,0,260)"/>
  <!-- cape/cloak flying back -->
  <path d="M-5,240 Q-40,255 -55,290 Q-30,275 0,270" fill="currentColor" opacity=".65"/>
  <!-- front leg (stride) -->
  <line x1="6"  y1="285" x2="30"  y2="360" stroke="currentColor" stroke-width="12" stroke-linecap="round" opacity=".85"/>
  <!-- back leg (push off) -->
  <line x1="-4" y1="285" x2="-28" y2="345" stroke="currentColor" stroke-width="12" stroke-linecap="round" opacity=".8"/>
  <!-- foot front -->
  <ellipse cx="34" cy="364" rx="16" ry="8" fill="currentColor" opacity=".8"/>
  <!-- arm forward -->
  <line x1="10"  y1="248" x2="40"  y2="290" stroke="currentColor" stroke-width="10" stroke-linecap="round" opacity=".8"/>
  <!-- arm back -->
  <line x1="-8"  y1="248" x2="-38" y2="275" stroke="currentColor" stroke-width="10" stroke-linecap="round" opacity=".75"/>
</g>
<!-- dust trail -->
<ellipse class="f-dust" cx="185" cy="365" rx="16" ry="8" fill="currentColor" opacity=".5"/>
<ellipse class="f-dust" cx="165" cy="370" rx="12" ry="6" fill="currentColor" opacity=".4"/>
<ellipse class="f-dust" cx="200" cy="368" rx="10" ry="5" fill="currentColor" opacity=".35"/>
<!-- pursuer silhouette in distance (smaller) -->
<circle cx="350" cy="275" r="12" fill="currentColor" opacity=".5"/>
<ellipse cx="350" cy="305" rx="10" ry="18" fill="currentColor" opacity=".45"/>
<line x1="350" y1="323" x2="343" y2="355" stroke="currentColor" stroke-width="7" stroke-linecap="round" opacity=".4"/>
<line x1="350" y1="323" x2="357" y2="355" stroke="currentColor" stroke-width="7" stroke-linecap="round" opacity=".4"/>
</svg>`
  },
  {
    id: "victorie",
    keywords: ["biruință", "biruit", "slavă", "laudă", "izbăvit", "izbăvire", "salvat",
               "triumf", "ucis", "omorât", "Goliat", "înfrânt"],
    svg: `<svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg">
<defs><style>
  .v-ray{animation:v-shine 2.5s ease-in-out infinite;}
  .v-ray:nth-child(odd){animation-delay:.5s;}
  .v-arm{animation:v-raise .8s ease-in-out infinite alternate;transform-origin:200px 300px;}
  @keyframes v-shine{0%,100%{opacity:.2}50%{opacity:.8}}
  @keyframes v-raise{from{transform:rotate(-8deg)}to{transform:rotate(8deg)}}
</style></defs>
<!-- glory rays -->
<g class="v-ray"><line x1="200" y1="180" x2="40"  y2="40"  stroke="currentColor" stroke-width="4" opacity=".6"/></g>
<g class="v-ray"><line x1="200" y1="180" x2="120" y2="20"  stroke="currentColor" stroke-width="5" opacity=".65"/></g>
<g class="v-ray"><line x1="200" y1="180" x2="200" y2="10"  stroke="currentColor" stroke-width="6" opacity=".7"/></g>
<g class="v-ray"><line x1="200" y1="180" x2="280" y2="20"  stroke="currentColor" stroke-width="5" opacity=".65"/></g>
<g class="v-ray"><line x1="200" y1="180" x2="360" y2="40"  stroke="currentColor" stroke-width="4" opacity=".6"/></g>
<g class="v-ray"><line x1="200" y1="180" x2="380" y2="130" stroke="currentColor" stroke-width="3" opacity=".5"/></g>
<g class="v-ray"><line x1="200" y1="180" x2="20"  y2="130" stroke="currentColor" stroke-width="3" opacity=".5"/></g>
<!-- ground -->
<path d="M-10,400 Q100,372 200,390 Q300,408 410,382 L410,520 L-10,520 Z" fill="currentColor" opacity=".5"/>
<!-- victor figure -->
<!-- legs -->
<line x1="185" y1="380" x2="168" y2="465" stroke="currentColor" stroke-width="18" stroke-linecap="round" opacity=".85"/>
<line x1="215" y1="380" x2="232" y2="465" stroke="currentColor" stroke-width="18" stroke-linecap="round" opacity=".85"/>
<!-- body -->
<ellipse cx="200" cy="335" rx="32" ry="48" fill="currentColor" opacity=".85"/>
<!-- head -->
<circle cx="200" cy="282" r="26" fill="currentColor" opacity=".9"/>
<!-- raised arm with sword -->
<g class="v-arm">
  <line x1="218" y1="305" x2="258" y2="210" stroke="currentColor" stroke-width="12" stroke-linecap="round" opacity=".85"/>
  <!-- sword blade -->
  <line x1="258" y1="210" x2="290" y2="140" stroke="currentColor" stroke-width="6" stroke-linecap="round" opacity=".9"/>
  <!-- sword guard -->
  <line x1="252" y1="195" x2="278" y2="222" stroke="currentColor" stroke-width="6" stroke-linecap="round" opacity=".85"/>
</g>
<!-- other arm - shield -->
<line x1="182" y1="305" x2="145" y2="340" stroke="currentColor" stroke-width="12" stroke-linecap="round" opacity=".8"/>
<ellipse cx="132" cy="352" rx="24" ry="36" fill="currentColor" opacity=".7"/>
<!-- defeated foe on ground (small silhouette) -->
<ellipse cx="200" cy="400" rx="70" ry="18" fill="currentColor" opacity=".6"/>
<circle  cx="255" cy="395" r="14"           fill="currentColor" opacity=".55"/>
</svg>`
  },
  {
    id: "default",
    keywords: [],
    svg: `<svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg">
<defs><style>
  .sc-line{animation:sc-write 4s ease-in-out infinite;}
  .sc-line:nth-child(2){animation-delay:.6s;}
  .sc-line:nth-child(3){animation-delay:1.2s;}
  .sc-line:nth-child(4){animation-delay:1.8s;}
  .sc-line:nth-child(5){animation-delay:2.4s;}
  .sc-roll{animation:sc-unroll 3s ease-in-out infinite alternate;}
  @keyframes sc-write{0%,100%{opacity:.25}50%{opacity:.8}}
  @keyframes sc-unroll{from{transform:translateY(-6px)}to{transform:translateY(6px)}}
</style></defs>
<!-- glow behind scroll -->
<ellipse cx="200" cy="290" rx="160" ry="200" fill="currentColor" opacity=".1"/>
<!-- SCROLL main body -->
<g class="sc-roll">
  <!-- scroll body -->
  <rect x="70" y="120" width="260" height="290" rx="8" fill="currentColor" opacity=".45"/>
  <!-- top roll -->
  <ellipse cx="200" cy="120" rx="130" ry="22" fill="currentColor" opacity=".75"/>
  <ellipse cx="200" cy="120" rx="100" ry="16" fill="currentColor" opacity=".4"/>
  <!-- bottom roll -->
  <ellipse cx="200" cy="410" rx="130" ry="22" fill="currentColor" opacity=".75"/>
  <ellipse cx="200" cy="410" rx="100" ry="16" fill="currentColor" opacity=".4"/>
  <!-- side rolls (rods) -->
  <ellipse cx="70"  cy="265" rx="14" ry="145" fill="currentColor" opacity=".7"/>
  <ellipse cx="330" cy="265" rx="14" ry="145" fill="currentColor" opacity=".7"/>
  <!-- inner parchment area -->
  <rect x="84" y="130" width="232" height="278" rx="4" fill="currentColor" opacity=".12"/>
  <!-- text lines on scroll -->
  <line class="sc-line" x1="108" y1="170" x2="292" y2="170" stroke="currentColor" stroke-width="5" stroke-linecap="round" opacity=".6"/>
  <line class="sc-line" x1="108" y1="198" x2="280" y2="198" stroke="currentColor" stroke-width="5" stroke-linecap="round" opacity=".6"/>
  <line class="sc-line" x1="108" y1="226" x2="285" y2="226" stroke="currentColor" stroke-width="5" stroke-linecap="round" opacity=".6"/>
  <line class="sc-line" x1="108" y1="254" x2="270" y2="254" stroke="currentColor" stroke-width="5" stroke-linecap="round" opacity=".6"/>
  <line class="sc-line" x1="108" y1="282" x2="288" y2="282" stroke="currentColor" stroke-width="5" stroke-linecap="round" opacity=".6"/>
  <line x1="108" y1="310" x2="240" y2="310" stroke="currentColor" stroke-width="5" stroke-linecap="round" opacity=".3"/>
  <line x1="108" y1="338" x2="260" y2="338" stroke="currentColor" stroke-width="5" stroke-linecap="round" opacity=".25"/>
  <!-- decorative seal/ornament -->
  <circle cx="200" cy="370" r="20" fill="currentColor" opacity=".5"/>
  <circle cx="200" cy="370" r="12" fill="currentColor" opacity=".25"/>
</g>
<!-- ground shadow -->
<ellipse cx="200" cy="470" rx="150" ry="18" fill="currentColor" opacity=".2"/>
</svg>`
  }
];

function pickScene(pageVerses, pageIndex = 0) {
  const text = pageVerses.map(v => v.text.replace("{0}", v.blanks[0].answer)).join(" ").toLowerCase();
  // adună TOATE scenele care se potrivesc cu tema paginii, în ordinea priorității
  const matches = SCENES.filter(
    (scene) => scene.keywords.length && scene.keywords.some((kw) => text.includes(kw.toLowerCase()))
  );
  if (matches.length === 0) return SCENES[SCENES.length - 1]; // pergamentul implicit
  // dacă mai multe teme se potrivesc, rotește-le în funcție de pagină,
  // ca paginile consecutive cu aceleași cuvinte-cheie să nu arate identic
  return matches[pageIndex % matches.length];
}
