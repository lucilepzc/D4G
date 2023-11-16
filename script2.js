

// Déclaration du tableau Conforme
var Conforme = [];

// Déclaration d'un objet pour faire correspondre les IDs aux textes
var correspondanceConformeID = {};
var correspondanceConformeTexte = {};

function selection1(id_div, out) { // Conforme
  new_id1 = id_div + "_";
  elem1 = document.getElementById(id_div).innerText;
  elem2_1 = document.getElementById(new_id1).innerText;
  Add_html1 = '<div class="alert alert-success alert-dismissible fade show" role="alert"><h4 class="alert-heading">Conforme: ' + elem2_1 + '</h4><p>' + elem1 + '</p><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';

  // Ajout de l'ID au tableau Conforme
  Conforme.push(new_id1);

  // Ajout de la correspondance entre l'ID et le texte
  correspondanceConformeID[new_id1] = elem2_1;
  correspondanceConformeTexte[new_id1] = elem1;

  // Ajout de l'élément au conteneur à l'ID 'content'
  var contentContainer = document.getElementById(out);
  if (contentContainer) {
    contentContainer.innerHTML = contentContainer.innerHTML + Add_html1;
  }
}

// Exemple d'accès à l'objet correspondanceConforme en dehors de la fonction
function afficherCorrespondanceConforme() {
  console.log("Correspondance entre ID et texte Conforme :", correspondanceConformeID, correspondanceConformeTexte);
}

// Appel de la fonction pour afficher la correspondance
afficherCorrespondanceConforme();

// ...



// -------------------------------------------------

// Déclaration du tableau EnCours
var EnCours = [];

// Déclaration d'un objet pour faire correspondre les IDs aux textes pour EnCours
var correspondanceEnCoursID = {};
var correspondanceEnCoursTexte = {};

function selection2(id_div, out) { // EnCours
  new_id2 = id_div + "_";
  elem2 = document.getElementById(id_div).innerText;
  elem2_2 = document.getElementById(new_id2).innerText;
  Add_html2 = '<div class="alert alert-warning alert-dismissible fade show" role="alert"><h4 class="alert-heading">EnCours: ' + elem2_2 + '</h4><p>' + elem2 + '</p><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';

  // Ajout de l'ID au tableau EnCours
  EnCours.push(new_id2);

  // Ajout de la correspondance entre l'ID et le texte pour EnCours
  correspondanceEnCoursID[new_id2] = elem2_2;
  correspondanceEnCoursTexte[new_id2] = elem2;

  // Ajout de l'élément au conteneur à l'ID 'content'
  var contentContainer = document.getElementById(out);
  if (contentContainer) {
    contentContainer.innerHTML = contentContainer.innerHTML + Add_html2;
  }
}

// Exemple d'accès à l'objet correspondanceEnCours en dehors de la fonction
function afficherCorrespondanceEnCours() {
  console.log("Correspondance entre ID et texte EnCours :", correspondanceEnCoursID, correspondanceConformeTexte);
}

// Appel de la fonction pour afficher la correspondance
afficherCorrespondanceEnCours();

// ...

// -------------------------------------------------

// Déclaration du tableau NonConforme
var NonConforme = [];

// Déclaration d'un objet pour faire correspondre les IDs aux textes pour NonConforme
var correspondanceNonConformeID = {};
var correspondanceNonConformeTexte = {};

function selection3(id_div, out) { // NonConforme
  new_id3 = id_div + "_";
  elem3 = document.getElementById(id_div).innerText;
  elem2_3 = document.getElementById(new_id3).innerText;
  Add_html3 = '<div class="alert alert-danger alert-dismissible fade show" role="alert"><h4 class="alert-heading">NonConforme: ' + elem2_3 + '</h4><p>' + elem3 + '</p><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';

  // Ajout de l'ID au tableau NonConforme
  NonConforme.push(new_id3);

  // Ajout de la correspondance entre l'ID et le texte pour NonConforme
  correspondanceNonConformeID[new_id3] = elem2_3;
  correspondanceNonConformeTexte[new_id3] = elem3;

  // Ajout de l'élément au conteneur à l'ID 'content'
  var contentContainer = document.getElementById(out);
  if (contentContainer) {
    contentContainer.innerHTML = contentContainer.innerHTML + Add_html3;
  }
}

// Exemple d'accès à l'objet correspondanceNonConforme en dehors de la fonction
function afficherCorrespondanceNonConforme() {
  console.log("Correspondance entre ID et texte NonConforme :", correspondanceNonConformeID, correspondanceNonConformeTexte);
}

// Appel de la fonction pour afficher la correspondance
afficherCorrespondanceNonConforme();

// ...

// ----------------------------------------------------------

// Déclaration du tableau NonApplicable
var NonApplicable = [];

// Déclaration d'un objet pour faire correspondre les IDs aux textes pour NonApplicable
var correspondanceNonApplicableID = {};
var correspondanceNonApplicableTexte = {};

function selection4(id_div, out) { // NonApplicable
  new_id4 = id_div + "_";
  elem4 = document.getElementById(id_div).innerText;
  elem2_4 = document.getElementById(new_id4).innerText;
  Add_html4 = '<div class="alert alert-secondary alert-dismissible fade show" role="alert"><h4 class="alert-heading">NonApplicable: ' + elem2_4 + '</h4><p>' + elem4 + '</p><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';

  // Ajout de l'ID au tableau NonApplicable
  NonApplicable.push(new_id4);

  // Ajout de la correspondance entre l'ID et le texte pour NonApplicable
  correspondanceNonApplicableID[new_id4] = elem2_4;
  correspondanceNonApplicableTexte[new_id4] = elem4;

  // Ajout de l'élément au conteneur à l'ID 'content'
  var contentContainer = document.getElementById(out);
  if (contentContainer) {
    contentContainer.innerHTML = contentContainer.innerHTML + Add_html4;
  }
}

// Exemple d'accès à l'objet correspondanceNonApplicable en dehors de la fonction
function afficherCorrespondanceNonApplicable() {
  console.log("Correspondance entre ID et texte NonApplicable :", correspondanceNonApplicableID, correspondanceNonApplicableTexte);
}

// Appel de la fonction pour afficher la correspondance
afficherCorrespondanceNonApplicable();

// ...







    function afficherLignes(option) { 
        // Récupération de l'élément div
        var el = document.getElementById("maDiv");
        document.getElementById("famille_titre").innerText = option;
        document.getElementById("sous_titre").innerText = option;
        // Création d'une requête HTTP
        var xhr = new XMLHttpRequest();
      
        // Ouverture de la requête
        xhr.open("GET", "https://raw.githubusercontent.com/FlavioSanchezTroise/D4G-Infinite/main/list.json", true);
      
        // Envoi de la requête
        xhr.send();
      
        // Gestion de la réponse
        xhr.onload = function() {
          if (xhr.status === 200) {
            // Si la réponse est réussie, on convertit le contenu du fichier JSON en objet JavaScript
            var json = JSON.parse(xhr.responseText);
      
            
            var lignes = [];
      
            
            for (var i = 1; i < json.length; i++) {
              if (json[i].Column1 === option) {
                if(json[i].Recommandation=== undefined){
                    
                }else{
                    id_div = "'el"+i+"'";
                    id_div2 = "el"+i;
                    out = "'content'";
                    //var line = '<div class="alert alert-info alert-dismissible fade show" role="alert"><h4 class="alert-heading"><span id="el'+i+'_">'+json[i].Column2+'</span> <button type="button" onclick="selection('+id_div+','+out+')" class="bi bi-plus"></button></h4><p id="'+id_div2+'">'+json[i].Recommandation+'</p></div>';
                    var line = '<div class="alert-heading"><span id="el'+i+'_">'+json[i].Column2+'</span><p id="'+id_div2+'">'+json[i].Recommandation+'</p></div>';
                    lignes.push(line);
                    var line1 = '<div class="btn-group">&nbsp<button type="button" class="btn btn-success" onclick="selection1('+id_div+','+out+')" ">Conforme</button>&nbsp</div>';
                    lignes.push(line1);
                    var line2 = '<div class="btn-group">&nbsp<button type="button" class="btn btn-warning" onclick="selection2('+id_div+','+out+')" ">En Cours</button>&nbsp</div>';
                    lignes.push(line2);
                    var line3 = '<div class="btn-group">&nbsp<button type="button" class="btn btn-danger" onclick="selection3('+id_div+','+out+')" ">Non Conforme</button>&nbsp</div>';
                    lignes.push(line3);
                    var line4 = '<div class="btn-group">&nbsp<button type="button" class="btn btn-secondary" onclick="selection4('+id_div+','+out+')" ">Non Applicable</button>&nbsp</div>';
                    lignes.push(line4);
                    lignes.push('<br>' + '<br>');

                    var texteAvecSautDeLigne = "Première ligne.<br>Deuxième ligne.";
                    var element = document.createElement("p");
                    element.innerHTML = texteAvecSautDeLigne; // Utiliser innerHTML pour interpréter les balises HTML
                    document.body.appendChild(element);

                }
              }
            }
      
            el.innerHTML = lignes.join("");
          } else {
            // Si la réponse est un échec, on affiche un message d'erreur
            el.innerHTML = "Erreur lors de la récupération du fichier JSON";
          }
        }
      }
      

      function creerPDF() {

        // récupération de l'URL
        var url = document.getElementById('siteUrl').value;

        // Création d'un nouvel objet jsPDF
        var pdf = new jsPDF();
        var yPos = 10;
      
        // Fonction pour ajouter du texte avec retour à la ligne
        function addWrappedText(x, y, text, maxWidth) {
          var lines = pdf.splitTextToSize(text, maxWidth);
          pdf.text(x, y, lines);
        }
      
        // Fonction pour ajouter une nouvelle page si nécessaire
        function addNewPageIfNecessary(currentY) {
          var maxPageHeight = 250; // Hauteur maximale avant de créer une nouvelle page
          if (currentY > maxPageHeight) {
            pdf.addPage();
            return 20; // Réinitialiser la position Y sur la nouvelle page
          }
          return currentY;
        }
      
        // Ajouter l'URL au contenu du PDF
        yPos = addNewPageIfNecessary(yPos);
        addWrappedText(20, yPos, "URL du site évalué: " + url, 150);
        yPos += 20;
      
        // Ajout des valeurs de correspondanceConformeTexte
        yPos = addNewPageIfNecessary(yPos);
        pdf.text(20, yPos, "Mesures Conformes :");
        yPos += 20;
      
        for (var id in correspondanceConformeTexte) {
          yPos = addNewPageIfNecessary(yPos);
          addWrappedText(20, yPos, "ID : " + correspondanceConformeID[id], 150);
          addWrappedText(20, yPos + 10, "Mesure : " + correspondanceConformeTexte[id], 150);
          yPos += 30; // Ajustez l'espacement selon vos besoins
        }
      
        // Ajout des valeurs de correspondanceEnCoursTexte
        yPos += 20;
        yPos = addNewPageIfNecessary(yPos);
        pdf.text(20, yPos, "Mesures en cours :");
        yPos += 20;
      
        for (var id in correspondanceEnCoursTexte) {
          yPos = addNewPageIfNecessary(yPos);
          addWrappedText(20, yPos, "ID : " + correspondanceEnCoursID[id], 150);
          addWrappedText(20, yPos + 10, "Mesure : " + correspondanceEnCoursTexte[id], 150);
          yPos += 30; // Ajustez l'espacement selon vos besoins
        }
      
        // Ajout des valeurs de correspondanceNonConformeTexte
        yPos += 20;
        yPos = addNewPageIfNecessary(yPos);
        pdf.text(20, yPos, "Mesures non conformes :");
        yPos += 20;
      
        for (var id in correspondanceNonConformeTexte) {
          yPos = addNewPageIfNecessary(yPos);
          addWrappedText(20, yPos, "ID : " + correspondanceNonConformeID[id], 150);
          addWrappedText(20, yPos + 10, "Mesure : " + correspondanceNonConformeTexte[id], 150);
          yPos += 30; // Ajustez l'espacement selon vos besoins
        }
      
        // Ajout des valeurs de correspondanceNonApplicableTexte
        yPos += 20;
        yPos = addNewPageIfNecessary(yPos);
        pdf.text(20, yPos, "Mesures non applicables :");
        yPos += 20;
      
        for (var id in correspondanceNonApplicableTexte) {
          yPos = addNewPageIfNecessary(yPos);
          addWrappedText(20, yPos, "ID : " + correspondanceNonApplicableID[id], 150);
          addWrappedText(20, yPos + 10, "Mesure : " + correspondanceNonApplicableTexte[id], 150);
          yPos += 30; // Ajustez l'espacement selon vos besoins
        }

        function genererRapport() {
          var siteURL = document.getElementById("siteURL").value;
          creerPDF(siteURL);
        }
        
      
        // Enregistrement du document PDF
        pdf.save("bilan_ecoconception_site.pdf");
      }
      
      
      
      
      
      
      

      
      
      
