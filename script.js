// PULSANTE LIGHT-DARK MODE

let btn = document.getElementById("stylebtn"); //restituisce un elemento che corrisponde al selettore CSS specificato
let theme = document.getElementById("foglio-di-stile");// questo ti dice: nella funzione Javascript #foglio_di_stile si chiama theme
let cow = document.querySelector (".logo")
//Megaciao
function cambiastile() {
    if (theme.getAttribute("href") == "light-mode.css") { 
    theme.setAttribute ("href", "dark-mode.css") ;
    cow.setAttribute ("src", "img/muccainversa.png");
    } else {
    theme.setAttribute ("href", "light-mode.css");
    cow.setAttribute ("src", "img/mucca1.png");
    }
};

btn.onclick = cambiastile;

// MENU A TENDINA

const menuBtn = document.querySelector('.menubtn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

