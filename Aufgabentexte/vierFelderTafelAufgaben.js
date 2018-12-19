
var gesamtProzent =  "unknown";
var pAja= "unknown";
var pAnein= "unknown";
var pBja= "unknown";
var pBnein= "unknown";
var pAundB= "unknown";
var pAundBnein= "unknown";
var pAneinundB= "unknown";
var pAneinundBnein= "unknown";

var gesamtRelativ = "1";
var relAja= "unknown";
var relAnein= "unknown";
var relBja= "unknown";
var relBnein= "unknown";
var relAundB= "unknown";
var relAundBnein= "unknown";
var relAneinundB= "unknown";
var relAneinundBnein= "unknown";

//abhängige wahrscheinlichkeiten . Vorne steht immer die zu berücksichtigende Abhängigkeit A_B ist B abhängig von A, also pA/pB
var abhängigeA_B= "unknown";
var abhängigA_Bnein= "unknown";
var abhängigAnein_B= "unknown";
var abhängigAnein_Bnein= "unknown";
var abhängigeB_A= "unknown";
var abhängigB_Anein= "unknown";
var abhängigBnein_A= "unknown";
var abhängigBnein_Anein= "unknown";


  //Anzahlfunktion. Mindestens 1 Anzahl muss hierfür gegeben sein! Aus dieser rechnen wir zunächst zahlen um, die anders gegeben sind:
function a1Anzahlen(){
  //a ist klar, b ist defekt
  var gesamtAnzahl = 800;
  var pAja=0.6;
  var pBja=0.065;
  var abhängigAnein_B=0.05;

  //  var gesamtAnzahl = "unknown"; -> bereits gegeben.
  // aus Prozent-Angaben mache anzahlen (Und Gegenereignis mitberechnen)

  var anzahlAja = gesamtAnzahl*pAja;
  var anzahlAnein = gesamtAnzahl-anzahlAja;

  var anzahlBja = gesamtAnzahl*pBja;
  var anzahlBnein = gesamtAnzahl-anzahlBja;

  // letzte Angabe ist abhängig. abhängigAnein_B = 0.05; Hierzu benötigen wir "!A" oder aber "!A  und B", um jeweils die andere auszurechnen.
  //Wir kennen "!A" und können also nur "!A undB" zunächst berechnen. Daraus ergibt sich dann der Rest.
  var anzahlAneinundB= anzahlAnein*abhängigAnein_B;
// per 4-felder-logik beenden:
// zeile "AundB" + "Anein und B" = A insgesamt
  var anzahlAundB= anzahlBja - anzahlAneinundB;
  var anzahlAundBnein= anzahlAja-anzahlAundB;
  var anzahlAneinundBnein= anzahlAnein-anzahlAneinundB;

  var a1Anzahlen = [gesamtAnzahl, anzahlAja, anzahlAnein, anzahlBja, anzahlBnein, anzahlAundB, anzahlAundBnein, anzahlAneinundB, anzahlAneinundBnein];
  var lösungsString = lösungsStrings(a1Anzahlen,a1StringData);
  return lösungsString;
}

function lösungsStrings(lösungsstring, stringdaten){
  var a1Anzahlen = lösungsstring;
  var a1StringData=stringdaten;

  var vierFelderString = [a1StringData[0], a1StringData[1], a1StringData[2], "insgesamt",
                        a1StringData[3], a1Anzahlen[5],  a1Anzahlen[7], a1Anzahlen[3],
                        a1StringData[4], a1Anzahlen[6], a1Anzahlen[8], a1Anzahlen[4],
                        "insgesamt", a1Anzahlen[1], a1Anzahlen[2], a1Anzahlen[0]];

var vierFelderString1 = [a1StringData[0], a1StringData[3], a1StringData[4], "insgesamt",
                        a1StringData[1], a1Anzahlen[5],  a1Anzahlen[6], a1Anzahlen[1],
                        a1StringData[2], a1Anzahlen[7], a1Anzahlen[8], a1Anzahlen[2],
                        "insgesamt", a1Anzahlen[3], a1Anzahlen[4], a1Anzahlen[0]];

var vierFelderString2 = [a1StringData[0], a1StringData[2], a1StringData[1], "insgesamt",
                        a1StringData[3], a1Anzahlen[7],  a1Anzahlen[5], a1Anzahlen[3],
                        a1StringData[4], a1Anzahlen[8], a1Anzahlen[6], a1Anzahlen[4],
                        "insgesamt", a1Anzahlen[2], a1Anzahlen[1], a1Anzahlen[0]];

var vierFelderString3 = [a1StringData[0], a1StringData[3], a1StringData[4], "insgesamt",
                        a1StringData[2], a1Anzahlen[7],  a1Anzahlen[8], a1Anzahlen[2],
                        a1StringData[1], a1Anzahlen[5], a1Anzahlen[6], a1Anzahlen[1],
                        "insgesamt", a1Anzahlen[3], a1Anzahlen[4], a1Anzahlen[0]];

var vierFelderString4 = [a1StringData[0], a1StringData[2], a1StringData[1], "insgesamt",
                        a1StringData[4], a1Anzahlen[8],  a1Anzahlen[6], a1Anzahlen[4],
                        a1StringData[3], a1Anzahlen[7], a1Anzahlen[5], a1Anzahlen[3],
                        "insgesamt", a1Anzahlen[2], a1Anzahlen[1], a1Anzahlen[0]];

var vierFelderString5 = [a1StringData[0], a1StringData[4], a1StringData[3], "insgesamt",
                        a1StringData[2], a1Anzahlen[8],  a1Anzahlen[7], a1Anzahlen[2],
                        a1StringData[1], a1Anzahlen[6], a1Anzahlen[5], a1Anzahlen[1],
                        "insgesamt", a1Anzahlen[4], a1Anzahlen[3], a1Anzahlen[0]];



var vierFelderString6 = [a1StringData[0], a1StringData[1], a1StringData[2], "insgesamt",
                        a1StringData[4], a1Anzahlen[6],  a1Anzahlen[8], a1Anzahlen[4],
                        a1StringData[3], a1Anzahlen[5], a1Anzahlen[7], a1Anzahlen[3],
                        "insgesamt", a1Anzahlen[1], a1Anzahlen[2], a1Anzahlen[0]];


var vierFelderString7 = [a1StringData[0], a1StringData[4], a1StringData[3], "insgesamt",
                      a1StringData[1], a1Anzahlen[6],  a1Anzahlen[5], a1Anzahlen[1],
                      a1StringData[2], a1Anzahlen[8], a1Anzahlen[7], a1Anzahlen[2],
                      "insgesamt", a1Anzahlen[4], a1Anzahlen[3], a1Anzahlen[0]];



  var baumDiagrammString = [a1StringData[1], a1StringData[2],  a1StringData[3], a1StringData[4],
                          a1StringData[3], a1StringData[4],    a1Anzahlen[1], "__", a1Anzahlen[0],
                          a1Anzahlen[2], "__", a1Anzahlen[0], a1Anzahlen[5], "__", a1Anzahlen[1],
                          a1Anzahlen[6], "__", a1Anzahlen[1], a1Anzahlen[7], "__", a1Anzahlen[2],
                          a1Anzahlen[8], "__", a1Anzahlen[2],a1Anzahlen[5], "__", a1Anzahlen[0],
                          a1Anzahlen[6], "__", a1Anzahlen[0], a1Anzahlen[7], "__", a1Anzahlen[0], a1Anzahlen[8], "__", a1Anzahlen[0]];


var vierFelderStrings = [vierFelderString, vierFelderString1, vierFelderString2, vierFelderString3, vierFelderString4, vierFelderString5, vierFelderString6, vierFelderString7];
var baumDiagrammStrings = [baumDiagrammString];

var lösungsString = [vierFelderStrings, baumDiagrammStrings];

  return lösungsString;
}

var ü1="Glühbirnen";
var a1Text="Ein Elektrohändler erhält eine Lieferung von 800 Glühbirnen. 60% der Glühbirnen sind klar, die restlichen dagegen matt. Bei der Überprüfung stellt sich heraus, dass von allen Glühbirnen zusammen 6,5% defekt sind. Von den matten Glühbirnen sind nur 5% defekt."
var a1Auftrag1 = "Wie viel Prozent der klaren Glühbirnen sind defekt?";
var a1Array = [ü1, a1Text, a1Auftrag1];
var a1LöaErsteLösungZ1 = "Lösung per Prozentrechnung";
var a1LöaErsteLösungZ2 = "Gesamtanzahl: 800 Glühbirnen.";
var a1LöaErsteLösungZ3 = "klare Birnen: 800".concat(String.fromCharCode(8729),"60/100");
var a1LöaErsteLösungZ4 = "matte Birnen: 800 - 480 = 320.";
var a1LöaErsteLösungZ5 = "insgesamt defekte Birnen (klar oder matt): 800".concat(String.fromCharCode(8729),"6,5/100 = 8").concat(String.fromCharCode(8729),"6,5 = 52.");
var a1LöaErsteLösungZ6 = "von den matten Birnen defekt: 320".concat(String.fromCharCode(8729),"5/100 = 3,2").concat(String.fromCharCode(8729),"5 = 16");
var a1LöaErsteLösungZ7 = "von den klaren Birnen defekt: 52-16 = 36";
var a1LöaErsteLösungZ8 = "Antwortsatz: Von den klaren Birnen sind 36 defekt.";
var a1LöaErsteLösung = [a1LöaErsteLösungZ1,a1LöaErsteLösungZ2,a1LöaErsteLösungZ3,a1LöaErsteLösungZ4,a1LöaErsteLösungZ5,a1LöaErsteLösungZ6,a1LöaErsteLösungZ7,a1LöaErsteLösungZ8];
var a1StringData = ["GlühBi", "klar", "matt", "defekt", "intakt", "k", "m", "d", "h"];
var a1LösungsString = a1Anzahlen();



var ü2 = "Rotgrünblindheit"
var a2Text = "Die so genannte Rotgrünblindheit ist eine verbreitete Krankheit, an der Männer und Frauen unterschiedlich häufig leiden. Bei einer Untersuchung an insgesamt 2000 Menschen wurde die Rotgrünblindheit bei insgesamt 85 Personen entdeckt. 40% der untersuchten Menschen waren Frauen, wobei unter den Frauen nur 0,5% diese Krankheit hatten."
var a2Auftrag1 = "Wie viel Prozent der Männer leiden an der Rotgrünblindheit?"
var a2Array = [ü2, a2Text, a2Auftrag1];
var a2StringData = [ "RotGrün", "Frau", "Mann", "RG-krank", "nicht erkrankt", "F", "M", "k",  "g"];
var a2Anzahlen = [2000, 800, 1200, 85, 1915, 4,796,81,1119];
var a2LösungsString = lösungsStrings(a2Anzahlen, a2StringData);


var ü3 = "Rauchende Schüler"
var a3Text = "Von den 650 Schülerinnen und Schülern einer Fachoberschule sind 273 Mädchen. 28% aller Schülerinnen und Schüler rauchen. Die Zahl der Mädchen, die rauchen, betrage 78. Wie groß ist die relative Häufigkeit jeweils?"
var a3Auftrag1 = "Mädchen, die nicht rauchen"
var a3Auftrag2 = "Jungen, die rauchen"
var a3Auftrag3 = "Jungen, die nicht rauchen"
var a3Array = [ü3, a3Text, a3Auftrag1, a3Auftrag2, a3Auftrag3];
var a3StringData = ["RauSchü", "Mädchen", "Jungen", "rauchen",  "rauchen nicht", "M", "J", "r",  "r nicht"];
var a3Anzahlen = [650,273,377,182,468,78,195,104,273];
var a3LösungsString = lösungsStrings(a3Anzahlen, a3StringData);

var ü4 = "Paradontose"
var a4Text="Es werden 800 Personen auf Parodontose untersucht. 33% von ihnen haben Parodontose. Dabei waren 408 Männer in der Untersuchung. 288 von ihnen haben keine Parodontose."
var a4Auftrag1 = "Wie hoch ist der Frauenanteil in der Untersuchung?"
var a4Auftrag2 = "Wieviel Prozent der Personen sind Frauen mit Parodontose?"
var a4Auftrag3 = "Wie viele Frauen haben Parodontose?"
var a4Auftrag4 = "Wieviel Prozent der Frauen haben Parodontose?"
var a4Auftrag5 = "Wieviel Prozent der Männer haben Parodontose?"
var a4Array = [ü4, a4Text, a4Auftrag1, a4Auftrag2, a4Auftrag3, a4Auftrag4, a4Auftrag5];
var a4StringData = ["Paro", "Frauen", "Männer", "erkrankt", "gesund", "M","F","k","g"];
var a4Anzahlen = [800,392,408,264,536,144,248,120,288];
var a4LösungsString = lösungsStrings(a4Anzahlen, a4StringData);


var ü5 = "Rauchender Betrieb"
var a5Text="In einem Betrieb sind 60% Männer beschäftigt. Von den Betriebsangehörigen rauchen 10%. Unter den weiblichen Betriebsangehörigen rauchen 15%."
var a5Auftrag1 = "Berechnen Sie den Anteil der weiblichen Raucher unter den Betriebsangehörigen"
var a5Auftrag2 = "Bestimmen Sie die Wahrscheinlichkeit, dass ein zufällig ausgewählter Betriebsangehöriger (a) männlich ist, falls er raucht bzw. (b) raucht, falls er männlich ist"
var a5Auftrag3 = "Erstellen Sie beide Baumdiagramme für diese Aufgabe"
var a5Array = [ü5, a5Text, a5Auftrag1, a5Auftrag2];
var a5StringData = ["RauBet", "Frau", "Mann", "Raucher", "Nichtraucher", "F", "M", "R", "nR"];
var a5Anzahlen = [1,0.4,0.6,0.1,0.9,0.06,0.34,0.04,0.56];
var a5LösungsString = lösungsStrings(a5Anzahlen, a5StringData);

var ü6 = "Ungeborene"
var a6Text= "Neun von zehn Ungeborenen bevorzugen im Mutterleib den rechten Daumen zum Lutschen. Forscher fanden heraus, dass alle Kinder, die rechts genuckelt hatten, im Alter von 10 bis 12 Jahren Rechtshänder waren. Zwei Drittel der Kinder, die im Mutterleib am linken Daumen lutschten, waren Linkshänder."
var a6Auftrag1 = "Bestimmen Sie den Prozentsatz der Kinder, die Linkshänder und den Prozentsatz der Kinder, die Rechtshänder geworden sind."
var a6Auftrag2 = "Bestimmen Sie die Wahrscheinlichkeit, dass ein Rechtshänder im Mutterleib am linken Daumen genuckelt hat."
var a6Array = [ü6, a6Text, a6Auftrag1, a6Auftrag2];
var a6StringData = ["Ungeboren", "rechter Daumen", "linker Daumen", "Rechtshänder", "Linkshänder", "rD", "lD", "rH", "lH"];
var a6Anzahlen = [1,0.9,0.1,14/15,1/15,0.1,0,1/30,2/30];
var a6LösungsString = lösungsStrings(a6Anzahlen, a6StringData);

var ü7 = "Getreideanbau"
var a7Text ="Ein landwirtschaftlich zum Getreideanbau (ausschließlich Gerste und Roggen) genutztes Gebiet wird zu einem Drittel von Bauer Huber bewirtschaftet, der auf drei Fünfteln seines Teils Gerste anbaut. Den Rest des Gebiets bewirtschaftet Bauer Schmidt. Sein Roggenanteil beträgt 3/4"
var a7Auftrag1 = "Berechnen Sie den prozentualen Anteil von Gerste und Roggen im Anbaugebiet."
var a7Array = [ü7, a7Text, a7Auftrag1];
var a7StringData = ["Getreide", "Huber", "Schmidt", "Gerste", "Roggen", "H", "S", "G", "R"];
var a7Anzahlen = [1,1/3,2/3,11/30,19/30,1/5,2/15,1/6,1/2];
var a7LösungsString = lösungsStrings(a7Anzahlen, a7StringData);


var ü8 ="Studienfahrt"
var a8Text = "Bei der Jahrgangsstudienfahrt werden die Ziele München und Toscana angefahren. 25% der München-Teilnehmer(innen) sind weiblich. In die Toscana wollen 40% der männlichen Teilnehmer fahren. 60% des gesamten Jahrgangs fahren in die Toscana."
var a8Auftrag1 = "Erstellen Sie zu diesem Text eine Vierfeldertafel und ermitteln Sie daraus, wie viel Prozent der Fahrtteilnehmer(innen) weiblich sind."
var a8Array = [ü8, a8Text, a8Auftrag1];
var a8StringData = ["StuFa", "weiblich", "männlich", "Toscana" , "München", "w", "m", "T", "M" ];
var a8Anzahlen = [1,0.5,0.5,0.6,0.4,0.4,0.1,0.2,0.3];
var a8LösungsString = lösungsStrings(a8Anzahlen, a8StringData);

var ü9 = "Augenfarbe"
var a9Text='Der englische Naturforscher Sir Francis Galton (1822-1911) undtersuchte den Zusammenhang zwischen der Augenfarbe von 1000 Vätern und je einem ihrer Söhne. Dabei sei V das Ereignis "Vater ist blauäugig" und S das Ereignis "Sohn ist blauäugig". Insgesamt hatten 619 der Söhne blaue Augen, wobei 471 der Väter ebenfalls blauäugig waren. 381 der Väter hatten keine blauen Augen.' ;
var a9Auftrag1 = "Erstellen Sie eine Vierfeldertabel mit den absoluten Zahlen";
var a9Auftrag2 = "Erstellen Sie eine Vierfeldertafel der Wahrscheinlichkeiten";
var a9Array= [ü9, a9Text, a9Auftrag1, a9Auftrag2];
var a9StringData = ["AuFa", "S", "!S", "V", "!V", "S", "!S", "V", "!V"];
var a9Anzahlen = [7,7,7,7,7,7,7,7,7];
var a9LösungsString = lösungsStrings(a9Anzahlen, a9StringData);




var aufgabenVierfelder = [a1Array, a2Array, a3Array, a4Array, a5Array, a6Array, a7Array, a8Array, a9Array];
var lösungenVierfelder = [a1LösungsString, a2LösungsString, a3LösungsString, a4LösungsString, a5LösungsString,
  a6LösungsString, a7LösungsString, a8LösungsString,a9LösungsString];
