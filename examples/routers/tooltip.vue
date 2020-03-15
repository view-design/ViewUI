<style scoped>
    .top,.bottom{
        text-align: center;
    }
    .center{
        width: 300px;
        margin: 10px auto;
        overflow: hidden;
    }
    .center-left{
        float: left;
    }
    .center-right{
        float: right;
    }
</style>
<template>
    <div>
        <div class="top">
            <QTooltip content="Top Left text" placement="top-start">
                <QButton>Top Left</QButton>
            </QTooltip>
            <QTooltip content="Top Center text" placement="top">
                <QButton>Top Center</QButton>
            </QTooltip>
            <QTooltip content="Top Right text" placement="top-end">
                <QButton>Top Right</QButton>
            </QTooltip>
        </div>
        <div class="center">
            <div class="center-left">
                <QTooltip content="Left Top text" placement="left-start">
                    <QButton>Left Top</QButton>
                </QTooltip><br><br>
                <QTooltip content="Left Center text" placement="left">
                    <QButton>Left Center</QButton>
                </QTooltip><br><br>
                <QTooltip content="Left Bottom text" placement="left-end">
                    <QButton>Left Bottom</QButton>
                </QTooltip>
            </div>
            <div class="center-right">
                <QTooltip content="Right Top text" placement="right-start">
                    <QButton>Right Top</QButton>
                </QTooltip><br><br>
                <QTooltip content="Right Center text" placement="right">
                    <QButton>Right Center</QButton>
                </QTooltip><br><br>
                <QTooltip content="Right Bottom text" placement="right-end">
                    <QButton>Right Bottom</QButton>
                </QTooltip>
            </div>
        </div>
        <div class="bottom">
            <QTooltip content="Bottom Left text" placement="bottom-start">
                <QButton>Bottom Left</QButton>
            </QTooltip>
            <QTooltip content="Bottom Center text" placement="bottom">
                <QButton>Bottom Center</QButton>
            </QTooltip>
            <QTooltip content="Bottom Right text" placement="bottom-end">
                <QButton>Bottom Right</QButton>
            </QTooltip>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>
