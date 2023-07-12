<script>
export default {
    data() {
        return {
            images: '',
            viewimagenes:'',
            viewdocs:'',
            viewvideos:''
        }
    },
    methods: {
        fetchImages() {
            const images = '@/uploads/home'
            for (let i = 0; i < images.length; i++) {
             //lectura de imagenes de una carpeta 
             
            }
        }
    }
}

</script>
<template>
    
    <!-- imagenes -->
    <div v-if="viewimagenes" class="cont-gallery flex justify-center">
        <div class="gallery grid grid-cols-2 lg:grid-cols-5 gap-10 mx-auto">
            <div v-for="i in 7" class="item-gallery w-full rounded">
                <img src="@/assets/AssetsRecetario/receta1.jpg" alt="image">
            </div>
        </div>
    </div>
    <!-- documentos -->
    <div v-if="viewdocs" class="cont-gallery flex justify-center">
        <div class="gallery grid grid-cols-2 lg:grid-cols-5 gap-10 mx-auto">
            <div v-for="i in 5" class="item-gallery w-full rounded">
                <img src="@/assets/AssetsRecetario/receta1.jpg" alt="image">
            </div>
        </div>
    </div>
    <!-- videos -->
    <div v-if="viewvideos" class="cont-gallery flex justify-center">
        <div class="gallery grid grid-cols-2 lg:grid-cols-5 gap-10 mx-auto">
            <div v-for="i in 9" class="item-gallery w-full rounded">
                <img src="@/assets/AssetsRecetario/receta1.jpg" alt="image">
            </div>
        </div>
    </div>
</template>
<style scoped>
.cont-gallery {
    width: 100%;
}

.gallery {
    width: 90%;
}

.item-gallery img {
    border-radius: 4vw;
}

.item-gallery:hover {
    filter: brightness(85%);
}

@media (min-width: 1024px) {
    .cont-gallery {
        width: 100%;
    }

    .gallery {
        width: 90%;
    }

    .item-gallery:hover {
        filter: brightness(85%);
    }

    .item-gallery img {
        border-radius: 0.5vw;
    }
}
</style>