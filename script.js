const weisheit = ['Der kluge Bergsteiger grüßt die Bergziege.', 'Ein Pfau, der auf seinem Federschwanz ruht, ist letztlich auch nur ein Truthahn.',
'Die besten Dinge sind in der Tat sehr teuer.', 'Ich weiß, was Du letzten Sommer getan hast!', 'Wer sein Gewicht halten will, muss auch mal grillen, wenn er keinen Hunger hat.', 
'Es gibt zwei Worte die dir im Leben viele Türen öffnen können. Ziehen und Drücken.', '404 – fortune not found.',
'Fettflecken sehen aus wie neu, wenn man sie regelmäßig mit Butter einreibt!', 'Wer keine Zeit hat, ist ärmer als der ärmste Bettler.',
'Sei wie eine Ananas: Steh aufrecht, trage eine Krone und sei innen ganz süß!', 'Inmitten des Wirrwarrs gilt es, das Einfache zu finden.',
'Aus Steinen, die einem in den Weg gelegt werden, kann man Schönes bauen! ', 'Warte nicht auf den perfekten Moment. Nimm dir den Moment und mache ihn perfekt.',
'Es gibt viele Wege zum Glück. Einer davon ist aufzuhören zu jammern.', 'Auch ein langer Weg beginnt mit einem ersten Schritt.',
'Wenn du willst, was du noch nie gehabt hast, dann tu, was du noch nie getan hast.', 'Wenn ein Mensch etwas falsch gemacht hat, vergiss nicht all die Dinge, die er vorher richtig gemacht hat.',
'Man darf die Mehrheit nicht mit der Wahrheit verwechseln.', 'Nicht nur Handlungen bringen zum Ziel. Auch Abwarten und Nichtstun kann vorübergehend eine gute Taktik sein, etwas zu erreichen.',
'Dein gutes Händchen für Geschäfte wird dir hohe Einnahmen bescheren. Was das andere, schlechte Händchen in der Zwischenzeit tut, steht aber noch in den Sternen.',
'In der nahen Zukunft werden deine Privatsphäre und deine Rechte als freier Bürger von Menschen verletzt, die sich ursprünglich mal für deine Interessen einsetzen sollten.',
'Demnächst wird dich jemand anlügen. Vielleicht geschieht das in einem persönlichen Gespräch, vielleicht wirst du auch nur eine Nachrichtenseite besuchen.',
'Bald wird dir eine große Erfindung gelingen. Etwas wie ein Schiff, das zum Mond fliegen kann oder ein Keks, der in die Zukunft blickt.',
'Ein Hase wird vor dir weglaufen und einem Hahn erzählen, wie furchteinflößend du bist. Ein Tiger wird dieses Gerücht zu Ohren bekommen und dich verspeisen, weil er nicht möchte, dass ihm jemand den Rang als bösestes Sternzeichen abläuft.',
'Bald wird dir jemand eine Torte ins Gesicht werfen und ein Klavier über den Kopf ziehen, woraufhin du stolperst und in einen offenen Gulli fällst. Du wirst dabei gefilmt und von der ganzen Welt ausgelacht. Danach bist du aber reich und berühmt.',
'Heute ist der erste Tag vom Rest deines Lebens. Der war gestern auch schon und schau, wie es sich entwickelt hat.',
'Ab jetzt geht es bergab. Schnall dich an.', 'Life’s a bitch, and then you die.', 'Ruh dich nicht aus, bis du dich über wirklich alles beschwert hast.',
'Die schlimmste Sache in deinem Leben ist wahrscheinlich noch gar nicht passiert.', 'Du bist ersetzbar.',
'Dream Big, Set Goals. Write goals on a nice paper and never look at them again.', 'Don’t try', 'Jemand hat dich vor kurzem gegoogelt.',
'Du solltest weniger Social Media nutzen. Wirklich.', 'Wenn du mal auf die Idee kommst, JavaScript zu lernen: Lass es lieber.']

let spruch = weisheit[Math.floor(Math.random()*weisheit.length)];


//let spruch = randomValueFromArray(weisheit);
// HTML-Button über JavaScript eine Funktion zuweisen

// Funktion beim laden der Seite aufrufen
window.addEventListener("load", function() {

    // Überprüfen ob die ID (Button) auf der Seite vorhanden ist (Optional).
    if (document.getElementById("hierbutton") != null) {
   
     // Der ID den Event-Handler 'click' hinzufügen,
     // als Event die Funktion 'test' aufrufen.
     document.getElementById("hierbutton").addEventListener("click", message);
    }
  
   });
   
   function message() {
    alert(spruch);
   }
 
window.addEventListener("load", function() {

    // Überprüfen ob die ID (Button) auf der Seite vorhanden ist (Optional).
    if (document.getElementById("hierbutton") != null) {
   
     // Der ID den Event-Handler 'click' hinzufügen,
     // als Event die Funktion 'test' aufrufen.
     document.getElementById("hierbutton").addEventListener("click", message);
    }
  
   });
   
   function message() {
    window.confirm(spruch);
   }

   
console.log(spruch);
















    







console.log(weisheit[4]);





