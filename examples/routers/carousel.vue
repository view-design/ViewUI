<style>
    .demo-carousel{
        height: 200px;
        line-height: 200px;
        text-align: center;
        color: #fff;
        font-size: 20px;
        background: #506b9e;
    }
</style>
<template>
    <div style="width: 400px;">
        <QCarousel v-model="value1" loop arrow="always" @on-change="handleChange">
            <QCarouselItem>
                <div class="demo-carousel">1</div>
            </QCarouselItem>
            <QCarouselItem>
                <div class="demo-carousel">2</div>
            </QCarouselItem>
            <QCarouselItem>
                <div class="demo-carousel">3</div>
            </QCarouselItem>
            <QCarouselItem>
                <div class="demo-carousel">4</div>
            </QCarouselItem>
        </QCarousel>
        <QButton @click="value1 = 2">change</QButton>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value1: 0
            }
        },
        methods: {
            handleChange (old, newval) {
                console.log(old, newval);
            }
        }
    }
</script>
