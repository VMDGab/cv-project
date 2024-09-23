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
    <dialog ref="error" class="modal">
      <div class="error">
        <span class="subtitle">Preencha todos os campos</span>
        <button class="modalBtn" @click="close">Ok</button>
      </div>
    </dialog>
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
      city: '',
      state: '',
      street:'',
      number: '',
      linkedin: '',
      email: '',
      phoneNumber: '',
      skills: [],
      collegeStart: '',
      collegeEnd: '',
      collegeName: '',
      course : '',
      enterpriseStart: '',
      enterpriseEnd: '',
      enterpriseName: '',
      area : '',
      aboutProfile: "",
      aboutLastJob: ""
    },
    noValidate: false
   }
  },
  methods:{
    close(){
      this.$refs.error.close()
    },
    isValidate(error){
      this.noValidate = error
    },
    updateData(update){
      switch(this.currentStep){
        case StepOne:
          this.curriculum.name = update.name
          this.curriculum.profession = update.profession
          this.curriculum.photo = update.photo
          break;
        case StepTwo:
          this.curriculum.city = update.city
          this.curriculum.state = update.state
          this.curriculum.number = update.number
          this.curriculum.linkedin = update.linkedin
          this.curriculum.email = update.email
          this.curriculum.phoneNumber = update.phoneNumber
          this.curriculum.street = update.street
          break;
        case StepThree:
        this.curriculum.skills = [...update];
          break;
        case StepFour:
          this.curriculum.collegeStart = update.start
          this.curriculum.collegeEnd = update.end
          this.curriculum.collegeName = update.collegeName
          this.curriculum.course = update.course
          break;
        case StepFive:
          this.curriculum.enterpriseStart = update.start
          this.curriculum.enterpriseEnd = update.end
          this.curriculum.enterpriseName = update.enterpriseName
          this.curriculum.area = update.area
          break;
        case StepSix:
          this.curriculum.aboutProfile = update.aboutProfile
          this.curriculum.aboutLastJob = update.aboutLastJob
          break;
      }
    },
    nextStep(){
      if(this.noValidate){
        this.$refs.error.showModal()
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
        case StepSix:
        this.$router.push({ name: 'cv', params:  this.curriculum });
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
.error{
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 100px;
  color: black;
  justify-content: space-around;
  align-items: center
}
.modal{
  border-radius: 20px;
  border: none;
}

.modal::backdrop{
  background-color: #212121c3;
}
.modalBtn{
  width: 140px;
  height: 30px;
  border: none;
  background-color: var(--clear);
  font-family: var(--font);
  color: #FFF;
  font-size: 16px;
  border-radius: 20px;
  font-weight: 700;
}
</style>
