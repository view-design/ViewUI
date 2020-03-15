<template>
    <div class="layout-demo-con">
        <QButton @click="change">修改Sider绑定的变量来控制收缩</QButton>
        <QLayout :style="{minHeight: '100vh'}">
            <QSider
                v-model="isCollapsed"
                collapsed-width="0"
                hide-trigger
                breakpoint="sm"
                @on-collapse="changed"
                collapsible
                ref="side"
                width="200">
                <QMenu width="auto" theme="dark" active-name="1">
                    <QMenuGroup title="内容管理">
                        <QMenuItem name="1">
                            <QIcon type="document-text"></QIcon>
                            文章管理
                        </QMenuItem>
                        <QMenuItem name="2">
                            <QIcon type="chatbubbles"></QIcon>
                            评论管理
                        </QMenuItem>
                    </QMenuGroup>
                    <QMenuGroup title="统计分析">
                        <QMenuItem name="3">
                            <QIcon type="heart"></QIcon>
                            用户留存
                        </QMenuItem>
                        <QMenuItem name="4">
                            <QIcon type="heart-broken"></QIcon>
                            流失用户
                        </QMenuItem>
                    </QMenuGroup>
                </QMenu>
                <!-- <div slot="trigger"><Icon type="document-text"></Icon></div> -->
            </QSider>
            <QLayout class-name="test-class">
                <QHeader :style="{background: '#eee'}"><QButton @click="toggleCollapse">菜单</QButton></QHeader>
                <QContent :style="{background:'#FFCF9E'}">
                    <p v-for="i in 100" :key="i">{{ i }}</p>
                </QContent>
                <QFooter>sdfsdsdfsdfs</QFooter>
            </QLayout>
        </QLayout>
    </div>
</template>
<script>
export default {
    data () {
        return {
            isCollapsed: false
        };
    },
    methods: {
        toggleCollapse () {
            this.$refs.side.toggleCollapse();
        },
        change () {
            this.isCollapsed = !this.isCollapsed;
        },
        changed (res) {
            console.log(res)
        }
    },
    watch: {
        isCollapsed (val) {
            // console.log(val)
        }
    }
};
</script>
<style lang="less" scoped>
    .layout-demo-con{
        height: 100%;
    }
</style>
