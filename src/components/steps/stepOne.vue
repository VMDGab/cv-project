<template>
    <div class="one">
        <DefaultTitle 
        title="Formulário de cadastro"
        subtitle="Preencha suas informações e crie seu currículo digital."
        />
        <Input placeholder="Nome"/>
        <Input placeholder="Profissão"/>
        <Input class="file" placeholder="Foto" type="file"/>
        <Radio/>

    </div>
</template>
<script>
import DefaultTitle from '../defaultTitle.vue';
import Input from '../defaultInput.vue';
import Radio from '../radioInput.vue';

export default{
    name: "StepOne",
    components:{
        DefaultTitle,
        Input,
        Radio,
    }
}
</script>
