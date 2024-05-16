$(document).ready(function(){
    let lista=[
        {
            img:"/imagenes/one.jpg",
            nombre:"Monkey D luffy",
            desc:"kaizoku ou ni ore es naru"
        },
        {
            img:"/imagenes/one.jpg",
            nombre:"Roronoa Zoro",
            desc:"Futuro mejor espadachin, bebedor, demonio de un solo ojo"
        },
        {
            img:"/imagenes/one.jpg",
            nombre:"Vismoke Sanji",
            desc:"El hombre de tus sueños, sabe cocinar, alto, caballeresco con las mujeres, Okama"
        },
        {
            img:"/imagenes/one.jpg",
            nombre:"Nami",
            desc:"Pertenece al trio cobarde, gata ladrona, futura gran cartógrafa"
        },
        {
            img:"/imagenes/one.jpg",
            nombre:"Usop",
            desc:"Pertenece al trio cobarde, carpintero, tirador, cocinero, todo en uno"
        },
        {
            img:"/imagenes/one.jpg",
            nombre:"Choper",
            desc:"Comida de emergencia"
        },
        {
            img:"/imagenes/one.jpg",
            nombre:"Choper",
            desc:"Comida de emergencia"
        }
    ]


    for (const persona of lista) {

        let nuevaCarta =
            `<div class="targeta">
                <div class="izquierda">
                    <img src=${persona.img} />
                </div>
                <div class="derecha">
                    <h2 class="card-title">${persona.nombre}</h2>
                    <p>${persona.desc}</p>
                </div>
            </div>`;
        
        $(".wrap").append(nuevaCarta);
    }

    $(".botonInput").click(function () {
        let nombreUsuario = $(".input[type='text']").val().toLowerCase();
        //Limpiar el contenedor de cartas antes de agregar nuevas cartas
        $(".wrap").empty();

        for (const persona of lista) {
            if (persona.nombre.toLowerCase() === nombreUsuario) {
                let nuevaCarta = `
                <div class="targeta">
                    <div class="izquierda">
                        <img src=${persona.img} />
                    </div>
                    <div class="derecha">
                        <h2 class="card-title">${persona.nombre}</h2>
                        <p>${persona.desc}</p>
                    </div>
                </div>`
                ;
                
                $(".wrap").append(nuevaCarta);
            }
        }
    });
});