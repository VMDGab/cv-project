<template>
    <div>
        <input ref="input" class="input" :placeholder="placeholder" :type="type" @change="previewImage"/>
    </div>
</template>
<script>
export default{
    name:"Input",
    props:{
        placeholder: String,
        type: String
    },
    methods:{
        previewImage(){
            if(this.type == "file"){
                const file = this.$refs.input.files[0];
                const url = URL.createObjectURL(file);
                this.$emit("url", url)
            } else {
                const value = this.$refs.input.value;
                this.$emit("input", value);
            }
        }
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