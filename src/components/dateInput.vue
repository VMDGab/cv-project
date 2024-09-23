<template>
    <div class="container">
        <span class="LabelTitle">Início/fim</span>
        <div class="dateContainer">
            <input type="date" ref="start" @change="handleStart"/> 
            /
            <input type="date" ref="end" @change="handleEnd"/> 
        </div>
 
  
    </div>
</template>

<script>
export default{
    name:"date",
    data(){
        return{
            date:{
                start: "",
                end: "",
            }
        }
    },
    methods:{
        handleStart(){
            const value = this.$refs.start.value
            this.date.start = value
            this.$emit("update", this.date)
        },
        handleEnd(){
            const value = this.$refs.end.value
            this.date.end = value
            this.$emit("update", this.date)
        }
    }

}
</script>
<style>
.dateContainer{
 display: flex;
 justify-content: space-between;
 width: 50%;
 padding-top: 10px;
 
}
.LabelTitle{
    font-family: var(--font);
    font-size: 24px;
    font-weight: 600;
    color: var(--subtitle);
    
}
.container{
    margin-top: 30px;
}
</style>