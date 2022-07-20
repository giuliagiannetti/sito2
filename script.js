// PULSANTE LIGHT-DARK MODE

let btn = document.getElementById("stylebtn"); //restituisce un elemento che corrisponde al selettore CSS specificato
let theme = document.getElementById("foglio-di-stile"); // questo ti dice: nella funzione Javascript #foglio_di_stile si chiama theme
let cow = document.querySelector(".logo");
//Megaciao
function cambiastile() {
  if (theme.getAttribute("href") == "light-mode.css") {
    theme.setAttribute("href", "dark-mode.css");
    cow.setAttribute("src", "img/muccainversa.png");
  } else {
    theme.setAttribute("href", "light-mode.css");
    cow.setAttribute("src", "img/mucca1.png");
  }
}

btn.onclick = cambiastile;

// MENU A TENDINA anche questo nono funz

const menuBtn = document.querySelector(".menubtn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});

//FUNZIONE DI RICERCA https://www.w3schools.com/howto/howto_js_search_menu.asp

function myFunction() {
  // Declare variables.
  // "i" is generally used as a variable name but you can give it any name
  var input, filter, ul, li, a, i;

  input = document.getElementById("mySearch");//Nell'input comparirà quello che c'è scritto nell'elemento di id 'mySearch'. 
  //In 'index.html' la box dove si scrive per cercare le font ha come id 'mySearch' QUINDI NELLA VARIABILE 'input' CI SARÀ QUELLO CHE SCRIVE L'UTENTE! :))
   
  filter = input.value.toUpperCase(); // 'toUpperCase()' trasforma una stringa di testo in tutte maiuscole
  // nella variabile 'filter' comparirà quello che ha scritto l'utente ma con lettere tutte maiuscole
  //Quindi filter serve solo ad evitare che la ricerca sia case-sensitive?

  ul = document.getElementById("myMenu"); //Nella VARIABILE 'ul' ci sarà la lista di ancore ai testi perché nell'html il tag 'ul' contenente le ancore ha come id 'myMenu" (https://www.w3schools.com/jsref/met_document_getelementsbytagname.asp)

  li = ul.getElementsByTagName("li"); //Nella VARIABILE 'li' ci sono tutti i tag <li></li> CONTENUTI dentro al tag <ul></ul> nell'html
  //in questo caso ogni tag <li></li> contiene un'ancora 

  //RICAPITOLANDO
  //Abbiamo dichiarato le variabili: input; filter; ul; li.
  //1. L'utente scrive in input il nome della font
  //2. filter trasforma il nome della font in lettere UPPERCASE
  // [La variabile ul ha i tag imparentati: <ul><li><a></a></li></ul>]
  //[Nella variabile li sono scritti i tag li]
  console.log(input);
  console.log(filter);
  console.log(ul);
  console.log(li);


  for (i = 0; i < li.length; i++) { //il 'li' si questa funzione si riferisce alla variabile li, non ai tag li.
        //Si tratta di una dichiarazione "for".
        // si usa nei loop. Spiegata bene a https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
        //li.length sta per l'insieme di tutti gli elementi compresi in 'li'. 
        //Quindi la condizione 'i<li.length' comprende tutte le i da 'i=0' fino all'ultima i della lista 'li'
       
    a = li[i].getElementsByTagName("a")[0]; 
    //Inserisco nella VARIABILE 'a' il valore contenuto nel TAG <a></a> presente all'interno del tag <li></li> in posizione [i].
    //Nel PRIMO ciclo della funzione 'for()' in cui ci troviamo la variabile 'a' prenderà il valore della stringa "Bodoni", 
    //perché "Bodoni" è il testo contenuto nel tag <a></a> a sua volta dentro al tag <li></li> di posizione [0].
    //importante: getElementByTagName("a") considera solo quello che è compreso tra il tag di apertura <a> e quello di chiusura </a> 
    //ignorando quindi il link e le altre info che possono essere dentro alle parentesi ad angolo

    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {//ricorda che 'filter' è una variabile e coincide con quello che scrive l'utente nella search-box con la sola differenza che è sempre UPPERCASE (info su indexOf(): https://www.w3schools.com/jsref/jsref_indexof_array.asp)
      // Tutta la trafila 'a.innerHTML.toUpperCase()' indica semplicemente i nomi delle font scritti tra i tag <a></a> (trasposti in UPPERCASE)
       
      // '.indexOf()' è una funzione che restituisce il numero di indice dell'elemento contenuto in un determinato array o colletion.
      //questo elemento viene specificato all'interno delle parentesi tonde che seguono .indexOf, in questo caso l'elemento di cui trovare l'indice è "filter" (Esempio pratico: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_indexof_array)
      //Il metodo indexOf() restituisce -1 SE IL VALORE NON VIENE TROVATO
      //Quindi 

      li[i].style.display = ""; // 'style.display="";' è una dichiarazione di stile CSS. Significa semplicemente che il display di un elemento rimane uguale (https://www.w3schools.com/jsref/prop_style_display.asp)
    } else {
      li[i].style.display = "none"; // è una dichiarazione di stile CSS. Significa che un elemento scompare e non occupa più spazio
    }
    //RICAPITOLANDO
    //Ordine delle funzioni: for>if>else
    //Per (ogni li) la nuova variabile a = "tag collegamento" contenuto in quel li //fa conto
    //2. se (il contenuto della variabile a spostato in maiuscolo)
  }
}

//FINE FUNZIONE DI RICERCA


//per i collegamenti che scorrono NON FUNZIONA
document.querySelectorAll('a[href="#"]').forEach(anchor => {
  //gli sto dicendo di selezionare tutte le ancore- forEach esegue il comando solo per un elemento alla volta anzichè tutti insieme
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
