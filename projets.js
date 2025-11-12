document.addEventListener("DOMContentLoaded", function(){
  const buttons = document.querySelectorAll(".toggle-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", function(){
      const details = this.previousElementSibling; // project-details
      if(details.style.display === "block"){
        details.style.display = "none";
        this.textContent = "Voir plus";
      } else {
        details.style.display = "block";
        this.textContent = "Voir moins";
      }
    });
  });
});