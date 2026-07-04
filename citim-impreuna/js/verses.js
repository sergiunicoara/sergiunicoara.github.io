// 1 Samuel, capitolul 1, verset cu verset (traducerea Cornilescu).
// Fiecare verset are un singur {0} — cuvântul scos din verset; "answer" este cuvântul
// corect, iar "options" conține răspunsul + 3 momeli asemănătoare (amestecate la afișare).
// NOTĂ: verificați formularea exactă cu Biblia dvs. — corectați direct în acest fișier.
// Pentru a adăuga capitolul următor, adăugați obiecte în același format la sfârșitul listei.

const VERSES = [
  {
    ref: "1 Samuel 1:1",
    text: "Era un om din Ramataim-Țofim, din muntele lui Efraim, numit {0}, fiul lui Ieroham, fiul lui Elihu, fiul lui Tohu, fiul lui Țuf, Efratit.",
    blanks: [{ answer: "Elcana", options: ["Elcana", "Eli", "Ionatan", "Saul"] }],
  },
  {
    ref: "1 Samuel 1:2",
    text: "El avea două neveste: una se numea Ana, iar cealaltă Penina. Penina avea {0}, dar Ana n-avea.",
    blanks: [{ answer: "copii", options: ["copii", "avere", "bărbați", "robi"] }],
  },
  {
    ref: "1 Samuel 1:3",
    text: "Omul acesta se suia în fiecare an din cetatea sa la {0}, ca să se închine înaintea Domnului oștirilor și să-I aducă jertfe. Acolo se aflau cei doi fii ai lui Eli, Hofni și Fineas, preoți ai Domnului.",
    blanks: [{ answer: "Silo", options: ["Silo", "Ghilgal", "Betel", "Mițpa"] }],
  },
  {
    ref: "1 Samuel 1:4",
    text: "În ziua când își aducea Elcana {0}, dădea părți nevestei sale Penina, tuturor fiilor și tuturor fiicelor pe care le avea de la ea.",
    blanks: [{ answer: "jertfa", options: ["jertfa", "cina", "darul", "prinosul"] }],
  },
  {
    ref: "1 Samuel 1:5",
    text: "Dar Anei îi dădea o parte îndoită; căci iubea pe Ana. Dar Domnul o făcuse {0}.",
    blanks: [{ answer: "stearpă", options: ["stearpă", "bolnavă", "tristă", "singură"] }],
  },
  {
    ref: "1 Samuel 1:6",
    text: "{0} ei o înțepa deseori, ca s-o facă să se mânie, pentru că Domnul o făcuse stearpă.",
    blanks: [{ answer: "Potrivnica", options: ["Potrivnica", "sora", "prietena", "vecina"] }],
  },
  {
    ref: "1 Samuel 1:7",
    text: "Și în toți anii era așa. Ori de câte ori se suia Ana la Casa Domnului, Penina o înțepa la fel. Atunci ea {0} și nu mânca.",
    blanks: [{ answer: "plângea", options: ["plângea", "striga", "tăcea", "fugea"] }],
  },
  {
    ref: "1 Samuel 1:8",
    text: "Elcana, bărbatul ei, îi zicea: „Ano, pentru ce plângi și nu mănânci? Pentru ce ți-este întristată inima? Oare nu prețuiesc eu pentru tine mai mult decât {0} fii?”",
    blanks: [{ answer: "zece", options: ["zece", "șapte", "cinci", "doisprezece"] }],
  },
  {
    ref: "1 Samuel 1:9",
    text: "Ana s-a sculat, după ce au mâncat și au băut ei la Silo. Preotul {0} ședea pe un scaun, lângă unul din ușorii Templului Domnului.",
    blanks: [{ answer: "Eli", options: ["Eli", "Fineas", "Hofni", "Ahia"] }],
  },
  {
    ref: "1 Samuel 1:10",
    text: "Și Ana se ruga Domnului cu sufletul {0} și plângea.",
    blanks: [{ answer: "amărât", options: ["amărât", "obosit", "înfricoșat", "tulburat"] }],
  },
  {
    ref: "1 Samuel 1:11",
    text: "Ea a făcut o juruință și a zis: „Doamne, Dumnezeul oștirilor! Dacă vei binevoi să cauți spre întristarea roabei Tale, dacă-Ți vei aduce aminte de mine și nu vei uita pe roaba Ta și dacă vei da roabei Tale un copil de parte bărbătească, îl voi închina Domnului pentru toate zilele vieții lui, și {0} nu va trece peste capul lui.”",
    blanks: [{ answer: "brici", options: ["brici", "cuțit", "satâr", "foarfece"] }],
  },
  {
    ref: "1 Samuel 1:12",
    text: "Fiindcă ea stătea multă vreme în {0} înaintea Domnului, Eli se uita cu băgare de seamă la gura ei.",
    blanks: [{ answer: "rugăciune", options: ["rugăciune", "tăcere", "durere", "cântare"] }],
  },
  {
    ref: "1 Samuel 1:13",
    text: "Ana vorbea în inima ei și numai buzele și le mișca, dar nu i se auzea glasul. Eli credea că este {0}.",
    blanks: [{ answer: "beată", options: ["beată", "bolnavă", "nebună", "obosită"] }],
  },
  {
    ref: "1 Samuel 1:14",
    text: "și i-a zis: „Până când vei fi beată? Du-te de te {0}!”",
    blanks: [{ answer: "trezește", options: ["trezește", "odihnește", "liniștește", "ascunde"] }],
  },
  {
    ref: "1 Samuel 1:15",
    text: "Ana a răspuns: „Nu, domnul meu, eu sunt o femeie care suferă în inima ei, și n-am băut nici vin, nici băutură amețitoare; ci îmi {0} sufletul înaintea Domnului.”",
    blanks: [{ answer: "vărsam", options: ["vărsam", "deschideam", "dădeam", "înălțam"] }],
  },
  {
    ref: "1 Samuel 1:16",
    text: "Să nu iei pe roaba ta drept o femeie {0}, căci numai prea multa mea durere și supărare m-a făcut să vorbesc până acum.”",
    blanks: [{ answer: "stricată", options: ["stricată", "nebună", "beată", "ticăloasă"] }],
  },
  {
    ref: "1 Samuel 1:17",
    text: "Eli a luat din nou cuvântul și a zis: „Du-te în {0}, și Dumnezeul lui Israel să asculte rugăciunea pe care I-ai făcut-o!”",
    blanks: [{ answer: "pace", options: ["pace", "bucurie", "liniște", "sănătate"] }],
  },
  {
    ref: "1 Samuel 1:18",
    text: "Ea a zis: „Să capete roaba ta trecere înaintea ta!” Și femeia a plecat. A mâncat, și fața ei n-a mai fost {0}.",
    blanks: [{ answer: "aceeași", options: ["aceeași", "tristă", "veselă", "palidă"] }],
  },
  {
    ref: "1 Samuel 1:19",
    text: "S-au sculat dis-de-dimineață și, după ce s-au închinat până la pământ înaintea Domnului, s-au întors și au venit acasă la {0}.",
    blanks: [{ answer: "Rama", options: ["Rama", "Silo", "Ghilgal", "Betel"] }],
  },
  {
    ref: "1 Samuel 1:20",
    text: "Când i s-au împlinit zilele, Ana a rămas însărcinată și a născut un fiu, căruia i-a pus numele {0}; „căci”, a zis ea, „de la Domnul l-am cerut.”",
    blanks: [{ answer: "Samuel", options: ["Samuel", "Saul", "Ionatan", "David"] }],
  },
  {
    ref: "1 Samuel 1:21",
    text: "Bărbatul ei, Elcana, s-a suit apoi cu toată casa lui să aducă Domnului jertfa de peste an și să-și împlinească {0}.",
    blanks: [{ answer: "juruința", options: ["juruința", "făgăduința", "promisiunea", "legământul"] }],
  },
  {
    ref: "1 Samuel 1:22",
    text: "Dar Ana nu s-a suit și a zis bărbatului ei: „Când voi {0} copilul, îl voi duce, ca să fie pus înaintea Domnului și să rămână acolo pentru totdeauna.”",
    blanks: [{ answer: "înțărca", options: ["înțărca", "crește", "hrăni", "educa"] }],
  },
  {
    ref: "1 Samuel 1:23",
    text: "Elcana, bărbatul ei, i-a zis: „Fă ce vei crede, așteaptă până-l vei înțărca. Numai să împlinească Domnul {0} Lui!” Și femeia a rămas acasă și a dat țâță fiului ei, până l-a înțărcat.",
    blanks: [{ answer: "cuvântul", options: ["cuvântul", "planul", "gândul", "voia"] }],
  },
  {
    ref: "1 Samuel 1:24",
    text: "Când l-a înțărcat, l-a suit cu ea și a luat trei {0}, o efă de făină și un burduf cu vin. L-a dus în Casa Domnului la Silo: copilul era încă mic de tot.",
    blanks: [{ answer: "tauri", options: ["tauri", "miei", "țapi", "boi"] }],
  },
  {
    ref: "1 Samuel 1:25",
    text: "Au {0} taurii și au dus copilul la Eli.",
    blanks: [{ answer: "înjunghiat", options: ["înjunghiat", "mânat", "adăpat", "vândut"] }],
  },
  {
    ref: "1 Samuel 1:26",
    text: "Ana a zis: „Domnul meu, iartă-mă! Cât este de adevărat că sufletul tău trăiește, domnul meu, atât este de adevărat că eu sunt femeia aceea care stăteam aici lângă tine și mă {0} Domnului.”",
    blanks: [{ answer: "rugam", options: ["rugam", "plângeam", "gândeam", "jeluiam"] }],
  },
  {
    ref: "1 Samuel 1:27",
    text: "Pentru copilul acesta mă rugam, și Domnul a {0} rugăciunea pe care I-o făceam.",
    blanks: [{ answer: "ascultat", options: ["ascultat", "primit", "binecuvântat", "iertat"] }],
  },
  {
    ref: "1 Samuel 1:28",
    text: "De aceea vreau să-l dau Domnului: toată {0} lui să fie dat Domnului. Și s-au închinat acolo înaintea Domnului.",
    blanks: [{ answer: "viața", options: ["viața", "inima", "munca", "timpul"] }],
  },
];
