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
  ["1 Samuel 6:1", "{0} Domnului a fost sapte luni in tara filistenilor."], // Chivotul
  ["1 Samuel 6:2", "Si {0} au chemat pe preoti si pe ghicitori si au zis: \"Ce sa facem cu chivotul Domnului? Aratati-ne cum trebuie sa-l trimitem inapoi la locul lui.\""], // filistenii
  ["1 Samuel 6:3", "Ei au {0}: \"Daca trimiteti inapoi chivotul Dumnezeului lui Israel, sa nu-l trimiteti cu mana goala, ci aduceti lui Dumnezeu o jertfa pentru vina; atunci va veti vindeca si veti sti pentru ce nu s-a indepartat mana Lui de peste voi.\""], // raspuns
  ["1 Samuel 6:4", "{0} au zis: \"Ce jertfa pentru vina sa-I aducem?\" Ei au raspuns: \"Cinci umflaturi de aur si cinci soareci de aur, dupa numarul domnitorilor filistenilor, caci aceeasi urgie a fost peste voi toti si peste domnitorii vostri."], // Filistenii
  ["1 Samuel 6:5", "{0} niste chipuri dupa umflaturile voastre si niste chipuri dupa soarecii vostri care pustiesc tara si dati slava Dumnezeului lui Israel: poate ca va inceta sa-Si apese mana peste voi, peste dumnezeii vostri si peste tara voastra."], // Faceti
  ["1 Samuel 6:6", "Pentru ce sa va {0} inima, cum si-au impietrit inima egiptenii si faraon? Nu i-a pedepsit El, si n-au lasat ei atunci pe copiii lui Israel sa plece?"], // impietriti
  ["1 Samuel 6:7", "Acum, {0} un car nou de tot si luati doua vaci tinere care dau tata si care n-au tras la jug; injugati vacile la car si manati inapoi acasa viteii lor care se tin dupa ele."], // faceti
  ["1 Samuel 6:8", "Sa {0} chivotul Domnului si sa-l puneti in car; sa puneti alaturi de el, intr-o lada, lucrurile de aur pe care le dati Domnului ca dar pentru vina; apoi sa-l trimiteti, si va pleca."], // luati
  ["1 Samuel 6:9", "Sa-l {0} cu privirea; si daca se va sui pe drumul hotarului sau spre Bet-Semes, Domnul ne-a facut acest mare rau; daca nu, vom sti ca nu mana Lui ne-a lovit, ci lucrul acesta a venit peste noi din intamplare.\""], // urmariti
  ["1 Samuel 6:10", "{0} au facut asa. Au luat doua vaci care alaptau, le-au injugat la car si le-au inchis viteii acasa."], // Oamenii
  ["1 Samuel 6:11", "Au pus in car {0} Domnului si lada cu soarecii de aur si chipurile umflaturilor lor."], // chivotul
  ["1 Samuel 6:12", "{0} au apucat drept pe drum spre Bet-Semes; au tinut mereu acelasi drum, mugind, si nu s-au abatut nici la dreapta, nici la stanga. Domnitorii filistenilor au mers dupa ele pana la hotarul Bet-Semesului."], // Vacile
  ["1 Samuel 6:13", "{0} din Bet-Semes secerau granele in vale: au ridicat ochii, au zarit chivotul si s-au bucurat cand l-au vazut."], // Locuitorii
  ["1 Samuel 6:14", "{0} a ajuns in campul lui Iosua din Bet-Semes si s-a oprit acolo. Acolo era o piatra mare. Au despicat lemnele carului, si vacile le-au adus ca ardere de tot Domnului."], // Carul
  ["1 Samuel 6:15", "{0} au coborat chivotul Domnului si lada de langa el in care se aflau lucrurile de aur si le-au pus pe toate pe piatra cea mare. Oamenii din Bet-Semes au adus Domnului in ziua aceea arderi de tot si jertfe."], // Levitii
  ["1 Samuel 6:16", "Cei {0} domnitori ai filistenilor, dupa ce au vazut lucrul acesta, s-au intors la Ecron in aceeasi zi."], // cinci
  ["1 Samuel 6:17", "Iata {0} de aur pe care le-au dat Domnului, filistenii, ca dar pentru vina: una pentru Asdod, una pentru Gaza, una pentru Ascalon, una pentru Gat, una pentru Ecron."], // umflaturile
  ["1 Samuel 6:18", "Erau si {0} soareci de aur, dupa numarul tuturor cetatilor filistenilor, care erau ale celor cinci capetenii, atat cetati intarite, cat si cetati fara ziduri. Lucrul acesta il adevereste piatra cea mare pe care au pus chivotul Domnului si care este si astazi in campul lui Iosua din Bet-Semes."], // niste
  ["1 Samuel 6:19", "{0} a lovit pe oamenii din Bet-Semes, cand s-au uitat in chivotul Domnului; a lovit (cincizeci de mii) saptezeci de oameni din popor. Si poporul a plans, pentru ca Domnul il lovise cu o mare urgie."], // Domnul
  ["1 Samuel 6:20", "{0} din Bet-Semes au zis: \"Cine poate sta inaintea Domnului, inaintea acestui Dumnezeu sfant? Si la cine trebuie sa se suie chivotul, daca se departeaza de la noi?\""], // Oamenii
  ["1 Samuel 6:21", "Au {0} soli la locuitorii din Chiriat-Iearim ca sa le spuna: \"Filistenii au adus inapoi chivotul Domnului; coborati-va si suiti-l la voi.\""], // trimis
  ["1 Samuel 7:1", "{0} din Chiriat-Iearim au venit si au suit chivotul Domnului; l-au dus in casa lui Abinadab, pe deal, si au sfintit pe fiul sau Eleazar ca sa pazeasca chivotul Domnului."], // Locuitorii
  ["1 Samuel 7:2", "{0} destula vreme din ziua cand fusese pus chivotul in Chiriat-Iearim. Trecusera douazeci de ani. Atunci toata casa lui Israel a plans dupa Domnul."], // Trecuse
  ["1 Samuel 7:3", "{0} a zis intregii case a lui Israel: \"Daca din toata inima voastra va intoarceti la Domnul, scoateti din mijlocul vostru dumnezeii straini si Astarteile, indreptati-va inima spre Domnul si slujiti-I numai Lui; si El va va izbavi din mana filistenilor.\""], // Samuel
  ["1 Samuel 7:4", "Si {0} lui Israel au scos din mijlocul lor Baalii si Astarteile si au slujit numai Domnului."], // copiii
  ["1 Samuel 7:5", "{0} a zis: \"Strangeti pe tot Israelul la Mitpa, si eu ma voi ruga Domnului pentru voi.\""], // Samuel
  ["1 Samuel 7:6", "Si s-au {0} la Mitpa. Au scos apa si au varsat-o inaintea Domnului, si au postit in ziua aceea, zicand: \"Am pacatuit impotriva Domnului!\" Samuel judeca pe copiii lui Israel la Mitpa."], // strans
  ["1 Samuel 7:7", "{0} au aflat ca fiii lui Israel se adunasera la Mitpa, si domnitorii filistenilor s-au suit impotriva lui Israel. La vestea aceasta copiii lui Israel s-au temut de filisteni"], // Filistenii
  ["1 Samuel 7:8", "si au zis lui {0}: \"Nu inceta sa strigi pentru noi catre Domnul Dumnezeul nostru, ca sa ne scape din mana filistenilor.\""], // Samuel
  ["1 Samuel 7:9", "{0} a luat un miel sugar si l-a adus intreg ca ardere de tot Domnului. A strigat catre Domnul pentru Israel, si Domnul l-a ascultat."], // Samuel
  ["1 Samuel 7:10", "Pe cand {0} Samuel arderea de tot, filistenii s-au apropiat ca sa bata pe Israel. Domnul a tunat in ziua aceea cu mare vuiet impotriva filistenilor si i-a pus pe fuga. Au fost batuti dinaintea lui Israel."], // aducea
  ["1 Samuel 7:11", "{0} lui Israel au iesit din Mitpa, au urmarit pe filisteni si i-au batut pana sub Bet-Car."], // Barbatii
  ["1 Samuel 7:12", "{0} a luat o piatra pe care a pus-o intre Mitpa si Sen si i-a pus numele Eben-Ezer, zicand: \"Pana aici Domnul ne-a ajutat.\""], // Samuel
  ["1 Samuel 7:13", "{0} au fost smeriti filistenii si n-au mai venit pe tinutul lui Israel. Mana Domnului a fost impotriva filistenilor in tot timpul vietii lui Samuel."], // Astfel
  ["1 Samuel 7:14", "{0} pe care le luasera filistenii de la Israel s-au intors la Israel, de la Ecron pana la Gat, cu tinutul lor; Israel le-a smuls din mana filistenilor. Si a fost pace intre Israel si amoriti."], // Cetatile
  ["1 Samuel 7:15", "{0} a fost judecator in Israel in tot timpul vietii lui."], // Samuel
  ["1 Samuel 7:16", "El se {0} in fiecare an de facea inconjurul Betelului, Ghilgalului si Mitpei si judeca pe Israel in toate locurile acestea."], // ducea
  ["1 Samuel 7:17", "Apoi se {0} la Rama, unde era casa lui; si acolo judeca pe Israel. Si a zidit acolo un altar Domnului."], // intorcea
  ["1 Samuel 8:1", "Cand a {0} Samuel, a pus pe fiii sai judecatori peste Israel."], // imbatranit
  ["1 Samuel 8:2", "Fiul sau {0} nascut se numea Ioel, si al doilea Abia; ei erau judecatori la Beer-Seba."], // intai
  ["1 Samuel 8:3", "Fiii lui {0} n-au calcat pe urmele lui; ci se dadeau la lacomie, luau mita si calcau dreptatea."], // Samuel
  ["1 Samuel 8:4", "Toti {0} lui Israel s-au strans si au venit la Samuel, la Rama."], // batranii
  ["1 Samuel 8:5", "Ei au zis: \"Iata ca tu esti {0}, si copiii tai nu calca pe urmele tale; acum pune un imparat peste noi sa ne judece, cum au toate neamurile.\""], // batran
  ["1 Samuel 8:6", "{0} n-a vazut cu placere faptul ca ziceau: \"Da-ne un imparat ca sa ne judece.\" Si Samuel s-a rugat Domnului."], // Samuel
  ["1 Samuel 8:7", "{0} a zis lui Samuel: \"Asculta glasul poporului in tot ce-ti va spune; caci nu pe tine te leapada, ci pe Mine Ma leapada, ca sa nu mai domnesc peste ei."], // Domnul
  ["1 Samuel 8:8", "Ei se {0} cu tine cum s-au purtat intotdeauna, de cand i-am scos din Egipt pana in ziua de astazi; M-au parasit si au slujit altor dumnezei."], // poarta
  ["1 Samuel 8:9", "{0} glasul deci; dar instiinteaza-i si fa-le cunoscut dreptul imparatului care va domni peste ei.\""], // Asculta-le
  ["1 Samuel 8:10", "{0} a spus toate cuvintele Domnului poporului care-i cerea un imparat."], // Samuel
  ["1 Samuel 8:11", "El a zis: \"Iata care va fi {0} imparatului care va domni peste voi: el va lua pe fiii vostri, ii va pune la carele sale si intre calaretii lui, ca sa alerge inaintea carului lui;"], // dreptul
  ["1 Samuel 8:12", "ii va pune {0} peste o mie si capetenii peste cincizeci si-i va intrebuinta la aratul pamanturilor lui, la seceratul bucatelor lui, la facerea armelor lui de razboi si a uneltelor carelor lui."], // capetenii
  ["1 Samuel 8:13", "Va lua pe {0} voastre sa-i faca miresme de mancare si paine."], // fetele
  ["1 Samuel 8:14", "Va lua cea mai buna {0} din campiile voastre, din viile voastre si din maslinii vostri si o va da slujitorilor lui."], // parte
  ["1 Samuel 8:15", "Va lua {0} din rodul semintelor si viilor voastre si o va da famenilor si slujitorilor lui."], // zeciuiala
  ["1 Samuel 8:16", "Va lua pe {0} si roabele voastre, cei mai buni boi si magari ai vostri, si-i va intrebuinta la lucrarile lui."], // robii
  ["1 Samuel 8:17", "Va lua {0} din oile voastre, si voi insiva veti fi slugile lui."], // zeciuiala
  ["1 Samuel 8:18", "Si atunci veti {0} impotriva imparatului vostru pe care-l veti alege, dar Domnul nu va va asculta.\""], // striga
  ["1 Samuel 8:19", "{0} n-a vrut sa asculte glasul lui Samuel. \"Nu!\", au zis ei, \"ci sa fie un imparat peste noi,"], // Poporul
  ["1 Samuel 8:20", "ca sa fim si noi ca {0} neamurile; imparatul nostru ne va judeca, va merge in fruntea noastra si ne va carmui in razboaiele noastre.\""], // toate
  ["1 Samuel 8:21", "{0}, dupa ce a auzit toate cuvintele poporului, le-a spus in auzul Domnului."], // Samuel
  ["1 Samuel 8:22", "Si {0} a zis lui Samuel: \"Asculta-le glasul si pune un imparat peste ei.\" Si Samuel a zis barbatilor lui Israel: \"Duceti-va fiecare in cetatea lui.\""], // Domnul
  ["1 Samuel 9:1", "Era un om din {0}, numit Chis, fiul lui Abiel, fiul lui Teror, fiul lui Becorat, fiul lui Afiah, fiul unui beniamit, un om tare si voinic."], // Beniamin
  ["1 Samuel 9:2", "El avea un fiu cu {0} Saul, tanar si frumos, mai frumos decat oricare din copiii lui Israel. Si-i intrecea pe toti in inaltime, de la umar in sus."], // numele
  ["1 Samuel 9:3", "{0} lui Chis, tatal lui Saul, s-au ratacit; si Chis a zis fiului sau Saul: \"Ia cu tine o sluga, scoala-te si du-te de cauta magaritele.\""], // Magaritele
  ["1 Samuel 9:4", "Saul a {0} prin muntele lui Efraim si a strabatut tara Salisa fara sa le gaseasca; au trecut prin tara Saalim, si nu erau acolo; au strabatut tara lui Beniamin, si nu le-au gasit."], // trecut
  ["1 Samuel 9:5", "{0} in tara Tuf, cand Saul a zis slugii care il insotea: \"Haide sa ne intoarcem, ca nu cumva tatal meu, lasand magaritele, sa fie ingrijorat de noi.\""], // Ajunsesera
  ["1 Samuel 9:6", "{0} i-a zis: \"Iata ca in cetatea aceasta este un om al lui Dumnezeu, un om cu vaza; tot ce spune el nu se poate sa nu se intample. Haidem la el dar; poate ca ne va arata drumul pe care trebuie sa apucam.\""], // Sluga
  ["1 Samuel 9:7", "Saul a zis {0} sale: \"Dar daca mergem acolo, ce sa aducem omului lui Dumnezeu? Caci nu mai avem merinde in saci si n-avem niciun dar de adus omului lui Dumnezeu. Ce avem?\""], // slugii
  ["1 Samuel 9:8", "{0} a luat din nou cuvantul si a zis lui Saul: \"Uite, eu am la mine un sfert de siclu de argint; il voi da omului lui Dumnezeu, si ne va arata drumul.\" -"], // Sluga
  ["1 Samuel 9:9", "{0} in Israel, cand se ducea cineva sa intrebe pe Dumnezeu, zicea: \"Haidem sa mergem la vazator!\" Caci acela care se numeste azi proroc, se numea odinioara vazator. -"], // Odinioara
  ["1 Samuel 9:10", "Saul a zis {0}: \"Ai dreptate; haidem sa mergem!\" Si s-au dus in cetatea unde era omul lui Dumnezeu."], // slugii
  ["1 Samuel 9:11", "Pe cand se {0} ei spre cetate, au intalnit niste fete care iesisera sa scoata apa; si le-au zis: \"Aici este vazatorul?\""], // suiau
  ["1 Samuel 9:12", "Ele {0} raspuns: \"Da, iata-l inaintea ta; dar du-te repede, astazi a venit in cetate, pentru ca poporul aduce jertfa pe inaltime."], // le-au
  ["1 Samuel 9:13", "Cand veti {0} in cetate, il veti gasi inainte ca sa se suie la locul inalt sa manance; caci poporul nu mananca pana nu vine el, fiindca el trebuie sa binecuvanteze jertfa; dupa aceea, mananca si cei poftiti. Suiti-va, dar, caci acum il veti gasi.\""], // intra
  ["1 Samuel 9:14", "Si s-au suit in {0}. Tocmai cand intrau pe poarta cetatii, au fost intalniti de Samuel, care iesea sa se suie pe inaltime."], // cetate
  ["1 Samuel 9:15", "Dar, cu o zi mai {0} de venirea lui Saul, Domnul instiintase pe Samuel si-i zisese:"], // inainte
  ["1 Samuel 9:16", "\"{0}, la ceasul acesta, iti voi trimite un om din tara lui Beniamin, si sa-l ungi drept capetenie a poporului Meu, Israel. El va scapa poporul Meu din mana filistenilor, caci am cautat cu indurare spre poporul Meu, pentru ca strigatul lui a ajuns pana la Mine.\""], // Maine
  ["1 Samuel 9:17", "Cand a {0} Samuel pe Saul, Domnul i-a zis: \"Iata omul despre care ti-am vorbit; el va domni peste poporul Meu.\""], // zarit
  ["1 Samuel 9:18", "Saul s-a {0} de Samuel la mijlocul portii si a zis: \"Arata-mi, te rog, unde este casa vazatorului.\""], // apropiat
  ["1 Samuel 9:19", "{0} a raspuns lui Saul: \"Eu sunt vazatorul. Suie-te inaintea mea pe inaltime si veti manca astazi cu mine. Maine te voi lasa sa pleci si-ti voi spune tot ce se petrece in inima ta."], // Samuel
  ["1 Samuel 9:20", "Nu te {0} de magaritele pe care le-ai pierdut acum trei zile, caci s-au gasit. Si pentru cine este pastrat tot ce este mai de pret in Israel? Oare nu pentru tine si pentru toata casa tatalui tau?\""], // nelinisti
  ["1 Samuel 9:21", "Saul a {0}: \"Oare nu sunt eu beniamit, din una din cele mai mici semintii ale lui Israel? Si familia mea nu este cea mai mica dintre toate familiile din semintia lui Beniamin? Pentru ce, dar, imi vorbesti astfel?\""], // raspuns
  ["1 Samuel 9:22", "{0} a luat pe Saul si pe sluga lui i-a varat in odaia de mancare, le-a dat locul cei dintai intre cei poftiti, care erau aproape treizeci de insi."], // Samuel
  ["1 Samuel 9:23", "{0} a zis bucatarului: \"Adu portia pe care ti-am dat-o, cand ti-am zis: \"Pune-o deoparte.\""], // Samuel
  ["1 Samuel 9:24", "{0} a dat spata si ce era pe ea si a pus-o inaintea lui Saul. Si Samuel a zis: \"Iata ce a fost pastrat, pune-o inainte si mananca, fiindca pentru tine s-a pastrat cand am poftit poporul.\" Astfel Saul a mancat cu Samuel in ziua aceea."], // Bucatarul
  ["1 Samuel 9:25", "S-au {0} apoi de pe inaltime in cetate, si Samuel a stat de vorba cu Saul pe acoperisul casei."], // coborat
  ["1 Samuel 9:26", "Apoi s-au {0} dis-de-dimineata; si in revarsatul zorilor, Samuel a chemat pe Saul de pe acoperis si a zis: \"Scoala-te, si te voi insoti.\" Saul s-a sculat, si au iesit amandoi, el si Samuel."], // sculat
  ["1 Samuel 9:27", "Cand s-au {0} la marginea cetatii, Samuel a zis lui Saul: \"Spune slugii tale sa treaca inaintea noastra.\" Si sluga a trecut inainte. \"Opreste-te acum\", a zis iarasi Samuel, \"si-ti voi face cunoscut cuvantul lui Dumnezeu.\""], // coborat
  ["1 Samuel 10:1", "{0} a luat sticluta cu untdelemn si a turnat-o pe capul lui Saul. Apoi l-a sarutat si a zis: \"Nu te-a uns Domnul ca sa fii capetenia mostenirii Lui?"], // Samuel
  ["1 Samuel 10:2", "{0}, dupa ce ma vei parasi, vei gasi doi oameni la mormantul Rahelei, in hotarul lui Beniamin, la Teltah. Ei iti vor zice: \"Magaritele pe care te-ai dus sa le cauti s-au gasit; si iata ca tatal tau nu se mai gandeste la magarite, ci este ingrijorat de voi si zice: \"Ce sa fac pentru fiul meu?\""], // Astazi
  ["1 Samuel 10:3", "De acolo vei {0} mai departe si vei ajunge la stejarul din Tabor, unde vei fi intampinat de trei oameni suindu-se la Dumnezeu, in Betel, si ducand unul trei iezi, altul trei turte de paine, iar altul un burduf cu vin."], // merge
  ["1 Samuel 10:4", "Ei te vor {0} de sanatate si-ti vor da doua paini, pe care le vei lua din mana lor."], // intreba
  ["1 Samuel 10:5", "Dupa {0}, vei ajunge la Ghibeea Elohim, unde se afla garnizoana filistenilor. Cand vei intra in cetate, vei intalni o ceata de proroci coborandu-se de pe inaltimea pentru jertfa, cu laute, timpane, fluiere si cobze inainte, si prorocind."], // aceea
  ["1 Samuel 10:6", "{0} Domnului va veni peste tine, vei proroci cu ei si vei fi prefacut intr-alt om."], // Duhul
  ["1 Samuel 10:7", "Cand ti se vor {0} semnele acestea, fa ce vei gasi de facut, caci Dumnezeu este cu tine."], // implini
  ["1 Samuel 10:8", "Apoi sa te {0} inaintea mea la Ghilgal; si eu ma voi cobori la tine, ca sa aduc arderi de tot si jertfe de multumire. Sa ma astepti sapte zile acolo, pana voi ajunge eu la tine si-ti voi spune ce ai sa faci.\""], // cobori
  ["1 Samuel 10:9", "De {0} ce Saul a intors spatele ca sa se desparta de Samuel, Dumnezeu i-a dat o alta inima, si toate semnele acestea s-au implinit in aceeasi zi."], // indata
  ["1 Samuel 10:10", "Cand au {0} la Ghibeea, iata ca i-a iesit inainte o ceata de proroci. Duhul lui Dumnezeu a venit peste el si el a prorocit in mijlocul lor."], // ajuns
  ["1 Samuel 10:11", "Toti cei ce-l {0} mai inainte au vazut ca prorocea impreuna cu prorocii si isi ziceau unul altuia in popor: \"Ce s-a intamplat cu fiul lui Chis? Oare si Saul este intre proroci?\""], // cunoscusera
  ["1 Samuel 10:12", "{0} din Ghibeea a raspuns: \"Si cine este tatal lor?\" - De-acolo zicala: \"Oare si Saul este intre proroci?\" -"], // Cineva
  ["1 Samuel 10:13", "Cand a {0} de prorocit, s-a dus pe inaltime."], // sfarsit
  ["1 Samuel 10:14", "{0} lui Saul a zis lui Saul si slugii lui: \"Unde v-ati dus?\" Saul a raspuns: \"Sa cautam magaritele; dar cand am vazut ca nu le gasim, ne-am dus la Samuel.\""], // Unchiul
  ["1 Samuel 10:15", "{0} lui Saul a zis din nou: \"Istoriseste-mi, dar, ce v-a spus Samuel.\""], // Unchiul
  ["1 Samuel 10:16", "Si Saul a {0} unchiului sau: \"Ne-a spus ca magaritele s-au gasit.\" Si nu i-a spus nimic despre imparatia despre care vorbise Samuel."], // raspuns
  ["1 Samuel 10:17", "{0} a chemat poporul inaintea Domnului, la Mitpa"], // Samuel
  ["1 Samuel 10:18", "si a zis {0} lui Israel: \"Asa vorbeste Domnul Dumnezeul lui Israel: \"Eu am scos din Egipt pe Israel si v-am izbavit din mana egiptenilor si din mana tuturor imparatiilor care va apasau."], // copiilor
  ["1 Samuel 10:19", "Si {0}, voi lepadati pe Dumnezeul vostru, care v-a izbavit din toate relele si din toate suferintele voastre, si-I ziceti: \"Pune un imparat peste noi!\" Infatisati-va acum inaintea Domnului, dupa semintiile voastre si dupa miile voastre.\""], // astazi
  ["1 Samuel 10:20", "{0} a apropiat toate semintiile lui Israel, si a iesit la sorti semintia lui Beniamin."], // Samuel
  ["1 Samuel 10:21", "A {0} semintia lui Beniamin pe familii, si a iesit la sorti familia lui Matri. Apoi a iesit la sorti Saul, fiul lui Chis. L-au cautat, dar nu l-au gasit."], // apropiat
  ["1 Samuel 10:22", "Au {0} din nou pe Domnul: \"A venit oare omul acesta aici?\" Si Domnul a zis: \"Iata ca este ascuns intre vase.\""], // intrebat
  ["1 Samuel 10:23", "Au {0} si l-au scos de acolo, si el s-a infatisat in mijlocul poporului. Ii intrecea pe toti in inaltime, de la umar in sus."], // alergat
  ["1 Samuel 10:24", "{0} a zis intregului popor: \"Vedeti pe cel pe care l-a ales Domnul? Nu este nimeni in tot poporul care sa fie ca el.\" Si tot poporul a strigat: \"Traiasca imparatul!\""], // Samuel
  ["1 Samuel 10:25", "{0} a facut cunoscut poporului dreptul imparatiei si l-a scris intr-o carte, pe care a pus-o inaintea Domnului. Apoi a dat drumul intregului popor, trimitand pe fiecare acasa."], // Samuel
  ["1 Samuel 10:26", "Si Saul s-a dus {0} in Ghibeea, insotit de o parte din ostasi, a caror inima o miscase Dumnezeu."], // acasa
  ["1 Samuel 10:27", "S-au {0} insa si oameni rai, care ziceau: \"Ce ne poate ajuta acesta?\" Si l-au dispretuit si nu i-au adus niciun dar. Dar Saul s-a facut ca nu-i aude."], // gasit
  ["1 Samuel 11:1", "{0}, amonitul, a venit si a impresurat Iabesul din Galaad. Toti locuitorii din Iabes au zis lui Nahas: \"Fa legamant cu noi, si-ti vom fi supusi.\""], // Nahas
  ["1 Samuel 11:2", "Dar {0}, amonitul, le-a raspuns: \"Voi face legamant cu voi, daca ma lasati sa va scot la toti ochiul drept si sa arunc astfel o ocara asupra intregului Israel.\""], // Nahas
  ["1 Samuel 11:3", "{0} din Iabes i-au zis: \"Da-ne un ragaz de sapte zile, ca sa trimitem soli in tot tinutul lui Israel; si daca nu va fi nimeni sa ne ajute, ne vom supune tie.\""], // Batranii
  ["1 Samuel 11:4", "{0} au ajuns la Ghibeea, cetatea lui Saul, si au spus aceste lucruri in auzul poporului. Si tot poporul a ridicat glasul si a plans."], // Solii
  ["1 Samuel 11:5", "Saul {0} se intorcea de la camp, in urma boilor, si a intrebat: \"Ce are poporul de plange?\" I-au istorisit ce spusesera cei din Iabes."], // tocmai
  ["1 Samuel 11:6", "Cum a {0} Saul aceste lucruri, Duhul lui Dumnezeu a venit peste el, si s-a maniat foarte tare."], // auzit
  ["1 Samuel 11:7", "A luat o {0} de boi, i-a taiat in bucati si le-a trimis prin soli in tot tinutul lui Israel, zicand: \"Oricine nu va merge dupa Saul si Samuel isi va vedea boii taiati la fel.\" Groaza Domnului a apucat pe popor, care a pornit ca un singur om."], // pereche
  ["1 Samuel 11:8", "Saul le-a {0} numaratoarea la Bezec; copiii lui Israel erau trei sute de mii, si barbatii lui Iuda treizeci de mii."], // facut
  ["1 Samuel 11:9", "Ei au zis {0} care venisera: \"Asa sa vorbiti locuitorilor Iabesului din Galaad: \"Maine, cand va dogori soarele, veti avea ajutor.\" Solii au dus vestea aceasta celor din Iabes, care s-au umplut de bucurie"], // solilor
  ["1 Samuel 11:10", "si au zis {0}: \"Maine ne vom supune voua, si ne veti face ce va va placea.\""], // amonitilor
  ["1 Samuel 11:11", "A doua zi, Saul a {0} poporul in trei cete. Au patruns in tabara amonitilor in straja diminetii si i-au batut pana la caldura zilei. Cei ce au scapat au fost risipiti si n-au mai ramas doi laolalta dintre ei."], // impartit
  ["1 Samuel 11:12", "{0} a zis lui Samuel: \"Cine zicea: \"Saul sa domneasca peste noi?\"? Dati incoace pe oamenii aceia, ca sa-i omoram.\""], // Poporul
  ["1 Samuel 11:13", "Dar Saul a zis: \"{0} nu va fi omorat in ziua aceasta, caci astazi Domnul a dat o izbavire lui Israel.\""], // Nimeni
  ["1 Samuel 11:14", "Si {0} a zis poporului: \"Veniti si sa mergem la Ghilgal, ca sa intarim acolo imparatia.\""], // Samuel
  ["1 Samuel 11:15", "Tot {0} s-a dus la Ghilgal si au pus pe Saul imparat, inaintea Domnului, la Ghilgal. Acolo au adus jertfe de multumire inaintea Domnului; si Saul si toti oamenii lui Israel s-au inveselit foarte mult acolo."], // poporul
  ["1 Samuel 12:1", "{0} a zis intregului Israel: \"Iata ca v-am ascultat glasul in tot ce mi-ati zis si am pus un imparat peste voi."], // Samuel
  ["1 Samuel 12:2", "De acum, iata {0} care va merge inaintea voastra. Cat despre mine, eu sunt batran, am albit, asa ca fiii mei sunt cu voi; am umblat inaintea voastra, din tinerete pana in ziua de azi."], // imparatul
  ["1 Samuel 12:3", "{0}! Marturisiti impotriva mea, in fata Domnului si in fata unsului Lui: Cui i-am luat boul sau cui i-am luat magarul? Pe cine am apasat si pe cine am napastuit? De la cine am luat mita ca sa inchid ochii asupra lui? Marturisiti, si va voi da inapoi.\""], // Iata-ma
  ["1 Samuel 12:4", "Ei au {0}: \"Nu ne-ai apasat, nu ne-ai napastuit si nici n-ai primit nimic din mana nimanui.\""], // raspuns
  ["1 Samuel 12:5", "El le-a mai zis: \"{0} este martor impotriva voastra si unsul Lui este martor, in ziua aceasta, ca n-ati gasit nimic in mainile mele.\" Si ei au raspuns: \"Sunt martori!\""], // Domnul
  ["1 Samuel 12:6", "Atunci {0} a zis poporului: \"Domnul a pus pe Moise si pe Aaron si a scos pe parintii vostri din Egipt."], // Samuel
  ["1 Samuel 12:7", "Acum, {0} ca sa va judec inaintea Domnului pentru toate binefacerile pe care vi le-a facut Domnul, voua si parintilor vostri."], // infatisati-va
  ["1 Samuel 12:8", "Dupa ce a {0} Iacov in Egipt, parintii vostri au strigat catre Domnul, si Domnul a trimis pe Moise si pe Aaron, care au scos pe parintii vostri din Egipt si i-au adus sa locuiasca in locul acesta."], // venit
  ["1 Samuel 12:9", "Dar ei au {0} pe Domnul Dumnezeul lor; si El i-a vandut in mainile lui Sisera, capetenia ostirii Hatorului, in mainile filistenilor si in mainile imparatului Moabului, care au inceput lupta impotriva lor."], // uitat
  ["1 Samuel 12:10", "Au {0} iarasi catre Domnul si au zis: \"Am pacatuit, caci am parasit pe Domnul si am slujit Baalilor si Astarteilor; izbaveste-ne acum din mana vrajmasilor nostri si-Ti vom sluji.\""], // strigat
  ["1 Samuel 12:11", "Si {0} a trimis pe Ierubaal si pe Barac, si pe Iefta, si pe Samuel, si v-a izbavit din mana vrajmasilor vostri care va inconjurau, si ati locuit in liniste."], // Domnul
  ["1 Samuel 12:12", "Apoi, cand ati {0} ca Nahas, imparatul fiilor lui Amon, mergea impotriva voastra, mi-ati zis: \"Nu! Ci un imparat sa domneasca peste noi.\" Si totusi Domnul Dumnezeul vostru era Imparatul vostru."], // vazut
  ["1 Samuel 12:13", "Iata, dar, {0} pe care l-ati ales si pe care l-ati cerut; iata ca Domnul a pus un imparat peste voi."], // imparatul
  ["1 Samuel 12:14", "Daca va veti teme de {0}, daca-I veti sluji, daca veti asculta de glasul Lui si daca nu va veti impotrivi cuvantului Domnului, va veti alipi de Domnul Dumnezeul vostru, atat voi cat si imparatul care domneste peste voi."], // Domnul
  ["1 Samuel 12:15", "Dar daca nu veti {0} de glasul Domnului si va veti impotrivi cuvantului Domnului, mana Domnului va fi impotriva voastra, cum a fost impotriva parintilor vostri."], // asculta
  ["1 Samuel 12:16", "Acum mai {0} aici ca sa vedeti minunea pe care o va face Domnul sub ochii vostri."], // asteptati
  ["1 Samuel 12:17", "Nu {0} noi la seceratul granelor? Voi striga catre Domnul, si va trimite tunete si ploaie. Sa stiti atunci si sa vedeti cat de rau ati facut inaintea Domnului, cand ati cerut un imparat pentru voi.\""], // suntem
  ["1 Samuel 12:18", "{0} a strigat catre Domnul, si Domnul a trimis chiar in ziua aceea tunete si ploaie. Tot poporul a avut o mare frica de Domnul si de Samuel."], // Samuel
  ["1 Samuel 12:19", "Si tot {0} a zis lui Samuel: \"Roaga-te Domnului Dumnezeului tau pentru robii tai, ca sa nu murim; caci la toate pacatele noastre am mai adaugat si pe acela de a cere un imparat pentru noi.\""], // poporul
  ["1 Samuel 12:20", "{0} a zis poporului: \"Nu va temeti! Ati facut tot raul acesta; dar nu va abateti de la Domnul si slujiti Domnului din toata inima voastra."], // Samuel
  ["1 Samuel 12:21", "Nu va {0} de la El; altfel, ati merge dupa lucruri de nimic, care n-aduc nici folos, nici izbavire, pentru ca sunt lucruri de nimic."], // abateti
  ["1 Samuel 12:22", "{0} nu va parasi pe poporul Lui, din pricina Numelui Lui celui mare, caci Domnul a hotarat sa faca din voi poporul Lui."], // Domnul
  ["1 Samuel 12:23", "{0} iarasi de mine sa pacatuiesc impotriva Domnului, incetand sa ma rog pentru voi! Va voi invata calea cea buna si cea dreapta."], // Departe
  ["1 Samuel 12:24", "{0} numai de Domnul si slujiti-I cu credinciosie din toata inima voastra; caci vedeti ce putere desfasura El printre voi."], // Temeti-va
  ["1 Samuel 12:25", "Dar daca veti face raul, veti {0}, voi si imparatul vostru.\""], // pieri
  ["1 Samuel 13:1", "Saul era in {0} de treizeci de ani cand a ajuns imparat si a domnit doi ani peste Israel."], // varsta
  ["1 Samuel 13:2", "Saul si-a ales trei mii de {0} din Israel: doua mii erau cu el la Micmas si pe muntele Betel, iar o mie erau cu Ionatan la Ghibeea lui Beniamin. Pe ceilalti din popor i-a trimis pe fiecare la cortul lui."], // barbati
  ["1 Samuel 13:3", "{0} a batut tabara filistenilor care era la Gheba, si filistenii au auzit lucrul acesta. Saul a pus sa sune cu trambita prin toata tara, zicand: \"Sa auda evreii lucrul acesta!\""], // Ionatan
  ["1 Samuel 13:4", "Tot {0} a auzit zicandu-se: \"Saul a batut tabara filistenilor, si Israel s-a facut urat filistenilor.\" Si poporul a fost adunat la Saul, in Ghilgal."], // Israelul
  ["1 Samuel 13:5", "{0} s-au strans sa lupte cu Israel. Aveau o mie de care si sase mii de calareti; si poporul acesta era fara numar: ca nisipul de pe tarmul marii. Au venit si au tabarat la Micmas, la rasarit de Bet-Aven."], // Filistenii
  ["1 Samuel 13:6", "{0} lui Israel s-au vazut la stramtorare, caci erau stransi de aproape, si s-au ascuns in pesteri, in tufisuri, in stanci, in turnuri si in gropile pentru apa."], // Barbatii
  ["1 Samuel 13:7", "Unii {0} au trecut Iordanul, ca sa se duca in tara lui Gad si Galaad. Saul era tot la Ghilgal, si tot poporul de langa el tremura."], // evrei
  ["1 Samuel 13:8", "A {0} sapte zile, dupa timpul hotarat de Samuel. Dar Samuel nu venea la Ghilgal, si poporul se imprastia de langa Saul."], // asteptat
  ["1 Samuel 13:9", "Atunci Saul a zis: \"{0} arderea de tot si jertfele de multumire.\" Si a jertfit arderea de tot."], // Aduceti-mi
  ["1 Samuel 13:10", "Pe cand {0} de adus arderea de tot, a venit Samuel, si Saul i-a iesit inainte sa-i ureze de bine."], // sfarsea
  ["1 Samuel 13:11", "{0} a zis: \"Ce-ai facut?\" Saul a raspuns: \"Cand am vazut ca poporul se imprastie de langa mine, ca nu vii la timpul hotarat si ca filistenii sunt stransi la Micmas,"], // Samuel
  ["1 Samuel 13:12", "{0} zis: \"Filistenii se vor cobori impotriva mea la Ghilgal, si eu nu m-am rugat Domnului!\" Atunci am indraznit si am adus arderea de tot.\""], // mi-am
  ["1 Samuel 13:13", "{0} a zis lui Saul: \"Ai lucrat ca un nebun si n-ai pazit porunca pe care ti-o daduse Domnul Dumnezeul tau. Domnul ar fi intarit pe vecie domnia ta peste Israel;"], // Samuel
  ["1 Samuel 13:14", "dar acum, {0} ta nu va dainui. Domnul Si-a ales un om dupa inima Lui si Domnul l-a randuit sa fie capetenia poporului Sau, pentru ca n-ai pazit ce-ti poruncise Domnul.\""], // domnia
  ["1 Samuel 13:15", "Apoi {0} s-a sculat si s-a suit din Ghilgal la Ghibeea lui Beniamin. Saul a facut numaratoarea poporului care se afla cu el: erau aproape sase sute de oameni."], // Samuel
  ["1 Samuel 13:16", "Saul, fiul sau {0} si poporul care se afla cu ei se asezasera la Gheba lui Beniamin, si filistenii tabarau la Micmas."], // Ionatan
  ["1 Samuel 13:17", "Din {0} filistenilor au iesit trei cete ca sa pustiasca: una a luat drumul spre Ofra, spre tara Sual;"], // tabara
  ["1 Samuel 13:18", "alta a luat {0} spre Bet-Horon; si a treia a luat drumul spre hotarul care cauta spre valea Teboim, inspre pustiu."], // drumul
  ["1 Samuel 13:19", "In toata tara lui {0} nu se gasea niciun fierar; caci filistenii zisesera: \"Sa impiedicam pe evrei sa-si faca sabii sau sulite.\""], // Israel
  ["1 Samuel 13:20", "Si {0} om din Israel se cobora la filisteni, ca sa-si ascuta fierul plugului, coasa, securea si sapa,"], // fiecare
  ["1 Samuel 13:21", "cand se {0} sapa, coasa, furca cu trei coarne si securea, si ca sa faca varf tepusului cu care mana boii."], // tocea
  ["1 Samuel 13:22", "Si asa s-a {0} ca in ziua luptei nu era nici sabie, nici sulita in mainile intregului popor care era cu Saul si Ionatan: nu avea decat Saul si fiul sau Ionatan."], // intamplat
  ["1 Samuel 13:23", "O {0} de filisteni a venit si s-a asezat la trecatoarea Micmasului."], // ceata
  ["1 Samuel 14:1", "{0} zi, Ionatan, fiul lui Saul, a zis tanarului care-i purta armele: \"Vino, si sa patrundem pana la straja filistenilor, care este dincolo de locul acesta.\" Si n-a spus nimic tatalui sau."], // Intr-o
  ["1 Samuel 14:2", "Saul {0} la marginea cetatii Ghibeea, sub rodiul din Migron, si poporul care era cu el era aproape sase sute de oameni."], // statea
  ["1 Samuel 14:3", "Ahia, fiul lui {0}, fratele lui I-Cabod, fiul lui Fineas, fiul lui Eli, preotul Domnului la Silo, purta efodul. Poporul nu stia ca Ionatan s-a dus."], // Ahitub
  ["1 Samuel 14:4", "{0} trecatorile prin care cauta Ionatan sa ajunga la straja filistenilor, era un pisc de stanca de o parte si un pisc de stanca de cealalta parte; unul purta numele Botet, si celalalt Sene."], // Intre
  ["1 Samuel 14:5", "Unul din {0} piscuri este la miazanoapte, fata in fata cu Micmas, si celalalt la miazazi, fata in fata cu Gheba."], // aceste
  ["1 Samuel 14:6", "{0} a zis tanarului care-i purta armele: \"Vino, si sa patrundem pana la straja acestor netaiati imprejur. Poate ca Domnul va lucra pentru noi, caci nimic nu impiedica pe Domnul sa dea izbavire printr-un mic numar ca si printr-un mare numar.\""], // Ionatan
  ["1 Samuel 14:7", "Cel ce-i {0} armele i-a raspuns: \"Fa tot ce ai in inima, n-asculta decat de simtamantul tau si iata-ma cu tine, gata sa te urmez oriunde.\""], // ducea
  ["1 Samuel 14:8", "\"Ei bine!\", a zis {0}, \"haidem la oamenii acestia si sa ne aratam lor."], // Ionatan
  ["1 Samuel 14:9", "Daca ne vor zice: \"{0} pana vom veni noi la voi!\" vom ramane pe loc si nu ne vom sui la ei."], // Opriti-va
  ["1 Samuel 14:10", "Dar daca vor zice: \"{0} la noi!\" ne vom sui, caci Domnul ii da in mainile noastre. Acesta sa ne fie semnul.\""], // Suiti-va
  ["1 Samuel 14:11", "S-au {0} amandoi strajii filistenilor, si filistenii au zis: \"Iata ca evreii ies din gaurile in care s-au ascuns.\""], // aratat
  ["1 Samuel 14:12", "Si {0} care erau de straja au vorbit astfel lui Ionatan si celui ce-i ducea armele: \"Suiti-va la noi, ca sa va aratam ceva.\" Ionatan a zis celui ce-i ducea armele: \"Suie-te dupa mine, caci Domnul ii da in mainile lui Israel.\""], // oamenii
  ["1 Samuel 14:13", "Si {0} s-a suit ajutandu-se cu mainile si picioarele, si cel ce-i ducea armele a mers dupa el. Filistenii au cazut inaintea lui Ionatan, si cel ce-i ducea armele arunca moartea in urma lui."], // Ionatan
  ["1 Samuel 14:14", "In aceasta {0} infrangere, Ionatan si cel ce-i ducea armele au ucis douazeci de oameni, pe intindere de aproape o jumatate de pogon de pamant."], // intai
  ["1 Samuel 14:15", "A {0} groaza in tabara, in tara si in tot poporul; straja si chiar si pradatorii s-au inspaimantat; tara s-a ingrozit. Era groaza lui Dumnezeu."], // intrat
  ["1 Samuel 14:16", "{0} lui Saul, care erau la Ghibeea lui Beniamin, au vazut ca multimea se imprastie si fuge in toate partile."], // Strajerii
  ["1 Samuel 14:17", "Atunci Saul a zis {0} care era cu el: \"Numarati, va rog, si vedeti cine a plecat din mijlocul nostru.\" Au numarat, si iata ca lipsea Ionatan si cel ce-i purta armele."], // poporului
  ["1 Samuel 14:18", "Si Saul a zis lui Ahia: \"Adu {0} chivotul lui Dumnezeu!\" - Caci pe vremea aceea chivotul lui Dumnezeu era cu copiii lui Israel. -"], // incoace
  ["1 Samuel 14:19", "Pe cand {0} Saul cu preotul, zarva in tabara filistenilor se facea tot mai mare; si Saul a zis preotului: \"Trage-ti mana!\""], // vorbea
  ["1 Samuel 14:20", "Apoi Saul si tot {0} care era cu el s-au strans si au inaintat pana la locul luptei; si filistenii au intors sabia unii impotriva altora, si invalmaseala era nespus de mare."], // poporul
  ["1 Samuel 14:21", "{0} care erau mai dinainte la filisteni si care se suisera cu ei in tabara de pe unde erau imprastiati s-au unit cu israelitii care erau cu Saul si Ionatan."], // Evreii
  ["1 Samuel 14:22", "Toti {0} lui Israel care se ascunsesera pe muntele lui Efraim, afland ca filistenii fugeau, au inceput sa-i urmareasca si ei in bataie."], // barbatii
  ["1 Samuel 14:23", "{0} a izbavit pe Israel in ziua aceea, si lupta s-a intins pana dincolo de Bet-Aven."], // Domnul
  ["1 Samuel 14:24", "Ziua {0} a fost obositoare pentru barbatii lui Israel. Saul pusese pe popor sa jure, zicand: \"Blestemat sa fie omul care va manca paine pana seara, pana ma voi razbuna pe vrajmasii mei!\" Si nimeni nu mancase."], // aceea
  ["1 Samuel 14:25", "Tot {0} ajunsese intr-o padure, unde se gasea miere pe fata pamantului."], // poporul
  ["1 Samuel 14:26", "Cand a {0} poporul in padure, a vazut mierea curgand; dar niciunul n-a dus mierea la gura, caci poporul tinea juramantul."], // intrat
  ["1 Samuel 14:27", "{0} nu stia de juramantul pe care pusese tatal sau pe popor sa-l faca; a intins varful toiagului pe care-l avea in mana, l-a varat intr-un fagure de miere si a dus mana la gura; si ochii i s-au luminat."], // Ionatan
  ["1 Samuel 14:28", "Atunci {0} din popor, vorbindu-i, i-a zis: \"Tatal tau a pus pe popor sa jure, zicand: \"Blestemat sa fie omul care va manca astazi!\" Si poporul era sleit de puteri."], // cineva
  ["1 Samuel 14:29", "Si {0} a zis: \"Tatal meu tulbura poporul; vedeti, dar, cum mi s-au luminat ochii, pentru ca am gustat putin din mierea aceasta!"], // Ionatan
  ["1 Samuel 14:30", "{0}, daca poporul ar fi mancat azi din prada pe care a gasit-o la vrajmasii lui, n-ar fi fost infrangerea filistenilor mai mare?\""], // Negresit
  ["1 Samuel 14:31", "In ziua {0} au batut pe filisteni de la Micmas pana la Aialon. Poporul era foarte obosit"], // aceea
  ["1 Samuel 14:32", "si s-a {0} asupra prazii. A luat oi, boi si vitei, i-a injunghiat pe pamant si i-a mancat cu sange cu tot."], // aruncat
  ["1 Samuel 14:33", "Au spus {0} acesta lui Saul si i-au zis: \"Iata ca poporul pacatuieste impotriva Domnului, mancand cu sange.\" Saul a zis: \"Voi faceti o nelegiuire; rostogoliti indata o piatra mare incoace.\""], // lucrul
  ["1 Samuel 14:34", "Apoi a {0}: \"Imprastiati-va printre popor si spuneti fiecaruia sa-si aduca boul sau oaia si sa-l injunghie aici. Apoi sa mancati si nu pacatuiti impotriva Domnului, mancand cu sange.\" Si peste noapte, fiecare din popor si-a adus boul cu mana, ca sa-l injunghie pe piatra."], // adaugat
  ["1 Samuel 14:35", "Saul a {0} un altar Domnului: acesta a fost cel dintai altar pe care l-a zidit Domnului."], // zidit
  ["1 Samuel 14:36", "Saul a zis: \"Sa ne {0} in noaptea aceasta dupa filisteni, sa-i jefuim pana la lumina zilei si sa nu lasam sa ramana unul macar.\" Ei au zis: \"Fa tot ce vei crede.\" Atunci preotul a zis: \"Sa ne apropiem aici de Dumnezeu.\""], // coboram
  ["1 Samuel 14:37", "Si Saul a {0} pe Dumnezeu: \"Sa ma cobor dupa filisteni? Ii vei da in mainile lui Israel?\" Dar in clipa aceea nu i-a dat niciun raspuns."], // intrebat
  ["1 Samuel 14:38", "Saul a zis: \"{0} aici, toate capeteniile poporului; cautati si vedeti de cine si cum a fost savarsit pacatul acesta astazi."], // Apropiati-va
  ["1 Samuel 14:39", "Caci viu este {0}, Izbavitorul lui Israel: chiar daca l-ar fi savarsit fiul meu Ionatan, va muri.\" Si nimeni din tot poporul nu i-a raspuns."], // Domnul
  ["1 Samuel 14:40", "Atunci a zis {0} Israel: \"Asezati-va voi de o parte; si eu si fiul meu Ionatan vom sta de cealalta.\" Si poporul a zis lui Saul: \"Fa ce vei crede.\""], // intregului
  ["1 Samuel 14:41", "Saul a zis {0}: \"Dumnezeul lui Israel, arata adevarul.\" Sortul a cazut pe Ionatan si pe Saul, si poporul a scapat."], // Domnului
  ["1 Samuel 14:42", "Saul a zis: \"{0} sortii intre mine si fiul meu Ionatan.\" Si sortul a cazut pe Ionatan."], // Aruncati
  ["1 Samuel 14:43", "Saul a zis lui {0}: \"Spune-mi ce-ai facut.\" Ionatan i-a spus si a zis: \"Am gustat putina miere, cu varful toiagului pe care-l aveam in mana: iata-ma, voi muri.\""], // Ionatan
  ["1 Samuel 14:44", "Si Saul a zis: \"{0} sa Se poarte cu toata asprimea fata de mine, daca nu vei muri, Ionatane!\""], // Dumnezeu
  ["1 Samuel 14:45", "{0} a zis lui Saul: \"Ce! sa moara Ionatan, el, care a facut aceasta mare izbavire in Israel? Niciodata! Viu este Domnul, ca un par din capul lui nu va cadea la pamant, caci cu Dumnezeu a lucrat el in ziua aceasta.\" Astfel poporul a scapat pe Ionatan de la moarte."], // Poporul
  ["1 Samuel 14:46", "Saul a {0} sa mai urmareasca pe filisteni, si filistenii s-au dus acasa."], // incetat
  ["1 Samuel 14:47", "Dupa ce a luat Saul {0} peste Israel, a facut razboi in toate partile cu toti vrajmasii lui: cu Moab, cu copiii lui Amon, cu Edom, cu imparatii din Toba si cu filistenii; si oriincotro se intorcea, era biruitor."], // domnia
  ["1 Samuel 14:48", "S-a {0} viteaz, a batut pe Amalec si a scapat pe Israel din mana celor ce-l jefuiau."], // aratat
  ["1 Samuel 14:49", "Fiii lui Saul au fost: {0}, Isvi si Malchisua. Cele doua fete ale lui se numeau: cea mai mare Merab, iar cea mai mica Mical."], // Ionatan
  ["1 Samuel 14:50", "{0} nevestei lui Saul era Ahinoam, fata lui Ahimaat. Numele capeteniei ostirii lui era Abner, fiul lui Ner, unchiul lui Saul."], // Numele
  ["1 Samuel 14:51", "Chis, {0} lui Saul, si Ner, tatal lui Abner, erau fiii lui Abiel."], // tatal
  ["1 Samuel 14:52", "In tot {0} vietii lui Saul a fost un razboi inversunat impotriva filistenilor; si de indata ce Saul zarea vreun om tare si voinic, il lua cu el."], // timpul
  ["1 Samuel 15:1", "{0} a zis lui Saul: \"Pe mine m-a trimis Domnul sa te ung imparat peste poporul Lui, peste Israel: asculta, dar, ce zice Domnul."], // Samuel
  ["1 Samuel 15:2", "Asa {0} Domnul ostirilor: \"Mi-aduc aminte de ceea ce a facut Amalec lui Israel, cand i-a astupat drumul la iesirea lui din Egipt."], // vorbeste
  ["1 Samuel 15:3", "{0} acum, bate pe Amalec si nimiceste cu desavarsire tot ce-i al lui; sa nu-i cruti, si sa omori barbatii si femeile, copiii si pruncii, camilele si magarii, boii si oile.\""], // Du-te
  ["1 Samuel 15:4", "Saul a {0} poporul si l-a numarat la Telaim: erau doua sute de mii de oameni pedestri si zece mii de oameni din Iuda."], // adunat
  ["1 Samuel 15:5", "Saul a mers pana la {0} lui Amalec si a pus niste oameni la panda in vale."], // cetatea
  ["1 Samuel 15:6", "Si a zis {0}: \"Duceti-va, plecati si iesiti din mijlocul lui Amalec, ca sa nu va prapadesc impreuna cu el; caci voi v-ati purtat cu bunavointa fata de copiii lui Israel, cand s-au suit din Egipt.\" Si chenitii au plecat din mijlocul lui Amalec."], // chenitilor
  ["1 Samuel 15:7", "Saul a {0} pe Amalec, de la Havila pana la Sur, care este in fata Egiptului."], // batut
  ["1 Samuel 15:8", "A {0} viu pe Agag, imparatul lui Amalec, si a nimicit cu desavarsire tot poporul, trecandu-l prin ascutisul sabiei."], // prins
  ["1 Samuel 15:9", "Dar Saul si {0} au crutat pe Agag si oile cele mai bune, boii cei mai buni, vitele grase, mieii grasi si tot ce era mai bun; n-a vrut sa le nimiceasca cu desavarsire, si au nimicit numai tot ce era prost si nebagat in seama."], // poporul
  ["1 Samuel 15:10", "{0} a vorbit lui Samuel si i-a zis:"], // Domnul
  ["1 Samuel 15:11", "\"Imi pare rau ca am pus pe Saul {0}, caci se abate de la Mine si nu pazeste cuvintele Mele.\" Samuel s-a mahnit si toata noaptea a strigat catre Domnul."], // imparat
  ["1 Samuel 15:12", "S-a {0} dis-de-dimineata ca sa se duca inaintea lui Saul. Si au venit si i-au spus: \"Saul s-a dus la Carmel si iata ca si-a inaltat un semn de biruinta, apoi s-a intors si, trecand mai departe, s-a coborat la Ghilgal.\""], // sculat
  ["1 Samuel 15:13", "{0} s-a dus la Saul, si Saul i-a zis: \"Fii binecuvantat de Domnul! Am pazit cuvantul Domnului.\""], // Samuel
  ["1 Samuel 15:14", "{0} a zis: \"Ce inseamna behaitul acesta de oi care ajunge la urechile mele si mugetul acesta de boi pe care-l aud?\""], // Samuel
  ["1 Samuel 15:15", "Saul a {0}: \"Le-au adus de la amaleciti, pentru ca poporul a crutat oile cele mai bune si boii cei mai buni, ca sa-i jertfeasca Domnului Dumnezeului tau; iar pe celelalte le-am nimicit cu desavarsire.\""], // raspuns
  ["1 Samuel 15:16", "{0} a zis lui Saul: \"Stai, si-ti voi spune ce mi-a zis Domnul asta-noapte.\" Si Saul i-a zis: \"Vorbeste.\""], // Samuel
  ["1 Samuel 15:17", "{0} a zis: \"Cand erai mic in ochii tai, n-ai ajuns tu capetenia semintiilor lui Israel si nu te-a uns Domnul ca sa fii imparat peste Israel?"], // Samuel
  ["1 Samuel 15:18", "{0} te trimisese, zicand: \"Du-te si nimiceste cu desavarsire pe pacatosii aceia, pe amaleciti; razboieste-te cu ei pana ii vei nimici.\""], // Domnul
  ["1 Samuel 15:19", "Pentru ce n-ai {0} glasul Domnului? Pentru ce te-ai aruncat asupra prazii si ai facut ce este rau inaintea Domnului?\""], // ascultat
  ["1 Samuel 15:20", "Saul a {0} lui Samuel: \"Am ascultat glasul Domnului si m-am dus in calea pe care ma trimitea Domnul. Am adus pe Agag, imparatul lui Amalec, si am nimicit cu desavarsire pe amaleciti;"], // raspuns
  ["1 Samuel 15:21", "dar {0} a luat din prada oi si boi, ca parga din ceea ce trebuia nimicit cu desavarsire, ca sa le jertfeasca Domnului Dumnezeului tau la Ghilgal.\""], // poporul
  ["1 Samuel 15:22", "{0} a zis: \"Ii plac Domnului mai mult arderile de tot si jertfele decat ascultarea de glasul Domnului? Ascultarea face mai mult decat jertfele, si pazirea cuvantului Sau face mai mult decat grasimea berbecilor."], // Samuel
  ["1 Samuel 15:23", "Caci {0} este tot atat de vinovata ca ghicirea, si impotrivirea nu este mai putin vinovata decat inchinarea la idoli si terafimi. Fiindca ai lepadat cuvantul Domnului, te leapada si El ca imparat.\""], // neascultarea
  ["1 Samuel 15:24", "Atunci Saul a zis lui {0}: \"Am pacatuit, caci am calcat porunca Domnului si n-am ascultat cuvintele tale; ma temeam de popor si i-am ascultat glasul."], // Samuel
  ["1 Samuel 15:25", "Acum, te rog, {0} pacatul, intoarce-te cu mine, ca sa ma inchin pana la pamant inaintea Domnului.\""], // iarta-mi
  ["1 Samuel 15:26", "{0} a zis lui Saul: \"Nu ma voi intoarce cu tine: fiindca ai lepadat cuvantul Domnului, si Domnul te leapada, ca sa nu mai fii imparat peste Israel.\""], // Samuel
  ["1 Samuel 15:27", "Si pe cand se {0} Samuel sa plece, Saul l-a apucat de pulpana hainei, si s-a rupt."], // intorcea
  ["1 Samuel 15:28", "{0} i-a zis: \"Domnul rupe astazi domnia lui Israel deasupra ta si o da altuia mai bun decat tine."], // Samuel
  ["1 Samuel 15:29", "Cel ce este {0} lui Israel nu minte si nu Se caieste, caci nu este un om ca sa-I para rau.\""], // taria
  ["1 Samuel 15:30", "Saul a zis {0}: \"Am pacatuit! Acum, te rog, cinsteste-ma in fata batranilor poporului meu si in fata lui Israel; intoarce-te cu mine, ca sa ma inchin inaintea Domnului Dumnezeului tau.\""], // iarasi
  ["1 Samuel 15:31", "{0} s-a intors si a mers dupa Saul, si Saul s-a inchinat inaintea Domnului."], // Samuel
  ["1 Samuel 15:32", "Apoi {0} a zis: \"Adu-mi pe Agag, imparatul lui Amalec.\" Si Agag a inaintat vesel spre el, caci zicea: \"Negresit, a trecut amaraciunea mortii!\""], // Samuel
  ["1 Samuel 15:33", "{0} a zis: \"Dupa cum sabia ta a lasat femei fara copii, tot asa si mama ta va fi lasata fara copii intre femei.\" Si Samuel a taiat pe Agag in bucati inaintea Domnului, la Ghilgal."], // Samuel
  ["1 Samuel 15:34", "{0} a plecat la Rama, si Saul s-a suit acasa la Ghibeea lui Saul."], // Samuel
  ["1 Samuel 15:35", "{0} nu s-a mai dus sa vada pe Saul pana in ziua mortii sale. Dar Samuel plangea pe Saul, pentru ca Domnul Se caise ca pusese pe Saul imparat peste Israel."], // Samuel
  ["1 Samuel 16:1", "{0} a zis lui Samuel: \"Cand vei inceta sa plangi pe Saul, pentru ca l-am lepadat, ca sa nu mai domneasca peste Israel? Umple-ti cornul cu untdelemn si du-te; te voi trimite la Isai, betleemitul, caci pe unul din fiii lui Mi l-am ales ca imparat.\""], // Domnul
  ["1 Samuel 16:2", "{0} a zis: \"Cum sa ma duc? Saul are sa afle si ma va ucide.\" Si Domnul a zis: \"Sa iei cu tine un vitel si sa zici: \"Vin sa aduc o jertfa Domnului.\""], // Samuel
  ["1 Samuel 16:3", "Sa {0} pe Isai la jertfa; Eu iti voi arata ce trebuie sa faci, si Imi vei unge pe acela pe care-ti voi spune sa-l ungi.\""], // poftesti
  ["1 Samuel 16:4", "{0} a facut ce zisese Domnul, si s-a dus la Betleem. Batranii cetatii au alergat inspaimantati inaintea lui si au zis: \"Ce vesteste venirea ta: ceva bun?\""], // Samuel
  ["1 Samuel 16:5", "El a {0}: \"Da; vin sa aduc o jertfa Domnului. Sfintiti-va si veniti cu mine la jertfa.\" A sfintit si pe Isai cu fiii lui si i-a poftit la jertfa."], // raspuns
  ["1 Samuel 16:6", "Cand au {0} ei, Samuel, vazand pe Eliab, si-a zis: \"Negresit, unsul Domnului este aici inaintea Lui.\""], // intrat
  ["1 Samuel 16:7", "Si {0} a zis lui Samuel: \"Nu te uita la infatisarea si inaltimea staturii lui, caci l-am lepadat. Domnul nu Se uita la ce se uita omul; omul se uita la ceea ce izbeste ochii, dar Domnul Se uita la inima.\""], // Domnul
  ["1 Samuel 16:8", "Isai a {0} pe Abinadab si l-a trecut pe dinaintea lui Samuel; si Samuel a zis: \"Nici pe acesta nu l-a ales Domnul.\""], // chemat
  ["1 Samuel 16:9", "Isai a {0} pe Sama; si Samuel a zis: \"Nici pe acesta nu l-a ales Domnul.\""], // trecut
  ["1 Samuel 16:10", "Si asa a {0} Isai pe cei sapte fii ai lui pe dinaintea lui Samuel; si Samuel a zis lui Isai: \"Domnul n-a ales pe niciunul din ei.\""], // trecut
  ["1 Samuel 16:11", "Apoi {0} a zis lui Isai: \"Acestia sunt toti fiii tai?\" Si el a raspuns: \"A mai ramas cel mai tanar, dar paste oile.\" Atunci Samuel a zis lui Isai: \"Trimite sa-l aduca, fiindca nu vom sedea la masa pana nu va veni aici.\""], // Samuel
  ["1 Samuel 16:12", "Isai a {0} sa-l aduca. Si el era cu par balai, cu ochi frumosi si fata frumoasa. Domnul a zis lui Samuel: \"Scoala-te si unge-l, caci el este!\""], // trimis
  ["1 Samuel 16:13", "{0} a luat cornul cu untdelemn si l-a uns in mijlocul fratilor lui. Duhul Domnului a venit peste David, incepand din ziua aceea si in cele urmatoare. Samuel s-a sculat si s-a dus la Rama."], // Samuel
  ["1 Samuel 16:14", "{0} Domnului S-a departat de la Saul; si a fost muncit de un duh rau care venea de la Domnul."], // Duhul
  ["1 Samuel 16:15", "{0} lui Saul i-au zis: \"Iata ca un duh rau de la Dumnezeu te munceste."], // Slujitorii
  ["1 Samuel 16:16", "{0} numai domnul nostru! Robii tai sunt inaintea ta. Ei vor cauta un om care sa stie sa cante cu harpa; si, cand duhul rau trimis de Dumnezeu va fi peste tine, el va canta cu mana, si vei fi usurat.\""], // Porunceasca
  ["1 Samuel 16:17", "Saul a {0} slujitorilor sai: \"Gasiti-mi, dar, un om care sa cante bine si aduceti-l la mine.\""], // raspuns
  ["1 Samuel 16:18", "Unul din {0} a luat cuvantul si a zis: \"Iata, am vazut pe un fiu al lui Isai, betleemitul, care stie sa cante; el este si un om tare si voinic, un razboinic, vorbeste bine, este frumos la chip, si Domnul este cu el.\""], // slujitori
  ["1 Samuel 16:19", "Saul a {0} niste oameni la Isai sa-i spuna: \"Trimite-mi pe fiul tau David, care este cu oile.\""], // trimis
  ["1 Samuel 16:20", "Isai a luat un {0}, l-a incarcat cu paine, cu un burduf cu vin si cu un ied, si a trimis lui Saul aceste lucruri, prin fiul sau David."], // magar
  ["1 Samuel 16:21", "{0} a ajuns la Saul si s-a infatisat inaintea lui; i-a placut mult lui Saul, si a fost pus sa-i poarte armele."], // David
  ["1 Samuel 16:22", "Saul a {0} vorba lui Isai, zicand: \"Te rog sa lasi pe David in slujba mea, caci a capatat trecere inaintea mea.\""], // trimis
  ["1 Samuel 16:23", "Si cand {0} trimis de Dumnezeu venea peste Saul, David lua harpa si canta cu mana lui; Saul rasufla atunci mai usor, se simtea usurat, si duhul cel rau pleca de la el."], // duhul
  ["1 Samuel 17:1", "{0} si-au strans ostile ca sa faca razboi si s-au adunat la Soco, o cetate a lui Iuda; au tabarat intre Soco si Azeca, la Efes-Damim."], // Filistenii
  ["1 Samuel 17:2", "Saul si {0} lui Israel s-au strans si ei; au tabarat in valea Terebintilor si s-au asezat in linie de bataie impotriva filistenilor."], // barbatii
  ["1 Samuel 17:3", "{0} se asezasera pe un munte de o parte, si Israel pe un munte de cealalta parte: doar valea ii despartea."], // Filistenii
  ["1 Samuel 17:4", "Atunci a {0} un om din tabara filistenilor si a inaintat intre cele doua ostiri. El se numea Goliat, era din Gat si avea o inaltime de sase coti si o palma."], // iesit
  ["1 Samuel 17:5", "Pe cap avea un coif de {0} si purta niste zale de solzi, in greutate de cinci mii de sicli de arama."], // arama
  ["1 Samuel 17:6", "Avea {0} turetci de arama peste fluierele picioarelor si o pavaza de arama intre umeri."], // niste
  ["1 Samuel 17:7", "{0} sulitei lui era ca un sul de tesut, si fierul sulitei cantarea sase sute de sicli de fier. Cel ce-i purta scutul mergea inaintea lui."], // Coada
  ["1 Samuel 17:8", "{0} s-a oprit; si, vorbind ostilor lui Israel asezate in siruri de bataie, le-a strigat: \"Pentru ce iesiti sa va asezati in siruri de bataie? Nu sunt eu filistean si nu sunteti voi slujitorii lui Saul? Alegeti un om care sa se coboare impotriva mea!"], // Filisteanul
  ["1 Samuel 17:9", "Daca va {0} sa se bata cu mine si sa ma omoare, noi vom fi robii vostri; dar daca-l voi birui si-l voi omori eu, voi ne veti fi robi noua si ne veti sluji.\""], // putea
  ["1 Samuel 17:10", "{0} a mai zis: \"Arunc astazi o ocara asupra ostirii lui Israel! Dati-mi un om ca sa ma lupt cu el.\""], // Filisteanul
  ["1 Samuel 17:11", "Saul si tot {0} au auzit aceste cuvinte ale filisteanului si s-au inspaimantat si au fost cuprinsi de o mare frica."], // Israelul
  ["1 Samuel 17:12", "Si {0} era fiul efratitului aceluia din Betleemul lui Iuda, numit Isai, care avea opt fii. Pe vremea lui Saul, el era batran, inaintat in varsta."], // David
  ["1 Samuel 17:13", "Cei trei fiii mai mari ai lui Isai {0} pe Saul la razboi; intaiul nascut din cei trei fii ai lui care pornisera la razboi se numea Eliab, al doilea, Abinadab, si al treilea, Sama."], // urmasera
  ["1 Samuel 17:14", "{0} era cel mai tanar. Si cand cei trei mai mari au urmat pe Saul,"], // David
  ["1 Samuel 17:15", "{0} a plecat de la Saul si s-a intors la Betleem ca sa pasca oile tatalui sau."], // David
  ["1 Samuel 17:16", "{0} inainta dimineata si seara si s-a infatisat astfel timp de patruzeci de zile."], // Filisteanul
  ["1 Samuel 17:17", "Isai a zis {0} sau David: \"Ia pentru fratii tai efa aceasta de grau prajit si aceste zece paini si alearga in tabara la fratii tai;"], // fiului
  ["1 Samuel 17:18", "du si {0} zece casuri de branza capeteniei care este peste mia lor. Sa vezi daca fratii tai sunt bine si sa-mi aduci vesti temeinice."], // aceste
  ["1 Samuel 17:19", "Ei sunt cu Saul si cu toti {0} lui Israel in valea Terebintilor in razboi cu filistenii.\""], // barbatii
  ["1 Samuel 17:20", "{0} s-a sculat dis-de-dimineata. A lasat oile in seama unui paznic, si-a luat lucrurile si a plecat, cum ii poruncise Isai. Cand a ajuns in tabara, ostirea pornise sa se aseze in siruri de bataie si scotea strigate de razboi."], // David
  ["1 Samuel 17:21", "{0} si filistenii s-au asezat in siruri de bataie, ostire catre ostire."], // Israel
  ["1 Samuel 17:22", "{0} a dat lucrurile pe care le avea in mainile celui ce pazea calabalacurile si a alergat la sirurile de bataie. Cum a ajuns, a intrebat pe fratii sai de sanatate."], // David
  ["1 Samuel 17:23", "Pe cand {0} cu ei, iata ca filisteanul din Gat, numit Goliat, a inaintat intre cele doua ostiri, iesind afara din sirurile filistenilor. A rostit aceleasi cuvinte ca mai inainte, si David le-a auzit."], // vorbea
  ["1 Samuel 17:24", "La {0} acestui om, toti cei din Israel au fugit dinaintea lui si i-a apucat o mare frica."], // vederea
  ["1 Samuel 17:25", "{0} zicea: \"Ati vazut pe omul acesta inaintand? A inaintat ca sa arunce ocara asupra lui Israel! Daca-l va omori cineva, imparatul il va umple de bogatii, ii va da de nevasta pe fiica sa si va scuti de dari casa tatalui sau in Israel.\""], // Fiecare
  ["1 Samuel 17:26", "{0} a zis oamenilor de langa el: \"Ce se va face aceluia care va omori pe filisteanul acesta si va lua ocara deasupra lui Israel? Cine este filisteanul acesta, acest netaiat imprejur, ca sa ocarasca ostirea Dumnezeului celui Viu?\""], // David
  ["1 Samuel 17:27", "{0}, spunand din nou aceleasi lucruri, i-a zis: \"Asa si asa se va face aceluia care-l va omori.\""], // Poporul
  ["1 Samuel 17:28", "{0}, fratele lui cel mai mare, care-l auzise vorbind cu oamenii acestia, s-a aprins de manie impotriva lui David. Si a zis: \"Pentru ce te-ai coborat tu si cui ai lasat acele putine oi in pustiu? Iti cunosc eu mandria si rautatea inimii. Te-ai coborat ca sa vezi lupta.\""], // Eliab
  ["1 Samuel 17:29", "{0} a raspuns: \"Ce-am facut oare? Nu pot sa vorbesc astfel?\""], // David
  ["1 Samuel 17:30", "Si s-a {0} de la el ca sa vorbeasca cu altul, si i-a pus aceleasi intrebari. Poporul i-a raspuns ca si intaia data."], // intors
  ["1 Samuel 17:31", "Cand s-au {0} cuvintele rostite de David, au fost spuse inaintea lui Saul, care a trimis sa-l caute."], // auzit
  ["1 Samuel 17:32", "{0} a zis lui Saul: \"Nimeni sa nu-si piarda nadejdea din pricina filisteanului acestuia. Robul tau va merge sa se bata cu el.\""], // David
  ["1 Samuel 17:33", "Saul a zis lui {0}: \"Nu poti sa te duci sa te bati cu filisteanul acesta, caci tu esti un copil, si el este un om razboinic din tineretea lui.\""], // David
  ["1 Samuel 17:34", "{0} a zis lui Saul: \"Robul tau pastea oile tatalui sau. Si cand un leu sau un urs venea sa-i ia o oaie din turma,"], // David
  ["1 Samuel 17:35", "{0} dupa el, il loveam si-i smulgeam oaia din gura. Daca se ridica impotriva mea, il apucam de falca, il loveam si-l omoram."], // alergam
  ["1 Samuel 17:36", "Asa a {0} robul tau leul si ursul; si cu filisteanul acesta, cu acest netaiat imprejur, va fi ca si cu unul din ei, caci a ocarat ostirea Dumnezeului celui Viu.\""], // doborat
  ["1 Samuel 17:37", "{0} a mai zis: \"Domnul, care m-a izbavit din gheara leului si din laba ursului, ma va izbavi si din mana acestui filistean.\" Si Saul a zis lui David: \"Du-te, si Domnul sa fie cu tine!\""], // David
  ["1 Samuel 17:38", "Saul a {0} pe David cu hainele lui, i-a pus pe cap un coif de arama si l-a imbracat cu o platosa."], // imbracat
  ["1 Samuel 17:39", "{0} a incins sabia lui Saul peste hainele lui si a vrut sa mearga, caci nu incercase inca sa mearga cu ele. Apoi a zis lui Saul: \"Nu pot sa merg cu armatura aceasta, caci nu sunt obisnuit cu ea.\" Si s-a dezbracat de ea."], // David
  ["1 Samuel 17:40", "Si-a luat {0} in mana, si-a ales din parau cinci pietre netede si le-a pus in traista lui de pastor si in buzunarul hainei. Apoi, cu prastia in mana, a inaintat impotriva filisteanului."], // toiagul
  ["1 Samuel 17:41", "{0} s-a apropiat putin cate putin de David, si omul care-i ducea scutul mergea inaintea lui."], // Filisteanul
  ["1 Samuel 17:42", "{0} s-a uitat si, cand a zarit pe David, a ras de el, caci nu vedea in el decat un copil cu par balai si cu fata frumoasa."], // Filisteanul
  ["1 Samuel 17:43", "{0} a zis lui David: \"Ce! sunt caine, de vii la mine cu toiege?\" Si, dupa ce l-a blestemat pe dumnezeii lui,"], // Filisteanul
  ["1 Samuel 17:44", "a {0}: \"Vino la mine, si-ti voi da carnea ta pasarilor cerului si fiarelor campului.\""], // adaugat
  ["1 Samuel 17:45", "{0} a zis filisteanului: \"Tu vii impotriva mea cu sabie, cu sulita si cu pavaza; iar eu vin impotriva ta in Numele Domnului ostirilor, in Numele Dumnezeului ostirii lui Israel, pe care ai ocarat-o."], // David
  ["1 Samuel 17:46", "{0} Domnul te va da in mainile mele, te voi dobori si-ti voi taia capul; astazi voi da starvurile taberei filistenilor pasarilor cerului si fiarelor pamantului. Si tot pamantul va sti ca Israel are un Dumnezeu."], // Astazi
  ["1 Samuel 17:47", "Si toata {0} aceasta va sti ca Domnul nu mantuieste nici prin sabie, nici prin sulita. Caci biruinta este a Domnului. Si El va da in mainile noastre.\""], // multimea
  ["1 Samuel 17:48", "{0} ce filisteanul a pornit sa mearga inaintea lui David, David a alergat pe campul de bataie inaintea filisteanului."], // Indata
  ["1 Samuel 17:49", "Si-a {0} mana in traista, a luat o piatra si a aruncat-o cu prastia; a lovit pe filistean in frunte, si piatra a intrat in fruntea filisteanului, care a cazut cu fata la pamant."], // varat
  ["1 Samuel 17:50", "{0}, cu o prastie si cu o piatra, David a fost mai tare decat filisteanul; l-a trantit la pamant si l-a omorat, fara sa aiba sabie in mana."], // Astfel
  ["1 Samuel 17:51", "A {0}, s-a oprit langa filistean, i-a luat sabia, pe care i-a scos-o din teaca, l-a omorat si i-a taiat capul. Filistenii, cand au vazut ca uriasul lor a murit, au luat-o la fuga."], // alergat
  ["1 Samuel 17:52", "Si {0} lui Israel si Iuda au dat chiote si au pornit in urmarirea filistenilor pana in vale si pana la portile Ecronului. Filistenii, raniti de moarte, au cazut pe drumul care duce la Saaraim, pana la Gat si pana la Ecron."], // barbatii
  ["1 Samuel 17:53", "Si {0} lui Israel s-au intors de la urmarirea filistenilor si le-au jefuit tabara."], // copiii
  ["1 Samuel 17:54", "{0} a luat capul filisteanului si l-a dus la Ierusalim si a pus armele filisteanului in cortul sau."], // David
  ["1 Samuel 17:55", "Cand a {0} Saul pe David mergand impotriva filisteanului, a zis lui Abner, capetenia ostirii: \"Al cui fiu este tanarul acesta, Abner?\" Abner a raspuns: \"Pe sufletul tau, imparate, ca nu stiu.\""], // vazut
  ["1 Samuel 17:56", "\"{0}, dar, al cui fiu este tanarul acesta\", a zis imparatul."], // Intreaba
  ["1 Samuel 17:57", "Si cand s-a {0} David dupa ce omorase pe filistean, Abner l-a luat si l-a adus inaintea lui Saul. David avea in mana capul filisteanului."], // intors
  ["1 Samuel 17:58", "Saul i-a zis: \"Al cui fiu esti, {0}?\" Si David a raspuns: \"Sunt fiul robului tau Isai, betleemitul.\""], // tinere
  ["1 Samuel 18:1", "{0} sfarsise de vorbit cu Saul. Si de atunci sufletul lui Ionatan s-a alipit de sufletul lui David, si Ionatan l-a iubit ca pe sufletul din el."], // David
  ["1 Samuel 18:2", "In {0} zi, Saul a oprit pe David si nu l-a lasat sa se intoarca in casa tatalui sau."], // aceeasi
  ["1 Samuel 18:3", "{0} a facut legamant cu David, pentru ca-l iubea ca pe sufletul lui."], // Ionatan
  ["1 Samuel 18:4", "A scos {0} pe care o purta, ca s-o dea lui David; si i-a dat hainele sale, chiar sabia, arcul si cingatoarea lui."], // mantaua
  ["1 Samuel 18:5", "{0} se ducea si izbutea oriunde-l trimitea Saul; a fost pus de Saul in fruntea oamenilor de razboi si era placut intregului popor, chiar si slujitorilor lui Saul."], // David
  ["1 Samuel 18:6", "Pe cand {0} ei, la intoarcerea lui David de la omorarea filisteanului, femeile au iesit din toate cetatile lui Israel inaintea imparatului Saul, cantand si jucand, in sunetul timpanelor si lautelor si scotand strigate de bucurie."], // veneau
  ["1 Samuel 18:7", "{0} care cantau isi raspundeau unele altora si ziceau: \"Saul a batut miile lui, iar David zecile lui de mii.\""], // Femeile
  ["1 Samuel 18:8", "Saul s-a {0} foarte tare si nu i-a placut vorba aceasta. El a zis: \"Lui David ii dau zece mii si mie-mi dau mii! Nu-i mai lipseste decat imparatia.\""], // maniat
  ["1 Samuel 18:9", "Si din ziua {0}, Saul a privit cu ochi rai pe David."], // aceea
  ["1 Samuel 18:10", "A doua zi, {0} cel rau, trimis de Dumnezeu, a apucat pe Saul, care s-a infuriat in mijlocul casei. David canta, ca si in celelalte zile, si Saul era cu sulita in mana."], // duhul
  ["1 Samuel 18:11", "Saul a {0} sulita, zicandu-si in sine: \"Voi pironi pe David de perete.\" Dar David s-a ferit de el de doua ori."], // ridicat
  ["1 Samuel 18:12", "Saul se {0} de David, pentru ca Domnul era cu David si Se departase de la el."], // temea
  ["1 Samuel 18:13", "L-a {0} de langa el si l-a pus mai mare peste o mie de oameni. David iesea si intra in fruntea poporului;"], // indepartat
  ["1 Samuel 18:14", "{0} in tot ce facea, si Domnul era cu el."], // izbutea
  ["1 Samuel 18:15", "Saul, {0} ca izbutea intotdeauna, se temea de el;"], // vazand
  ["1 Samuel 18:16", "dar tot {0} si Iuda iubeau pe David, pentru ca iesea si intra in fruntea lor."], // Israelul
  ["1 Samuel 18:17", "Saul a zis lui {0}: \"Iata, iti voi da de nevasta pe fiica mea cea mai mare, Merab: numai sa-mi slujesti cu vitejie si sa porti razboaiele Domnului.\" Dar Saul isi zicea: \"Nu vreau sa-mi pun mana mea pe el, ci mana filistenilor sa fie asupra lui.\""], // David
  ["1 Samuel 18:18", "{0} a raspuns lui Saul: \"Cine sunt eu si ce este viata mea, ce este familia tatalui meu in Israel, ca sa fiu ginerele imparatului?\""], // David
  ["1 Samuel 18:19", "{0} vremea cand Merab, fata lui Saul, avea sa fie data lui David, ea a fost data de nevasta lui Adriel, din Mehola."], // Venind
  ["1 Samuel 18:20", "{0}, fata lui Saul, iubea pe David. Au spus lui Saul, si lucrul i-a placut."], // Mical
  ["1 Samuel 18:21", "El isi {0}: \"I-o voi da ca sa-i fie o cursa si sa cada sub mana filistenilor.\" Si Saul a zis lui David pentru a doua oara: \"Astazi imi vei fi ginere.\""], // zicea
  ["1 Samuel 18:22", "Saul a dat {0} sai urmatoarea porunca: \"Vorbiti in taina lui David si spuneti-i: \"Iata ca imparatul e binevoitor fata de tine si toti slujitorii lui te iubesc; fii acum ginerele imparatului.\""], // slujitorilor
  ["1 Samuel 18:23", "{0} lui Saul au spus aceste lucruri la urechile lui David. Si David a raspuns: \"Credeti ca este usor sa fii ginerele imparatului? Eu sunt un om sarac si de putina insemnatate.\""], // Slujitorii
  ["1 Samuel 18:24", "{0} lui Saul i-au spus ce raspunsese David."], // Slujitorii
  ["1 Samuel 18:25", "Saul a zis: \"Asa sa {0} lui David: \"Imparatul nu cere nicio zestre; ci doreste o suta de preputuri de ale filistenilor, ca sa-si razbune pe vrajmasii lui.\" Saul avea de gand sa faca pe David sa cada in mainile filistenilor."], // vorbiti
  ["1 Samuel 18:26", "{0} lui Saul au spus aceste cuvinte lui David, si David a primit ce i se ceruse, pentru ca sa fie ginerele imparatului. Inainte de vremea hotarata,"], // Slujitorii
  ["1 Samuel 18:27", "{0} s-a sculat, a plecat cu oamenii lui si a ucis doua sute de oameni dintre filisteni, le-a adus preputurile si a dat imparatului numarul intreg, ca sa fie ginerele imparatului. Atunci Saul i-a dat de nevasta pe fiica sa Mical."], // David
  ["1 Samuel 18:28", "Saul a {0} si a inteles ca Domnul era cu David; si fiica sa Mical iubea pe David."], // vazut
  ["1 Samuel 18:29", "Saul s-a {0} din ce in ce mai mult de David si toata viata i-a fost vrajmas."], // temut
  ["1 Samuel 18:30", "{0} filistenilor ieseau la lupta; si ori de cate ori ieseau, David avea mai multa izbanda decat toti slujitorii lui Saul, si numele lui a ajuns foarte vestit."], // Domnitorii
  ["1 Samuel 19:1", "Saul a {0} fiului sau Ionatan si tuturor slujitorilor lui sa omoare pe David."], // vorbit
  ["1 Samuel 19:2", "Dar {0}, fiul lui Saul, care iubea mult pe David, i-a dat de stire si i-a zis: \"Tatal meu, Saul, cauta sa te omoare. Pazeste-te, dar, maine dimineata, stai intr-un loc tainuit si ascunde-te."], // Ionatan
  ["1 Samuel 19:3", "Eu voi iesi si voi sta {0} tatal meu in campul in care vei fi; voi vorbi tatalui meu despre tine, voi vedea ce va zice si-ti voi spune.\""], // langa
  ["1 Samuel 19:4", "{0} a vorbit bine de David tatalui sau, Saul: \"Sa nu faca imparatul\", a zis el, \"un pacat fata de robul sau David, caci el n-a facut niciun pacat fata de tine. Dimpotriva, a lucrat pentru binele tau;"], // Ionatan
  ["1 Samuel 19:5", "si-a pus in joc {0}, a ucis pe filistean, si Domnul a dat o mare izbavire pentru tot Israelul. Tu ai vazut si te-ai bucurat. Pentru ce sa pacatuiesti impotriva unui sange nevinovat si sa omori fara pricina pe David?\""], // viata
  ["1 Samuel 19:6", "Saul a {0} glasul lui Ionatan si a jurat, zicand: \"Viu este Domnul, ca David nu va muri!\""], // ascultat
  ["1 Samuel 19:7", "{0} a chemat pe David si i-a spus toate cuvintele acestea; apoi l-a adus la Saul; si David a fost inaintea lui ca mai inainte."], // Ionatan
  ["1 Samuel 19:8", "{0} urma inainte. David a mers impotriva filistenilor si s-a batut cu ei, le-a pricinuit o mare infrangere, si au fugit dinaintea lui."], // Razboiul
  ["1 Samuel 19:9", "Atunci {0} cel rau, trimis de Domnul, a venit peste Saul, care sedea in casa, cu sulita in mana. David canta,"], // duhul
  ["1 Samuel 19:10", "si Saul a vrut sa-l {0} cu sulita de perete. Dar David s-a ferit de el, si Saul a lovit cu sulita in perete. David a fugit si a scapat noaptea."], // pironeasca
  ["1 Samuel 19:11", "Saul a {0} niste oameni acasa la David, ca sa-l pandeasca si sa-l omoare dimineata. Dar Mical, nevasta lui David, i-a dat de stire si i-a zis: \"Daca nu fugi in noaptea aceasta, maine vei fi omorat.\""], // trimis
  ["1 Samuel 19:12", "Ea l-a {0} pe fereastra, si David a plecat si a fugit. Asa a scapat."], // coborat
  ["1 Samuel 19:13", "In urma, {0} a luat terafimul si l-a pus in pat; i-a pus o piele de capra in jurul capului si l-a invelit cu o haina."], // Mical
  ["1 Samuel 19:14", "Cand a {0} Saul oamenii sa ia pe David, ea a zis: \"Este bolnav.\""], // trimis
  ["1 Samuel 19:15", "Saul i-a {0} inapoi sa-l vada si a zis: \"Aduceti-l la mine in patul lui, ca sa-l omor.\""], // trimis
  ["1 Samuel 19:16", "{0} aceia s-au intors, si iata ca terafimul era in pat, si in jurul capului era o piele de capra."], // Oamenii
  ["1 Samuel 19:17", "Saul a zis {0} Mical: \"Pentru ce m-ai inselat in felul acesta si ai dat drumul vrajmasului meu, si a scapat?\" Mical a raspuns lui Saul: \"El mi-a zis: \"Lasa-ma sa plec, ori te omor!\""], // catre
  ["1 Samuel 19:18", "Asa a {0} si a scapat David. El s-a dus la Samuel, la Rama, si i-a istorisit tot ce-i facuse Saul. Apoi s-a dus cu Samuel si a locuit in Naiot."], // fugit
  ["1 Samuel 19:19", "Au spus {0} acesta lui Saul si au zis: \"Iata ca David este in Naiot, langa Rama.\""], // lucrul
  ["1 Samuel 19:20", "Saul a {0} niste oameni sa ia pe David. Ei au vazut o adunare de proroci care proroceau cu Samuel in frunte. Duhul lui Dumnezeu a venit peste trimisii lui Saul, si au inceput si ei sa proroceasca."], // trimis
  ["1 Samuel 19:21", "Au spus lui Saul {0} acesta; el a trimis alti oameni, si au prorocit si ei. A mai trimis altii a treia oara, si au prorocit si ei."], // lucrul
  ["1 Samuel 19:22", "Atunci Saul s-a dus el {0} la Rama. Ajungand la fantana cea mare fara apa, care este la Secu, a intrebat: \"Unde sunt Samuel si David?\" I s-a raspuns: \"Sunt in Naiot, langa Rama.\""], // insusi
  ["1 Samuel 19:23", "Si s-a {0} spre Naiot, langa Rama. Duhul lui Dumnezeu a venit si peste el; si Saul si-a vazut de drum prorocind pana la sosirea lui in Naiot, langa Rama."], // indreptat
  ["1 Samuel 19:24", "S-a {0} de haine si a prorocit si el inaintea lui Samuel; si s-a aruncat dezbracat la pamant toata ziua aceea si toata noaptea. De aceea se zice: \"Oare si Saul este intre proroci?\""], // dezbracat
  ["1 Samuel 20:1", "{0} a fugit din Naiot, de langa Rama. S-a dus la Ionatan si a zis: \"Ce-am facut eu? Care este nelegiuirea mea, care este pacatul meu inaintea tatalui tau, de vrea sa-mi ia viata?\""], // David
  ["1 Samuel 20:2", "{0} i-a raspuns: \"Fereasca Dumnezeu! Nu vei muri. Tatal meu nu face niciun lucru, fie mare, fie mic, fara sa-mi dea de stire; pentru ce mi-ar ascunde el lucrul acesta? Nu este nimic.\""], // Ionatan
  ["1 Samuel 20:3", "{0} a zis iarasi, jurand: \"Tatal tau stie bine ca am capatat trecere inaintea ta si va fi zis: \"Sa nu stie Ionatan, caci s-ar intrista.\" Dar viu este Domnul si viu este sufletul tau, ca nu este decat un pas intre mine si moarte.\""], // David
  ["1 Samuel 20:4", "{0} a zis lui David: \"Pentru tine voi face tot ce vei vrea.\""], // Ionatan
  ["1 Samuel 20:5", "Si {0} i-a raspuns: \"Iata ca maine este luna noua si ar trebui sa sed sa mananc cu imparatul; lasa-ma sa ma duc si sa ma ascund in campii pana in seara zilei a treia."], // David
  ["1 Samuel 20:6", "Daca {0} tau va baga de seama lipsa mea, sa-i spui: \"David m-a rugat sa-l las sa se duca pana la Betleem, in cetatea lui, pentru ca acolo se aduce pentru toata familia o jertfa de peste an.\""], // tatal
  ["1 Samuel 20:7", "Si daca va zice: \"Bine!\", atunci {0} tau n-are nimic de temut; dar daca-l va apuca mania, sa stii ca pieirea mea este lucru hotarat din partea lui."], // robul
  ["1 Samuel 20:8", "{0}, dar, dragostea pentru robul tau, caci ai facut cu robul tau un legamant inaintea Domnului. Si daca este vreo nelegiuire in mine, ia-mi tu viata, de ce sa ma mai duci pana la tatal tau?\""], // Arata-ti
  ["1 Samuel 20:9", "{0} i-a zis: \"Departe de tine gandul sa nu-ti dau de stire, daca voi afla ca pieirea ta este lucru hotarat din partea tatalui meu si ameninta sa te ajunga!\""], // Ionatan
  ["1 Samuel 20:10", "{0} a zis lui Ionatan: \"Cine-mi va da de stire daca tatal tau ti-ar raspunde cu asprime?\""], // David
  ["1 Samuel 20:11", "Si {0} a zis lui David: \"Vino sa iesim pe camp.\" Si au iesit amandoi pe camp."], // Ionatan
  ["1 Samuel 20:12", "{0} a zis lui David: \"Iau martor pe Domnul Dumnezeul lui Israel ca voi cerceta de aproape pe tatal meu maine sau poimaine; si de va gandi bine de David,"], // Ionatan
  ["1 Samuel 20:13", "{0} sa Se poarte cu Ionatan cu toata asprimea, daca nu voi trimite pe nimeni sa-ti dea de stire! Daca tatal meu va gasi cu cale sa-ti faca rau, iarasi iti voi da de stire si te voi lasa sa pleci, ca sa te duci in pace; si Domnul sa fie cu tine, cum a fost cu tatal meu!"], // Domnul
  ["1 Samuel 20:14", "Daca voi mai trai, sa te {0} fata de mine cu o bunatate ca a Domnului; si daca voi muri,"], // porti
  ["1 Samuel 20:15", "sa nu iti {0} niciodata bunatatea fata de casa mea, nici chiar cand Domnul va nimici pe fiecare din vrajmasii lui David de pe fata pamantului."], // indepartezi
  ["1 Samuel 20:16", "Caci {0} a facut legamant cu casa lui David! Domnul sa Se razbune pe vrajmasii lui David!\""], // Ionatan
  ["1 Samuel 20:17", "{0} a intarit si mai mult fata de David dragostea pe care o avea pentru el, caci il iubea ca pe sufletul lui."], // Ionatan
  ["1 Samuel 20:18", "{0} i-a zis: \"Maine este luna noua; se va baga de seama lipsa ta, caci locul tau va fi gol."], // Ionatan
  ["1 Samuel 20:19", "Sa te {0} a treia zi pana in fundul locului in care te ascunsesesi in ziua cand cu intamplarea aceea si sa ramai langa piatra Ezel."], // cobori
  ["1 Samuel 20:20", "Eu voi {0} trei sageti inspre piatra aceasta, ca si cand as lovi la tinta."], // trage
  ["1 Samuel 20:21", "Si voi {0} un tanar si-i voi zice: \"Du-te de gaseste sagetile!\" Daca-i voi zice: \"Iata ca sagetile sunt dincoace de tine, ia-le!\", atunci sa vii, caci este pace pentru tine si n-ai sa te temi de nimic, viu este Domnul!"], // trimite
  ["1 Samuel 20:22", "Dar daca voi zice {0}: \"Iata ca sagetile sunt dincolo de tine!\", atunci sa pleci, caci Domnul te trimite."], // tanarului
  ["1 Samuel 20:23", "{0} este martor pe vecie pentru cuvantul pe care ni l-am dat unul altuia.\""], // Domnul
  ["1 Samuel 20:24", "{0} s-a ascuns in camp. A venit luna noua, si imparatul a luat loc la ospat ca sa manance."], // David
  ["1 Samuel 20:25", "{0} a sezut ca de obicei pe scaunul lui langa perete. Ionatan s-a sculat, si Abner a sezut langa Saul; dar locul lui David a ramas gol."], // Imparatul
  ["1 Samuel 20:26", "Saul n-a zis {0} in ziua aceea; \"Caci\", zicea el, \"s-a intamplat: el nu este curat, negresit nu este curat.\""], // nimic
  ["1 Samuel 20:27", "A doua zi, ziua a doua a {0} noi, locul lui David era tot gol. Si Saul a zis fiului sau Ionatan: \"Pentru ce n-a venit fiul lui Isai la masa nici ieri, nici azi?\""], // lunii
  ["1 Samuel 20:28", "{0} a raspuns lui Saul: \"David mi-a cerut voie sa se duca la Betleem."], // Ionatan
  ["1 Samuel 20:29", "El a zis: \"{0} drumul, te rog, caci avem in cetate o jertfa de familie, si fratele meu mi-a spus lucrul acesta; deci daca am capatat trecere inaintea ta, da-mi voie sa ma duc in graba sa-mi vad fratii.\" Pentru aceea n-a venit la masa imparatului.\""], // Da-mi
  ["1 Samuel 20:30", "Atunci Saul s-a {0} de manie impotriva lui Ionatan si i-a zis: \"Fiu rau si neascultator, nu stiu eu ca ti-ai luat ca prieten pe fiul lui Isai, spre rusinea ta si spre rusinea mamei tale?"], // aprins
  ["1 Samuel 20:31", "Caci cata {0} va trai fiul lui Isai pe pamant, nu va fi liniste nici pentru tine, nici pentru imparatia ta. Si acum trimite sa-l caute si sa mi-l aduca, fiindca este vrednic de moarte.\""], // vreme
  ["1 Samuel 20:32", "{0} a raspuns tatalui sau, Saul, si i-a zis: \"Pentru ce sa fie omorat? Ce a facut?\""], // Ionatan
  ["1 Samuel 20:33", "Si Saul si-a {0} sulita spre el, ca sa-l loveasca. Ionatan a inteles ca era lucru hotarat din partea tatalui sau sa omoare pe David."], // indreptat
  ["1 Samuel 20:34", "S-a {0} de la masa intr-o manie aprinsa si n-a luat deloc parte la masa in ziua a doua a lunii noi; caci era mahnit din pricina lui David, pentru ca tatal sau il ocarase."], // sculat
  ["1 Samuel 20:35", "A doua zi de {0}, Ionatan s-a dus pe camp in locul in care se invoise cu David si era insotit de un baietas."], // dimineata
  ["1 Samuel 20:36", "El i-a zis: \"Da fuga si {0} sagetile pe care le voi trage.\" Baiatul a alergat, si Ionatan a tras o sageata care a trecut dincolo de el."], // gaseste
  ["1 Samuel 20:37", "Cand a {0} baiatul la locul unde era sageata pe care o trasese Ionatan, Ionatan a strigat dupa el: \"Iata ca sageata este dincolo de tine.\""], // ajuns
  ["1 Samuel 20:38", "I-a {0} iarasi: \"Iute, grabeste-te, nu te opri!\" Si baiatul lui Ionatan a strans sagetile si s-a intors la stapanul lui."], // strigat
  ["1 Samuel 20:39", "{0} nu stia nimic: numai Ionatan si David intelegeau lucrul acesta."], // Baiatul
  ["1 Samuel 20:40", "{0} a dat baiatului armele si i-a zis: \"Du-te si du-le in cetate!\""], // Ionatan
  ["1 Samuel 20:41", "Dupa {0} baiatului, David s-a sculat din partea de miazazi, apoi s-a aruncat cu fata la pamant si s-a inchinat de trei ori. Cei doi prieteni s-au imbratisat si au plans impreuna. David mai ales se prapadea plangand."], // plecarea
  ["1 Samuel 20:42", "Si {0} a zis lui David: \"Du-te in pace, acum cand am jurat amandoi in Numele Domnului, zicand: \"Domnul sa fie pe vecie intre mine si tine, intre samanta mea si samanta ta!\" David s-a sculat si a plecat, iar Ionatan s-a intors in cetate."], // Ionatan
  ["1 Samuel 21:1", "{0} s-a dus la Nob, la preotul Ahimelec, care a alergat speriat inaintea lui si i-a zis: \"Pentru ce esti singur si nu este nimeni cu tine?\""], // David
  ["1 Samuel 21:2", "{0} a raspuns preotului Ahimelec: \"Imparatul mi-a dat o porunca si mi-a zis: \"Nimeni sa nu stie nimic de pricina pentru care te trimit si de porunca pe care ti-am dat-o.\" Am hotarat un loc de intalnire cu oamenii mei."], // David
  ["1 Samuel 21:3", "Acum ce ai la {0}? Da-mi cinci paini sau ce se va gasi.\""], // indemana
  ["1 Samuel 21:4", "{0} a raspuns lui David: \"N-am paine obisnuita la indemana, ci numai paine sfintita, doar daca oamenii tai s-au ferit de impreunarea cu femei!\""], // Preotul
  ["1 Samuel 21:5", "{0} a raspuns preotului: \"Ne-am ferit de impreunarea cu femei de trei zile de cand am plecat, si toti oamenii mei sunt curati; de altfel, daca aceasta este o fapta necurata, va fi sfintita negresit azi de acela care o va face.\""], // David
  ["1 Samuel 21:6", "Atunci {0} i-a dat painea sfintita, caci nu era acolo alta paine decat painea pentru punerea inainte, care fusese luata dinaintea Domnului, ca sa fie inlocuita cu paine calda, in clipa cand luasera pe cealalta."], // preotul
  ["1 Samuel 21:7", "{0} in ziua aceea, se afla acolo inchis inaintea Domnului un om dintre slujitorii lui Saul; era un edomit, numit Doeg, capetenia pastorilor lui Saul."], // Chiar
  ["1 Samuel 21:8", "{0} a zis lui Ahimelec: \"N-ai la indemana o sulita sau o sabie? Caci nu mi-am luat cu mine nici sabia, nici armele, pentru ca porunca imparatului era grabnica.\""], // David
  ["1 Samuel 21:9", "{0} a raspuns: \"Iata sabia lui Goliat, filisteanul, pe care l-ai omorat in Valea Terebintilor; este invelita intr-un covor, in dosul efodului; daca vrei s-o iei, ia-o, caci nu este alta aici.\" Si David a zis: \"Nu-i alta ca ea; da-mi-o.\""], // Preotul
  ["1 Samuel 21:10", "{0} s-a sculat si a fugit chiar in ziua aceea de Saul. A ajuns la Achis, imparatul Gatului."], // David
  ["1 Samuel 21:11", "{0} lui Achis i-au zis: \"Nu este acesta David, imparatul tarii? Nu este el acela pentru care se canta jucand: \"Saul si-a batut miile lui, iar David zecile lui de mii\"?\""], // Slujitorii
  ["1 Samuel 21:12", "{0} a pus la inima aceste cuvinte si a avut o mare frica de Achis, imparatul Gatului."], // David
  ["1 Samuel 21:13", "A {0} pe nebunul inaintea lor; facea nazdravanii inaintea lor; facea zgarieturi pe usile portilor si lasa sa-i curga balele pe barba."], // facut
  ["1 Samuel 21:14", "{0} a zis slujitorilor sai: \"Vedeti bine ca omul acesta si-a pierdut mintile; pentru ce mi-l aduceti?"], // Achis
  ["1 Samuel 21:15", "Oare duc {0} de nebuni, de-mi aduceti pe acesta si ma faceti martor la nazdravaniile lui? Sa intre el in casa mea?\""], // lipsa
  ["1 Samuel 22:1", "{0} a plecat de acolo si a scapat in pestera Adulam. Fratii lui si toata casa tatalui sau au aflat si s-au coborat la el."], // David
  ["1 Samuel 22:2", "Toti cei ce se {0} in nevoie, care aveau datorii sau care erau nemultumiti, s-au strans la el, si el a ajuns capetenia lor. Astfel s-au unit cu el aproape patru sute de oameni."], // aflau
  ["1 Samuel 22:3", "De acolo {0} s-a dus la Mitpe, in tara Moabului. El a zis imparatului Moabului: \"Da voie, te rog, tatalui meu si mamei mele sa vina la voi, pana voi sti ce va face Dumnezeu cu mine.\""], // David
  ["1 Samuel 22:4", "Si i-a adus {0} imparatului Moabului si au locuit cu el in tot timpul cat a stat David in cetatuie."], // inaintea
  ["1 Samuel 22:5", "{0} Gad a zis lui David: \"Nu sta in cetatuie, ci du-te si intra in tara lui Iuda.\" Si David a plecat si a ajuns la padurea Heret."], // Prorocul
  ["1 Samuel 22:6", "Saul a {0} ca David si oamenii lui au fost descoperiti. Saul sedea sub tamarisc, la Ghibeea, pe inaltime; avea sulita in mana, si toti slujitorii lui stateau langa el."], // aflat
  ["1 Samuel 22:7", "Si Saul a zis {0} sai de langa el: \"Ascultati, beniamiti! Va va da fiul lui Isai la toti ogoare si vii? Va face el din voi toti capetenii peste o mie si capetenii peste o suta?"], // slujitorilor
  ["1 Samuel 22:8", "Daca nu, de ce {0} unit toti impotriva mea si nimeni nu mi-a dat de stire despre legamantul fiului meu cu fiul lui Isai? Pentru ce n-a fost nimeni dintre voi pe care sa-l doara inima pentru mine si sa ma instiinteze ca fiul meu a rasculat pe robul meu impotriva mea, ca sa-mi intinda curse, cum face astazi?\""], // v-ati
  ["1 Samuel 22:9", "Doeg, {0}, care era si el printre slujitorii lui Saul, a raspuns: \"Eu am vazut pe fiul lui Isai venind la Nob, la Ahimelec, fiul lui Ahitub."], // edomitul
  ["1 Samuel 22:10", "{0} a intrebat pe Domnul pentru el, i-a dat merinde si i-a dat sabia lui Goliat, filisteanul.\""], // Ahimelec
  ["1 Samuel 22:11", "{0} a trimis dupa Ahimelec, fiul lui Ahitub, preotul, si dupa toata casa tatalui sau, dupa preotii care erau la Nob. Ei au venit toti la imparat."], // Imparatul
  ["1 Samuel 22:12", "Saul a zis: \"{0}, fiul lui Ahitub!\" El a raspuns: \"Iata-ma, domnul meu!\""], // Asculta
  ["1 Samuel 22:13", "Saul i-a zis: \"Pentru ce {0} unit impotriva mea, tu si fiul lui Isai? Pentru ce i-ai dat paine si o sabie si ai intrebat pe Dumnezeu pentru el, ca sa se ridice impotriva mea si sa-mi intinda curse, cum face astazi?\""], // v-ati
  ["1 Samuel 22:14", "{0} a raspuns imparatului: \"Care dintre slujitorii tai poate fi pus alaturi cu credinciosul David, ginerele imparatului, gata la poruncile lui si inconjurat cu cinste in casa ta?"], // Ahimelec
  ["1 Samuel 22:15", "Oare de {0} am inceput eu sa intreb pe Dumnezeu pentru el? Departe de mine asa ceva! Sa nu arunce imparatul nicio vina asupra robului sau, nici asupra nimanui din casa tatalui meu, caci robul tau nu stie nimic din toate acestea, nici lucru mic, nici lucru mare.\""], // astazi
  ["1 Samuel 22:16", "{0} a zis: \"Trebuie sa mori, Ahimelec, tu si toata casa tatalui tau.\""], // Imparatul
  ["1 Samuel 22:17", "Si {0} a zis alergatorilor care stateau langa el: \"Intoarceti-va si omorati pe preotii Domnului; caci s-au invoit cu David: au stiut bine ca fuge si nu mi-au dat de veste.\" Dar slujitorii imparatului n-au voit sa intinda mana ca sa loveasca pe preotii Domnului."], // imparatul
  ["1 Samuel 22:18", "Atunci {0} a zis lui Doeg: \"Intoarce-te si loveste pe preoti.\" Si Doeg, edomitul, s-a intors si a lovit pe preoti; a omorat in ziua aceea optzeci si cinci de oameni care purtau efodul de in."], // imparatul
  ["1 Samuel 22:19", "Saul a mai {0} prin ascutisul sabiei cetatea preoteasca Nob; barbati si femei, copii si prunci, boi, magari si oi: toti au cazut sub ascutisul sabiei."], // trecut
  ["1 Samuel 22:20", "Un fiu al lui {0}, fiul lui Ahitub, a scapat. Numele lui era Abiatar. A fugit la David"], // Ahimelec
  ["1 Samuel 22:21", "si i-a spus ca Saul a ucis pe {0} Domnului."], // preotii
  ["1 Samuel 22:22", "{0} a zis lui Abiatar: \"M-am gandit chiar in ziua aceea ca Doeg, edomitul, fiind acolo, nu se putea sa nu spuna lui Saul. Eu sunt pricina mortii tuturor sufletelor din casa tatalui tau."], // David
  ["1 Samuel 22:23", "{0} cu mine, nu te teme de nimic, caci cel ce cauta sa ia viata mea cauta s-o ia si pe a ta; langa mine vei fi bine pazit.\""], // Ramai
  ["1 Samuel 23:1", "Au {0} si au spus lui David: \"Iata ca filistenii au inceput lupta impotriva Cheilei si au jefuit ariile.\""], // venit
  ["1 Samuel 23:2", "{0} a intrebat pe Domnul si a zis: \"Sa ma duc si sa bat pe filistenii acestia?\" Si Domnul i-a raspuns: \"Du-te, bate pe filisteni si izbaveste Cheila.\""], // David
  ["1 Samuel 23:3", "Dar {0} lui David i-au zis: \"Iata ca noi ne temem chiar aici in Iuda; ce va fi cand vom merge la Cheila, impotriva ostilor filistenilor?\""], // oamenii
  ["1 Samuel 23:4", "{0} a intrebat iarasi pe Domnul. Si Domnul i-a raspuns: \"Scoala-te si coboara-te la Cheila, caci dau pe filisteni in mainile tale.\""], // David
  ["1 Samuel 23:5", "{0} s-a dus, dar, cu oamenii lui la Cheila si s-a batut impotriva filistenilor; le-a luat vitele si le-a pricinuit o mare infrangere. Astfel a izbavit David pe locuitorii din Cheila."], // David
  ["1 Samuel 23:6", "Cand a {0} Abiatar, fiul lui Ahimelec, la David, in Cheila, s-a coborat cu efodul in mana."], // fugit
  ["1 Samuel 23:7", "Saul a fost {0} de sosirea lui David la Cheila si a zis: \"Dumnezeu il da in mainile mele, caci a venit si s-a inchis intr-o cetate cu porti si zavoare.\""], // instiintat
  ["1 Samuel 23:8", "Si Saul a {0} tot poporul la razboi, ca sa se coboare la Cheila si sa impresoare pe David si pe oamenii lui."], // chemat
  ["1 Samuel 23:9", "{0}, luand cunostinta de acest plan rau pe care-l punea la cale Saul impotriva lui, a zis preotului Abiatar: \"Adu efodul!\""], // David
  ["1 Samuel 23:10", "Si {0} a zis: \"Doamne Dumnezeul lui Israel, robul Tau a aflat ca Saul vrea sa vina la Cheila ca sa nimiceasca cetatea din pricina mea."], // David
  ["1 Samuel 23:11", "Ma vor da in {0} lui locuitorii din Cheila? Se va cobori Saul aici, cum a aflat robul Tau? Doamne Dumnezeul lui Israel, binevoieste si descopera lucrul acesta robului Tau!\" Si Domnul a raspuns: \"Se va cobori.\""], // mainile
  ["1 Samuel 23:12", "{0} a mai zis: \"Ma vor da locuitorii din Cheila, pe mine si pe oamenii mei, in mainile lui Saul?\" Si Domnul a raspuns: \"Te vor da.\""], // David
  ["1 Samuel 23:13", "Atunci {0} s-a sculat cu oamenii lui, in numar de aproape sase sute de insi; au iesit din Cheila si s-au dus unde au putut. Saul, afland ca David a scapat din Cheila, s-a oprit din mers."], // David
  ["1 Samuel 23:14", "{0} a locuit in pustiu, in locuri intarite, si a ramas pe muntele din pustiul Zif. Saul il cauta mereu, dar Dumnezeu nu l-a dat in mainile lui."], // David
  ["1 Samuel 23:15", "{0}, vazand ca Saul a pornit sa-i ia viata, a stat in pustiul Zif, in padure."], // David
  ["1 Samuel 23:16", "Atunci {0}, fiul lui Saul, s-a sculat si s-a dus la David, in padure. El i-a intarit increderea in Dumnezeu"], // Ionatan
  ["1 Samuel 23:17", "si i-a zis: \"Nu te teme de {0}, caci mana tatalui meu, Saul, nu te va atinge. Tu vei domni peste Israel, si eu voi fi al doilea dupa tine; tatal meu, Saul, stie si el bine lucrul acesta.\""], // nimic
  ["1 Samuel 23:18", "Au {0} iarasi amandoi legamant inaintea Domnului, si David a ramas in padure, iar Ionatan s-a dus acasa."], // facut
  ["1 Samuel 23:19", "{0} s-au suit la Saul, la Ghibeea, si au zis: \"Nu-i David ascuns intre noi in locuri intarite, in padure, pe dealul Hachila, care este la miazazi de pustiu?"], // Zifitii
  ["1 Samuel 23:20", "{0}, dar, imparate, fiindca aceasta este toata dorinta sufletului tau; lasa pe noi daca e vorba sa-l dam in mainile imparatului."], // Coboara-te
  ["1 Samuel 23:21", "Saul a zis: \"{0} sa va binecuvanteze ca aveti mila de mine!"], // Domnul
  ["1 Samuel 23:22", "{0}, va rog, de mai cercetati, ca sa stiti si sa descoperiti in ce loc si-a indreptat pasii si cine l-a vazut, caci mi s-a spus ca este foarte siret."], // Duceti-va
  ["1 Samuel 23:23", "{0} si vedeti toate locurile unde se ascunde, veniti apoi la mine cu ceva temeinic, si voi porni cu voi. Daca este in tara, il voi cauta printre toate miile lui Iuda.\""], // Cercetati
  ["1 Samuel 23:24", "S-au {0}, dar, si s-au dus la Zif inaintea lui Saul. David si oamenii lui erau in pustiul Maon, si anume in campia dinspre miazazi de pustiu."], // sculat
  ["1 Samuel 23:25", "Saul a {0} cu oamenii sai in cautarea lui David. Despre lucrul acesta s-a dat de veste lui David, care s-a coborat la stanca si a ramas in pustiul Maon. Saul, cand a auzit, a urmarit pe David in pustiul Maon."], // plecat
  ["1 Samuel 23:26", "Saul {0} pe o parte a muntelui, si David cu oamenii lui pe cealalta parte a muntelui. David fugea repede ca sa scape de Saul. Dar Saul si oamenii lui chiar inconjurasera pe David si pe ai lui, ca sa puna mana pe ei,"], // mergea
  ["1 Samuel 23:27", "cand un sol a {0} si a spus lui Saul: \"Grabeste-te sa vii, caci au navalit filistenii in tara.\""], // venit
  ["1 Samuel 23:28", "Saul a {0} sa urmareasca pe David si s-a intors sa iasa inaintea filistenilor. De aceea locul acela s-a numit Sela-Hamahlecot."], // incetat
  ["1 Samuel 23:29", "De acolo {0} s-a suit spre locurile intarite din En-Ghedi si a locuit acolo."], // David
  ["1 Samuel 24:1", "Cand s-a {0} Saul de la urmarirea filistenilor, au venit si i-au spus: \"Iata ca David este in pustiul En-Ghedi.\""], // intors
  ["1 Samuel 24:2", "Saul a luat trei mii de {0} alesi din tot Israelul si s-a dus sa caute pe David si pe oamenii lui pana pe stancile tapilor salbatici."], // oameni
  ["1 Samuel 24:3", "A {0} la niste stane de oi, care erau langa drum; si acolo era o pestera in care a intrat sa doarma. David si oamenii lui erau in fundul pesterii."], // ajuns
  ["1 Samuel 24:4", "{0} lui David i-au zis: \"Iata ziua in care Domnul iti zice: \"Dau pe vrajmasul tau in mainile tale; fa-i ce-ti va placea.\" David s-a sculat si a taiat incet coltul hainei lui Saul."], // Oamenii
  ["1 Samuel 24:5", "Dupa {0}, inima ii batea, pentru ca taiase coltul hainei lui Saul."], // aceea
  ["1 Samuel 24:6", "Si a zis {0} sai: \"Sa ma fereasca Domnul sa fac impotriva domnului meu, care este unsul Domnului, o asa fapta ca sa pun mana pe el! Caci el este unsul Domnului.\""], // oamenilor
  ["1 Samuel 24:7", "Cu {0} cuvinte, David a oprit pe oamenii sai si i-a impiedicat sa se arunce asupra lui Saul. Apoi Saul s-a sculat sa iasa din pestera si si-a vazut inainte de drum."], // aceste
  ["1 Samuel 24:8", "Dupa {0}, David s-a sculat si a iesit din pestera. El a inceput sa strige atunci dupa Saul: \"Imparate, domnul meu!\" Saul s-a uitat inapoi, si David s-a plecat cu fata la pamant si s-a inchinat."], // aceea
  ["1 Samuel 24:9", "{0} a zis lui Saul: \"De ce asculti tu de vorbele oamenilor care zic: \"David iti vrea raul\"?"], // David
  ["1 Samuel 24:10", "Vezi acum cu {0} tai ca Domnul te daduse astazi in mainile mele in pestera. Oamenii mei ma indemnau sa te omor; dar te-am crutat si am zis: \"Nu voi pune mana pe domnul meu, caci este unsul Domnului.\""], // ochii
  ["1 Samuel 24:11", "Uite, {0} meu, uite coltul hainei tale in mana mea. Fiindca ti-am taiat coltul hainei si nu te-am ucis, sa stii si sa vezi ca in purtarea mea nu este nici rautate, nici razvratire si ca n-am pacatuit impotriva ta. Totusi tu imi intinzi curse ca sa-mi iei viata."], // parintele
  ["1 Samuel 24:12", "{0} Domnul intre mine si tine si Domnul sa ma razbune pe tine; dar eu nu voi pune mana pe tine."], // Judece
  ["1 Samuel 24:13", "Raul de la cei rai vine, zice {0} zicala. De aceea eu nu voi pune mana pe tine."], // vechea
  ["1 Samuel 24:14", "{0} cui a pornit imparatul lui Israel? Pe cine urmaresti tu? Un caine mort, un purice."], // Impotriva
  ["1 Samuel 24:15", "{0} va judeca si va hotari intre mine si tine, El va vedea. El imi va apara pricina si El imi va face dreptate, izbavindu-ma din mana ta.\""], // Domnul
  ["1 Samuel 24:16", "Cand a {0} David de spus aceste vorbe lui Saul, Saul a zis: \"Glasul tau este, fiule David?\" Si Saul a ridicat glasul si a plans."], // sfarsit
  ["1 Samuel 24:17", "Si a zis lui {0}: \"Tu esti mai bun decat mine; caci tu mi-ai facut bine, iar eu ti-am facut rau."], // David
  ["1 Samuel 24:18", "Tu iti {0} azi bunatatea cu care te porti fata de mine, caci Domnul ma daduse in mainile tale, si nu m-ai omorat."], // arati
  ["1 Samuel 24:19", "Daca {0} cineva pe vrajmasul lui, il lasa oare sa-si urmeze drumul in liniste? Domnul sa-ti rasplateasca pentru ce mi-ai facut in ziua aceasta!"], // intalneste
  ["1 Samuel 24:20", "Acum iata, stiu ca tu vei {0} si ca imparatia lui Israel va ramane in mainile tale."], // domni
  ["1 Samuel 24:21", "{0}, dar, pe Domnul ca nu-mi vei nimici samanta mea dupa mine si ca nu-mi vei sterge numele din casa tatalui meu.\""], // Jura-mi
  ["1 Samuel 24:22", "{0} a jurat lui Saul. Apoi Saul a plecat acasa, iar David si oamenii lui s-au suit in locul intarit."], // David
  ["1 Samuel 25:1", "{0} a murit. Tot Israelul s-a adunat si l-a plans si l-au ingropat in locuinta lui, la Rama. Atunci David s-a sculat si s-a coborat in pustiul Paran."], // Samuel
  ["1 Samuel 25:2", "In Maon era un om {0} bogat, a carui avere era in Carmel; avea trei mii de oi si o mie de capre si se afla la Carmel pentru tunderea oilor lui."], // foarte
  ["1 Samuel 25:3", "{0} acestui om era Nabal, si nevasta lui se chema Abigail; era o femeie cu judecata si frumoasa la chip, dar barbatul ei era aspru si rau in faptele lui. El se tragea din Caleb."], // Numele
  ["1 Samuel 25:4", "{0} a aflat in pustiu ca Nabal isi tunde oile."], // David
  ["1 Samuel 25:5", "A {0} la el zece tineri, carora le-a zis: \"Suiti-va la Carmel si duceti-va la Nabal. Intrebati-l de sanatate in numele meu"], // trimis
  ["1 Samuel 25:6", "si sa-i {0} asa: \"Sa traiesti in pace, si pacea sa fie cu casa ta si cu tot ce este al tau."], // vorbiti
  ["1 Samuel 25:7", "Si acum, am {0} ca tunzi oile. Pastorii tai au fost cu noi; nu i-am ocarat si nu li s-a luat nimic in tot timpul cat au fost la Carmel."], // auzit
  ["1 Samuel 25:8", "{0} pe slujitorii tai si-ti vor spune. Sa capete trecere, dar, tinerii acestia inaintea ta, fiindca venim intr-o zi de bucurie. Da, dar, te rog, robilor tai si fiului tau David, ce te lasa inima.\""], // Intreaba
  ["1 Samuel 25:9", "Cand au {0} oamenii lui David, au spus lui Nabal toate aceste cuvinte, in numele lui David. Apoi au tacut."], // ajuns
  ["1 Samuel 25:10", "{0} a raspuns slujitorilor lui David: \"Cine este David si cine este fiul lui Isai? Astazi sunt multi slujitori care fug de la stapani."], // Nabal
  ["1 Samuel 25:11", "Si {0} iau eu painea, apa si vitele mele, pe care le-am taiat pentru tunzatorii mei, si sa le dau unor oameni care sunt de nu stiu unde?\""], // sa-mi
  ["1 Samuel 25:12", "{0} lui David si-au luat drumul inapoi; s-au intors si au spus, la sosirea lor, toate aceste cuvinte lui David."], // Oamenii
  ["1 Samuel 25:13", "Atunci {0} a zis oamenilor sai: \"Fiecare din voi sa-si incinga sabia!\" Si fiecare si-a incins sabia. David si-a incins si el sabia, si aproape patru sute de insi s-au suit dupa el. Au mai ramas doar doua sute la calabalacuri."], // David
  ["1 Samuel 25:14", "Unul din {0} lui Nabal a venit si a zis catre Abigail, nevasta lui Nabal: \"Iata ca David a trimis din pustiu niste soli sa intrebe de sanatate pe stapanul nostru, si el s-a purtat rau cu ei."], // slujitorii
  ["1 Samuel 25:15", "Si {0} oamenii acestia au fost foarte buni cu noi; nu ne-au ocarat si nu ni s-a luat nimic, in tot timpul cat am fost cu ei in camp."], // totusi
  ["1 Samuel 25:16", "{0} fost zid si zi si noapte, in tot timpul cat am fost cu ei, la pascutul turmelor."], // Ne-au
  ["1 Samuel 25:17", "Sa stii acum si vezi ce ai de {0}, caci pierderea stapanului nostru si a intregii lui case este hotarata, si el este asa de rau incat nimeni nu indrazneste sa-i vorbeasca.\""], // facut
  ["1 Samuel 25:18", "{0} a luat indata doua sute de paini, doua burdufuri cu vin, cinci oi pregatite, cinci masuri de grau prajit, o suta de turte de stafide si doua sute de legaturi de smochine. Le-a pus pe magari"], // Abigail
  ["1 Samuel 25:19", "si a zis {0} sai: \"Luati-o inaintea mea, si eu voi veni dupa voi.\" N-a spus nimic barbatului ei, Nabal."], // slujitorilor
  ["1 Samuel 25:20", "Ea a {0} pe un magar, a coborat muntele pe un drum tufos, si iata ca David si oamenii lui se coborau in fata ei, asa ca i-a intalnit. -"], // incalecat
  ["1 Samuel 25:21", "{0} zisese: \"In zadar am pazit tot ce are omul acesta in pustiu, de nu s-a luat nimic din tot ce are, caci mi-a intors rau pentru bine."], // David
  ["1 Samuel 25:22", "{0} sa pedepseasca pe robul Sau David cu toata asprimea, daca voi mai lasa sa ramana pana la lumina zilei pe cineva de parte barbateasca din tot ce este al lui Nabal!\""], // Dumnezeu
  ["1 Samuel 25:23", "Cand a {0} Abigail pe David, s-a dat jos repede de pe magar, a cazut cu fata la pamant inaintea lui David si s-a inchinat pana la pamant."], // zarit
  ["1 Samuel 25:24", "Apoi, {0} la picioarele lui, a zis: \"Eu sunt de vina, domnul meu! Ingaduie roabei tale sa-ti vorbeasca la urechi si asculta cuvintele roabei tale."], // aruncandu-se
  ["1 Samuel 25:25", "Sa {0} puna domnul meu mintea cu omul acela rau, cu Nabal, caci, cum ii este numele, asa este si el; Nabal ii este numele si este plin de nebunie. Si eu, roaba ta, n-am vazut pe oamenii trimisi de domnul meu."], // nu-si
  ["1 Samuel 25:26", "Acum, {0} meu, viu este Domnul si viu este sufletul tau, ca Domnul te-a oprit sa versi sange si sa te ajuti cu mana ta. Vrajmasii tai, cei ce vor raul domnului meu, sa fie ca Nabal!"], // domnul
  ["1 Samuel 25:27", "{0} darul acesta pe care-l aduce roaba ta domnului meu si sa se imparta oamenilor care merg dupa domnul meu."], // Primeste
  ["1 Samuel 25:28", "{0}, te rog, vina roabei tale, caci Domnul va face domnului meu o casa trainica; iarta, caci domnul meu poarta razboaiele Domnului, si niciodata nu va fi rautate in tine."], // Iarta
  ["1 Samuel 25:29", "Daca se va {0} cineva care sa te urmareasca si sa vrea sa-ti ia viata, sufletul domnului meu va fi legat in manunchiul celor vii la Domnul Dumnezeul tau, si sa arunce cu prastia sufletul vrajmasilor tai."], // ridica
  ["1 Samuel 25:30", "Cand va face {0} domnului meu tot binele pe care ti l-a fagaduit, si te va pune mai mare peste Israel,"], // Domnul
  ["1 Samuel 25:31", "atunci nu va avea {0} meu nici mustrari de cuget si nici nu-l va durea inima ca a varsat sange degeaba si ca s-a razbunat singur. Si cand va face Domnul bine domnului meu, adu-ti aminte de roaba ta.\""], // domnul
  ["1 Samuel 25:32", "{0} a zis Abigailei: \"Binecuvantat sa fie Domnul Dumnezeul lui Israel care te-a trimis astazi inaintea mea!"], // David
  ["1 Samuel 25:33", "{0} sa fie judecata ta si binecuvantata sa fii tu, ca m-ai oprit in ziua aceasta sa vars sange si mi-ai oprit mana!"], // Binecuvantata
  ["1 Samuel 25:34", "Dar viu este {0} Dumnezeul lui Israel care m-a oprit sa-ti fac rau ca, daca nu te-ai fi grabit sa vii inaintea mea, n-ar mai fi ramas nimic din ce este al lui Nabal, pana la lumina zilei de maine.\""], // Domnul
  ["1 Samuel 25:35", "Si {0} a luat din mana Abigailei ce-i adusese si i-a zis: \"Suie-te in pace acasa; vezi ca ti-am ascultat glasul si te-am primit bine.\""], // David
  ["1 Samuel 25:36", "{0} a ajuns la Nabal. Si tocmai el dadea in casa lui un ospat ca un ospat imparatesc; inima ii era vesela si era beat mort. Ea nu i-a spus nimic, nimic, pana la lumina zilei."], // Abigail
  ["1 Samuel 25:37", "Dar {0}, dupa ce trecuse betia lui Nabal, nevasta sa i-a istorisit ce se intamplase. Inima lui Nabal a primit o lovitura de moarte si s-a facut ca o piatra."], // dimineata
  ["1 Samuel 25:38", "Cam dupa zece zile, {0} a lovit pe Nabal si a murit."], // Domnul
  ["1 Samuel 25:39", "{0} a aflat ca murise Nabal si a zis: \"Binecuvantat sa fie Domnul, ca mi-a aparat pricina in ocara pe care mi-a facut-o Nabal si a impiedicat pe robul Sau sa faca rau! Domnul a facut ca rautatea lui Nabal sa cada asupra capului lui.\" David a trimis vorba Abigailei ca vrea s-o ia de nevasta."], // David
  ["1 Samuel 25:40", "{0} lui David au ajuns la Abigail, la Carmel, si i-au vorbit asa: \"David ne-a trimis la tine ca sa te ia de nevasta.\""], // Slujitorii
  ["1 Samuel 25:41", "Ea s-a {0}, s-a aruncat cu fata la pamant si a zis: \"Iata, roaba ta se socoteste ca o roaba, gata sa spele picioarele slujitorilor domnului meu.\""], // sculat
  ["1 Samuel 25:42", "Si {0} Abigail a plecat calare pe un magar si insotita de cinci fete; a mers dupa solii lui David si i-a fost nevasta."], // indata
  ["1 Samuel 25:43", "{0} luase si pe Ahinoam din Izreel, si amandoua au fost nevestele lui."], // David
  ["1 Samuel 25:44", "Si Saul {0} pe fiica sa Mical, nevasta lui David, lui Palti din Galim, fiul lui Lais."], // daduse
  ["1 Samuel 26:1", "{0} s-au dus la Saul la Ghibeea, si au zis: \"Iata ca David este ascuns pe dealul Hachila, in fata pustiului.\""], // Zifitii
  ["1 Samuel 26:2", "Saul s-a {0} si s-a coborat in pustiul Zif, cu trei mii de oameni alesi din Israel, ca sa caute pe David in pustiul Zif."], // sculat
  ["1 Samuel 26:3", "A {0} pe dealul Hachila, in fata pustiului, langa drum. David era in pustiu; si, intelegand ca Saul merge in urmarirea lui in pustiu,"], // tabarat
  ["1 Samuel 26:4", "a {0} niste iscoade si a aflat ca in adevar Saul venise."], // trimis
  ["1 Samuel 26:5", "Atunci {0} s-a sculat si a venit la locul unde tabarase Saul si a vazut locul unde era culcat Saul, cu Abner, fiul lui Ner, capetenia ostirii lui. Saul era culcat in cort in mijlocul taberei, si poporul era tabarat in jurul lui."], // David
  ["1 Samuel 26:6", "{0} a luat cuvantul si, vorbind lui Ahimelec, hetitul, si lui Abisai, fiul Teruiei si fratele lui Ioab, a zis: \"Cine vrea sa se coboare cu mine in tabara la Saul?\" Si Abisai a raspuns: \"Eu ma voi cobori cu tine.\""], // David
  ["1 Samuel 26:7", "{0} si Abisai s-au dus noaptea la popor. Si iata ca Saul era culcat si dormea in cort in mijlocul taberei, si sulita lui era infipta in pamant la capul lui. Abner si poporul erau culcati in jurul lui."], // David
  ["1 Samuel 26:8", "{0} a zis lui David: \"Dumnezeu da astazi pe vrajmasul tau in mainile tale; lasa-ma, te rog, sa-l lovesc cu sulita mea si sa-l pironesc dintr-o lovitura in pamant, ca sa n-am nevoie sa-i mai dau alta.\""], // Abisai
  ["1 Samuel 26:9", "Dar {0} a zis lui Abisai: \"Nu-l omori! Caci cine ar putea pune mana pe unsul Domnului si sa ramana nepedepsit?\""], // David
  ["1 Samuel 26:10", "Si {0} a zis: \"Viu este Domnul, ca numai Domnul il poate lovi; fie ca-i va veni ziua sa moara, fie ca se va cobori intr-un camp de bataie si va pieri."], // David
  ["1 Samuel 26:11", "Sa ma {0} Domnul sa pun mana pe unsul Domnului! Ia numai sulita de la capataiul lui, cu ulciorul cu apa, si sa plecam.\""], // fereasca
  ["1 Samuel 26:12", "{0} a luat, dar, sulita si ulciorul cu apa de la capataiul lui Saul si au plecat. Nimeni nu i-a vazut, nici n-a bagat de seama nimic si nimeni nu s-a desteptat, caci Domnul ii cufundase pe toti intr-un somn adanc."], // David
  ["1 Samuel 26:13", "{0} a trecut de cealalta parte si a ajuns departe pe varful muntelui, la o mare departare de tabara."], // David
  ["1 Samuel 26:14", "Si a {0} poporului si lui Abner, fiul lui Ner: \"N-auzi tu, Abner?\" Abner a raspuns: \"Cine esti tu care strigi catre imparatul?\""], // strigat
  ["1 Samuel 26:15", "Si {0} a zis lui Abner: \"Oare nu esti tu barbat? Si cine este ca tine in Israel? Pentru ce atunci n-ai pazit pe imparat, stapanul tau? Caci cineva din popor a venit sa omoare pe imparatul, stapanul tau."], // David
  ["1 Samuel 26:16", "Ce ai {0} tu nu este bine. Viu este Domnul, ca sunteti vrednici de moarte, caci n-ati vegheat asupra stapanului vostru, asupra unsului Domnului. Uita-te acum unde este sulita imparatului si ulciorul de apa, care erau la capataiul lui.\""], // facut
  ["1 Samuel 26:17", "Saul a {0} glasul lui David si a zis: \"Glasul tau este, fiul meu David?\" Si David a raspuns: \"Glasul meu, imparate, domnul meu!\""], // cunoscut
  ["1 Samuel 26:18", "Si a zis: \"Pentru ce {0} domnul meu pe robul sau? Ce-am facut si cu ce sunt vinovat?"], // urmareste
  ["1 Samuel 26:19", "Sa {0} acum imparatul, domnul meu, sa asculte cuvintele robului sau: \"Daca Domnul este Cel ce te atata impotriva mea, sa primeasca mirosul unui dar de mancare de la noi; dar daca oamenii te atata, blestemati sa fie inaintea Domnului, fiindca ei ma izgonesc azi ca sa ma dezlipeasca de mostenirea Domnului, zicandu-mi: \"Du-te de slujeste unor dumnezei straini!\""], // binevoiasca
  ["1 Samuel 26:20", "Of! sa {0} cada sangele pe pamant departe de fata Domnului! Caci imparatul lui Israel a pornit sa ma caute ca pe un purice, cum ar urmari o potarniche in munti.\""], // nu-mi
  ["1 Samuel 26:21", "Saul a zis: \"Am {0}; intoarce-te, fiul meu David, caci nu-ti voi mai face rau, fiindca in ziua aceasta viata mea a fost scumpa inaintea ta. Am lucrat ca un nebun si am facut o mare greseala.\""], // pacatuit
  ["1 Samuel 26:22", "{0} a raspuns: \"Iata sulita imparatului; sa vina unul din oamenii tai s-o ia."], // David
  ["1 Samuel 26:23", "{0} va rasplati fiecaruia dupa dreptatea lui si dupa credinciosia lui: caci Domnul te daduse azi in mainile mele, si eu n-am vrut sa pun mana pe unsul Domnului."], // Domnul
  ["1 Samuel 26:24", "Si dupa cum azi {0} ta a avut un mare pret inaintea mea, tot asa si viata mea va avea un mare pret inaintea Domnului, si El ma va izbavi din orice necaz.\""], // viata
  ["1 Samuel 26:25", "Saul a zis lui {0}: \"Fii binecuvantat, fiul meu David! Tu vei face lucruri mari si vei birui.\" David si-a vazut de drum, si Saul s-a intors acasa.\""], // David
  ["1 Samuel 27:1", "{0} si-a zis in sine: \"Voi pieri intr-o zi ucis de mana lui Saul; nu este nimic mai bine pentru mine decat sa fug in tara filistenilor, pentru ca Saul sa inceteze sa ma mai caute in tot tinutul lui Israel; asa voi scapa de mana lui.\""], // David
  ["1 Samuel 27:2", "Si {0} s-a sculat, el si cei sase sute de oameni care erau impreuna cu el, si au trecut la Achis, fiul lui Maoc, imparatul Gatului."], // David
  ["1 Samuel 27:3", "{0} si oamenii lui au ramas in Gat, la Achis; isi aveau fiecare familia lui, si David isi avea cele doua neveste: Ahinoam din Izreel si Abigail din Carmel, nevasta lui Nabal."], // David
  ["1 Samuel 27:4", "Saul, cand a {0} ca David fugise la Gat, a incetat sa-l mai caute."], // aflat
  ["1 Samuel 27:5", "{0} a zis lui Achis: \"Daca am capatat trecere inaintea ta, rogu-te sa mi se dea intr-una din cetatile tarii un loc unde sa pot locui; caci pentru ce sa locuiasca robul tau cu tine in cetatea imparateasca?\""], // David
  ["1 Samuel 27:6", "Si {0} in ziua aceea, Achis i-a dat Ticlagul. De aceea, Ticlagul a fost al imparatilor lui Iuda pana in ziua de azi."], // chiar
  ["1 Samuel 27:7", "{0} cat a locuit David in tara filistenilor a fost de un an si patru luni."], // Timpul
  ["1 Samuel 27:8", "{0} si oamenii lui se suiau si navaleau asupra ghesuritilor, ghirzitilor si amalecitilor; caci neamurile acestea locuiau din vremuri vechi in tinutul acela pana la Sur si pana in tara Egiptului."], // David
  ["1 Samuel 27:9", "{0} pustia tinutul acesta; nu lasa cu viata nici barbat, nici femeie, le lua oile, boii, magarii, camilele, hainele, si apoi se intorcea si se ducea la Achis."], // David
  ["1 Samuel 27:10", "{0} zicea: \"Unde ati navalit azi?\" Si David raspundea: \"Spre miazazi de Iuda, spre miazazi de ierahmeeliti si spre miazazi de cheniti.\""], // Achis
  ["1 Samuel 27:11", "{0} nu lasa cu viata nici barbat, nici femeie ca sa vina la Gat; \"caci\", se gandea el, \"ei ar putea sa vorbeasca impotriva noastra si sa zica: \"Asa a facut David.\" Si acesta a fost felul lui de purtare in tot timpul cat a locuit in tara filistenilor."], // David
  ["1 Samuel 27:12", "{0} se incredea in David si zicea: \"S-a facut urat poporului sau, Israel, si va ramane in slujba mea pe vecie.\""], // Achis
  ["1 Samuel 28:1", "Pe {0} aceea, filistenii si-au strans taberele si au facut o ostire ca sa porneasca cu razboi impotriva lui Israel. Achis a zis lui David: \"Sa stii ca vei veni cu mine la ostire, tu si oamenii tai.\""], // vremea
  ["1 Samuel 28:2", "{0} a raspuns lui Achis: \"Ei bine, vei vedea ce va face robul tau.\" Si Achis a zis lui David: \"De aceea, te voi pune pazitorul capului meu in tot timpul.\" -"], // David
  ["1 Samuel 28:3", "{0} murise. Tot Israelul il plansese si-l ingropasera la Rama in cetatea lui. Saul indepartase din tara pe cei ce chemau mortii si pe cei ce ghiceau. -"], // Samuel
  ["1 Samuel 28:4", "{0} s-au strans si au venit de au tabarat la Sunem: Saul a strans pe tot Israelul si au tabarat la Ghilboa."], // Filistenii
  ["1 Samuel 28:5", "La {0} taberei filistenilor, Saul a fost cuprins de frica, si un tremur puternic i-a apucat inima."], // vederea
  ["1 Samuel 28:6", "Saul a {0} pe Domnul, si Domnul nu i-a raspuns nici prin vise, nici prin Urim, nici prin proroci."], // intrebat
  ["1 Samuel 28:7", "Atunci Saul a zis {0} lui: \"Cautati-mi o femeie care sa cheme mortii, ca sa ma duc s-o intreb.\" Slujitorii lui i-au zis: \"Iata ca in En-Dor este o femeie care cheama mortii.\""], // slujitorilor
  ["1 Samuel 28:8", "Atunci Saul s-a {0}, a luat alte haine si a plecat cu doi oameni. Au ajuns la femeia aceea noaptea. Saul i-a zis: \"Spune-mi viitorul chemand un mort si scoala-mi pe cine-ti voi spune.\""], // schimbat
  ["1 Samuel 28:9", "{0} i-a raspuns: \"Stii ce a facut Saul, cum a nimicit din tara pe cei ce cheama mortii si pe cei ce ghicesc viitorul: pentru ce, dar, intinzi o cursa vietii mele, ca sa ma omori?\""], // Femeia
  ["1 Samuel 28:10", "Saul i-a {0} pe Domnul si a zis: \"Viu este Domnul, ca nu ti se va intampla niciun rau pentru aceasta.\""], // jurat
  ["1 Samuel 28:11", "{0} a zis: \"Pe cine vrei sa-ti scol?\" Si el a raspuns: \"Scoala-mi pe Samuel.\""], // Femeia
  ["1 Samuel 28:12", "Cand a {0} femeia pe Samuel, a scos un tipat mare si a zis lui Saul: \"Pentru ce m-ai inselat? Tu esti Saul!\""], // vazut
  ["1 Samuel 28:13", "{0} i-a zis: \"Nu te teme de nimic; dar ce vezi?\" Femeia a zis lui Saul: \"Vad o fiinta dumnezeiasca sculandu-se din pamant.\""], // Imparatul
  ["1 Samuel 28:14", "El i-a zis: \"Cum e la chip?\" Si ea a {0}: \"Este un batran care se scoala si este invelit cu o mantie.\" Saul a inteles ca era Samuel si s-a plecat cu fata la pamant si s-a inchinat."], // raspuns
  ["1 Samuel 28:15", "{0} a zis lui Saul: \"Pentru ce m-ai tulburat, chemandu-ma?\" Saul a raspuns: \"Sunt intr-o mare stramtorare: filistenii imi fac razboi, si Dumnezeu S-a departat de la mine; nu mi-a raspuns nici prin proroci, nici prin vise. Si te-am chemat sa-mi arati ce sa fac.\""], // Samuel
  ["1 Samuel 28:16", "{0} a zis: \"Pentru ce ma intrebi pe mine cand Domnul S-a departat de tine si S-a facut vrajmasul tau?"], // Samuel
  ["1 Samuel 28:17", "{0} iti face asa cum iti vestisem din partea Lui; Domnul a rupt imparatia din mainile tale si a dat-o altuia, lui David."], // Domnul
  ["1 Samuel 28:18", "N-ai {0} de glasul Domnului si n-ai facut pe Amalec sa simta aprinderea maniei Lui: de aceea iti face Domnul asa astazi."], // ascultat
  ["1 Samuel 28:19", "Si {0} Domnul va da pe Israel impreuna cu tine in mainile filistenilor. Maine, tu si fiii tai veti fi impreuna cu mine, si Domnul va da tabara lui Israel in mainile filistenilor.\""], // chiar
  ["1 Samuel 28:20", "{0} Saul a cazut la pamant cat era de lung, si cuvintele lui Samuel l-au umplut de groaza; nu mai avea nicio putere, caci nu mancase toata ziua si toata noaptea."], // Indata
  ["1 Samuel 28:21", "{0} a venit la Saul si, vazandu-l foarte inspaimantat, i-a zis: \"Iata ca roaba ta ti-a ascultat glasul; mi-am pus viata in primejdie, ascultand de cuvintele pe care mi le-ai spus."], // Femeia
  ["1 Samuel 28:22", "{0} acum, si tu, glasul roabei tale si lasa-ma sa-ti dau o bucata de paine, ca sa mananci si sa prinzi putere ca sa pornesti la drum.\""], // Asculta
  ["1 Samuel 28:23", "Dar el n-a vrut, si a zis: \"Nu {0} nimic!\" Slujitorii lui si femeia au staruit de el pana i-a ascultat. S-a sculat de la pamant si a sezut pe pat."], // mananc
  ["1 Samuel 28:24", "{0} avea la ea un vitel gras, pe care l-a taiat in graba; a luat faina, a framantat-o si a copt azime."], // Femeia
  ["1 Samuel 28:25", "Le-a pus {0} lui Saul si inaintea slujitorilor lui, si au mancat. Apoi s-au sculat si au plecat chiar in noaptea aceea."], // inaintea
  ["1 Samuel 29:1", "{0} isi stransesera toate ostile la Afec, si Israel tabarase la fantana lui Izreel."], // Filistenii
  ["1 Samuel 29:2", "{0} filistenilor au inaintat cu sutele si miile lor; si David si oamenii lui mergeau mai la coada cu Achis."], // Domnii
  ["1 Samuel 29:3", "{0} filistenilor au zis: \"Ce cauta evreii acestia aici?\" Si Achis a raspuns domnitorilor filistenilor: \"Acesta este David, slujitorul lui Saul, imparatul lui Israel. De mult este cu mine si n-am gasit nici cel mai mic lucru de care sa-l invinuiesc, de la venirea lui si pana in ziua de azi.\""], // Domnii
  ["1 Samuel 29:4", "Dar {0} filistenilor s-au maniat pe Achis si i-au zis: \"Trimite inapoi pe omul acesta, ca sa se intoarca in locul unde l-ai asezat; sa nu se coboare cu noi pe campul de bataie, ca sa nu ne fie vrajmas in timpul luptei. Si cum ar putea sa se faca omul acesta placut stapanului sau, decat cu capetele oamenilor nostri?"], // domnitorii
  ["1 Samuel 29:5", "Nu este acesta {0} pentru care cantau jucand: \"Saul si-a batut miile lui, iar David zecile lui de mii\"?\""], // David
  ["1 Samuel 29:6", "{0} a chemat pe David si i-a zis: \"Viu este Domnul, ca esti un om curat la suflet si-mi place sa te vad mergand si venind cu mine in tabara, caci n-am gasit nimic rau in tine, de la venirea ta la mine pana in ziua de azi; dar nu esti pe placul domnitorilor."], // Achis
  ["1 Samuel 29:7", "{0}, dar, si mergi in pace, ca sa nu faci nimic neplacut inaintea domnitorilor filistenilor.\""], // Intoarce-te
  ["1 Samuel 29:8", "{0} a zis lui Achis: \"Dar ce am facut si ce ai gasit in robul tau, de cand sunt la tine pana in ziua de azi, ca sa nu merg sa lupt impotriva vrajmasilor domnului meu, imparatul?\""], // David
  ["1 Samuel 29:9", "{0} a raspuns lui David: \"Stiu ca esti placut inaintea mea ca un inger al lui Dumnezeu; dar domnitorii filistenilor au zis: \"Sa nu se suie cu noi la lupta.\""], // Achis
  ["1 Samuel 29:10", "{0}, scoala-te dis-de-dimineata, tu si slujitorii stapanului tau care au venit cu tine; sculati-va dis-de-dimineata si plecati de indata ce se va lumina.\""], // Astfel
  ["1 Samuel 29:11", "{0} si oamenii lui s-au sculat de noapte de tot, ca sa plece dimineata si sa se intoarca in tara filistenilor. Si filistenii s-au suit la Izreel."], // David
  ["1 Samuel 30:1", "Cand a {0} David cu oamenii lui a treia zi la Ticlag, amalecitii navalisera in partea de miazazi si in Ticlag. Ei nimicisera si arsesera Ticlagul,"], // ajuns
  ["1 Samuel 30:2", "dupa ce {0} prinsi pe femei si pe toti cei ce se aflau acolo, mici si mari. Nu omorasera pe nimeni, dar luasera totul si plecasera."], // luasera
  ["1 Samuel 30:3", "{0} si oamenii lui au ajuns in cetate, si iata ca era arsa; si nevestele, fiii si fiicele lor, fusesera luati prinsi."], // David
  ["1 Samuel 30:4", "Atunci {0} si poporul care era cu el au ridicat glasul si au plans pana n-au mai putut plange."], // David
  ["1 Samuel 30:5", "Cele doua {0} ale lui David: Ahinoam din Izreel si Abigail din Carmel, nevasta lui Nabal, fusesera luate si ele."], // neveste
  ["1 Samuel 30:6", "{0} a fost in mare stramtorare, caci poporul vorbea sa-l ucida cu pietre, pentru ca toti erau amarati in suflet, fiecare din pricina fiilor si fetelor lui. Dar David s-a imbarbatat, sprijinindu-se pe Domnul Dumnezeul lui."], // David
  ["1 Samuel 30:7", "El a zis {0} Abiatar, fiul lui Ahimelec: \"Adu-mi efodul!\" Abiatar a adus efodul la David."], // preotului
  ["1 Samuel 30:8", "Si {0} a intrebat pe Domnul: \"Sa urmaresc oastea aceasta? O voi ajunge?\" Domnul i-a raspuns: \"Urmareste-o, caci o vei ajunge si vei izbavi totul.\""], // David
  ["1 Samuel 30:9", "Si {0} a pornit, el si cei sase sute de oameni care erau cu el. Au ajuns la paraul Besor, unde s-au oprit cei ce ramaneau la coada."], // David
  ["1 Samuel 30:10", "{0} i-a urmarit mai departe, cu patru sute de oameni; dar doua sute de oameni s-au oprit, fiind prea obositi ca sa mai treaca paraul Besor."], // David
  ["1 Samuel 30:11", "Pe camp au dat {0} un om egiptean, pe care l-au adus la David. I-au dat sa manance paine si sa bea apa"], // peste
  ["1 Samuel 30:12", "si i-au mai dat si o {0} de smochine si doua legaturi de stafide. Dupa ce a mancat, i-au venit iarasi puterile, caci nu mancase si nu bause apa de trei zile si trei nopti."], // legatura
  ["1 Samuel 30:13", "{0} i-a zis: \"Al cui esti si de unde esti?\" El a raspuns: \"Sunt un baiat egiptean, in slujba unui amalecit, si de trei zile stapanul meu m-a parasit pentru ca eram bolnav."], // David
  ["1 Samuel 30:14", "Am {0} in partea de miazazi a cheretitilor, pe tinutul lui Iuda si la miazazi de Caleb, si am ars Ticlagul.\""], // navalit
  ["1 Samuel 30:15", "{0} i-a zis: \"Vrei sa ma duci la oastea aceasta?\" Si el a zis: \"Jura-mi pe Numele lui Dumnezeu ca nu ma vei omori si nu ma vei da pe mana stapanului meu, si te voi cobori la oastea aceasta.\""], // David
  ["1 Samuel 30:16", "El i-a {0} astfel de calauza. Si amalecitii erau risipiti pe tot tinutul, mancand, band si jucand, de bucuria prazii celei mari pe care o luasera din tara filistenilor si din tara lui Iuda."], // slujit
  ["1 Samuel 30:17", "{0} i-a batut din zorii zilei pana a doua zi seara si n-a scapat niciunul din ei, afara de patru sute de tineri, care au incalecat pe camile si au fugit."], // David
  ["1 Samuel 30:18", "{0} a scapat astfel tot ce luasera amalecitii si a scapat si pe cele doua neveste ale lui."], // David
  ["1 Samuel 30:19", "Nu le-a {0} nimeni, de la mic pana la mare, nici fiu, nici fiica, niciun lucru din prada, nimic din ce li se luase: David a adus inapoi totul."], // lipsit
  ["1 Samuel 30:20", "Si {0} a luat toate oile si toti boii; si cei ce manau turma aceasta si mergeau in fruntea ei ziceau: \"Aceasta este prada lui David!\""], // David
  ["1 Samuel 30:21", "{0} a ajuns la cei doua sute de oameni care fusesera prea obositi ca sa mai mearga dupa el si pe care-i lasase la paraul Besor. Ei au iesit inaintea lui David si inaintea poporului care era cu el. David s-a apropiat de ei si i-a intrebat de sanatate."], // David
  ["1 Samuel 30:22", "Toti {0} rai si de nimic dintre cei ce mersesera cu David au luat cuvantul si au zis: \"Fiindca n-au venit cu noi, sa nu le dam nimic din prada pe care am scapat-o, ci doar sa-si ia fiecare nevasta si copiii si sa plece.\""], // oamenii
  ["1 Samuel 30:23", "Dar {0} a zis: \"Sa nu faceti asa, fratilor, cu ce ne-a dat Domnul; caci El ne-a pazit si a dat in mainile noastre ceata care venise impotriva noastra."], // David
  ["1 Samuel 30:24", "Si cine v-ar {0} in privinta aceasta? Partea trebuie sa fie aceeasi atat pentru cel ce s-a coborat pe campul de bataie, cat si pentru cel ce a ramas la calabalacuri: s-o imparta deopotriva.\""], // asculta
  ["1 Samuel 30:25", "{0} acesta a ramas de atunci si pana in ziua de azi o lege si un obicei in Israel."], // Lucrul
  ["1 Samuel 30:26", "Cand s-a {0} la Ticlag, David a trimis o parte din prada batranilor lui Iuda, prietenilor sai, spunandu-le aceste cuvinte: \"Iata darul pe care vi-l fac din prada luata de la vrajmasii Domnului!\""], // intors
  ["1 Samuel 30:27", "A {0} celor din Betel, celor din Ramot de la miazazi, celor din Iatir,"], // trimis
  ["1 Samuel 30:28", "{0} din Aroer; celor din Sifmot, celor din Estemoa,"], // celor
  ["1 Samuel 30:29", "{0} din Racal, celor din cetatile ierahmeelitilor, celor din cetatile chenitilor,"], // celor
  ["1 Samuel 30:30", "{0} din Horma, celor din Cor-Asan, celor din Atac,"], // celor
  ["1 Samuel 30:31", "{0} din Hebron si in toate locurile pe care le strabatuse David cu oamenii lui."], // celor
  ["1 Samuel 31:1", "{0} s-au luptat cu Israel, si barbatii lui Israel au luat-o la fuga dinaintea filistenilor si au cazut ucisi pe muntele Ghilboa."], // Filistenii
  ["1 Samuel 31:2", "{0} au urmarit pe Saul si pe fiii lui si au ucis pe Ionatan, Abinadab si Malchisua, fiii lui Saul."], // Filistenii
  ["1 Samuel 31:3", "Saul a fost {0} in toiul luptei; arcasii l-au ajuns si l-au ranit greu."], // prins
  ["1 Samuel 31:4", "Saul a zis atunci {0} ce-i ducea armele: \"Scoate-ti sabia si strapunge-ma, ca nu cumva acesti netaiati imprejur sa vina sa ma strapunga si sa-si bata joc de mine.\" Cel ce-i ducea armele n-a voit, caci ii era teama. Si Saul si-a luat sabia si s-a aruncat in ea."], // celui
  ["1 Samuel 31:5", "Cel ce {0} armele lui Saul, vazandu-l mort, s-a aruncat si el in sabia lui si a murit impreuna cu el."], // ducea
  ["1 Samuel 31:6", "{0} au pierit, in acelasi timp si in aceeasi zi, Saul si cei trei fii ai lui, cel ce-i purta armele si toti oamenii lui."], // Astfel
  ["1 Samuel 31:7", "Cei din {0}, care erau dincolo de vale si dincolo de Iordan, vazand ca oamenii lui Israel fugeau si ca Saul si fiii lui murisera, si-au parasit cetatile si au luat-o si ei la fuga. Si filistenii au venit si s-au asezat in ele."], // Israel
  ["1 Samuel 31:8", "A doua zi, {0} au venit sa dezbrace pe cei morti si au gasit pe Saul si pe cei trei fii ai lui cazuti pe muntele Ghilboa."], // filistenii
  ["1 Samuel 31:9", "Au {0} capul lui Saul si i-au luat armele. Apoi au trimis sa dea de veste prin toata tara filistenilor in casele idolilor lor si in popor."], // taiat
  ["1 Samuel 31:10", "Au pus {0} lui Saul in casa Astarteilor si i-au atarnat trupul pe zidurile Bet-Sanului."], // armele
  ["1 Samuel 31:11", "Cand au {0} locuitorii Iabesului din Galaad ce au facut filistenii lui Saul,"], // auzit
  ["1 Samuel 31:12", "toti {0} s-au sculat; au mers toata noaptea si au luat de pe zidurile Bet-Sanului trupul lui Saul si trupurile fiilor lui. Apoi s-au intors la Iabes, unde le-au ars;"], // vitejii
  ["1 Samuel 31:13", "{0} luat oasele si le-au ingropat sub stejarul din Iabes. Si au postit sapte zile."], // le-au
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
