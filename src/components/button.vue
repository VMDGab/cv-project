<template>
    <div class="btns">
        <Button class="btn">{{ title }}</Button>
        <Button class="btnClear">Limpar</Button>
    </div>
</template>

<script>
export default{
    name:"Buttons",
    props:{
        title: String
    }
}
</script>

<style>
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

