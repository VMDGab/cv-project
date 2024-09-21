<template>
    <div class="one">
        <DefaultTitle 
        title="Suas habilidades"
        />
       <Chk @update="handleUpdate"/>

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
    },
    data(){
        return{
            skills: []
        }
    },
    mounted(){
        this.validateFields()
    },
    methods:{
        handleUpdate(update){
            this.skills = [...update];
            this.validateFields();
        },
        validateFields() {
            
            if (this.skills.length <= 0) {
             this.$emit("error", true);  // Certifique-se de que o nome do evento está correto
            }
            else {
             this.$emit("error", false);
             this.$emit("update", this.skills);
            }
        }
    }
}
</script>
