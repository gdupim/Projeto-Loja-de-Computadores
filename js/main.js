//? Array de imagens:
let linksDestaques = ["img/Fonte/fonte-cooler-master.jpg", "img/Gabinete/gabinete-cougar-panzer-max-g.jpg", "img/HD/hd-wd-blue-4tb.jpg", "img/Monitor/monitor-acer-predator-xb241yu.jpg", "img/Mouse/mouse-razer-basilisk.jpg", "img/PlacaMae/placamae-asus-tuf-gaming-x579-plus.jpg", "img/PlacaVideo/placavideo-geforce-gtx-1060-rog-strix.jpg", "img/Processador/processador-amd-ryzen-7-2700.jpg", "img/RAM/ram-corsair-dominator.jpg", "img/SSD/ssd-wd-blue.jpg", "img/Teclado/teclado-razer-deathstalker.jpg"];

//? Parte do carrosel:
var carroselDestaques = document.querySelector('#carroselDestaques');
var conteudoCarrosel = document.getElementById("conteudoCarrosel");

var carrosel = new bootstrap.Carousel(carroselDestaques, {
    interval: 2500
});

//? Gerador de destaques:
for (let i = 0; i < linksDestaques.length; i++) {
    let divDestaqueActive = document.createElement("div");
    divDestaqueActive.className = "carousel-item active";

    let divDestaque = document.createElement("div");
    divDestaque.className = "carousel-item";

    let imgDestaque = document.createElement("img"); 
    imgDestaque.className = "imagem-carrosel";
    imgDestaque.src = linksDestaques[i];
    imgDestaque.alt = "...";

    if(i<1){
        divDestaqueActive.appendChild(imgDestaque);
        conteudoCarrosel.appendChild(divDestaqueActive);
    }
    else{
        divDestaque.appendChild(imgDestaque);
        conteudoCarrosel.appendChild(divDestaque); 
    }
}
