<template>
    <QMenu mode="horizontal" :theme="theme1" active-name="3-4" @on-select="hs">
        <QMenuItem name="1" to="/button" target="_blank">
            <QIcon type="ios-paper" />
            内容管理
        </QMenuItem>
        <QMenuItem name="2">
            <QIcon type="ios-people" />
            用户管理
        </QMenuItem>
        <QSubmenu name="3">
            <template slot="title">
                <QIcon type="ios-stats" />
                统计分析
            </template>
            <QMenuGroup title="使用">
                <QMenuItem name="3-1">新增和启动</QMenuItem>
                <QMenuItem name="3-2">活跃分析</QMenuItem>
                <QMenuItem name="3-3">时段分析</QMenuItem>
            </QMenuGroup>
            <QMenuGroup title="留存">
                <QMenuItem name="3-4">用户留存</QMenuItem>
                <QMenuItem name="3-5">流失用户</QMenuItem>
            </QMenuGroup>
        </QSubmenu>
        <QMenuItem name="4">
            <QIcon type="ios-construct" />
            综合设置
        </QMenuItem>
    </QMenu>
</template>
<script>
    export default {
        data () {
            return {
                theme1: 'light'
            }
        },
        methods: {
            hs (n) {
                console.log(n);
            }
        }
    }
</script>
