<template>
    <div class="one">
        <DefaultTitle 
        title="Experiência Profissional"
        subtitle="Preencha apenas sobre seu ultimo trabalho"
        />
        <Input placeholder="Nome da empresa"/>
        <Input placeholder="Área"/>
       <Date/>

    </div>
</template>
<script>
import DefaultTitle from '../defaultTitle.vue';
import Input from '../defaultInput.vue';
import Date from '../dateInput.vue';

export default{
    name: "StepThree",
    components:{
        DefaultTitle,
        Date,
        Input,
    }
}
</script>
