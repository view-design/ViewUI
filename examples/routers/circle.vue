<template>
    <div>
        <q-circle :percent="80">
            <span class="demo-q-circle-inner" style="font-size:24px">80%</span>
        </q-circle>
        <q-circle :percent="100" stroke-color="#5cb85c">
            <QIcon type="ios-checkmark" size="60" style="color:#5cb85c"></QIcon>
        </q-circle>
        <q-circle :percent="35" stroke-color="#ff5500">
        <span class="demo-q-circle-inner">
            <QIcon type="ios-close" size="50" style="color:#ff5500"></QIcon>
        </span>
        </q-circle>
        <QDivider></QDivider>
        <q-circle :percent="80" dashboard stroke-linecap="square">
            <span class="demo-circle-inner" style="font-size:24px">80%</span>
        </q-circle>
        <QDivider></QDivider>
        <q-circle :percent="80" dashboard stroke-linecap="square" :stroke-color="['#108ee9', '#87d068']">
            <span class="demo-circle-inner" style="font-size:24px">80%</span>
        </q-circle>
    </div>
</template>
<script>
    export default {

    }
</script>
