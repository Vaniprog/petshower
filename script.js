document.addEventListener("DOMContentLoaded", () => {

    const mascotas = {
        bruno: {
            nombre: "Bruno 🐶",
            desc: "Perro adulto grande, tranquilo y protector.",
            img: "images/perro/descarga (1).jpg",
            wpp: "https://wa.me/59899123456?text=Hola!%20Quiero%20adoptar%20a%20Bruno"
        },
        rocky: {
            nombre: "Rocky 🐶",
            desc: "Cachorro chico, juguetón y muy cariñoso.",
            img: "images/perro/descarga (2).jpg",
            wpp: "https://wa.me/59899123456?text=Hola!%20Quiero%20adoptar%20a%20Rocky"
        },
        max: {
            nombre: "Max 🐶",
            desc: "Cachorro mediano, activo y curioso.",
            img: "images/perro/descarga (3).jpg",
            wpp: "https://wa.me/59899123456?text=Hola!%20Quiero%20adoptar%20a%20Max"
        },
        toby: {
            nombre: "Toby 🐶",
            desc: "Adulto mediano, sociable y fiel.",
            img: "images/perro/images.jpg",
            wpp: "https://wa.me/59899123456?text=Hola!%20Quiero%20adoptar%20a%20Toby"
        },
        thor: {
            nombre: "Thor 🐶",
            desc: "Adulto grande, fuerte y muy noble.",
            img: "images/perro/descarga.jpg",
            wpp: "https://wa.me/59899123456?text=Hola!%20Quiero%20adoptar%20a%20Thor"
        },
        milo: {
            nombre: "Milo 🐱",
            desc: "Gato senior grande, tranquilo y muy mimoso.",
            img: "images/images.jpg",
            wpp: "https://wa.me/59899123456?text=Hola!%20Quiero%20adoptar%20a%20Milo"
        },
        luna: {
            nombre: "Luna 🐱",
            desc: "Gata adulta grande, dulce y compañera.",
            img: "images/descarga (6).jpg",
            wpp: "https://wa.me/59899123456?text=Hola!%20Quiero%20adoptar%20a%20Luna"
        },
        nala: {
            nombre: "Nala 🐱",
            desc: "Gata adulta grande, curiosa y amorosa.",
            img: "images/descarga (4).jpg",
            wpp: "https://wa.me/59899123456?text=Hola!%20Quiero%20adoptar%20a%20Nala"
        }
    };

    const overlay = document.getElementById("overlay");
    const img = document.getElementById("overlay-img");
    const nombre = document.getElementById("overlay-nombre");
    const desc = document.getElementById("overlay-desc");
    const wpp = document.getElementById("overlay-wpp");

    document.querySelectorAll(".mascota-card").forEach(card => {
        card.addEventListener("click", () => {
            const m = mascotas[card.dataset.id];
            if (!m) return;

            img.src = m.img;
            nombre.textContent = m.nombre;
            desc.textContent = m.desc;
            wpp.href = m.wpp;

            overlay.classList.add("activo");
            document.body.classList.add("overlay-abierto");
        });
    });

    document.querySelector(".cerrar").addEventListener("click", () => {
        overlay.classList.remove("activo");
        document.body.classList.remove("overlay-abierto");
    });

    overlay.addEventListener("click", e => {
        if (e.target === overlay) {
            overlay.classList.remove("activo");
            document.body.classList.remove("overlay-abierto");
        }
    });

});

  
});
const btnFiltros = document.querySelector(".btn-filtros");
const panelFiltros = document.querySelector(".panel-filtros");
const filtrosActivos = new Set();

btnFiltros.addEventListener("click", () => {
    panelFiltros.classList.toggle("activo");
});

document.querySelectorAll(".grupo-filtro button").forEach(btn => {
    btn.addEventListener("click", () => {
        const valor = btn.dataset.filtro;

        btn.classList.toggle("activo");

        if (filtrosActivos.has(valor)) {
            filtrosActivos.delete(valor);
        } else {
            filtrosActivos.add(valor);
        }

        filtrarMascotas();
    });
});

function filtrarMascotas() {
    document.querySelectorAll(".mascota-card").forEach(card => {
        const valores = [
            card.dataset.especie,
            card.dataset.edad,
            card.dataset.tamano
        ];

        const visible = [...filtrosActivos].every(f =>
            valores.includes(f)
        );

        card.style.display = filtrosActivos.size === 0 || visible
            ? "block"
            : "none";
    });

