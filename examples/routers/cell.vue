<template>
    <div style="margin: 100px;background: #f8f8f9;padding: 100px;">
        <QCard title="选项" :padding="0" shadow style="width: 300px;">
            <QCellGroup @on-click="handleClick">
                <QCell title="标题一" name="a1" label="附属内容" to="/button">
                    <QBadge :count="10" slot="extra"></QBadge>
                </QCell>
                <QCell title="标题一" name="a2" label="附属内容" extra="详细信息"></QCell>
                <QCell title="标题一" name="a3" label="附属内容" extra="详细信息" to="/button"></QCell>
                <QCell title="标题一" name="a4" label="附属内容" selected></QCell>
                <QCell title="标题二">
                    <QIcon type="trash-a" slot="icon"></QIcon>
                </QCell>
                <QCell><span style="color: #ff6600">六七十111</span></QCell>
                <QCell title="标题四" selected></QCell>
                <QCell title="标题五"></QCell>
                <QCell title="标题六" disabled></QCell>
                <QCell title="标题七" extra="详细信息" to="/icon"></QCell>
                <QCell title="标题七" extra="详细信息" selected></QCell>
                <QCell title="标题七" label="附属内容" extra="详细信息"></QCell>
                <QCell title="标题八">
                    <q-switch v-model="switch1" slot="extra"></q-switch>
                </QCell>
                <QCell title="标题九" to="/button" target="_blank"></QCell>
            </QCellGroup>
        </QCard>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                switch1: false
            }
        },
        methods: {
            handleClick (name) {
                console.log(name);
            }
        }
    }
</script>
