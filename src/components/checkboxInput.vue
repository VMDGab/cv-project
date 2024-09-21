<template>
    <div class="chkContainer">
        <div class="leftContainer">
            <div class="chk">
                <Input type="checkbox" class="chkInput"/><label>Javascript</label>
            </div>
            <div class="chk">
                <Input type="checkbox" value="Angular" class="chkInput" ref="checkboxes" @change="updateSkills"/>
                <label>Angular</label>
            </div>
            <div class="chk">
                <Input type="checkbox" value="Vue" class="chkInput" ref="checkboxes" @change="updateSkills"/>
                <label>Vue</label>
            </div>
            <div class="chk">
                <Input type="checkbox" value="React" class="chkInput" ref="checkboxes" @change="updateSkills"/>
                <label>React</label>
            </div>
            <div class="chk">
                <Input type="checkbox" value="SQL" class="chkInput" ref="checkboxes" @change="updateSkills"/>
                <label>SQL</label>
            </div>
        </div>
        <div class="rightContainer">
            <div class="chk">
                <Input type="checkbox" value="MongoDb" class="chkInput" ref="checkboxes" @change="updateSkills"/>
                <label>MongoDb</label>
            </div>
            <div class="chk">
                <Input type="checkbox" value="Oracle" class="chkInput" ref="checkboxes" @change="updateSkills"/>
                <label>Oracle</label>
            </div>
            <div class="chk">
                <Input type="checkbox" value="AWS" class="chkInput" ref="checkboxes" @change="updateSkills"/>
                <label>AWS</label>
            </div>
            <div class="chk">
                <Input type="checkbox" value="Node" class="chkInput" ref="checkboxes" @change="updateSkills"/>
                <label>Node</label>
            </div>
            <div class="chk">
                <Input type="checkbox" value="Java" class="chkInput" ref="checkboxes" @change="updateSkills"/>
                <label>Java</label>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:"chk",
    data() {
    return {
      selectedOptions: [],
    };
  },
  methods:{
    updateSkills(event){
        const checkbox = event.target;
        if (checkbox.checked) {
        this.selectedOptions.push(checkbox.value);
      } else {
        this.selectedOptions = this.selectedOptions.filter(
          (value) => value !== checkbox.value
        );
      }
      this.$emit("update", this.selectedOptions);
    }
  }
}
</script>

<style>
.chkContainer{
    display: flex;
    justify-content: flex-start;
}

.chk{
    display: flex;
    color: var(--subtitle);
    font-size: 26px;
    font-weight: 600;
    height: 40px;
}

.chkInput{
    height: 30px;
    margin-right: 10px;
}
.leftContainer{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 250px;
    height: 250px;
}
.rightContainer{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 250px;
    height: 250px;
}
</style>