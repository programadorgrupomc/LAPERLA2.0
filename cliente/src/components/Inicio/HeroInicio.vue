<template>
    <div>
        <video muted autoplay loop preload="auto" class="video-es">
            <source src="../../assets/Inicio/ReelEscritorio.mp4" type="video/mp4">
        </video>
        <video muted autoplay loop preload="auto" class="video-ta">
            <source src="../../assets/Inicio/ReelTablet.mp4" type="video/mp4">
        </video>
        <video muted autoplay loop preload="auto" class="video-mo">
            <source src="../../assets/Inicio/ReelMobile.mp4" type="video/mp4">
        </video>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.video-es {
    width: 100%;
    height: 90vh;
    object-fit: none;
    display: none;
}

.video-ta {
    width: 100%;
    height: 90vh;
    object-fit: none;
    display: none;
}

.video-mo {
    width: 100%;
    height: 90vh;
    object-fit: none;
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