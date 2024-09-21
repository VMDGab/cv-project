<template>
    <div class="one">
        <DefaultTitle 
        title="Informações de contato"
        />
        <Input placeholder="Telefone" @input="savePhoneNumber"/>
        <Input placeholder="Email" @input="saveEmail"/>
        <Input placeholder="Linkedin" @input="saveLinkedin"/>
        <InputCep @location="handleLocation" @error="handleError"/>

    </div>
</template>
<script>
import DefaultTitle from '../defaultTitle.vue';
import Input from '../defaultInput.vue';
import InputCep from '../cep.vue';

export default{
    name: "StepTwo",
    components:{
        DefaultTitle,
        Input,
        InputCep,
    },
    data(){
        return {
            contact:{
                city: '',
                state: '',
                street:'',
                number: '',
                linkedin: '',
                email: '',
                phoneNumber: '',
            }
        }
       },
       mounted(){
        this.validateFields()
        },
    methods:{
        handleLocation(location){
            this.contact.city = location.city
            this.contact.state = location.state
            this.contact.number = location.number
            this.contact.street = location.street
            this.validateFields()
        },
        saveEmail(value){
            this.contact.email = value
            this.validateFields()
        },
        saveLinkedin(value){
            this.contact.linkedin = value
            this.validateFields()
        },

        savePhoneNumber(value){
            this.contact.phoneNumber = value
            this.validateFields()
        },
        validateFields() {
            const {phoneNumber, linkedin, email, number, state, city} = this.contact;
                if (!phoneNumber || !linkedin || !email || !city || !number || !state) {
                this.$emit("error", true);  // Certifique-se de que o nome do evento está correto
                }
                else {
                    this.$emit("error", false);
                    this.$emit("update", this.contact);
                }
    }
    }
}
</script>
 