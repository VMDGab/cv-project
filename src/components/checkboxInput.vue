<template>
    <div class="chkContainer">
        <div class="leftContainer">
            <div class="chk">
                <Input type="checkbox" class="chkInput"/><label>Javascript</label>
            </div>
            <div class="chk">
                <Input type="checkbox" class="chkInput"/><label>Angular</label>
            </div>
            <div class="chk">
                <Input type="checkbox" class="chkInput"/><label>Vue</label>
            </div>
            <div class="chk">
                <Input type="checkbox" class="chkInput"/><label>React</label>
            </div>
            <div class="chk">
                <Input type="checkbox" class="chkInput"/><label>SQL</label>
            </div>
        </div>
        <div class="rightContainer">
            <div class="chk">
                <Input type="checkbox" class="chkInput"/><label>MongoDb</label>
            </div>
            <div class="chk">
                <Input type="checkbox" class="chkInput"/><label>Oracle</label>
            </div>
            <div class="chk">
                <Input type="checkbox" class="chkInput"/><label>AWS</label>
            </div>
            <div class="chk">
                <Input type="checkbox" class="chkInput"/><label>Node</label>
            </div>
            <div class="chk">
                <Input type="checkbox" class="chkInput"/><label>Java</label>
            </div>
        </div>
    </div>
</template>
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
<script>
export default{
    name:"chk"
}
</script>