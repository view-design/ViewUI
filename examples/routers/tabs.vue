<template>
    <div style="height: 5000px">
        <QTabs type="card">
            <QTabPane v-for="tab in tabs" :key="tab" :label="'标签' + tab">标签{{ tab }}</QTabPane>
            <QButton @click="handleTabsAdd" size="small" slot="extra">增加</QButton>
        </QTabs>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                tabs: 20
            }
        },
        methods: {
            handleTabsAdd () {
                this.tabs ++;
            }
        }
    }
</script>
