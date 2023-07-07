<script >

</script>
<template>
    <div class="contenedorformEs bg-FondoPerla">
        <p class="titleform text-AzulPerla font-TestKarbonSemiBold">Datos Personales</p>
        <form action="" class="flex flex-col w-full">
            <div class="contenedorcolumnas columns-2">
                <div class="flex flex-col break-inside-avoid">
                    <div class="inpsel">
                        <label for="">Documento de indentidad</label>
                        <select class="perlaselect" name="docid" id="docid">
                            <option value="dni">DNI</option>
                            <option value="ce">CARNET DE EXTRAJERIA</option>
                        </select>
                    </div>
                    <input class="perlainput inptdt" type="text" placeholder="Nombre">
                    <div class="inpsel">
                        <label for="">Fecha de nacimiento</label>
                        <div class="flex w-full justify-between">
                            <select class="perlaselect w-full" name="day" id="day">
                                <option v-for="i in 31" :value="i">{{ i }}</option>
                            </select>
                            <select class="perlaselect w-full" name="month" id="month">
                                <option value="1">Enero</option>
                        <option value="2">Febrero</option>
                        <option value="3">Marzo</option>
                        <option value="4">Abril</option>
                        <option value="5">Mayo</option>
                        <option value="6">Junio</option>
                        <option value="7">Julio</option>
                        <option value="8">Agosto</option>
                        <option value="9">Septiembre</option>
                        <option value="10">Octubre</option>
                        <option value="11">Noviembre</option>
                        <option value="12">Diciembre</option>
                            </select>
                            <select class="perlaselect w-full" name="year" id="year">
                                <option v-for="i in 80" value="2000">{{ i + 1940 }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="inpsel">
                        <label for="">¿De dónde eres?</label>
                        <select class="perlaselect" name="lugar" id="lugar">
                            <option value="">Selccionar</option>
                            <option value="trujillo">Trujillo</option>
                            <option value="trujillo">Otro</option>
                        </select>
                    </div>
                    <div class="inpsel">
                        <label for="">¿Has trabajado con nosotros anteriormente?</label>
                        <select class="perlaselect" name="workback" id="workback">
                            <option value="">Selccionar</option>
                            <option value="1">SI</option>
                            <option value="0">NO</option>
                        </select>
                    </div>
                </div>
                <div class="flex flex-col break-inside-avoid columna2">
                    <input class="perlainput inptdt" type="text" placeholder="Número de documento de indentidad">
                    <input class="perlainput inptdt" type="text" placeholder="Apellidos">
                    <div class="inpsel">
                        <label for="">Celular</label>
                        <div class="flex w-full">
                            <select class="perlaselect w-2/5" name="codcountry" id="codcountry">
                                <option value="pe">
                                    <p>🇵🇪</p> +51
                                </option>
                            </select>
                            <input class="perlainput pl-4 w-full" type="text">
                        </div>
                    </div>
                    <div class="inpsel">
                        <label for="">Dosis de vacunación COVID-19</label>
                        <select class="perlaselect" name="covid" id="covid">
                            <option value="">Selccionar</option>
                            <option value="1">1</option>
                            <option value="1">2</option>
                            <option value="1">3</option>
                            <option value="1">4</option>
                            <option value="1">5</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="flex termsandcon items-center justify-center">
                <input class="ckboxperla" type="checkbox">
                <p class="texto">He leído y acepto los Términos y Condiciones y las Políticas de privacidad</p>
            </div>
            <div class="descicionbtn flex items-center justify-around">
                <button class="btnesc font-TestKarbonMedium" type="reset">CANCELAR</button>
                <button class="btnsub font-TestKarbonMedium" type="submit">ENVIAR POSTULACION</button>
            </div>
        </form>
    </div>
</template>
<style scoped>

.perlainput:hover{
    transition: all;
    background-color: #6e5b4423;
}
.perlaselect:hover {
    background-color: #6e5b4446;
}

.contenedorcolumnas {

    gap: 13vw;
}

.columna2 {
    padding-top: 8%;
}

.contenedorformEs {
    padding: 4%;
    padding-left: 5%;
    padding-right: 5%;
}

.titleform {
    font-size: 4vw;
    line-height: normal;
}

.inpsel {
    display: flex;
    flex-direction: column;
    padding-top: 4%;
    padding-bottom: 4%;
    width: 100%;
}

.inptdt {
    margin-bottom: 6%;
    margin-top: 6%;
}

.termsandcon {
    padding-top: 3%;
    padding-left: 2%;
    padding-right: 2%;
    padding-bottom: 3%;
}

.termsandcon p {
    padding-left: 4%;
}

.descicionbtn {
    padding-top: 5%;
    padding-bottom: 5%;
}

.btnsub {
    font-size: 1.5vw;
    line-height: normal;
    background-color: #E97B4D;
    color: white;
    width: 30%;
    border-radius: 1.5vw;
    padding-top: 0.5%;
    padding-bottom: 0.5%;
}

.btnesc {
    margin-top: 2%;
    color: #471D7C;
    font-size: 1.2vw;
}

label,
.texto {
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
    background-color: #FCF5EB;
    border-bottom: solid #6E5B44 0.05vw;
}
</style>