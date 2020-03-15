<template>
    <div>
        <QRate v-model="value"></QRate>
        <QRate allow-half v-model="valueHalf"></QRate>
        <QRate clearable v-model="valueClear"></QRate>
        <QRate clearable allow-half  v-model="valueClearHalf"></QRate>
        <QRate
            allow-half
            show-text
            v-model="characterValue"
            character="好"/>
        <QRate allow-half v-model="cv" icon="ios-heart" />
        <!--<QRate show-text v-model="valueText"></QRate>-->
        <!--<QRate show-text allow-half v-model="valueCustomText">-->
            <!--<span style="color: #f5a623">{{ valueCustomText }}</span>-->
        <!--</QRate>-->
        <!--<QRate disabled  allow-half v-model="valueDisabled"></QRate>-->
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value: 0,
                valueHalf: 2.5,
                valueText: 3,
                valueCustomText: 4.0,
                valueDisabled: 2.4,
                valueClear: 1,
                valueClearHalf: 1.5,
                characterValue: 2.5,
                cv: 3.5
            }
        }
    }
</script>
