<template>
    <div class="cepContainer">
        <input ref="inputCep" class="inputCep" placeholder="CEP" @change="handleCep"/>
        <input ref="inputNum" class="inputNumber" placeholder="Número" @change="handleNum"/>
    </div>
</template>
<script>
import axios from 'axios';
export default{
    name:"InputCep",
    props:{
        placeholder: String,
       },
       data(){
        return {
            location:{
                city: '',
                state: '',
                street:'',
                number: ''
            }
        }
       },
       mounted(){
        this.validateFields()
       },
    methods:{
        handleCep(){
            const cep = this.$refs.inputCep.value
            axios.get(`https://viacep.com.br/ws/${cep}/json/`).then(response => {
               this.location.city = response.data.localidade
               this.location.state = response.data.uf
               this.location.street = response.data.logradouro
               this.$emit("location", this.location)
            })
        },
        handleNum(){
            const number = this.$refs.inputNum.value
            this.location.number = number
            this.$emit("location", this.location)
        },
    }
}
</script>
<style>
.cepContainer{
    display: flex;
    justify-content: space-between;
    width: 80%;
}
.inputCep{
    border: none;
    border-bottom: 4px solid var(--subtitle);
    width: 70%;
    font-size: 26px;
    outline: none;
    color: var(--title);
    font-weight: 500;
    margin-bottom: 70px;
}
.inputNumber{
    border: none;
    border-bottom: 4px solid var(--subtitle);
    width: 20%;
    font-size: 26px;
    outline: none;
    color: var(--title);
    font-weight: 500;
    margin-bottom: 70px;
}
</style>