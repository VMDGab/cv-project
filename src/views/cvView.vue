<template>
  <div class="cv">
    <div class="header">
      <img 
      ref="photo"
      class="photo" 
      />
        <div class="textsContainer">
          <span class="name" ref="name"></span>
          <span class="profession" ref="profession"></span>
        </div>
    </div>

    <div class="infos">
      <div class="left">
        <div class="info"> 
          <span class="titleInfo">Perfil</span>
          <span class="desc" ref="descProfile"></span>
        </div>

        <div class="info"> 
          <span class="titleInfo">Habilidades</span>
          <ul class="desc">
            <li v-for="skill in skills" :key="skill">{{ skill }}</li>
          </ul>
        </div>

        <div class="info"> 
          <span class="titleInfo">Informações de contato</span>
          <div class="desc">
            <div class="contactInfo">
              <span class="contactTitle">Telefone: </span>
              <span ref="telephone"></span>
            </div>
            <div class="contactInfo">
              <span class="contactTitle">Email: </span>
              <span ref="email"></span>
            </div>
            <div class="contactInfo">
              <span class="contactTitle">Endereço: </span>
              <span ref="location"></span>
            </div>
            <div class="contactInfo">
              <span class="contactTitle">linkedin: </span>
              <span ref="linkedin">vmdgab</span>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="info"> 
          <span class="titleInfo">Emprego</span>
          <span class="descTitle" ref="job"></span>
          <Span class="desc" ref="dateJob"></Span>
          <span class="desc" ref="descJob"></span>
        </div>

        <div class="info"> 
          <span class="titleInfo">Formação academica</span>
          <span class="descTitle" ref="college"></span>
          <Span class="desc" ref="dateCollege"></Span>
          <span class="desc" ref="course"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default{
  name: "cv",
  data(){
    return{
      curriculum: this.$route.params,
      skills: this.$route.params.skills
    }
  },
  mounted(){
    this.buildPage()
  },
  methods:{
    buildPage(){
      const data = this.curriculum
      const location = `${data.street}, ${data.number} - ${data.city}, ${data.state}`
      const job = `${data.area} - ${data.enterpriseName}`
      const dateJob = `${data.enterpriseStart} - ${data.enterpriseEnd}`
      const dateCollege = `${data.collegeStart} - ${data.collegeEnd}`

      this.$refs.photo.src = data.photo
      this.$refs.name.textContent = data.name
      this.$refs.profession.textContent = data.profession
      this.$refs.descProfile.textContent = data.aboutProfile
      this.$refs.telephone.textContent = data.phoneNumber
      this.$refs.email.textContent = data.email
      this.$refs.location.textContent = location
      this.$refs.linkedin.textContent = data.linkedin
      this.$refs.job.textContent = job
      this.$refs.dateJob.textContent = dateJob
      this.$refs.descJob.textContent = data.aboutLastJob
      this.$refs.college.textContent = data.collegeName
      this.$refs.dateCollege.textContent = dateCollege
      this.$refs.course.textContent = data.course
    }
  }
}
</script>

<style>
@import url(../css/global.css);
  .cv{
    min-height: 100vh ;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 500px;
    padding-top: 50px;
  }
  .textsContainer{
    display: flex;
    flex-direction: column;
  }
  .photo{
    height: 140px;
    width: 140px;
    border-radius: 70px;
  }

  .name{
    font-size: 50px;
    font-weight: 700;
    width: 300px;
    font-family: var(--font);
    color: var(--title);
    line-height: 55px;
  }
  .profession{
    font-size: 16px;
    font-weight: 400;
    width: 300px;
    font-family: var(--font);
    color: var(--subtitle);
    line-height: 16px;
    margin-top: 15px;
  }
  .infos{
    display: flex;
    width: 60%;
    margin-top: 50px;
    justify-content: space-around;
  }
  .info{
    width:95%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  .titleInfo{
    font-size: 24px;
    font-weight: 700;
    font-family: var(--font);
    color: var(--title);
  }

  .desc{
    font-size: 20px;
    font-weight: 400;
    font-family: var(--font);
    color: var(--subtitle);
    margin-top: 10px;
  }

  
  .contactTitle{
    font-size: 20px;
    font-weight: 400;
    font-family: var(--font);
    color: var(--title);
    margin-right: 10px;
  }

  .left{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
  }
  .right{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
  }
  .descTitle{
    font-size: 16px;
    font-weight: 600;
    font-family: var(--font);
    color: var(--subtitle);
    margin-top: 10px;
  }
</style>
