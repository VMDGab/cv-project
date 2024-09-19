<template>
    <div class="one">
        <DefaultTitle 
        title="Informações de contato"
        />
        <Input placeholder="Telefone"/>
        <Input placeholder="Email"/>
        <Input placeholder="Linkedin"/>
        <Input placeholder="Cep"/>

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
 