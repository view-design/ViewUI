<template>
    <div style="margin: 200px;">
        <QSlider v-model="value6" :step="10" show-stops></QSlider>
        <br><br>
        <QSlider v-model="value7" range :marks="marks"></QSlider>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value6: 30,
                value7: [20, 50],
                marks: {
                    0: '0°C',
                    8: '8°C',
                    37: '37°C',
                    50: {
                        style: {
                            color: '#1989FA'
                        },
                        label: this.$createElement('strong', '50%')
                    }
                }
            }
        }
    }
</script>
