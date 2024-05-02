document.addEventListener("DOMContentLoaded", function() {
    // Changement de couleur de fond en fondu
    const body = document.querySelector("body");
    const colors = ["#ff9999", "#99ff99", "#9999ff"];
    let index = 0;
  
    function changeBackgroundColor() {
      body.style.transition = "background-color 2s ease-in-out";
      body.style.backgroundColor = colors[index];
      index = (index + 1) % colors.length;
      setTimeout(changeBackgroundColor, 2000);
    }
  
    changeBackgroundColor();
  });
  