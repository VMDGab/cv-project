<template>
    <div class="one">
        <DefaultTitle 
        title="Formulário de cadastro"
        subtitle="Preencha suas informações e crie seu currículo digital."
        />
        <Input placeholder="Nome" @input="saveName"/>
        <Input placeholder="Profissão" @input="saveProfession"/>
        <Input ref="fileInput" class="file" placeholder="Foto" type="file" @url="previewImage"/>
        <img class="preview" :src="imagePreview" ref="preview"/>
        <Radio @gender="handleGender" />

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
    },
    data() {
        return {
            imagePreview: null,
            curriculum: {
            name: '',
            profession: '',
            photo: '',
            gender: ''
        }
        };
    },
    mounted(){
        this.validateFields()
    },
    methods:{
        handleGender(gender){
            this.curriculum.gender = gender
        },
       previewImage(url){
        this.imagePreview = url
        this.curriculum.photo = url
        this.validateFields()
        },
       saveName(value){
        this.curriculum.name = value
        this.validateFields()
       },
       saveProfession(value) {
        this.curriculum.profession = value
        this.validateFields()
    },
    validateFields() {
      const { name, profession, photo } = this.curriculum;
      if (!name || !profession || !photo) {
        this.$emit("error", true);  // Certifique-se de que o nome do evento está correto
      }
      else {
        this.$emit("error", false);
        this.$emit("update", this.curriculum);
      }
    }
       
    }
}
</script>

<style>
.preview{
    height:100px;
}
</style>
