<template>
    <div class="radio">
        <span class="LabelTitle">Sexo</span>
        <div class="inputContainer">
            <input type="radio" value="masc" name="sexo" v-model="selected" @change="chkSelection"/> <label class="Label">Masc</label>
        </div>
        <div class="inputContainer">
            <input type="radio" name="sexo" value="fem" v-model="selected" @change="chkSelection"/> <label class="Label">Fem</label>
        </div>    
        <div class="inputContainer">
            <input type="radio" name="sexo" value="outro" v-model="selected" @change="chkSelection"/> <label class="Label">Outro</label>
        </div>
    </div>
</template>
<style>
.radio{
    display: flex;
    align-items: center;
}

.inputContainer{
    margin-left: 30px;
}
.Label{
    font-family: var(--font);
    font-size: 24px;
    font-weight: 600;
    color: var(--subtitle);
}
.LabelTitle{
    font-family: var(--font);
    font-size: 24px;
    font-weight: 600;
    color: var(--subtitle);
}
</style>
<script>
export default{
    name:"Radio",
    data(){
        return {
            selected: null
        }
    },
    methods: {
        chkSelection() {
      if (this.selected) {
        this.$emit("gender", this.selected)
      } else{
        this.$emit("error", true)
      }
    }
  }
}
</script>