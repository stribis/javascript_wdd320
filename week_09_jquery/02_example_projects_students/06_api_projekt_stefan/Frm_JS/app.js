// Declarieren der benötigten Variablen
let data = {};
/* let thema =[]; */
let today = new Date();
let Form = document.getElementById("Form");
// Eventlistener dem Button anhängen, der Click auf den Button startet das Programm
document.querySelector(".send").addEventListener("click", validateForm);

function validateForm(e) {
  e.preventDefault();
  // Löscht das hinzugefügte Element und verhindert das es mehrfach hinzugefügt wird.
  if (document.querySelector("form span")) {
    document.querySelectorAll("form span").forEach((element) => {
      element.remove();
    });
  }
  let validationErrors = {};
  /*Zusammenstellen der eingegebenen und zu prüfenden Daten welche im Objekt data gespeichert werden
   das Objekt soll später an die Bildergallerie übergeben werden um die Darstellung zu formatieren*/
  data.firstName = document.querySelector("#firstName").value;
  data.lastName = document.querySelector("#lastName").value;
  data.jahrgang = document.querySelector("#jhg").value;
  data.mail = document.querySelector("#mail").value;
  data.telNr = document.querySelector("#tel").value;
  data.nachricht = document.querySelector("#nachricht").value;
  data.anrede = document.querySelector('input[name ="anrede"]:checked ').value;
  data.thema = document.querySelectorAll('input[checks ="pict"]:checked').value;
  data.stil = document.querySelector("#stil").value;
  data.bgcolor = document.querySelector("#bgFarbe").value;
  data.int = document.querySelector("#int").value;
  console.table(data);
  let zeiteinstellung = data.int * 1000;
  console.log(zeiteinstellung);
  // 1. Validierung der Anrede-------------------------------------
  /*  ein vorselektierter radiobutton verhindert eine Fehlermeldung "app.js:28 Uncaught TypeError: Cannot read property 'value' of null" geworfen wird
    das ist aber sicherlich nicht die optimale Lösung aber ich möchte aber auch kein Geschlecht vorselektieren, das wäre eine benachteiligung des jeweils anderen*/
  if (data.anrede === "undefined") {
    console.error("Bitte anrede wählen " + data.anrede);
    // Creat error for gender
    validationErrors.anrede = "Bitte eine Anrede auswählen";
  } else {
    document.querySelector(".radios").style.border = "solid 2.5px green";
    console.info("Your gender is " + data.gender);
  }
  //---------------------------------------------------------------

  //2.Validierung des Vornamens------------------------------------
  if (!data.firstName) {
    /* Wurde das Feld leer gelassen gib folgende Nachricht zurück */
    validationErrors.firstName = "Bitte gib hier deinen Vornamen an";
  } else {
    let firstNameRegExp = /[0-9.!#$%&'+/=?^_`{|}~-]/;
    /* Prüfen ob eines der in firstNameRegExp gespeicherten Zeichen
        eingegeben wurde */
    if (firstNameRegExp.test(data.firstName)) {
      /* Falls ein Zeichen gefunden wurde speichere den Fehler im Objekt
        validationErrors*/
      console.error("Ungültiges Zeichen " + data.firstName);
      validationErrors.firstName =
        "Bitte verwende keine Zahlen oder Sonderzeichen";
    } else {
      document.querySelector("#firstName").style.border = "solid 2.5px green";
    }
  }
  //---------------------------------------------------------------

  //3.Validierung des Nachnamens-----------------------------------
  if (!data.lastName) {
    /* Wurde das Feld leer gelassen gib folgende Nachricht zurück */
    validationErrors.lastName = "Bitte gib hier deinen Nachnamen an";
  } else {
    let lastNameRegExp = /[0-9.!#$%&'+/=?^_`{|}~-]/;
    /* Prüfen ob eines der in lastNameRegExp gespeicherten Zeichen
        eingegeben wurde */
    if (lastNameRegExp.test(data.lastName)) {
      /* Falls ein Zeichen gefunden wurde speichere den Fehler im Objekt
        validationErrors*/ validationErrors.lastName =
        "Bitte verwende keine Zahlen oder Sonderzeichen";
    } else {
      document.querySelector("#lastName").style.border = "solid 2.5px green";
    }
  }
  //---------------------------------------------------------------

  //4.Validierung des Jahrgangs-------------------------------------
  if (!data.jahrgang) {
    /* Wurde das Feld leer gelassen gib folgende Nachricht zurück */
    validationErrors.jahrgang = "Bitte gib hier deinen Jahrgang an";
  } else {
    if (data.jahrgang < 1900) {
      /* Falls der Wert kleiner als 1900 ist speichere den Fehler im Objekt validationErrors
    laut google ist der älteste lebende Mensch 117 jahre alt*/
      validationErrors.jahrgang = "Bitte gültigen jahrgang eingeben";
    } /* Liegt der eingegeben Wert in dder Zukunft soll ebenfalls ein entsprechender Fehler ausgegeben werden */
    if (data.jahrgang > today.getFullYear()) {
      validationErrors.jahrgang = "Wert liegt in der Zukunft";
    } else {
      /* Passt der eingegebene Wert soll der Rahmen des Feldes grün werden */
      document.querySelector("#jhg").style.border = "solid 2.5px green";
    }
  }
  //---------------------------------------------------------------

  //5.Validierung der Email-----------------------------------------
  if (!data.mail) {
    /* Wurde das Feld leer gelassen gib folgende Nachricht zurück */
    validationErrors.mail = "Bitte gib hier deine E-mail adresse an";
  } else {
    /* Prüfen ob eine Gültige email eingetragen wurde */
    let emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegExp.test(data.mail)) {
      /* wurde keine gültige email angegeben speichere den Fehler in validationErrors */
      validationErrors.mail = "Bitte gib eine gültige E-Mail adresse an";
    } /* Passt der eingegebene Wert soll der Rahmen des Feldes grün werden */ else {
      document.querySelector("#mail").style.border = "solid 2.5px green";
    }
  }
  //---------------------------------------------------------------

  //6.Validierung der Telefonnummer--------------------------------
  if (!data.telNr) {
    /* Wurde das Feld leer gelassen gib folgende Nachricht zurück */
    validationErrors.telNr = "Bitte gib hier deine Telefon Nr. an";
  } else {
    /* Prüfen ob eine gültige Telefonnummer eingetragen wurde */
    let telNrRegExp = /((^\(\+?\d+[\ ]*\d*\)|^\(\d+\)|^\+?\d+|^\d+)+([\-\/\ ])*(\d)+){6, }([:blank:])*/;
    if (telNrRegExp.test(data.telNr)) {
      /* wurde keine gültige email angegeben speichere den Fehler in validationErrors */
      validationErrors.telNr = "Bitte gib eine gültige Telefon Nr. an";
    }
    if (data.telNr.length < 4) {
      validationErrors.telNr = "Die Telefonnummer ist zu kurz";
    } else {
      /* Passt der eingegebene Wert soll der Rahmen des Feldes grün werden */
      document.querySelector("#tel").style.border = "solid 2.5px green";
    }
  }
  //_______________________________________________________________

  // 7.Validierung der Text eingabe in der Textaerea---------------
  if (data.nachricht) {
    let nachrichtRegExp = /[+-/*<>()!#$%&'+/=?^_`{|}~-]/;
    /* Prüfen ob eines der in nachrichtRegExp gespeicherten Zeichen
        eingegeben wurde */
    if (nachrichtRegExp.test(data.nachricht)) {
      /* Falls ein Zeichen gefunden wurde speichere den Fehler im Objekt
        validationErrors*/
      validationErrors.nachricht = "Bitte keine Sonderzeichen verwenden ";
    } else {
      document.querySelector("#nachricht").style.border = "solid 2.5px green";
    }
  }
  //_______________________________________________________________

  //8.Prüfe das Objekt validationErrors ob es einen Inhalt hat oder nicht
  if (Object.keys(validationErrors).length > 0) {
    /*Falls Fehler vorhanden sind, sprich mindestens 1 Eintrag im Objekt validationErrors gefunden wird
  starte die Fehlerbehebung mit displayErrors */
    displayErrors(validationErrors);
  } else {
    /*8.1 Sind keine Fehler vorhanden wird die Slideshow mit den entsprechenden Werten gestartet. */
    document.querySelector("body").style.background = data.bgcolor;
    document.querySelector("#Form").style.visibility = "hidden";
    let interval;
    let counter = 0;
    fetch("https://dog.ceo/api/breeds/image/random/10")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        //data.message.forEach(animals =>{
        /* console.log(data.message) */
        /* const animal = animals */
        /* console.log(animal) */

        const card = document.createElement("img");
        card.classList.add("card");
        card.src = data.message[0];
        document.querySelector(".container").appendChild(card);

        interval = setInterval(() => {
          changeAnimal(data);
        }, zeiteinstellung);

        //})
      });
    function changeAnimal(data) {
      // läuft so lange wie vom benutzer eingestellt, min 1s max 10min
      document.querySelector("img").src = data.message[counter];
      if (counter > data.message.length) {
        counter = 0;
      } else {
        counter++;
      }
    }
    /*     const slideshow = document.createElement("img");
    slideshow.classList= "img wrapper";
    slideshow.src = "Frm_Bilder/Alte_Fabrik1000.jpg";
    document.querySelector("body").after(slideshow); */
  }
}
/* 8.2 Wenn Fehler vorhanden sind werden diese durch displayErrors für jede eingabe separiert
angezeigt und entsprechen formatiert */
function displayErrors(errors) {
  if (errors.anrede) {
    document.querySelector(".radios").style.border = "solid 1.3px red";
    const error = document.createElement("span");
    error.innerText = errors.anrede;
    error.classList = ".message";
    document.querySelector(".radios").after(error);
  }
  if (errors.firstName) {
    const error = document.createElement("span");
    error.innerText = errors.firstName;
    error.classList = ".message";
    document.querySelector("#firstName").after(error);
    document.querySelector("#firstName").value = "";
    document.querySelector("#firstName").placeholder = "Bitte Name Eingeben";
    document.querySelector("#firstName").style.border = "solid 1.3px red";
  }
  if (errors.lastName) {
    const error = document.createElement("span");
    error.innerText = errors.lastName;
    error.classList = ".message";
    document.querySelector("#lastName").after(error);
    document.querySelector("#lastName").value = "";
    document.querySelector("#lastName").placeholder = "Bitte Nachname Eingeben";
    document.querySelector("#lastName").style.border = "solid 1.3px red";
  }
  if (errors.jahrgang) {
    const error = document.createElement("span");
    error.innerText = errors.jahrgang;
    document.querySelector("#jhg").after(error);
    document.querySelector("#jhg").value = "";
    document.querySelector("#jhg").placeholder = "Bitte Jahrgang angeben";
    document.querySelector("#jhg").style.border = "solid 1.3px red";
  }
  if (errors.mail) {
    const error = document.createElement("span");
    error.innerText = errors.mail;
    error.classList = ".message";
    document.querySelector("#mail").after(error);
    document.querySelector("#mail").value = "";
    document.querySelector("#mail").placeholder = "Bitte Email Eingeben";
    document.querySelector("#mail").style.border = "solid 1.3px red";
  }
  if (errors.telNr) {
    const error = document.createElement("span");
    error.innerText = errors.telNr;
    error.classList = ".message";
    document.querySelector("#tel").after(error);
    document.querySelector("#tel").value = "";
    document.querySelector("#tel").placeholder = "Bitte Telefon Nr. eingeben";
    document.querySelector("#tel").style.border = "solid 1.3px red";
  }
  if (errors.nachricht) {
    const error = document.createElement("span");
    error.innerText = errors.nachricht;
    error.classList = ".message";
    document.querySelector("#nachricht").after(error);
    document.querySelector("#nachricht").value = "";
    document.querySelector("#nachricht").placeholder =
      "Bitte keine Sonderzeichen verwenden";
    document.querySelector("#nachricht").style.border = "solid 1.3px red";
  }
}
//_________________________________________________________________

//8. Ein Zähler soll anzeigen wieviele Zeichen noch zur verfügung stehen.
document.querySelector("#nachricht").addEventListener("input", (e) => {
  if (!document.querySelector(".counterBox")) {
    const counterBox = document.createElement("div");
    counterBox.classList.add("counterBox");
    e.target.after(counterBox);
  } else {
    document.querySelector(".counterBox").innerText =
      `Sie haben noch ` +
      [250 - e.target.textLength] +
      ` Zeichen zur verfügung`;
  }
  if (e.target.textLength < 240) {
    document.querySelector(".counterBox").style.color = "green";
  } else {
    document.querySelector(".counterBox").style.color = "red";
  }
});

//X.Prüfe die Themenwahl-----------------------------------------
/*   let multiple = document.querySelector("#checks")
  
  multiple.addEventListener('click', createTheme);
  function createTheme(){
  console.log('ok')

} */
