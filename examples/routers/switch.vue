<template>
    <div>
        <q-switch v-model="m1" :loading="loading" @on-change="change" :before-change="beforeChange">
            <span slot="open">开</span>
            <span slot="close">关</span>
        </q-switch>
        {{ m1 }}
        <div @click="m1 = !m1">toggle</div>
        <div @click="loading = !loading">loading</div>
        <br><br>
        <q-switch size="large" loading></q-switch>
        <q-switch></q-switch>
        <q-switch size="small" v-model="m1" :loading="loading"></q-switch>
        <br><br>
        <q-switch>
            <span slot="open">开</span>
            <span slot="close">关</span>
        </q-switch>
        <q-switch>
            <QIcon type="md-checkmark" slot="open"></QIcon>
            <QIcon type="md-close" slot="close"></QIcon>
        </q-switch>
        <br><br>
        <q-switch size="large">
            <span slot="open">开启</span>
            <span slot="close">关闭</span>
        </q-switch>
        <q-switch size="large" v-model="m1" :loading="loading">
            <span slot="open">ON</span>
            <span slot="close">OFF</span>
        </q-switch>
        <br><br>
        <q-switch :disabled="disabled"></q-switch>
        <QButton type="primary" @click="disabled = !disabled">Toggle Disabled</QButton>
        <QDivider></QDivider>
        <q-switch v-model="switch1" true-color="#13ce66" false-color="#ff4949" />
    </div>
</template>
<script>
    export default {
        data () {
            return {
                m1: true,
                disabled: true,
                loading: false,
                switch1: true
            }
        },
        methods: {
            change (status) {
                console.log(status)
            },
            beforeChange () {
                return new Promise((resolve, reject) => {
                    this.$Modal.confirm({
                        title: '切换确认',
                        content: '您确认要切换开关状态吗？',
                        onOk: () => {
                            resolve();
                        },
                        onCancel: () => {
                            reject();
                        }
                    });
                });
            }
        }
    }
</script>
