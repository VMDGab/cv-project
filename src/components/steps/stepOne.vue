<template>
    <div class="one">
        <DefaultTitle 
        title="Formulário de cadastro"
        subtitle="Preencha suas informações e crie seu currículo digital."
        />
        <Input placeholder="Nome" @input="saveName"/>
        <Input placeholder="Profissão" @value="saveProfession"/>
        <Input ref="fileInput" class="file" placeholder="Foto" type="file" @url="previewImage"/>
        <img class="preview" :src="imagePreview" ref="preview"/>
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
    },
    data() {
        return {
            imagePreview: null,
            curriculum: []
        };
    },
    methods:{
       previewImage(url){
        this.imagePreview = url
       },
       saveName(value){
        this.curriculum.push({ name: value})
       },
       saveProfession(value) {
        this.curriculum.push({ profession: value})
       }
       
    }
}
</script>

<style>
.preview{
    height:100px;
}
</style>
