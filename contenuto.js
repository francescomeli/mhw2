function mostra(event){
    const description=event.currentTarget.parentNode.querySelector('p');
    const testo=event.currentTarget.parentNode.querySelector('span');
    if(testo.textContent === "Mostra descrizione"){
        description.classList.remove('hidden');
        testo.textContent = "Non mostrare più";
    }
    else{
        description.classList.add('hidden');
        testo.textContent = "Mostra descrizione";
    }
}

function aggiungi_preferiti(event){
    const titolo = event.currentTarget.parentNode.querySelector("h2");
    const immagine = event.currentTarget.parentNode.querySelector("img");
    /** eventuale descrizione */
    const tasto = event.currentTarget.parentNode.querySelector("button");

    if(tasto.textContent === "Aggiungi ai preferiti"){
        const tot_preferiti=document.querySelector("#preferiti");
        tot_preferiti.classList.remove("hidden");
        const tot_selezionati=document.querySelector("#selezionati");
        
        const blocco=document.createElement("div");
        const tit=document.createElement("h2");
        tit.textContent=titolo.textContent;
        const imm=document.createElement("img");
        imm.src=immagine.src;
        const tas=document.createElement("button");
        tas.textContent="Rimuovi dai preferiti";

        tot_selezionati.appendChild(blocco);
        blocco.appendChild(tit);
        blocco.appendChild(imm);
        blocco.appendChild(tas);

        tasto.textContent="Inserito nella sezione preferiti";

        const togli=document.querySelectorAll("#selezionati button");
        for(const tog of togli){
            tog.addEventListener("click",aggiungi_preferiti);
        }
    }

    if(tasto.textContent === "Rimuovi dai preferiti"){
        const evidenziati=document.querySelectorAll("#offerte h2");

        for(let i=0; i<titoli.length; i++){
            if(evidenziati[i].textContent === titolo.textContent){
                const cambio=document.querySelectorAll("#offerte button");
                cambio[i].textContent="Aggiungi ai preferiti";
                break;
            }
        }

        event.currentTarget.parentNode.remove("div");
    
    }

    if(!document.querySelector("#selezionati div")){ 
        const tot_preferiti=document.querySelector("#preferiti");
        tot_preferiti.classList.add("hidden");
    }
}

function carica(){
    const tot_offerte=document.querySelectorAll(".scelte");
    for(let i=0; i<titoli.length; i++){
        const titolo=document.createElement("h2");
        titolo.textContent=titoli[i];
        const immagine=document.createElement("img");
        immagine.src=immagini[i];
        const descrizione=document.createElement("p");
        descrizione.textContent=descrizioni[i];
        const dettagli=document.createElement("span");
        dettagli.textContent="Mostra descrizione";
        const aggiungi=document.createElement("button");
        aggiungi.textContent="Aggiungi ai preferiti";
         
        tot_offerte[i].appendChild(titolo);
        tot_offerte[i].appendChild(immagine);
        tot_offerte[i].appendChild(descrizione);
        tot_offerte[i].appendChild(dettagli);
        tot_offerte[i].appendChild(aggiungi);

        descrizione.classList.add('hidden');
    }

    const contenuto=document.querySelectorAll("#offerte span");
    for(const cont of contenuto){
        cont.addEventListener("click",mostra);
    }

    const preferiti=document.querySelectorAll("#offerte button");
    for(const pref of preferiti){
        pref.addEventListener("click",aggiungi_preferiti);
    }
}

function cerca(event){
    const parola=document.getElementById("trova");
    const maiuscolo=parola.value.toUpperCase();
    const barra=document.querySelectorAll("#offerte h2");

    for(let i=0; i<titoli.length;i++){
        const testo=barra[i].textContent;

        if(testo.toUpperCase().indexOf(maiuscolo)>-1){
            barra[i].parentNode.classList.remove("hidden");
        }
        else{
            barra[i].parentNode.classList.add("hidden");
        }
    }
}

document.body.onload = carica; 
document.getElementById("trova").addEventListener("keyup",cerca);