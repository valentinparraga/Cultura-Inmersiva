const cards = document.querySelectorAll('.card');
const cardsContainer = document.querySelector('.contenedor-tarjetas');
const flipBtn = document.querySelectorAll('.flip-button');

const personajes = [
    {
        id: 1,
        shortcut: "pizarnik",
        nombre: "Alejandra Pizarnik",       
        descripcion: "Hija de una familia inmigrante, Alejandra Pizarnik nació en Avellaneda en 1936. Escribió poesías, críticas literarias, novelas cortas y diarios personales. Con estilo intenso y agudo, habló de su sexualidad, su cuerpo, sus deseos y sus obsesiones y, con ello, propuso otras formas posibles de vivir la feminidad. Se convirtió en una de las voces más reconocidas de las letras argentinas.",
        ilustracion: "/assets/cards/alejandra_pizarnik.jpeg",
        ilustrador: "Ilustradora: Eliana Quilla Sonko Juchani",
        qr: "/assets/cards/QR/Alejandra Pizarnik.svg",
    },

    {
        id: 2,
        shortcut: "piazzolla",
        nombre: "Astor Piazzolla",       
        descripcion: "Con sus composiciones y su bandoneón, revolucionó el tango, por eso es reconocido como uno de los compositores y músicos más importantes del siglo XX. Nacido en Mar del Plata en 1921 y con una amplia trayectoria en Estados Unidos y Europa, su legado sigue vivo en todo el mundo. Es considerado un referente indiscutido no sólo en el tango, sino también en todo el arco musical.",
        ilustracion: "/assets/cards/astor_piazzolla.jpeg",
        ilustrador: "Ilustrador: Robosepu",
        qr: "/assets/cards/QR/Astor Piazzolla.svg",
    },

    {
        id: 3,
        shortcut: "yupanqui",
        nombre: "Atahualpa Yupanqui",       
        descripcion: "Nació como Héctor Roberto Chavero Aramburu en Pergamino en 1908 y eligió como seudónimo Atahualpa Yupanqui, que en quechua significa “persona que viene de tierras lejanas a contar algo”. Este nombre se hizo carne y contó/cantó los caminos y los campos, las penas y la vida cotidiana de la provincia de Buenos Aires. Renovó la música argentina y es reconocido como uno de los artistas populares más célebres de nuestro país.",
        ilustracion: "/assets/cards/atahualpa_yupanqui.jpg",
        ilustrador: "Ilustrador: Leonardo Gauna",
        qr: "/assets/cards/QR/Atahualpa Yupanqui.svg",
    },

    {
        id: 4,
        shortcut: "maradona",
        nombre: "Diego Armando Maradona",       
        descripcion: "Nació en Villa Fiorito, Lomas de Zamora, en 1960. Se convirtió en un legendario jugador de fútbol y en un ícono popular a nivel mundial. Su legado trascendió las canchas de fútbol y se instaló en el corazón del imaginario social argentino. Promovió mística, pasión y una profunda identificación colectiva.",
        ilustracion: "/assets/cards/diego_armando_maradona.jpg",
        ilustrador: "Ilustrador: Ichu",
        qr: "/assets/cards/QR/Diego Armando Maradona.svg",
    },

    {
        id: 5,
        shortcut: "petorutti",
        nombre: "Emilio Pettoruti",       
        descripcion: "Nació en La Plata en 1892. Se convirtió en uno de los pintores argentinos más destacados del siglo XX. Es reconocido por ser uno de los principales exponentes de la vanguardia artística en Argentina y por sus aportes a la renovación del arte local a través de su rol como artista, crítico de arte y director del Museo Provincial de Bellas Artes. También, fue un influyente maestro que dejó un legado duradero en las generaciones futuras de artistas.",
        ilustracion: "/assets/cards/emilio_pettoruti_pulindra.jpg",
        ilustrador: "Ilustradora: Pulindra",
        qr: "/assets/cards/QR/Emilio Pettoruti.svg",
    },

    {
        id: 6,
        shortcut: "hudson",
        nombre: "Enrique Hudson",       
        descripcion: "Nació en 1841 en La Plata. Como naturalista y escritor, Hudson dedicó gran parte de su vida a estudiar y preservar la flora y fauna de la región. Su obra literaria capturó la belleza y la diversidad de la Provincia, contribuyendo a su reconocimiento y valoración. Además, Hudson fue un defensor temprano de la conservación ambiental, abogando por la protección de los ecosistemas únicos de la provincia de Buenos Aires.",
        ilustracion: "/assets/cards/enrique_hudson.jpg",
        ilustrador: "Ilustradora: Tati Catelani",
        qr: "/assets/cards/QR/Enrique Hudson.svg",
    },

    {
        id: 7,
        shortcut: "eva",
        nombre: "Eva Perón",       
        descripcion: "Nació en 1919 en Los Toldos. De infancia plebeya y juventud artística de radioteatro, encontró su destino en la política. Luchó hasta su muerte, dejando jirones de su vida, en la pelea por el reconocimiento de los derechos de las mujeres, los niños y los trabajadores. Se convirtió en una de las figuras más gravitantes del siglo XX argentino.",
        ilustracion: "/assets/cards/eva_peron.jpeg",
        ilustrador: "Ilustrador: Natalio Cerminara",
        qr: "/assets/cards/QR/Eva Perón.svg",
    },

    {
        id: 8,
        shortcut: "hebe",
        nombre: "Hebe de Bonafini",       
        descripcion: "Desde La Plata, forjó una vida de lucha en contra del terrorismo de Estado y en defensa de los derechos humanos. Buscando a sus hijos y su nuera desaparecidxs durante la dictadura cívico-militar de 1976-1983, fundó junto a otras mujeres la Asociación Madres de Plaza de Mayo. Es un símbolo de resistencia, coraje y rebeldía.",
        ilustracion: "/assets/cards/hebe_de_bonafini.jpg",
        ilustrador: "Ilustrador: Juani Mosquera",
        qr: "/assets/cards/QR/Hebe de Bonafini.svg",
    },

    {
        id: 9,
        shortcut: "pallamay",
        nombre: "Isabel Pallamay",       
        descripcion: "Nació entre 1678 y 1684. Fue la primera mujer en acceder a un cacicazgo en los pueblos indígenas de Argentina, un rol reservado para los varones. Defendió a su pueblo quilme de la invasión española y gobernó durante diez años. Desafió las convenciones de su época, luchó por su patria y se convirtió en una figura trascendental de la historia y la identidad de nuestra provincia.",
        ilustracion: "/assets/cards/isabel_pallamay.jpg",
        ilustrador: "Ilustradora: Lucía Castez",
        qr: "/assets/cards/QR/Isabel Pallamay.svg",
    },

    {
        id: 10,
        shortcut: "peron",
        nombre: "Juan Domingo Perón",       
        descripcion: "El peronismo transformó la política argentina y dejó una marca indeleble en la cultura y la identidad de la Provincia y el país. Perón, nacido en Lobos en 1945, introdujo nuevas ideas y símbolos que resonaron profundamente en la sociedad argentina, que siguen vigentes hasta el día de hoy.",
        ilustracion: "/assets/cards/juan_domingo_peron.jpeg",
        ilustrador: "Ilustradora: More Petraglia",
        qr: "/assets/cards/QR/.svg",
    },

    {
        id: 11,
        shortcut: "walsh",
        nombre: "Maria Elena Walsh",       
        descripcion: "Nació en Villa Sarmiento, Morón, en 1930. Su contribución a la literatura y la música ha acompañado a generaciones de niñas y niños argentinos. Además, fue una defensora de los derechos humanos, de los derechos de las mujeres y se alzó como una voz crítica de nuestra sociedad. Su legado la convierte en una figura destacada de la cultura argentina.",
        ilustracion: "/assets/cards/maria_elena_walsh.jpeg",
        ilustrador: "Ilustrador: Nico Fernández",
        qr: "/assets/cards/QR/María Elena Walsh.svg",
    },

    {
        id: 12,
        shortcut: "muñoz",
        nombre: "Mariela Muñoz",       
        descripcion: "Nació en 1943 en Tucumán y vivió desde su infancia en Quilmes. Fue la primera persona trans en obtener el cambio de nombre y de género en su DNI. Su precedente y su lucha fueron claves para la promulgación de la Ley de Identidad de Género y también para los derechos de las personas trans a adoptar. Su legado sigue siendo una inspiración para la comunidad LGBTIQ+ y para todas las personas que luchan por un mundo más igualitario.",
        ilustracion: "/assets/cards/mariela_muñoz.jpg",
        ilustrador: "Ilustradora: La Tini",
        qr: "/assets/cards/QR/Mariela Muñoz.svg",
    }
]

const esPar = (numero) =>{
    return(numero % 2 === 0);
}

const createCardTemplate = (personaje) => {
    const {id, nombre, descripcion, shortcut, ilustracion, ilustrador, qr} = personaje
    if(esPar(id)){     
        return `        
        <!-- CARD DEFAULT  -->
        <div class="col" style="max-width: 1300px;">
          <div class="card bg-light border-secondary p-2 my-2" id=${shortcut}>
            <div class="row g-0">
              <div class="col-xl-3">
                <img src="${ilustracion}" class="card-img img-fluid mx-auto d-block" style="max-width: 400px;">
              </div>
              <div class="col-xl-9">
                <div class="card-body h-100">
                  <div class="card-info mb-3">
                    <h5 class="h5 card-title text-center fs-3 fw-bold d-xl-none d-sm-block mb-3">${nombre}</h5>
                    <h5 class="card-title text-start fs-3 fw-bold d-none d-xl-block mb-3">${nombre}</h5>
                    <p class="card-text lh-base text-break">${descripcion}</p>
                    <figcaption class="blockquote-footer"><cite>${ilustrador}</cite></figcaption> 
                  </div>
                  <button class="btn btn-primary w-50 text-wrap d-flex flex-column align-self-center align-items-center d-xl-none d-sm-block">Escaneá</button>
                  <button class="btn btn-primary w-50 text-wrap d-none d-xl-block">Escaneá</button>
                </div>
              </div>
            </div>
          </div>
        </div>`
    }else{
        return `<!-- CARD DEFAULT  -->
        <div class="col" style="max-width: 1300px;">
          <div class="card bg-light border-secondary p-2 my-2" id=${shortcut}>
            <div class="row g-0 reverse">
              <div class="col-xl-3">
                <img src="${ilustracion}" class="card-img img-fluid mx-auto d-block" style="max-width: 400px;">
              </div>
              <div class="col-xl-9">
                <div class="card-body h-100">
                  <div class="card-info mb-3">
                    <h5 class="h5 card-title text-center fs-3 fw-bold d-xl-none d-sm-block mb-3">${nombre}</h5>
                    <h5 class="card-title text-start fs-3 fw-bold d-none d-xl-block mb-3">${nombre}</h5>
                    <p class="card-text lh-base text-break">${descripcion}</p> 
                    <figcaption class="blockquote-footer"><cite>${ilustrador}</cite></figcaption>  
                  </div>
                  <button class="btn btn-primary w-50 text-wrap d-flex flex-column align-self-center align-items-center d-xl-none d-sm-block">Escaneá</button>
                  <button class="btn btn-primary w-50 text-wrap d-none d-xl-block">Escaneá</button>
                </div>
              </div>
            </div>
          </div>
        </div>`
    }

}

const renderPersonajes = (personajes) => {
    cardsContainer.innerHTML += personajes.map(createCardTemplate).join("");
};

function init() {
    //RENDERIZAR CARDS
    renderPersonajes(personajes);

    //EFECTO DE FLIPEAR CARD (fixear)
    cards.forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.toggle('.flipped');
    });
    
    //INICIAR CAROUSEL
    const myCarouselElement = document.querySelector('#myCarousel')
    const carousel = new bootstrap.Carousel(myCarouselElement, {
        interval: 2000,
        touch: false})
    });

}   
init();