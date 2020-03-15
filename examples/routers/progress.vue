<template>
    <div style="height: 300px;">
        <QProgress vertical :percent="25"></QProgress>
        <QProgress vertical :percent="45" status="active"></QProgress>
        <QProgress vertical :percent="65" status="wrong"></QProgress>
        <QProgress vertical :percent="100"></QProgress>
        <QProgress vertical :percent="25" hide-info></QProgress>

        <QProgress  :percent="25"></QProgress>
        <QProgress  :percent="45" status="active"></QProgress>
        <QProgress  :percent="65" status="wrong"></QProgress>
        <QProgress  :percent="100"></QProgress>
        <QProgress  :percent="25" hide-info></QProgress>

        <QDivider></QDivider>

        <QProgress :percent="10" :stroke-width="20" text-inside></QProgress>

        <QDivider></QDivider>

        <QProgress :percent="90" :stroke-color="color1"></QProgress>
        <QProgress :percent="90" :stroke-color="color2" status="active"></QProgress>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                color1: '#ff6600',
                color2: ['#108ee9', '#87d068']
            }
        }
    }
</script>
