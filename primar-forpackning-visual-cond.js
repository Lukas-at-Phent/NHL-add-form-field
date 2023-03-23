const Burkar = document.getElementById("Burkar-div");
const lSviktBulk = document.getElementById("L-svikt-bulk-div");
const ZipPSar = document.getElementById("Zip-p-sar-div");
const Flowpack = document.getElementById("Flowpack-div");
const Hinkar = document.getElementById("Hinkar-div");
const StoraFlaskor = document.getElementById("Stora-flaskor-div");
const SmFlaskor = document.getElementById("Sm-flaskor-div");
const DroppFlaskor = document.getElementById("Droppflaskor-div");

const radioButtons = document.querySelectorAll('input[name="Produktval"]');

radioButtons.forEach(function(radioButton) {
  radioButton.addEventListener('change', function() {
    if ((radioButton.id === 'radio-kapslar' || radioButton.id ==='radio-tabletter' || radioButton.id === 'fodertillskott-tabletter') && radioButton.checked) {
        Burkar.style.display = "flex";
        lSviktBulk.style.display = "flex";
        ZipPSar.style.display = "none";
        Flowpack.style.display = "none";
        Hinkar.style.display = "none";
        StoraFlaskor.style.display = "none";
        SmFlaskor.style.display = "none";
        DroppFlaskor.style.display = "none";
    } else if ((radioButton.id === 'radio-pulver' || radioButton.id === 'fodertillskott-pulver') && radioButton.checked) {
        Burkar.style.display = "flex";
        ZipPSar.style.display = "flex";
        Flowpack.style.display = "flex";
        Hinkar.style.display = "flex";
        StoraFlaskor.style.display = "none";
        SmFlaskor.style.display = "none";
        DroppFlaskor.style.display = "none";
    } else if ((radioButton.id === "radio-flytande" || radioButton.id === 'fodertillskott-flytande') && radioButton.checked) {
        StoraFlaskor.style.display = "flex";
        SmFlaskor.style.display = "flex";
        DroppFlaskor.style.display = "flex";
        Burkar.style.display = "none";
        lSviktBulk.style.display = "none";
        ZipPSar.style.display = "none";
        Flowpack.style.display = "none";
        Hinkar.style.display = "none";
    }
  });
});
