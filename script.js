// PULSANTE LIGHT-DARK MODE

let btn = document.getElementById("stylebtn"); //restituisce un elemento che corrisponde al selettore CSS specificato
let theme = document.getElementById("foglio-di-stile");// questo ti dice: nella funzione Javascript #foglio_di_stile si chiama theme

function cambiastile() {
    let stileref = theme.getAttribute("href");
    if (theme.getAttribute("href") == "light-mode.css") { 
    theme.setAttribute ("href", "dark-mode.css") ;
    } else {
    theme.setAttribute ("href", "light-mode.css");
    }
};

btn.onclick = cambiastile;
