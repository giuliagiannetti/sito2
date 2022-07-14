// PULSANTE LIGHT-DARK MODE

const btn = document.getElementById("stylebtn"); //restituisce un elemento che corrisponde al selettore CSS specificato
const theme = document.getElementById("foglio-di-stile");// questo ti dice: nella funzione Javascript #foglio_di_stile si chiama theme

btn.addEventListener('click', cambiastile)

function cambiastile() {
    if (theme.getAttribute("href") == "light-mode.css") { 
        theme.setAttribute ("href", "dark-mode.css") ;
    } else {
        theme.setAttribute ("href", "light-mode.css");
    }
}
