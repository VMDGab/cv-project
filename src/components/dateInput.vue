<template>
    <div>
        <span class="LabelTitle">Início/fim</span>
        <div class="dateContainer">
            <input type="date"/> 
            /
            <input type="date"/> 
        </div>
 
  
    </div>
</template>
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
</style>
<script>
export default{
    name:"date"
}
</script>