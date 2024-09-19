<template>
    <div class="one">
        <DefaultTitle 
        title="Formação academica"
        subtitle="Preencha apenas sobre sua ultima formação"
        />
        <Input placeholder="Nome da instituição"/>
        <Input placeholder="Curso"/>
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
