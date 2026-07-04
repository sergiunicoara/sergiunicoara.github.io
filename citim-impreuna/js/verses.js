// Versete din 1 și 2 Samuel (traducerea Cornilescu).
// Fiecare {n} marchează un cuvânt scos din verset; "answer" este cuvântul corect,
// iar "options" conține răspunsul + 3 momeli asemănătoare (amestecate la afișare).
// NOTĂ: verificați formularea exactă cu Biblia dvs. — corectați direct în acest fișier.
// Pentru a adăuga versete noi, adăugați obiecte în același format la sfârșitul listei.

const VERSES = [
  {
    ref: "1 Samuel 2:2",
    text: "Nimeni nu este {0} ca Domnul; nu este alt Dumnezeu decât Tine; nu este {1} așa ca Dumnezeul nostru.",
    blanks: [
      { answer: "sfânt", options: ["sfânt", "mare", "puternic", "drept"] },
      { answer: "stâncă", options: ["stâncă", "cetate", "temelie", "scăpare"] },
    ],
  },
  {
    ref: "1 Samuel 3:10",
    text: "Vorbește, căci {0} Tău {1}.",
    blanks: [
      { answer: "robul", options: ["robul", "slujitorul", "copilul", "prietenul"] },
      { answer: "ascultă", options: ["ascultă", "așteaptă", "veghează", "se roagă"] },
    ],
  },
  {
    ref: "1 Samuel 12:24",
    text: "Temeți-vă numai de Domnul și slujiți-I cu {0}, din toată {1} voastră; căci vedeți ce putere desfășoară El printre voi.",
    blanks: [
      { answer: "credincioșie", options: ["credincioșie", "bucurie", "râvnă", "evlavie"] },
      { answer: "inima", options: ["inima", "puterea", "ființa", "mintea"] },
    ],
  },
  {
    ref: "1 Samuel 15:22",
    text: "{0} face mai mult decât {1} și păzirea cuvântului Său face mai mult decât grăsimea berbecilor.",
    blanks: [
      { answer: "Ascultarea", options: ["Ascultarea", "Rugăciunea", "Închinarea", "Postirea"] },
      { answer: "jertfele", options: ["jertfele", "darurile", "arderile-de-tot", "faptele"] },
    ],
  },
  {
    ref: "1 Samuel 16:7",
    text: "Domnul nu Se uită la ce se uită omul; omul se uită la ceea ce izbește {0}, dar Domnul Se uită la {1}.",
    blanks: [
      { answer: "ochii", options: ["ochii", "privirea", "mintea", "lumea"] },
      { answer: "inimă", options: ["inimă", "față", "suflet", "înfățișare"] },
    ],
  },
  {
    ref: "1 Samuel 17:45",
    text: "Tu vii împotriva mea cu sabie, cu suliță și cu pavăză; iar eu vin împotriva ta în {0} Domnului oștirilor, în Numele Dumnezeului {1} lui Israel, pe care ai ocărât-o.",
    blanks: [
      { answer: "Numele", options: ["Numele", "puterea", "ajutorul", "brațul"] },
      { answer: "oștirii", options: ["oștirii", "poporului", "cetății", "casei"] },
    ],
  },
  {
    ref: "1 Samuel 17:47",
    text: "Și toată mulțimea aceasta va ști că Domnul nu mântuiește nici prin {0}, nici prin suliță. Căci {1} este a Domnului.",
    blanks: [
      { answer: "sabie", options: ["sabie", "arc", "scut", "putere"] },
      { answer: "biruința", options: ["biruința", "lupta", "slava", "izbânda"] },
    ],
  },
  {
    ref: "1 Samuel 18:1",
    text: "Sufletul lui Ionatan s-a {0} de sufletul lui David, și Ionatan l-a {1} ca pe sufletul din el.",
    blanks: [
      { answer: "alipit", options: ["alipit", "legat", "apropiat", "unit"] },
      { answer: "iubit", options: ["iubit", "prețuit", "ales", "urmat"] },
    ],
  },
  {
    ref: "2 Samuel 7:22",
    text: "Ce {0} ești Tu, Doamne Dumnezeule! Căci {1} nu este ca Tine și nu este alt Dumnezeu afară de Tine.",
    blanks: [
      { answer: "mare", options: ["mare", "bun", "sfânt", "înălțat"] },
      { answer: "nimeni", options: ["nimeni", "nimic", "niciunul", "altul"] },
    ],
  },
  {
    ref: "2 Samuel 22:2-3",
    text: "Domnul este {0} mea, cetățuia mea, {1} meu. Dumnezeu este stânca mea la care găsesc un {2}.",
    blanks: [
      { answer: "stânca", options: ["stânca", "lumina", "calea", "nădejdea"] },
      { answer: "izbăvitorul", options: ["izbăvitorul", "păstorul", "ajutorul", "sprijinul"] },
      { answer: "adăpost", options: ["adăpost", "scut", "loc", "ajutor"] },
    ],
  },
  {
    ref: "2 Samuel 22:31",
    text: "Căile lui Dumnezeu sunt {0}, cuvântul Domnului este curățit; El este un {1} pentru toți cei ce caută adăpost în El.",
    blanks: [
      { answer: "desăvârșite", options: ["desăvârșite", "minunate", "drepte", "nepătrunse"] },
      { answer: "scut", options: ["scut", "turn", "zid", "adăpost"] },
    ],
  },
  {
    ref: "2 Samuel 22:33",
    text: "Dumnezeu este {0} mea cea tare și El mă {1} pe calea cea dreaptă.",
    blanks: [
      { answer: "cetățuia", options: ["cetățuia", "lumina", "stânca", "puterea"] },
      { answer: "călăuzește", options: ["călăuzește", "păzește", "poartă", "întărește"] },
    ],
  },
];
