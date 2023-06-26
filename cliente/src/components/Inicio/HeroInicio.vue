<template>
    <div>
        <video muted loop preload="auto" class="video-es" @loadedmetadata="playVideo('video-es')" playsinline>
            <source src="../../assets/Inicio/ReelEscritorio.mp4" type="video/mp4">
        </video>
        <video muted loop preload="auto" class="video-ta" @loadedmetadata="playVideo('video-ta')" playsinline>
            <source src="../../assets/Inicio/ReelTablet.mp4" type="video/mp4">
        </video>
        <video muted loop preload="auto" class="video-mo" @loadedmetadata="playVideo('video-mo')" playsinline>
            <source src="../../assets/Inicio/ReelMobile.mp4" type="video/mp4">
        </video>
    </div>
</template>
<script>
export default {
    methods: {
        playVideo(className) {
            const video = document.getElementsByClassName(className)[0];
            video.play();
        }
    }
}
</script>
<style scoped>
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
