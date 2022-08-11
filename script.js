let prevScrollpos = window.pageYOffset;

let headerDiv = document.querySelector("header");
let headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  /* Desaparece al hacer scroll hacia abajo */
  if (prevScrollpos <= currentScrollPos ){
      headerDiv.classList.remove("fixedToTop");
      headerDiv.style.top ="-7.2rem";
  }
  /* Si se hace scroll hacia arriba, aparece*/
  else{  
      headerDiv.classList.add("fixedToTop");
      headerDiv.style.top = "0";
  }

  prevScrollpos = currentScrollPos;
}
 
