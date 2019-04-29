document.getElementById('modalBtn').addEventListener("click", openModal);
document.getElementById('closeBtn').addEventListener("click", closeModal);



function openModal(){
  document.getElementById('mainmodal').style.display = 'block';
}
function closeModal(){
  document.getElementById('mainmodal').style.display = 'none';
}
