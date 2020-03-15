<template>
    <div style="margin: 200px 0;">
        <div>
            <QTag color="default">default</QTag>
            <QTag color="primary">primary</QTag>
            <QTag color="success">success</QTag>
            <QTag color="error">error</QTag>
            <QTag color="warning">warning</QTag>
            <QTag color="magenta">magenta</QTag>
            <QTag color="red">red</QTag>
            <QTag color="volcano">volcano</QTag>
            <QTag color="orange">orange</QTag>
            <QTag color="gold">gold</QTag>
            <QTag color="gold">不错</QTag>
            <QTag color="lime">lime</QTag>
            <QTag color="green">green</QTag>
            <QTag color="cyan">cyan</QTag>
            <QTag color="blue">blue</QTag>
            <QTag color="geekblue">geekblue</QTag>
            <QTag color="purple">purple</QTag>
            <QTag color="white">purple</QTag>
        </div>
        <QTag checkable>标签一</QTag>
        <QTag>标签二</QTag>
        <QTag v-if="show" closable @on-close="handleClose">标签三</QTag>
        <br><br>
        <QTag type="border" checkable>标签三</QTag>
        <QTag type="border" closable>标签四</QTag>
        <QTag type="dot">标签一</QTag>
        <QTag type="dot" closable>标签二</QTag>
        <br><br>
        <QTag closable color="primary" checkable>标签一</QTag>
        <QTag closable color="success" checkable>标签二</QTag>
        <QTag closable color="error" checkable>标签三</QTag>
        <QTag closable color="warning" checkable>标签四</QTag>
        <br><br>
        <QTag color="primary" checkable>标签一</QTag>
        <QTag color="success" checkable>标签二</QTag>
        <QTag color="error" checkable>标签三</QTag>
        <QTag color="warning" checkable>标签四</QTag>
        <br><br>
        <QTag closable color="#EF6AFF" checkable>标签一</QTag>
        <QTag color="#EF6AFF" checkable>标签一</QTag>
        <QTag type="border" closable color="#EF6AFF" checkable>标签二</QTag>
        <QTag type="dot" closable color="#EF6AFF" checkable>标签三</QTag>
        <QTag closable color="default" checkable>标签四</QTag>
        <br><br>
        <QTag closable color="#EF6AFF">标签一</QTag>
        <QTag type="border" closable color="#EF6AFF">标签二</QTag>
        <QTag type="dot" closable color="#EF6AFF">标签三</QTag>
        <QTag closable color="default">标签四</QTag>
        <br><br>
        <QTag type="border" closable color="primary" checkable>标签一</QTag>
        <QTag type="border" closable color="success">标签二</QTag>
        <QTag type="border" closable color="error">标签三</QTag>
        <QTag type="border" closable color="warning">标签四</QTag>
        <br><br>
        <QTag type="dot" closable color="primary" checkable>标签一</QTag>
        <QTag type="dot" closable color="success">标签二</QTag>
        <QTag type="dot" closable color="error">标签三</QTag>
        <QTag type="dot" closable color="warning">标签四</QTag>
        <br><br>
        <QTag v-for="item in count" :key="item" :name="item" closable @on-close="handleClose2">标签{{ item + 1 }}</QTag>
        <QButton icon="ios-plus-empty" type="dashed" size="small" @click="handleAdd">添加标签</QButton>

        <br><br><hr><br>
        <QTag :checked="checked" checkable>test</QTag>
        <QButton @click="toggle">
            Toggle
          </QButton>
        <span>{{ checked }}</span>
        <br><br>
        <QTag type="dot" color="gold">标签四</QTag>
        <QDivider>Size</QDivider>
        <QTag color="primary" size="large">大号标签</QTag>
        <QTag color="primary" size="medium">中号标签</QTag>
        <QTag color="primary">默认尺寸</QTag>
        <QTag color="blue" size="large">大号标签</QTag>
        <QTag color="blue" size="medium">中号标签</QTag>
        <QTag color="blue">默认尺寸</QTag>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                show: true,
                count: [0, 1, 2],
                checked: true
            };
        },
        methods: {
            handleClose () {
                this.show = false;
            },
            handleAdd () {
                if (this.count.length) {
                    this.count.push(this.count[this.count.length - 1] + 1);
                } else {
                    this.count.push(0);
                }
            },
            handleClose2 (event, name) {
                const index = this.count.indexOf(name);
                this.count.splice(index, 1);
            },
            toggle() {
                this.checked = !this.checked;
            }
        }
    };
</script>
