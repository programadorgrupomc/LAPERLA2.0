<template>
    <div class="relative bg-red-300 h-2/4 w-2/4">
        <div class="carousel ">
            <div class="slide relative" v-for="(image, index) in images" :key="index">
                <img class="object-cover w-full h-full" :src="image.url" :alt="image.name" />
                <button class="absolute btn-deletefile">Eliminar</button>
            </div>
        </div>
        <div class="absolute cont-addfile">
            <input multiple type="file" @change="handleFileUpload" />
        </div>

    </div>
</template>
  
<script>
export default {
    data() {
        return {
            images: []
        };
    },
    methods: {
        handleFileUpload(event) {
            const files = event.target.files;
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const reader = new FileReader();

                reader.onload = (e) => {
                    this.images.push({
                        name: file.name,
                        url: e.target.result
                    });
                };

                reader.readAsDataURL(file);
            }
        }
    }
};
</script>
  
<style scoped>
.carousel {
    height: 100%;
    width: 100%;
    display: flex;
    overflow-x: scroll;
}

.slide {
    flex-shrink: 0;
    width: 100%;
}

.cont-addfile {
    top: 2%;
    right: 0%;
}
.btn-deletefile{
    top: 2%;
    left: 1%;
    background-color: bisque;
    padding: 1%;
    border-radius: 1vw;
}
</style>
  