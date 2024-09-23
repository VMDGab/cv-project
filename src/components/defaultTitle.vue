<template>
    <div class="default">
        <span class="title">{{ title }}</span>
        <span class="subtitle">{{ subtitle }}</span>
    </div>
</template>
<script>
export default{
    name: "DefaultTitle",
    props:{
        title: String,
        subtitle: String
    }
}
</script>

<style>
.default{
    display: flex;
    flex-direction: column;
}
.title{
    color: var(--title);
    font-size: 66px;
    font-weight: 700;
}
.subtitle{
    color: var(--subtitle);
    font-size: 26px;
    font-weight: 400;
}
</style>