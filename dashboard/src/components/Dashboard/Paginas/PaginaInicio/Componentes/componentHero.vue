<template>
    <div class="cont-ch w-full h-full">
        <FileUploaderDef />
    </div>
</template>
<script>
import FileUploaderDef from '../../../General/FileUploaderDef.vue';
export default {
    methods: {
        playVideo(className) {
            const video = document.getElementsByClassName(className)[0];
            video.play();
        }
    },
    components: {
        FileUploaderDef,
    }
}
</script>
<style scoped>
.cont-ch {
    max-height: 100vh;
}

.video-es {
    width: 100%;
    height: 90vh;
    object-fit: fill;
    display: none;
}

.video-ta {
    width: 100%;
    height: 90vh;
    object-fit: fill;
    display: none;
}

.video-mo {
    width: 100%;
    height: 90vh;
    object-fit: fill;
}

@media (min-width: 768px) {
    .video-ta {
        display: block;
    }

    .video-mo {
        display: none;
    }
}

@media (min-width: 1024px) {
    .video-es {
        display: block;
    }

    .video-ta {
        display: none;
    }

    .video-mo {
        display: none;
    }
}
</style>
