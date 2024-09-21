<template>
    <div class="one">
        <DefaultTitle 
        title="Experiência Profissional"
        subtitle="Preencha apenas sobre seu ultimo trabalho"
        />
        <Input placeholder="Nome da empresa" @input="saveEnterprise"/>
        <Input placeholder="Área" @input="saveArea"/>
       <Date @update="handleUpdate"/>

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
    },
    data(){
        return {
            enterprise:{
                start: '',
                end: '',
                enterpriseName: '',
                area : '',
            }
        }
       },
       mounted(){
        this.validateFields()
        },
        methods:{
        handleUpdate(update){
            this.enterprise.start = update.start
            this.enterprise.end = update.end
            this.validateFields()
        },
        saveEnterprise(value){
            this.enterprise.enterpriseName = value
            this.validateFields()
        },
        saveArea(value){
            this.enterprise.area = value
            this.validateFields()
        },
        validateFields() {
            const {area, enterpriseName, start, end, } = this.enterprise;
                if (!area || !enterpriseName || !start || !end) {
                this.$emit("error", true);  
                }
                else {
                    this.$emit("error", false);
                    this.$emit("update", this.enterprise);
                }
    }
    }
    
}

</script>
