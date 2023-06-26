<script >
export default{

}
</script>
<template>
    <div class="contenedorformMo bg-FondoPerla">
        <p class="titleform text-AzulPerla font-TestKarbonSemiBold">Currículum</p>
        <form action="" class="contenedorform flex flex-col w-full">
            <div class="inpsel">
                <label for="">Adjuntar archivo desde</label>
                <div class="flex w-full justify-between">
                    <button type="button" class="perlaselect w-full flex justify-center lg:items-center"
                        onclick="document.getElementById('fileInput').click();">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-house-fill" viewBox="0 0 16 16">
                            <path
                                d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                            <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
                        </svg>&nbsp;Mis Archivos
                    </button>
                    <input type="file" id="fileInput" style="display:none;" />
                    <button class="perlaselect w-full flex justify-center lg:items-center"><svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-dropbox" viewBox="0 0 16 16">
                            <path
                                d="M8.01 4.555 4.005 7.11 8.01 9.665 4.005 12.22 0 9.651l4.005-2.555L0 4.555 4.005 2 8.01 4.555Zm-4.026 8.487 4.006-2.555 4.005 2.555-4.005 2.555-4.006-2.555Zm4.026-3.39 4.005-2.556L8.01 4.555 11.995 2 16 4.555 11.995 7.11 16 9.665l-4.005 2.555L8.01 9.651Z" />
                        </svg>&nbsp;Dropbox</button>
                    <button class="perlaselect w-full">&nbsp;Drive</button>
                </div>
                <p class="indicadorf4 font-KarbonRegular text-AzulPerla">Tamaño maximo 15MB. Formato: .pdf o .doc o .docx
                </p>
                <!-- arrastrar -->
                <div>
                    <div class="flex items-center  justify-center w-full">
                        <label for="dropzone-file"
                            class="bg-FondoPerla flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12">
                                    </path>
                                </svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click
                                        to upload</span> or drag and drop</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)
                                </p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" />
                        </label>
                    </div>

                </div>
            </div>
        </form>
        <p class="titleform text-AzulPerla font-KarbonRegular">Expectativas Personales</p>
        <label for="">Añadir Mensaje</label>
        <textarea name="" id="mesaje" cols="30" rows="10" class="w-full txtarea"></textarea>
    </div>
</template>
<style scoped>
.perlainput:hover{
    transition: all;
    background-color: #6e5b4423;
}
.indicadorf4 {
    padding-top: 1%;
    font-size: 4vw;
}

.contenedorbtnanadir {
    margin-top: 2%;
}

.contenedorform {
    margin-top: 2%;
    padding: 3%;
    border-radius: 1.5vw;
}

.anadir {
    font-size: 4.5vw;
    line-height: normal;
}

.contenedorformMo {
    padding: 4%;
}

.titleform {
    font-size: 9vw;
    line-height: normal;
}

.inpsel {
    display: flex;
    flex-direction: column;
    padding-top: 5%;
    padding-bottom: 5%;
    width: 100%;
}

.perlaselect {
    font-size: 3.8vw;
    line-height: normal;
    color: #471D7C;
    font-family: "KarbonRegular";
    appearance: none;
    text-align: center;
    margin-top: 1%;
    padding: 1%;
    background-color: #F5EDE1;
    border: solid #6E5B44 0.1vw;
}
.perlaselect:hover{
    background-color: #6e5b4446;
}

label {
    font-family: "KarbonRegular";
    font-size: 4.5vw;
    line-height: normal;
    color: #471D7C;
    -webkit-text-stroke: 0.1vw #471D7C;
}

::placeholder {
    font-family: "KarbonRegular";
    font-size: 4.5vw;
    line-height: normal;
    color: #471D7C;
    -webkit-text-stroke: 0.1vw #471D7C;
}

.perlainput {
    font-size: 3.8vw;
    line-height: normal;
    color: #471D7C;
    font-family: "KarbonRegular";
    margin-top: 1%;
    padding-top: 1%;
    padding-bottom: 1%;
    background-color: #f5ede1;
    border-bottom: solid #6E5B44 0.12vw;
}

.txtarea {
    font-size: 3.8vw;
    line-height: normal;
    color: #471D7C;
    font-family: "KarbonRegular";
    background-color: #f5ede1;
    border: solid #6E5B44 0.12vw;
    padding: 1%;
}

.inptdt {
    margin-bottom: 5%;
    margin-top: 5%;
}

@media (min-width: 1024px) {
    .txtarea {
        font-size: 1.4vw;
        line-height: normal;
        color: #471D7C;
        font-family: "KarbonRegular";
        background-color: #f5ede1;
        border: solid #6E5B44 0.05vw;
        padding: 1%;

    }

    .indicadorf4 {
        padding-top: 1%;
        font-size: 1.2vw;
    }

    .contenedorcolumnas {
        padding: 3%;
        gap: 13vw;
    }

    .titleform {
        font-size: 4vw;
        line-height: normal;
    }

    .contenedorformMo {
        padding: 4%;
        padding-top: 1%;
        padding-left: 15%;
        padding-right: 15%;
    }

    label {
        font-family: "KarbonRegular";
        font-size: 1.4vw;
        line-height: normal;
        color: #471D7C;
        -webkit-text-stroke: 0.05vw #471D7C;
    }

    ::placeholder {
        font-family: "KarbonRegular";
        font-size: 1.4vw;
        line-height: normal;
        color: #471D7C;
        -webkit-text-stroke: 0.05vw #471D7C;
    }

    .perlaselect {
        font-size: 1.3vw;
        line-height: normal;
        color: #471D7C;
        font-family: "KarbonRegular";
        appearance: none;
        text-align: center;
        margin-top: 1%;
        padding: 0.5%;
        background-color: #F5EDE1;
        border: solid #6E5B44 0.01vw;
    }

    .perlainput {
        font-size: 1.3vw;
        line-height: normal;
        color: #471D7C;
        font-family: "KarbonRegular";
        margin-top: 1%;
        padding-top: 0.5%;
        padding-bottom: 0.5%;
        border-bottom: solid #6E5B44 0.05vw;
    }

    .anadir {
        font-size: 1.4vw;
        line-height: normal;
    }
}
</style>