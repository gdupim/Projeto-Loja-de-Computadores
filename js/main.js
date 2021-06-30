//? Array de imagens:
let linksDestaques = ["img/Fonte/fonte-cooler-master.jpg", "img/Gabinete/gabinete-cougar-panzer-max-g.jpg", "img/HD/hd-wd-blue-4tb.jpg", "img/Monitor/monitor-acer-predator-xb241yu.jpg", "img/Mouse/mouse-razer-basilisk.jpg", "img/PlacaMae/placamae-asus-tuf-gaming-x570-plus.jpg", "img/PlacaVideo/placavideo-geforce-gtx-1060-rog-strix.jpg", "img/Processador/processador-amd-ryzen-7.jpg", "img/RAM/ram-corsair-dominator.jpg", "img/SSD/ssd-wd-blue.jpg", "img/Teclado/teclado-razer-deathstalker.jpg"];

let tituloDestaques = ["Fonte Cooler Master 550W", "Gabinete Cougar Panzer MAX-G", "HD Western Digital 4TB Azul", "Monitor Acer Predator XB241YU", "Mouse Razer Basilisk", "Placa Mãe Asus TUF Gaming X570-Plus", "Placa de Vídeo Geforce GTX 1060 ROG STRIX", "Processador AMD Ryzen 7 2700", "Memória RAM Corsair Dominator Platinum 16GB", "SSD Western Digital Azul 500GB", "Teclado Razer Deathstalker"];

let descDestaques = ["Fonte de 550W da Cooler Master modelo MPE-5501-ACAAW-BR", "Gabinete Full Tower, Vidro Temperado, Water Cooling, 8 slots de expansão", "HD interno de 4tb de capacidade e 64mb de cache", "Tela de 23.8\", resolução 2560x1440 e taxa de 144hz de atualização", "Mouse USB Classic Black Essential de 8 botões", "Placa Mãe AMD com suporte AMD Ryzen, 7 slots totais de expansão, Windows 10", "Placa de Vídeo ASUS com 6GB de memória.", "Processador 8 cores, 16 threads, desbloqueado e 4.1GHz", "Memória RAM Corsair Dominator Platinum de 16GB de memória, RGB e DDR4", "SSD Western Digital Azul 500GB, leitura de 560MB/s e gravação de 530MB/s", "Teclado Razer Deathstalker com iluminação LED e de membrana"];

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

    let divDescDestaque = document.createElement("div");
    divDescDestaque.className = "carousel-caption d-none d-md-block";

    let tituloDescDestaque = document.createElement("h5");
    let tituloTexto = document.createTextNode(tituloDestaques[i]);
    tituloDescDestaque.className = "imagem-titulo-destaque";

    let conteudoDescDestaque = document.createElement("p");
    let conteudoTexto = document.createTextNode(descDestaques[i]);
    conteudoDescDestaque.className = "imagem-conteudo-destaque";

    //TODO: Arrumar o jeito que a imagem destaque ativa é feita
    if(i<1){
        tituloDescDestaque.appendChild(tituloTexto);
        conteudoDescDestaque.appendChild(conteudoTexto);
        divDescDestaque.appendChild(tituloDescDestaque);
        divDescDestaque.appendChild(conteudoDescDestaque);
        divDestaqueActive.appendChild(imgDestaque);
        divDestaqueActive.appendChild(divDescDestaque);
        conteudoCarrosel.appendChild(divDestaqueActive);
    }
    else{
        tituloDescDestaque.appendChild(tituloTexto);
        conteudoDescDestaque.appendChild(conteudoTexto);
        divDescDestaque.appendChild(tituloDescDestaque);
        divDescDestaque.appendChild(conteudoDescDestaque);
        divDestaque.appendChild(imgDestaque);
        divDestaque.appendChild(divDescDestaque);
        conteudoCarrosel.appendChild(divDestaque); 
    }
}
