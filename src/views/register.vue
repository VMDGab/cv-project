<template>
  <div class="register">
    <form >
      <StepOne/>
      <Buttons title="Próxima etapa"/> 
    </form>
    <img class="icon" src="../assets/curriculo.svg"/>
  </div>
</template>

<script>
import StepOne from '@/components/steps/stepOne.vue';
import StepTwo from '@/components/steps/stepTwo.vue';
import Buttons from '@/components/button.vue';
export default {
  name: 'Register',
  components: {
    StepOne,
    StepTwo,
    Buttons
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
</style>
