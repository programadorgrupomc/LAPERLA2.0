<template>
    <div class="w-full h-full relative">
        <div v-if="previewUrl" class="absolute z-40 lg:z-50 w-full cont-btn">
            <button @click="nuevoClick">Nuevo</button>
            <button v-if="!showEditPopup" @click="showEditPopup = true">Editar</button>
            <button v-if="showEditPopup" @click="showEditPopup = false">Cancelar</button>
        </div>
        <div class="relative h-full z-30 w-full lg:h-full flex justify-center items-center" v-if="!previewUrl">
            <img class="absolute" src="../../../assets/Dashboard/General/IconoLoadVideo.svg" alt="">
            <input type="file" @change="handleFileChange" class="bg-black h-1/4 w-1/4 opacity-0" />
        </div>
        <div v-if="previewUrl" class="h-full w-full">
            <img :src="previewUrl" v-if="isImage" class="w-full h-full object-cover" />
            <video :src="previewUrl" v-else-if="isVideo" class="h-full w-full" controls></video>
            <iframe :src="previewUrl" v-else-if="isPDF" class="h-screen lg:h-full w-full"></iframe>
            <div v-else>Archivo no compatible</div>
        </div>
        <div class="popup absolute bg-amber-300" v-if="showEditPopup">
            edicion de imagen
        </div>
    </div>
</template>
<script>
// import FileUploader from '../../../General/FileUploader.vue'
export default {
    data() {
        return {
            previewUrl: '',
            isImage: false,
            isVideo: false,
            isPDF: false,
            fileLoaded: false,
            showEditPopup: false,
        };
    },
    components: {
        // FileUploader,
    },
    methods: {
        handleFileChange(event) {
            const file = event.target.files[0];

            if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                    this.previewUrl = reader.result;

                    if (file.type.includes('image')) {
                        this.isImage = true;
                        this.isVideo = false;
                        this.isPDF = false;
                    } else if (file.type.includes('video')) {
                        this.isImage = false;
                        this.isVideo = true;
                        this.isPDF = false;
                    } else if (file.type.includes('pdf')) {
                        this.isImage = false;
                        this.isVideo = false;
                        this.isPDF = true;
                    } else {
                        this.isImage = false;
                        this.isVideo = false;
                        this.isPDF = false;
                    }
                };

                reader.readAsDataURL(file);
                this.fileLoaded = true;
            } else {
                this.previewUrl = '';
                this.isImage = false;
                this.isVideo = false;
                this.isPDF = false;
                this.fileLoaded = false;
            }
        },
        nuevoClick() {
            // Restablecer o reiniciar las propiedades relacionadas con la imagen aquí
            this.previewUrl = '';
            this.isImage = false;
            this.isVideo = false;
            this.isPDF = false;
            this.fileLoaded = false;
        },
    },
};
</script>
  
<style scoped>
.cont-btn {
    height: auto;

    bottom: 0%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 2%;
}

.cont-btn button {
    border: white solid;
    border-radius: 5vh;
    margin: 0.5%;
    padding: 0.5%;
    padding-left: 1.5%;
    padding-right: 1.5%;
    color: white;
    background-color: #FF7439;
}

.popup {
    height: 100%;
    width: 100%;
    top: 0%;
}
</style>