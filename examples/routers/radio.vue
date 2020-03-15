<template>
    <div>
        <QRadio size="large" v-model="single">Radio</QRadio>
        <QRadio size="default" v-model="single">Radio</QRadio>
        <QRadio size="small" v-model="single">Radio</QRadio>
        <br>
        <QRadio size="large" v-model="single" border>Radio</QRadio>
        <QRadio size="default" v-model="single" border disabled>Radio</QRadio>
        <QRadio size="small" v-model="single" border>Radio</QRadio>
        <br><br>
        <QRadio-group v-model="phone">
            <QRadio label="apple">
                <QIcon type="logo-apple"></QIcon>
                <span>Apple</span>
            </QRadio>
            <QRadio label="android">
                <QIcon type="social-android"></QIcon>
                <span>Android</span>
            </QRadio>
            <QRadio label="windows">
                <QIcon type="social-windows"></QIcon>
                <span>Windows</span>
            </QRadio>
        </QRadio-group>
        <QRadio-group v-model="button2" type="button" size="large">
            <QRadio label="北京"></QRadio>
            <QRadio label="上海" disabled></QRadio>
            <QRadio label="深圳"></QRadio>
            <QRadio label="杭州"></QRadio>
        </QRadio-group>
        <QRadio-group v-model="button2" type="button" size="default">
            <QRadio label="北京"></QRadio>
            <QRadio label="上海" disabled></QRadio>
            <QRadio label="深圳"></QRadio>
            <QRadio label="杭州"></QRadio>
        </QRadio-group>
        <QRadio-group v-model="button2" type="button" size="small">
            <QRadio label="北京"></QRadio>
            <QRadio label="上海" disabled></QRadio>
            <QRadio label="深圳"></QRadio>
            <QRadio label="杭州"></QRadio>
        </QRadio-group>
        <QDivider></QDivider>
        <QRadio-group v-model="phone" size="small">
            <QRadio label="apple" border>
                <QIcon type="logo-apple"></QIcon>
                <span>选项一</span>
            </QRadio>
            <QRadio label="android" border>
                <QIcon type="logo-android"></QIcon>
                <span>选项二</span>
            </QRadio>
            <QRadio label="windows" border>
                <QIcon type="logo-windows"></QIcon>
                <span>选项三</span>
            </QRadio>
        </QRadio-group>
        <br><br>
        <QRadio-group v-model="phone" size="default">
            <QRadio label="apple" border>
                <span>选项一</span>
            </QRadio>
            <QRadio label="android" border disabled>
                <span>选项二</span>
            </QRadio>
            <QRadio label="windows" border>
                <span>选项三</span>
            </QRadio>
        </QRadio-group>
        <br><br>
        <QRadio-group v-model="phone" size="large">
            <QRadio label="apple" border>
                <QIcon type="logo-apple"></QIcon>
                <span>选项一</span>
            </QRadio>
            <QRadio label="android" border>
                <QIcon type="logo-android"></QIcon>
                <span>选项二</span>
            </QRadio>
            <QRadio label="windows" border>
                <QIcon type="logo-windows"></QIcon>
                <span>选项三</span>
            </QRadio>
        </QRadio-group>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                single: true,
                phone: '',
                button2: '北京',
            };
        },
        methods: {

        }
    };
</script>
