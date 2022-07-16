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

function myFunction() {
  // Declare variables.
  // "i" is generally used as a variable name but you can give it any name
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");
  // Loop through all list items, and hide those who don't match the search query. 
  //Are the list items all the items in th HTML's <ul id="myMenu"></ul>?
  for (i = 0; i < li.length; i++) {//Si tratta di una dichiarazione "for". 
      // si usa nei loop. Spiegata bene a https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

