<template>
    <div class="six">
        <DefaultTitle 
        title="Sobre você"
        subtitle="Fale um pouco sobre sua experiência profissional"
        />
        <span class="subtitle">Descrição do perfil do profissional</span>
        <textarea class="textArea"/>

        <span class="subtitle">O que fez na última empresa?</span>
        <textarea class="textArea"/>
       <Date/>

    </div>
</template>
<script>
import DefaultTitle from '../defaultTitle.vue';
export default{
    name: "StepThree",
    components:{
        DefaultTitle,
       }
}
</script>

<style>
.six{
    display: flex;
    flex-direction: column;
}

.textArea{
    margin-bottom: 20px;
    height: 100px;
}
</style>
