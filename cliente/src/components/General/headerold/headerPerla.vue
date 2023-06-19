
<template>
    <div>
        <header-es class="escritorio" />
        <header-mo class="mobile" />
    </div>
</template>

<script>
import headerEs from './headerEs.vue';
import headerMo from './headerMo.vue';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
    name: 'headerPerla',
    components: {
        headerEs,
        headerMo
    },
    methods: {
        animarheadershow() {
            const showAnim = gsap.from('.escritorio', {
                yPercent: -150,
                paused: true,
                duration: 0.2
            }).progress(1);

            ScrollTrigger.create({
                start: "top top",
                end: 99999,
                onUpdate: (self) => {
                    self.direction === -1 ? showAnim.play() : showAnim.reverse()
                }
            });
        }
    },
    mounted() {
        this.animarheadershow();
    }
}
</script>
<style scoped>
.escritorio {
    display: none;
    box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.50);
    -webkit-box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.50);
    -moz-box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.50);
}

.mobile {
    box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.50);
    -webkit-box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.50);
    -moz-box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.50);
}

@media (min-width: 1024px) {
    .escritorio {
        display: flex;
    }

    .mobile {
        display: none;
    }
}
</style>