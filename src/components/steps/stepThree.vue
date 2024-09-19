<template>
    <div class="one">
        <DefaultTitle 
        title="Suas habilidades"
        />
       <Chk/>

    </div>
</template>
<script>
import DefaultTitle from '../defaultTitle.vue';
import Chk from '../checkboxInput.vue';

export default{
    name: "StepThree",
    components:{
        DefaultTitle,
        Chk,
    }
}
</script>
