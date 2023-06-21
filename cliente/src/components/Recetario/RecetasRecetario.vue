<template>
    <div class="recetario bg-FondoPerla">
        <div class="recetario-titulo">
            <p class="titulo">RECETARIO</p>
        </div>
        <div class="recetario-recetas ">
            <div class="recetas columns-2">
                <div v-for="receta in recetas" :key="receta.id" class="receta">
                    <img :src="receta.imagen" class="w-full h-full object-cover" alt="">
                    <!-- <p>{{ receta.nombre }}</p> -->
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import receta1Image from "../../assets/Recetario/receta1.jpg";

export default {
    data() {
        return {
            recetas: [
                {
                    id: 1,
                    nombre: "Receta 1",
                    imagen: receta1Image,
                    // Otros detalles de la receta
                },
                {
                    id: 1,
                    nombre: "Receta 1",
                    imagen: receta1Image,
                    // Otros detalles de la receta
                },
                {
                    id: 1,
                    nombre: "Receta 1",
                    imagen: receta1Image,
                    // Otros detalles de la receta
                },
                {
                    id: 1,
                    nombre: "Receta 1",
                    imagen: receta1Image,
                    // Otros detalles de la receta
                },
                {
                    id: 1,
                    nombre: "Receta 1",
                    imagen: receta1Image,
                    // Otros detalles de la receta
                },
                {
                    id: 1,
                    nombre: "Receta 1",
                    imagen: receta1Image,
                    // Otros detalles de la receta
                },
                {
                    id: 1,
                    nombre: "Receta 1",
                    imagen: receta1Image,
                    // Otros detalles de la receta
                },
                {
                    id: 1,
                    nombre: "Receta 1",
                    imagen: receta1Image,
                    // Otros detalles de la receta
                },
                // Agrega más objetos de recetas si es necesario
            ]
        };
    }
}
</script>
  
<style scoped>
.recetario {
    height: 90vh;
    width: 100%;
}

.recetario-titulo {
    border: solid;
    padding: 2%;
}

.titulo {
    font-family: "TestKarbonSemiBold";
    font-size: 10vw;
    color: #471D7C;
}

.recetario-recetas {
    height: auto;
    border: solid white;
    display: flex;
}

.recetas {
    padding: 2%;
    gap: 3%;
}

.receta {
    border: #cfb9ea solid;
    height: 20%;
    margin-bottom: 6%;
}

@media (min-width: 1024px) {
    .recetario {
        height: auto;
        width: 100%;
    }

    .recetario-titulo {
        border: solid;
        padding: 0.1%;
        padding-left: 5%;
        height: 20%;
    }

    .titulo {
        font-family: "TestKarbonSemiBold";
        font-size: 6vw;
        color: #471D7C;
    }

    .recetario-recetas {
        height: auto;
        margin: auto;
        width: 80%;
        border: solid white;
        display: flex;
    }

    .recetas {
        padding: 2%;
        gap: 3%;
    }

    .receta {
        border: #cfb9ea solid;
        height: 20%;
        margin-bottom: 6%;
    }
}
</style>
  