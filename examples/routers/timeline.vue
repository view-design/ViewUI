<style scoped>
    .time{
        font-size: 14px;
        font-weight: bold;
    }
    .content{
        padding-left: 5px;
    }
</style>
<template>
<div>
    <QTimeline>
        <QTimeline-item>
            <p class="time">1976年</p>
            <p class="content">Apple I 问世</p>
        </QTimeline-item>
        <QTimeline-item>
            <p class="time">1984年</p>
            <p class="content">发布 Macintosh</p>
        </QTimeline-item>
        <QTimeline-item>
            <p class="time">2007年</p>
            <p class="content">发布 iPhone</p>
        </QTimeline-item>
        <QTimeline-item>
            <p class="time">2010年</p>
            <p class="content">发布 iPad</p>
        </QTimeline-item>
        <QTimeline-item>
            <p class="time">2011年10月5日</p>
            <p class="content">史蒂夫·乔布斯去世</p>
        </QTimeline-item>
    </QTimeline>
    <QTimeline>
        <QTimeline-item color="green">发布1.0版本</QTimeline-item>
        <QTimeline-item color="green">发布2.0版本</QTimeline-item>
        <QTimeline-item color="red">严重故障</QTimeline-item>
        <QTimeline-item color="blue">发布3.0版本</QTimeline-item>
    </QTimeline>
    <QTimeline pending>
        <QTimeline-item>发布1.0版本</QTimeline-item>
        <QTimeline-item>发布2.0版本</QTimeline-item>
        <QTimeline-item>发布3.0版本</QTimeline-item>
        <QTimeline-item><a href="#">查看更多</a></QTimeline-item>
    </QTimeline>
    <QTimeline>
        <QTimeline-item color="green">
            <QIcon type="trophy" slot="dot"></QIcon>
            <span>发布里程碑版本</span>
        </QTimeline-item>
        <QTimeline-item>发布1.0版本</QTimeline-item>
        <QTimeline-item>发布2.0版本</QTimeline-item>
        <QTimeline-item>发布3.0版本</QTimeline-item>
    </QTimeline>
</div>
</template>
<script>
    export default {

    }
</script>
