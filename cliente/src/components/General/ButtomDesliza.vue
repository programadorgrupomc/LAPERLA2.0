<template>
    <div class="cont-row">
        Scroll
       <img src="../../assets/General/FlechaAbajo.svg" class="w-full h-full" alt="">
    </div>
</template>
<script>

</script>
<style scoped>
.cont-row{
    width: 3vw;
    margin: 4%;
    animation: myAnim 2s ease 0s infinite normal forwards;
}
@keyframes myAnim {
	0% {
		animation-timing-function: ease-in;
		opacity: 1;
		transform: translateY(-45px);
	}

	24% {
		opacity: 1;
	}

	40% {
		animation-timing-function: ease-in;
		transform: translateY(-24px);
	}

	65% {
		animation-timing-function: ease-in;
		transform: translateY(-12px);
	}

	82% {
		animation-timing-function: ease-in;
		transform: translateY(-6px);
	}

	93% {
		animation-timing-function: ease-in;
		transform: translateY(-4px);
	}

	25%,
	55%,
	75%,
	87% {
		animation-timing-function: ease-out;
		transform: translateY(0px);
	}

	100% {
		animation-timing-function: ease-out;
		opacity: 1;
		transform: translateY(0px);
	}
}
</style>