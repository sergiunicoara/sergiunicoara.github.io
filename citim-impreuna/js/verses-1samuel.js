// 1 Samuel, capitol cu capitol, verset cu verset (traducerea Cornilescu).
// Fiecare verset are un singur {0} — cuvântul scos din verset; "answer" este cuvântul
// corect, iar "options" conține răspunsul + 3 momeli asemănătoare (amestecate la afișare).
// NOTĂ: verificați formularea exactă cu Biblia dvs. — corectați direct în acest fișier.

const VERSES_1SAMUEL = [
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

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function cleanVerseText(text) {
  return text.replace(/\s+Biblia traducerea Dumitru Cornilescu.*$/,"").trim();
}

function pickBlankWord(text) {
  const stop = new Set([
    "si", "sa", "se", "s-a", "era", "este", "cand", "caci", "dar", "nu", "in", "la",
    "de", "pe", "cu", "ca", "el", "ea", "ei", "un", "o", "una", "mai", "tot", "toata",
    "acest", "acesta", "aceasta", "pentru", "din", "iar", "sau", "au", "am", "iti",
    "va", "ma", "mi", "ti", "lui", "lor", "noi", "voua", "acolo", "atunci", "insa",
    "inca", "apoi", "doar", "fara", "fie", "fi", "sunt", "vor", "fost", "fiind", "cat",
  ]);

  for (const match of text.matchAll(/\b[A-Za-z][A-Za-z-]*\b/g)) {
    const word = match[0].replace(/^["'.,;:!?()[\]{}]+|["'.,;:!?()[\]{}]+$/g, "");
    if (word.length >= 5 && !stop.has(word.toLowerCase())) {
      return word;
    }
  }

  const fallback = text.match(/\b[A-Za-z][A-Za-z-]*\b/);
  return fallback ? fallback[0] : "Domnul";
}

function makeOptions(answer) {
  const pool = [
    "Ana",
    "Eli",
    "Samuel",
    "Domnul",
    "Israel",
    "chivotul",
    "copilul",
    "femeia",
    "preotul",
    "slava",
    "mantie",
    "jertfa",
    "pace",
    "putere",
    "inima",
    "cetatea",
    "poporul",
    "legea",
    "fii",
    "tabara",
  ];

  return [answer, ...pool.filter((word) => word !== answer).slice(0, 3)];
}

function makeVerse(ref, rawText) {
  const text = cleanVerseText(rawText);
  const answer = pickBlankWord(text);
  const blankedText = text.replace(new RegExp(`\\b${escapeRegExp(answer)}\\b`), "{0}");

  return {
    ref,
    text: blankedText,
    blanks: [{ answer, options: makeOptions(answer) }],
  };
}

const VERSES_1SAMUEL_EXTRA = [
  ["1 Samuel 2:1", "Ana s-a rugat si a zis: \"Mi se bucura inima in Domnul, puterea mea a fost inaltata de Domnul; mi s-a deschis larg gura impotriva vrajmasilor mei, caci ma bucur de ajutorul Tau."],
  ["1 Samuel 2:2", "Nimeni nu este sfant ca Domnul; nu este alt Dumnezeu decat Tine; nu este stanca asa ca Dumnezeul nostru."],
  ["1 Samuel 2:3", "Nu mai vorbiti cu atata ingamfare, sa nu va mai iasa din gura cuvinte de mandrie; caci Domnul este un Dumnezeu care stie totul, si toate faptele sunt cantarite de El."],
  ["1 Samuel 2:4", "Arcul celor puternici s-a sfaramat, si cei slabi sunt incinsi cu putere."],
  ["1 Samuel 2:5", "Cei ce erau satui se inchiriaza pentru paine, si cei ce erau flamanzi se odihnesc; chiar cea stearpa naste de sapte ori, si cea care avea multi copii sta lancezita."],
  ["1 Samuel 2:6", "Domnul omoara si invie, El coboara in Locuinta mortilor si El scoate de acolo."],
  ["1 Samuel 2:7", "Domnul saraceste si El imbogateste, El smereste si El inalta,"],
  ["1 Samuel 2:8", "El ridica din pulbere pe cel sarac, ridica din gunoi pe cel lipsit. Ca sa-i puna sa sada alaturi cu cei mari. Si le da de mostenire un scaun de domnie imbracat cu slava; caci ai Domnului sunt stalpii pamantului si pe ei a asezat El lumea."],
  ["1 Samuel 2:9", "El va pazi pasii preaiubitilor Lui, dar cei rai vor fi nimiciti in intuneric; caci omul nu va birui prin putere."],
  ["1 Samuel 2:10", "Vrajmasii Domnului vor tremura, din inaltimea cerului El Isi va arunca tunetul asupra lor; Domnul va judeca marginile pamantului. El va da Imparatului Sau putere si El va inalta taria Unsului Lui.\""],
  ["1 Samuel 2:11", "Elcana s-a dus acasa la Rama, si copilul a ramas in slujba Domnului, inaintea preotului Eli."],
  ["1 Samuel 2:12", "Fiii lui Eli erau niste oameni rai. Nu cunosteau pe Domnul."],
  ["1 Samuel 2:13", "Si iata care era felul de purtate al acestor preoti fata de popor: Cand aducea cineva o jertfa, venea sluga preotului in clipa cand se fierbea carnea, tinand in mana o furculita cu trei coarne,"],
  ["1 Samuel 2:14", "o vara in cazan, in caldare, in tigaie sau in oala; si tot ce apuca cu furculita lua preotul pentru el. Asa faceau ei tuturor acelora din Israel care veneau la Silo."],
  ["1 Samuel 2:15", "Chiar inainte de a arde grasimea, venea sluga preotului si zicea celui ce aducea jertfa: \"Da pentru preot carnea de fript; el nu va lua de la tine carne fiarta, ci vrea carne cruda.\""],
  ["1 Samuel 2:16", "Si daca omul zicea: \"Dupa ce se va arde grasimea, vei lua ce-ti va placea\", sluga raspundea: \"Nu! Da-mi acum, caci altfel iau cu sila.\""],
  ["1 Samuel 2:17", "Tinerii acestia se faceau vinovati inaintea Domnului de un foarte mare pacat, pentru ca nesocoteau darurile Domnului."],
  ["1 Samuel 2:18", "Samuel facea slujba inaintea Domnului; si copilul acesta era imbracat cu un efod de in."],
  ["1 Samuel 2:19", "Mama sa ii facea pe fiecare an o mantie mica si i-o aducea cand se suia cu barbatul ei ca sa aduca jertfa din fiecare an."],
  ["1 Samuel 2:20", "Eli a binecuvantat pe Elcana si pe nevasta sa si a zis: \"Sa dea Domnul sa ai copii din femeia aceasta, care sa inlocuiasca pe acela pe care l-a imprumutat ea Domnului!\" Si s-au intors acasa."],
  ["1 Samuel 2:21", "Cand a cercetat Domnul pe Ana, ea a ramas insarcinata si a nascut trei fii si doua fiice. Si tanarul Samuel crestea inaintea Domnului."],
  ["1 Samuel 2:22", "Eli era foarte batran si a aflat cum se purtau fiii lui cu tot Israelul; a aflat si ca se culcau cu femeile care slujeau afara la usa Cortului intalnirii."],
  ["1 Samuel 2:23", "El le-a zis: \"Pentru ce faceti astfel de lucruri? Caci aflu de la tot poporul despre faptele voastre rele."],
  ["1 Samuel 2:24", "Nu, copii, ce aud spunandu-se despre voi nu este bine; voi faceti pe poporul Domnului sa pacatuiasca."],
  ["1 Samuel 2:25", "Daca un om pacatuieste impotriva altui om, il va judeca Dumnezeu; dar daca pacatuieste impotriva Domnului, cine se va ruga pentru el?\" Totusi ei n-au ascultat de glasul tatalui lor, caci Domnul voia sa-i omoare."],
  ["1 Samuel 2:26", "Tanarul Samuel crestea mereu si era placut Domnului si oamenilor."],
  ["1 Samuel 2:27", "Un om al lui Dumnezeu a venit la Eli si i-a zis: \"Asa vorbeste Domnul: \"Nu M-am descoperit Eu casei tatalui tau, cand erau in Egipt, in casa lui faraon?"],
  ["1 Samuel 2:28", "Eu l-am ales dintre toate semintiile lui Israel ca sa fie in slujba Mea, in preotie, ca sa se suie la altarul Meu, sa arda tamaia si sa poarte efodul inaintea Mea; si am dat casei tatalui tau toate jertfele mistuite de foc si aduse de copiii lui Israel."],
  ["1 Samuel 2:29", "Pentru ce calcati voi in picioare jertfele Mele si darurile Mele, care am poruncit sa se faca in Locasul Meu? Si cum se face ca tu cinstesti pe fiii tai mai mult decat pe Mine, ca sa va ingrasati din cele dintai roade luate din toate darurile poporului Meu, Israel?\""],
  ["1 Samuel 2:30", "De aceea, iata ce zice Domnul Dumnezeul lui Israel: \"Spusesem ca si casa ta si casa tatalui tau au sa umble intotdeauna inaintea Mea.\" Si acum, zice Domnul, departe de Mine lucrul acesta! Caci voi cinsti pe cine Ma cinsteste, dar cei ce Ma dispretuiesc vor fi dispretuiti."],
  ["1 Samuel 2:31", "Iata ca vine vremea cand voi taia bratul tau si bratul casei tatalui tau, asa incat nu va mai fi niciun batran in casa ta."],
  ["1 Samuel 2:32", "Vei vedea un potrivnic al tau in Locasul Meu, in timp ce Israel va fi coplesit de bunatati de Domnul; si nu va mai fi niciodata niciun batran in casa ta."],
  ["1 Samuel 2:33", "Voi lasa sa ramana la altarul Meu numai unul dintre ai tai, ca sa ti se topeasca ochii de durere si sa ti se intristeze sufletul; dar toti ceilalti din casa ta vor muri in floarea varstei."],
  ["1 Samuel 2:34", "Si iata semnul celor ce se vor intampla celor doi fii ai tai, Hofni si Fineas: amandoi vor muri intr-o zi."],
  ["1 Samuel 2:35", "Eu Imi voi pune un preot credincios, care va lucra dupa inima Mea si dupa sufletul Meu; ii voi zidi o casa statatoare, si va umbla intotdeauna inaintea Unsului Meu."],
  ["1 Samuel 2:36", "Si oricine va mai ramane din casa ta va veni sa se arunce cu fata la pamant inaintea lui, pentru un ban de argint si pentru o bucata de paine, si va zice: \"Pune-ma, te rog, in una din slujbele preotiei, ca sa am o bucata de paine sa mananc.\""],
  ["1 Samuel 3:1", "Tanarul Samuel slujea Domnului inaintea lui Eli. Cuvantul Domnului era rar in vremea aceea, si vedeniile nu erau dese."],
  ["1 Samuel 3:2", "Tot pe vremea aceea, Eli incepea sa aiba ochii tulburi si nu mai putea sa vada. El statea culcat la locul lui,"],
  ["1 Samuel 3:3", "iar candela lui Dumnezeu nu se stinsese inca; si Samuel era culcat in Templul Domnului, unde era chivotul lui Dumnezeu."],
  ["1 Samuel 3:4", "Atunci Domnul a chemat pe Samuel. El a raspuns: \"Iata-ma!\""],
  ["1 Samuel 3:5", "Si a alergat la Eli si a zis: \"Iata-ma, caci m-ai chemat.\" Eli a raspuns: \"Nu te-am chemat; intoarce-te si te culca.\" Si s-a dus si s-a culcat."],
  ["1 Samuel 3:6", "Domnul a chemat din nou pe Samuel. Si Samuel s-a sculat, s-a dus la Eli si a zis: \"Iata-ma, caci m-ai chemat.\" Eli a raspuns: \"Nu te-am chemat, fiule, intoarce-te si te culca.\""],
  ["1 Samuel 3:7", "Samuel nu cunostea inca pe Domnul, si cuvantul Domnului nu-i fusese inca descoperit."],
  ["1 Samuel 3:8", "Domnul a chemat din nou pe Samuel, pentru a treia oara. Si Samuel s-a sculat, s-a dus la Eli si a zis: \"Iata-ma, caci m-ai chemat.\" Eli a inteles ca Domnul cheama pe copil"],
  ["1 Samuel 3:9", "si a zis lui Samuel: \"Du-te, de te culca; si daca vei mai fi chemat, sa spui: \"Vorbeste, Doamne, caci robul Tau asculta.\" Si Samuel s-a dus sa se culce la locul lui."],
  ["1 Samuel 3:10", "Domnul a venit, S-a infatisat si l-a chemat ca si in celelalte dati: \"Samuele, Samuele!\" Si Samuel a raspuns: \"Vorbeste, caci robul Tau asculta.\""],
  ["1 Samuel 3:11", "Atunci Domnul a zis lui Samuel: \"Iata ca voi face in Israel un lucru care va asurzi urechile oricui il va auzi."],
  ["1 Samuel 3:12", "In ziua aceea voi implini asupra lui Eli tot ce am rostit impotriva casei lui; voi incepe si voi ispravi."],
  ["1 Samuel 3:13", "I-am spus ca vreau sa pedepsesc casa lui pentru totdeauna, din pricina faradelegii de care are cunostinta si prin care fiii lui s-au facut vrednici de lepadat, fara ca el sa-i fi oprit."],
  ["1 Samuel 3:14", "De aceea jur casei lui Eli ca niciodata faradelegea casei lui Eli nu va fi ispasita, nici prin jertfe, nici prin daruri de mancare.\""],
  ["1 Samuel 3:15", "Samuel a ramas culcat pana dimineata, apoi a deschis usile Casei Domnului. Samuel s-a temut sa istoriseasca lui Eli vedenia aceea."],
  ["1 Samuel 3:16", "Dar Eli a chemat pe Samuel si a zis: \"Samuele, fiule!\" El a raspuns: \"Iata-ma!\""],
  ["1 Samuel 3:17", "Si Eli a zis: \"Care este cuvantul pe care ti l-a vorbit Domnul? Nu-mi ascunde nimic. Dumnezeu sa Se poarte cu tine cu toata asprimea, daca-mi ascunzi ceva din tot ce ti-a spus!\""],
  ["1 Samuel 3:18", "Samuel i-a istorisit tot, fara sa-i ascunda nimic. Si Eli a zis: \"Domnul este acesta, sa faca ce va crede!\""],
  ["1 Samuel 3:19", "Samuel crestea, Domnul era cu el si n-a lasat sa cada la pamant niciunul din cuvintele Sale."],
  ["1 Samuel 3:20", "Tot Israelul, de la Dan pana la Beer-Seba, a cunoscut ca Domnul pusese pe Samuel proroc al Domnului."],
  ["1 Samuel 3:21", "Domnul nu inceta sa Se arate in Silo; caci Domnul Se descoperea lui Samuel, in Silo, prin cuvantul Domnului."],
  ["1 Samuel 4:1", "Chemarea lui Samuel a ajuns la cunostinta intregului Israel. Israel a iesit inaintea filistenilor ca sa lupte impotriva lor. Au tabarat langa Eben-Ezer, si filistenii tabarasera la Afec."],
  ["1 Samuel 4:2", "Filistenii s-au asezat in linie de bataie impotriva lui Israel, si lupta a inceput. Israel a fost batut de filisteni, care au omorat pe campul de bataie aproape patru mii de oameni."],
  ["1 Samuel 4:3", "Poporul s-a intors in tabara, si batranii lui Israel au zis: \"Pentru ce ne-a lasat Domnul sa fim batuti astazi de filisteni? Haidem sa luam de la Silo chivotul legamantului Domnului, ca sa vina in mijlocul nostru si sa ne izbaveasca din mana vrajmasilor nostri.\""],
  ["1 Samuel 4:4", "Poporul a trimis la Silo, de unde au adus chivotul legamantului Domnului ostirilor, care sade intre heruvimi. Cei doi fii ai lui Eli, Hofni si Fineas, erau acolo, impreuna cu chivotul legamantului lui Dumnezeu."],
  ["1 Samuel 4:5", "Cand a intrat chivotul legamantului Domnului in tabara, tot Israelul a scos strigate de bucurie, de s-a cutremurat pamantul."],
  ["1 Samuel 4:6", "Rasunetul acestor strigate a fost auzit de filisteni, si au zis: \"Ce inseamna strigatele acestea care rasuna in tabara evreilor?\" Si au auzit ca sosise chivotul Domnului in tabara."],
  ["1 Samuel 4:7", "Filistenii s-au temut, pentru ca au crezut ca Dumnezeu venise in tabara. \"Vai de noi!\", au zis ei, \"caci n-a fost asa ceva pana acum."],
  ["1 Samuel 4:8", "Vai de noi! Cine ne va izbavi din mana acestor dumnezei puternici? Dumnezeii acestia au lovit pe egipteni cu tot felul de urgii in pustiu."],
  ["1 Samuel 4:9", "Intariti-va si fiti oameni, filistenilor, ca nu cumva sa fiti robi evreilor, cum v-au fost ei robi voua: fiti oameni si luptati!\""],
  ["1 Samuel 4:10", "Filistenii au inceput lupta, si Israel a fost batut. Fiecare a fugit in cortul lui. Infrangerea a fost foarte mare, si din Israel au cazut treizeci de mii de oameni pedestri."],
  ["1 Samuel 4:11", "Chivotul lui Dumnezeu a fost luat, si cei doi fii ai lui Eli, Hofni si Fineas, au murit."],
  ["1 Samuel 4:12", "Un om din Beniamin a alergat din tabara de bataie si a venit la Silo, in aceeasi zi cu hainele sfasiate si cu capul acoperit cu tarana."],
  ["1 Samuel 4:13", "Cand a ajuns, Eli astepta stand pe un scaun langa drum, caci inima ii era nelinistita pentru chivotul lui Dumnezeu. La intrarea lui in cetate, omul acesta a dat de veste, si toata cetatea a strigat."],
  ["1 Samuel 4:14", "Eli, auzind aceste strigate, a zis: \"Ce insemna zarva aceasta?\" Si indata omul a venit si a adus lui Eli vestea aceasta."],
  ["1 Samuel 4:15", "Si Eli era in varsta de nouazeci si opt de ani, avea ochii intunecati si nu mai putea sa vada."],
  ["1 Samuel 4:16", "Omul a zis lui Eli: \"Vin de pe campul de bataie, si din campul de bataie am fugit astazi.\" Eli a zis: \"Ce s-a intamplat, fiule?\""],
  ["1 Samuel 4:17", "Cel ce aducea vestea aceasta, ca raspuns, a zis: \"Israel a fugit dinaintea filistenilor, si poporul a suferit o mare infrangere; si chiar cei doi fii ai tai, Hofni si Fineas, au murit, si chivotul Domnului a fost luat.\""],
  ["1 Samuel 4:18", "Abia a pomenit de chivotul lui Dumnezeu, si Eli a cazut de pe scaun pe spate, langa poarta; si-a rupt ceafa si a murit, caci era om batran si greu. El fusese judecator in Israel patruzeci de ani."],
  ["1 Samuel 4:19", "Nora sa, nevasta lui Fineas, era insarcinata si sta sa nasca. Cand a auzit vestea despre luarea chivotului lui Dumnezeu, despre moartea socrului ei si despre moartea barbatului ei, s-a incovoiat si a nascut, caci au apucat-o durerile nasterii."],
  ["1 Samuel 4:20", "Cand tragea sa moara, femeile care erau langa ea i-au zis: \"Nu te teme, caci ai nascut un fiu!\" Dar ea n-a raspuns si n-a luat seama la ce i se spunea."],
  ["1 Samuel 4:21", "A pus copilului numele I-Cabod zicand: \"S-a dus slava din Israel!\" Spunea lucrul acesta din pricina luarii chivotului lui Dumnezeu si din pricina socrului si barbatului ei."],
  ["1 Samuel 4:22", "Ea a zis: \"S-a dus slava din Israel, caci chivotul lui Dumnezeu este luat.\""],
  ["1 Samuel 5:1", "Filistenii au luat chivotul lui Dumnezeu si l-au dus din Eben-Ezer la Asdod."],
  ["1 Samuel 5:2", "Dupa ce au pus mana pe chivotul lui Dumnezeu, filistenii l-au dus in casa lui Dagon si l-au asezat langa Dagon."],
  ["1 Samuel 5:3", "A doua zi, asdodienii, care se sculasera dis-de-dimineata, au gasit pe Dagon intins cu fata la pamant, inaintea chivotului Domnului. Au luat pe Dagon si l-au pus inapoi la locul lui."],
  ["1 Samuel 5:4", "Si a doua zi, sculandu-se dis-de-dimineata, au gasit pe Dagon intins cu fata la pamant, inaintea chivotului Domnului; capul lui Dagon si cele doua maini ale lui erau taiate pe prag si nu-i ramasese decat trunchiul."],
  ["1 Samuel 5:5", "De aceea, pana in ziua de azi, preotii lui Dagon si toti cei ce intra in casa lui Dagon, la Asdod, nu calca pe prag."],
  ["1 Samuel 5:6", "Mana Domnului a apasat asupra celor din Asdod si i-a pustiit; i-a lovit cu bube la sezut, atat in Asdod, cat si in tinutul lui."],
  ["1 Samuel 5:7", "Cand au vazut ca asa stau lucrurile, oamenii din Asdod au zis: \"Chivotul Dumnezeului lui Israel sa nu ramana la noi, caci mana Lui apasa asupra noastra si asupra lui Dagon, dumnezeul nostru.\""],
  ["1 Samuel 5:8", "Si au trimis si au adunat la ei pe toti domnitorii filistenilor si au zis: \"Ce sa facem cu chivotul Dumnezeului lui Israel?\" Domnitorii au raspuns: \"Sa se duca la Gat chivotul Dumnezeului lui Israel.\" Si au dus acolo chivotul Dumnezeului lui Israel."],
  ["1 Samuel 5:9", "Dar dupa ce a fost dus acolo, mana Domnului a apasat asupra cetatii, si a fost o mare groaza; a lovit pe oamenii cetatii de la mic la mare, si au avut o spuzenie de bube la sezut."],
  ["1 Samuel 5:10", "Atunci au trimis chivotul lui Dumnezeu la Ecron. Cand a intrat chivotul lui Dumnezeu in Ecron, ecronitii au strigat: \"Au adus la noi chivotul Dumnezeului lui Israel ca sa ne omoare, pe noi si poporul nostru.\""],
  ["1 Samuel 5:11", "Si au trimis si au strans pe toti domnitorii filistenilor si au zis: \"Trimiteti inapoi chivotul Dumnezeului lui Israel; sa se intoarca la locul lui, ca sa nu ne omoare, pe noi si poporul nostru.\" Caci in toata cetatea era o groaza de moarte, si mana lui Dumnezeu apasa cu putere."],
  ["1 Samuel 5:12", "Oamenii care nu mureau erau loviti cu bube la sezut, si tipetele cetatii se inaltau pana la cer."],
];

VERSES_1SAMUEL.push(...VERSES_1SAMUEL_EXTRA.map(([ref, text]) => makeVerse(ref, text)));
