<template>
    <div>
        <input class="input" :placeholder="placeholder" :type="type"/>
    </div>
</template>
<script>
export default{
    name:"Input",
    props:{
        placeholder: String,
        type: String
    }
}
</script>
<style>
.input{
    border: none;
    border-bottom: 4px solid var(--subtitle);
    width: 80%;
    font-size: 26px;
    outline: none;
    color: var(--title);
    font-weight: 500;
    margin-bottom: 70px;
}
</style>