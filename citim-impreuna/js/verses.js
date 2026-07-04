// Versete din 1 și 2 Samuel (traducerea Cornilescu).
// Fiecare verset are un singur {0} — cuvântul scos din verset; "answer" este cuvântul
// corect, iar "options" conține răspunsul + 3 momeli asemănătoare (amestecate la afișare).
// NOTĂ: verificați formularea exactă cu Biblia dvs. — corectați direct în acest fișier.
// Pentru a adăuga versete noi, adăugați obiecte în același format la sfârșitul listei.

const VERSES = [
  {
    ref: "1 Samuel 2:2",
    text: "Nimeni nu este {0} ca Domnul; nu este alt Dumnezeu decât Tine; nu este stâncă așa ca Dumnezeul nostru.",
    blanks: [
      { answer: "sfânt", options: ["sfânt", "mare", "puternic", "drept"] },
    ],
  },
  {
    ref: "1 Samuel 3:10",
    text: "Vorbește, căci robul Tău {0}.",
    blanks: [
      { answer: "ascultă", options: ["ascultă", "așteaptă", "veghează", "se roagă"] },
    ],
  },
  {
    ref: "1 Samuel 12:24",
    text: "Temeți-vă numai de Domnul și slujiți-I cu credincioșie, din toată {0} voastră; căci vedeți ce putere desfășoară El printre voi.",
    blanks: [
      { answer: "inima", options: ["inima", "puterea", "ființa", "mintea"] },
    ],
  },
  {
    ref: "1 Samuel 15:22",
    text: "{0} face mai mult decât jertfele și păzirea cuvântului Său face mai mult decât grăsimea berbecilor.",
    blanks: [
      { answer: "Ascultarea", options: ["Ascultarea", "Rugăciunea", "Închinarea", "Postirea"] },
    ],
  },
  {
    ref: "1 Samuel 16:7",
    text: "Domnul nu Se uită la ce se uită omul; omul se uită la ceea ce izbește ochii, dar Domnul Se uită la {0}.",
    blanks: [
      { answer: "inimă", options: ["inimă", "față", "suflet", "înfățișare"] },
    ],
  },
  {
    ref: "1 Samuel 17:45",
    text: "Tu vii împotriva mea cu sabie, cu suliță și cu pavăză; iar eu vin împotriva ta în {0} Domnului oștirilor, în Numele Dumnezeului oștirii lui Israel, pe care ai ocărât-o.",
    blanks: [
      { answer: "Numele", options: ["Numele", "puterea", "ajutorul", "brațul"] },
    ],
  },
  {
    ref: "1 Samuel 17:47",
    text: "Și toată mulțimea aceasta va ști că Domnul nu mântuiește nici prin sabie, nici prin suliță. Căci {0} este a Domnului.",
    blanks: [
      { answer: "biruința", options: ["biruința", "lupta", "slava", "izbânda"] },
    ],
  },
  {
    ref: "1 Samuel 18:1",
    text: "Sufletul lui Ionatan s-a alipit de sufletul lui David, și Ionatan l-a {0} ca pe sufletul din el.",
    blanks: [
      { answer: "iubit", options: ["iubit", "prețuit", "ales", "urmat"] },
    ],
  },
  {
    ref: "2 Samuel 7:22",
    text: "Ce {0} ești Tu, Doamne Dumnezeule! Căci nimeni nu este ca Tine și nu este alt Dumnezeu afară de Tine.",
    blanks: [
      { answer: "mare", options: ["mare", "bun", "sfânt", "înălțat"] },
    ],
  },
  {
    ref: "2 Samuel 22:2-3",
    text: "Domnul este stânca mea, cetățuia mea, {0} meu. Dumnezeu este stânca mea la care găsesc un adăpost.",
    blanks: [
      { answer: "izbăvitorul", options: ["izbăvitorul", "păstorul", "ajutorul", "sprijinul"] },
    ],
  },
  {
    ref: "2 Samuel 22:31",
    text: "Căile lui Dumnezeu sunt {0}, cuvântul Domnului este curățit; El este un scut pentru toți cei ce caută adăpost în El.",
    blanks: [
      { answer: "desăvârșite", options: ["desăvârșite", "minunate", "drepte", "nepătrunse"] },
    ],
  },
  {
    ref: "2 Samuel 22:33",
    text: "Dumnezeu este cetățuia mea cea tare și El mă {0} pe calea cea dreaptă.",
    blanks: [
      { answer: "călăuzește", options: ["călăuzește", "păzește", "poartă", "întărește"] },
    ],
  },
];
