<template>
  <div class="register">
    <form >
      <component :is="currentStep" @update="updateData" @error="isValidate"/>
      <div class="btns">
        <Button ref="mainBtn" class="btn" @click.prevent="nextStep">Próxima etapa</Button>
        <Button class="btnClear" >Limpar</Button>
    </div>
    </form>
    <img class="icon" src="../assets/curriculo.svg"/>
  </div>
</template>

<script>

import StepOne from '@/components/steps/stepOne.vue';
import StepTwo from '@/components/steps/stepTwo.vue';
import StepThree from '@/components/steps/stepThree.vue';
import StepFour from '@/components/steps/stepFour.vue';
import StepFive from '@/components/steps/stepFive.vue';
import StepSix from '@/components/steps/stepSix.vue';

export default {
  name: 'Register',
  components: {
    StepOne,
    StepTwo,
    StepThree,
    StepFour,
    StepFive,
    StepSix
  },
  data(){
   return{
    currentStep : StepOne,
    curriculum: {
      name: '',
      profession: '',
      photo: '',
    },
    validate: false
   }
  },
  methods:{
    isValidate(error){
      this.validate = error
    },
    updateData(update){
      this.curriculum.name = update.name
      this.curriculum.profession = update.profession
      this.curriculum.photo = update.photo
    },
    nextStep(){
      if(this.validate){
        alert("Preencha todos os campos")
        return;
      }
      switch(this.currentStep){
        case StepOne:
          this.currentStep = StepTwo
          break;
        case StepTwo:
          this.currentStep = StepThree
          break;
        case StepThree:
          this.currentStep = StepFour
          break;
        case StepFour:
          this.currentStep = StepFive
          break;
        case StepFive:
          this.currentStep = StepSix
          this.$refs.mainBtn.textContent = "Cadastrar"
          break;
      }
    }
  }
}
</script>
<style>
@import url(../css/global.css);

.register{
  font-family: var(--font);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.icon{
  height: 600px;
}
.btns{
    margin-top: 40px;
}
.btn{
    background-color: var(--subtitle);
    width: 180px;
    height: 40px;
    border: none;
    border-radius: 20px;
    color: #FFF;
    font-size: 16px;
    font-weight: 600;
    margin-right: 40px;
}
.btnClear{
    background-color: var(--clear);
    width: 110px;
    height: 40px;
    border: none;
    border-radius: 20px;
    color: #FFF;
    font-size: 16px;
    font-weight: 600;
}
</style>
