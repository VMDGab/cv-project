<template>
    <div class="radio">
        <span class="LabelTitle">Sexo</span>
        <div class="inputContainer">
            <input  type="radio" name="sexo"/> <label class="Label">Masc</label>
        </div>
        <div class="inputContainer">
            <input type="radio" name="sexo"/> <label class="Label">Fem</label>
        </div>    
        <div class="inputContainer">
            <input type="radio" name="sexo"/> <label class="Label">Outro</label>
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
    name:"Radio"
}
</script>