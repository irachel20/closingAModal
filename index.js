const launch = document.getElementById("launch");
const close = document.getElementById('close');
const exampleModal = document.getElementById('exampleModal');

launch.addEventListener("click", () => {
  exampleModal.style.display = "block";


  close.addEventListener('click' , () =>{
    exampleModal.style.display = "none";
  })
  
  window.onclick = function(event) {
    if (event.target == exampleModal) {
      exampleModal.style.display = "none";
    }}

});

