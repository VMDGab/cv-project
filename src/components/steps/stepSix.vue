<template>
    <div class="six">
        <DefaultTitle 
        title="Sobre você"
        subtitle="Fale um pouco sobre sua experiência profissional"
        />
        <span class="subtitle">Descrição do perfil do profissional</span>
        <textarea ref="profile" class="textArea" @change="saveProfile"/>

        <span class="subtitle">O que fez na última empresa?</span>
        <textarea ref="job" class="textArea" @change="saveLastJob"/>
       <Date/>

    </div>
</template>
<script>
import DefaultTitle from '../defaultTitle.vue';
export default{
    name: "StepThree",
    components:{
        DefaultTitle,
    },
       data(){
            return{
                about:{
                    aboutProfile: "",
                    aboutLastJob: ""
                }
            }
       },
       mounted(){
        this.validateFields()
        },
        methods:{
            saveProfile(){
                const value = this.$refs.profile.value
                this.about.aboutProfile = value
                this.validateFields()
            },
            saveLastJob(){
                const value = this.$refs.job.value
                this.about.aboutLastJob = value
                this.validateFields()
            },
            validateFields() {
            const {aboutProfile, aboutLastJob } = this.about;
                if (!aboutProfile || !aboutLastJob) {
                this.$emit("error", true);  
                }
                else {
                    this.$emit("error", false);
                    this.$emit("update", this.about);
                }
            }
        }
}
</script>

<style>
.six{
    display: flex;
    flex-direction: column;
}

.textArea{
    margin-bottom: 20px;
    height: 100px;
}
</style>
