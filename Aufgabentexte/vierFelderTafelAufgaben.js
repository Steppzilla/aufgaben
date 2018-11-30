var gesamtAnzahl = "unknown";
var anzahlAja= "unknown";
var anzahlAnein= "unknown";
var anzahlBja= "unknown";
var anzahlBnein= "unknown";
var anzahlAundB= "unknown";
var anzahlAundBnein= "unknown";
var anzahlAneinundB= "unknown";
var anzahlAneinundBnein= "unknown";

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
  var abhängigA_B=0.05;

  //  var gesamtAnzahl = "unknown"; -> bereits gegeben.
  // aus Prozent-Angaben mache anzahlen (Und Gegenereignis mitberechnen)

  var anzahlAja = gesamtAnzahl*pAja;
  var anzahlAnein = gesamtAnzahl-anzahlAja;

  var anzahlBja = gesamtAnzahl*pBja;
  var anzahlBnein = gesamtAnzahl-anzahlBja;

  // letzte Angabe ist abhängig. anbhängigAnein_B = 0.05; Hierzu benötigen wir "!A" oder aber "!A  und B", um jeweils die andere auszurechnen.
  //Wir kennen "!A" und können also nur "!A undB" zunächst berechnen. Daraus ergibt sich dann der Rest.
  var anzahlAneinundB= anzahlBja-anzahlAundB;

  var anzahlAundB= anzahlAja * abhängigA_B;
  // per 4-felder-logik beenden:
  var anzahlAundBnein= anzahlAja-anzahlAundB;

  var anzahlAneinundBnein= anzahlAnein-anzahlAneinundB;
  var a1Anzahlen = [gesamtAnzahl, anzahlAja, anzahlAnein, anzahlBja, anzahlBnein, anzahlAundB, anzahlAundBnein, anzahlAneinundB, anzahlAneinundBnein];
  return a1Anzahlen;
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
var a1StringData0 = "GlühBi";
var a1StringData1 = "klar";
var a1StringData2 = "matt";
var a1StringData3 = "defekt";
var a1StringData4 = "heil";
var a1StringData5 = "k";
var a1StringData6 = "m";
var a1StringData7 = "d";
var a1StringData8 = "h";
var a1NumData0 = "800";
var a1NumData1 = "480";
var a1NumData1 = "480";
var a1NumData1 = "480";
var a1NumData1 = "480";



var ü2 = "Rotgrünblindheit"
var a2Text = "Die so genannte Rotgrünblindheit ist eine verbreitete Krankheit, an der Männer und Frauen unterschiedlich häufig leiden. Bei einer Untersuchung an insgesamt 2000 Menschen wurde die Rotgrünblindheit bei insgesamt 85 Personen entdeckt. 40% der untersuchten Menschen waren Frauen, wobei unter den Frauen nur 0,5% diese Krankheit hatten."
var a2Auftrag1 = "Wie viel Prozent der Männer leiden an der Rotgrünblindheit?"
var a2Array = [ü2, a2Text, a2Auftrag1];

var ü3 = "Rauchende Schüler"
var a3Text = "Von den 650 Schülerinnen und Schülern einer Fachoberschule sind 273 Mädchen. 28% aller Schülerinnen und Schüler rauchen. Die Zahl der Mädchen, die rauchen, betrage 78%. Wie groß ist die relative Häufigkeit jeweils?"
var a3Auftrag1 = "Mädchen, die nicht rauchen"
var a3Auftrag2 = "Jungen, die rauchen"
var a3Auftrag3 = "Jungen, die nicht rauchen"
var a3Array = [ü3, a3Text, a3Auftrag1, a3Auftrag2, a3Auftrag3];


var ü4 = "Paradontose"
var a4Text="Es werden 800 Personen auf Parodontose untersucht. 33% von ihnen haben Parodontose. Dabei waren 408 Männer in der Untersuchung. 288 von ihnen haben keine Parodontose."
var a4Auftrag1 = "Wie hoch ist der Frauenanteil in der Untersuchung?"
var a4Auftrag2 = "Wieviel Prozent der Personen sind Frauen mit Parodontose?"
var a4Auftrag3 = "Wie viele Frauen haben Parodontose?"
var a4Auftrag4 = "Wieviel Prozent der Frauen haben Parodontose?"
var a4Auftrag5 = "Wieviel Prozent der Männer haben Parodontose?"
var a4Array = [ü4, a4Text, a4Auftrag1, a4Auftrag2, a4Auftrag3, a4Auftrag4, a4Auftrag5];


var ü5 = "Rauchender Betrieb"
var a5Text="In einem Betrieb sind 60% Männer beschäftigt. Von den Betriebsangehörigen rauchen 10%. Unter den weiblichen Betriebsangehörigen rauchen 15%."
var a5Auftrag1 = "Berechnen Sie den Anteil der weiblichen Raucher unter den Betriebsangehörigen"
var a5Auftrag2 = "Bestimmen Sie die Wahrscheinlichkeit, dass ein zufällig ausgewählter Betriebsangehöriger (a) männlich ist, falls er raucht bzw. (b) raucht, falls er männlich ist"
var a5Auftrag3 = "Erstellen Sie beide Baumdiagramme für diese Aufgabe"
var a5Array = [ü5, a5Text, a5Auftrag1, a5Auftrag2];

var ü6 = "Ungeborene"
var a6Text= "Neun von zehn Ungeborenen bevorzugen im Mutterleib den rechten Daumen zum Lutschen. Forscher fanden heraus, dass alle Kinder, die rechts genuckelt hatten, im Alter von 10 bis 12 Jahren Rechtshänder waren. Zwei Drittel der Kinder, die im Mutterleib am linken Daumen lutschten, waren Linkshänder."
var a6Auftrag1 = "Bestimmen Sie den Prozentsatz der Kinder, die Linkshänder und den Prozentsatz der Kinder, die Rechtshänder geworden sind."
var a6Auftrag2 = "Bestimmen Sie die Wahrscheinlichkeit, dass ein Rechtshänder im Mutterleib am linken Daumen genuckelt hat."
var a6Array = [ü6, a6Text, a6Auftrag1, a6Auftrag2];

var ü7 = "Getreideanbau"
var a7Text ="Ein landwirtschaftlich zum Getreideanbau (ausschließlich Gerste und Roggen) genutztes Gebiet wird zu einem Drittel von Bauer Huber bewirtschaftet, der auf drei Fünfteln seines Teils Gerste anbaut. Den Rest des Gebiets bewirtschaftet Bauer Schmidt. Sein Roggenanteil beträgt 3/4"
var a7Auftrag1 = "Berechnen Sie den prozentualen Anteil von Gerste und Roggen im Anbaugebiet."
var a7Array = [ü7, a7Text, a7Auftrag1];


var ü8 ="Studienfahrt"
var a8Text = "Bei der Jahrgangsstudienfahrt werden die Ziele München und Toscana angefahren. 25% der München-Teilnehmer(innen) sind weiblich. In die Toscana wollen 40% der männlichen Teilnehmer fahren. 60% des gesamten Jahrgangs fahren in die Toscana."
var a8Auftrag1 = "Erstellen Sie zu diesem Text eine Vierfeldertafel und ermitteln Sie daraus, wie viel Prozent der Fahrtteilnehmer(innen) weiblich sind."
var a8Array = [ü8, a8Text, a8Auftrag1];


var aufgabenVierfelder = [a1Array, a2Array, a3Array, a4Array, a5Array, a6Array, a7Array, a8Array];
