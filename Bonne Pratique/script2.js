function selection(id_div,out){
    new_id = id_div+"_";
    elem = document.getElementById(id_div).innerText;
    elem2 = document.getElementById(new_id).innerText;
    Add_html = '<div class="alert alert-success alert-dismissible fade show" role="alert"><h4 class="alert-heading">'+elem2+'</h4><p>'+elem+'</p><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
    document.getElementById(out).innerHTML = document.getElementById(out).innerHTML + Add_html;
}

    function afficherLignes(option) {
        // Récupération de l'élément div
        var el = document.getElementById("maDiv");
        document.getElementById("famille_titre").innerText = option;
        document.getElementById("sous_titre").innerText = option;
        // Création d'une requête HTTP
        var xhr = new XMLHttpRequest();
      
        // Ouverture de la requête
        xhr.open("GET", "https://raw.githubusercontent.com/edhansa/Front_End.github.io/main/data.json", true);
      
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
                    var line = '<div class="alert alert-info alert-dismissible fade show" role="alert"><h4 class="alert-heading"><span id="el'+i+'_">'+json[i].Column2+'</span> <button type="button" onclick="selection('+id_div+','+out+')" class="bi bi-plus"></button></h4><p id="'+id_div2+'">'+json[i].Recommandation+'</p></div>';
                    lignes.push(line);
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
      

      function creerPDF(idDiv) {
        // Récupération de l'élément div
        var div = document.getElementById(idDiv);
        // Configuration de l'orientation et des marges du document PDF
        var orientation = "p";
        var marges = {
          haut: 20,
          bas: 20,
          gauche: 20,
          droite: 20
        };
      
        // Création d'un nouvel objet jspdf
        var pdf = new jsPDF(orientation, "mm", "a4");
      
        // Capture de l'image du div et ajout de cette image au document PDF
        html2canvas(div).then(function(canvas) {
          var img = canvas.toDataURL("image/png");
          pdf.addImage(img, "PNG", marges.gauche, marges.haut);
      
          // Enregistrement du document PDF
          pdf.save("div-to-pdf.pdf");
        });
      }
      
      
      