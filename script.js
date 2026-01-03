document.addEventListener("DOMContentLoaded", () => {

    const mascotas = {
        luna: {
            nombre: "Luna 🐶",
            desc: "Tranquila, cariñosa y muy compañera. Ideal para familia.",
            img: "https://images.unsplash.com/photo-1558788353-f76d92427f16",
            wpp: "https://wa.me/59899123456?text=Hola!%20Quiero%20adoptar%20a%20Luna"
        },
        rocky: {
            nombre: "Rocky 🐕",
            desc: "Activo, juguetón y protector.",
            img: "https://images.unsplash.com/photo-1601758173925-4c8f6b5b8d1a",
            wpp: "https://wa.me/59899123456?text=Hola!%20Quiero%20adoptar%20a%20Rocky"
        },
        milo: {
            nombre: "Milo 🐱",
            desc: "Dulce y curioso, ideal para departamento.",
            img: "https://images.unsplash.com/photo-1595433562696-19b5f35c68de",
            wpp: "https://wa.me/59899123456?text=Hola!%20Quiero%20adoptar%20a%20Milo"
        },
        nala: {
            nombre: "Nala 🐱",
            desc: "Independiente pero muy amorosa.",
            img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
            wpp: "https://wa.me/59899123456?text=Hola!%20Quiero%20adoptar%20a%20Nala"
        },
        toby: {
            nombre: "Toby 🐶",
            desc: "Sociable, alegre y se lleva bien con otros animales.",
            img: "https://images.unsplash.com/photo-1583511655936-1c8a6f36b4e8",
            wpp: "https://wa.me/59899123456?text=Hola!%20Quiero%20adoptar%20a%20Toby"
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

});
overlay.addEventListener("click", e => {
    if (e.target === overlay) {
        overlay.classList.remove("activo");
        document.body.classList.remove("overlay-abierto");
    }
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
}
