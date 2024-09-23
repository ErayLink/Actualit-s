window.addEventListener('DOMContentLoaded', function() {

    // Obtenir les éléments HTML
    const modal = document.getElementById("card-none");
    const btn = document.getElementById("L1");
    const span = document.getElementById("close")[0];
    const creat = document.getElementById('creat');

    // Lorsque le bouton est cliqué
    btn.addEventListener('mouseover', () => {

        modal.style.display = "block";
        if (true) {

            const assist = document.getElementById("container-mt4_div");
            assist.style.display = "none";
            if (creat.style.display = "none") {


                creat.style.display = "unset";

                if (true) {}





            }

        }
        //alert('hellp');
    });

    // Lorsque l'utilisateur clique en dehors de la fenêtre modale ou sur le bouton de fermeture




    window.onclick =
        function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

    const itemfiliere = document.getElementById("itemfiliere");

    itemfiliere.addEventListener("click", () => {
        const testzz = document.getElementById("testz");
        //const cdiv = document.createElement("div");
        const cp = document.createElement("p");
        const inputfile = document.getElementById("inputfile");

        if (creat.style.display = "unset") {

            creat.style.display = "none";


        }

        if(inputfile.style.display = "none") {

            inputfile.style.display = "unset";
        }






        testzz.textContent = "Veillez inserer votre fichier";
        const a = document.createElement('<label for="input-id" class="col-sm-2"></label>');
        testzz.appendChild(a);




    });

const colmd6_filiere = document.getElementById("col-md-6_filiere")



const imageInput = document.getElementById('inputfile');
const imagePreview = document.getElementById('preview');

imageInput.addEventListener('change', () => {
  const file = imageInput.files[0];

  colmd6_filiere.style.display = "none";

  if (file) {
    const reader = new FileReader();

    reader.onload = (e) => {
      imagePreview.src = e.target.result;
    };

    reader.readAsDataURL(file);
  }
});


});

