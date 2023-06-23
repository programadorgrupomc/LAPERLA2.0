<template>
    <div class="recetario bg-FondoPerla">
        <div class="recetario-titulo">
            <p class="titulo">RECETARIO</p>
        </div>
        <div class="recetario-recetas ">
            <div class="recetas columns-2">
                <div v-for="receta in recetas" :key="receta.id" class="receta ">
                    <router-link :to="`/receta/desc/${receta.id}`">
                        <div class="w-full h-full relative flex justify-center items-center">
                            <img :src="receta.imagen" class="w-full h-full object-cover" alt="">
                            <p class="receta-titulo absolute text-white">{{ receta.nombre }}</p>
                        </div>
                    </router-link>
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
                    id: 2,
                    nombre: "Receta 2",
                    imagen: receta1Image,
                    // Otros detalles de la receta
                },
                {
                    id: 3,
                    nombre: "Receta 3",
                    imagen: receta1Image,
                    // Otros detalles de la receta
                },
                {
                    id: 4,
                    nombre: "Receta 4",
                    imagen: receta1Image,
                    // Otros detalles de la receta
                },
                // {
                //     id: 5,
                //     nombre: "Receta 5",
                //     imagen: receta1Image,
                //     // Otros detalles de la receta
                // },
                // {
                //     id: 6,
                //     nombre: "Receta 6",
                //     imagen: receta1Image,
                //     // Otros detalles de la receta
                // },
                // {
                //     id: 7,
                //     nombre: "Receta 7",
                //     imagen: receta1Image,
                //     // Otros detalles de la receta
                // },
                // {
                //     id: 8,
                //     nombre: "Receta 8",
                //     imagen: receta1Image,
                //     // Otros detalles de la receta
                // },
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
    /* border: solid; */
    padding: 2%;
}

.titulo {
    font-family: "TestKarbonSemiBold";
    font-size: 10vw;
    color: #471D7C;
}

.recetario-recetas {
    height: auto;
    /* border: solid white; */
    display: flex;
}

.recetas {
    padding: 2%;
    gap: 3%;
}

.receta {
    /* border: #cfb9ea solid; */
    height: 40%;
    margin-bottom: 6%;
}

@media (min-width: 1024px) {
    .recetario {
        height: auto;
        width: 100%;
    }

    .recetario-titulo {
        /* border: solid; */
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
        /* border: solid white; */
        display: flex;
        max-width: 3000px;
    }

    .recetas {
        padding: 2%;
        gap: 3%;
    }

    .receta {
        /* border: #cfb9ea solid; */
        height: 40%;
        min-height: 39%;
        margin-bottom: 6%;
    }

    .receta-titulo {
        font-size: 3vw;
    }
}
</style>
  