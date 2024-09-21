<template>
    <div class="one">
        <DefaultTitle 
        title="Formação academica"
        subtitle="Preencha apenas sobre sua ultima formação"
        />
        <Input placeholder="Nome da instituição" @input="saveCollegeName"/>
        <Input placeholder="Curso" @input="saveCourse"/>
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
            college:{
                start: '',
                end: '',
                collegeName: '',
                course : '',
            }
        }
       },
       mounted(){
        this.validateFields()
        },
        methods:{
        handleUpdate(update){
            this.college.start = update.start
            this.college.end = update.end
            this.validateFields()
        },
        saveCollegeName(value){
            this.college.collegeName = value
            this.validateFields()
        },
        saveCourse(value){
            this.college.course = value
            this.validateFields()
        },
        validateFields() {
            const {course, collegeName, start, end, } = this.college;
                if (!course || !collegeName || !start || !end) {
                this.$emit("error", true);  
                }
                else {
                    this.$emit("error", false);
                    this.$emit("update", this.college);
                }
    }
    }
    
}
</script>
