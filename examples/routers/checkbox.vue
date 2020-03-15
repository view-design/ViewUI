<template>
    <div>
        <QCheckbox
            :indeterminate="true"
            :value="false"
            size="large">全选</QCheckbox>
        <QCheckbox
                :indeterminate="true"
                :value="false"
                size="default">全选</QCheckbox>
        <QCheckbox
                :indeterminate="true"
                :value="false"
                size="small">全选</QCheckbox>
        <div>
            <QCheckbox size="large" true-value="true" false-value="false" v-model="testValue1">Apple</QCheckbox>
            <QCheckbox true-value="true" false-value="false" v-model="testValue1" disabled>Apple</QCheckbox>
            <QCheckbox size="small" true-value="true" false-value="false" v-model="testValue1">Apple</QCheckbox>
            {{ testValue1 }}
        </div>
        <div>
            <QCheckbox :true-value="0" :false-value="1" v-model="testValue2">test number</QCheckbox>
            {{ testValue2 }}
        </div>
        <QCheckbox-group v-model="fruit" size="large">
            <QCheckbox v-for="item in tags" :label="item.label" :key="item.label" true-value="true"></QCheckbox>
        </QCheckbox-group>
        <div>{{ fruit }}</div>
        <QDivider></QDivider>
        <QCheckboxGroup v-model="fruit" size="small">
            <QCheckbox label="香蕉"></QCheckbox>
            <QCheckbox label="苹果"></QCheckbox>
            <QCheckbox label="西瓜"></QCheckbox>
        </QCheckboxGroup>
        <br>
        <QCheckboxGroup v-model="fruit" size="default">
            <QCheckbox label="香蕉"></QCheckbox>
            <QCheckbox label="苹果"></QCheckbox>
            <QCheckbox label="西瓜"></QCheckbox>
        </QCheckboxGroup>
        <br>
        <QCheckboxGroup v-model="fruit" size="large">
            <QCheckbox label="香蕉"></QCheckbox>
            <QCheckbox label="苹果"></QCheckbox>
            <QCheckbox label="西瓜"></QCheckbox>
        </QCheckboxGroup>
        <QDivider></QDivider>
        <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
            <QCheckbox
                    :indeterminate="indeterminate"
                    :value="checkAll"
                    @click.prevent.native="handleCheckAll">全选</QCheckbox>
        </div>
        <QCheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
            <QCheckbox label="香蕉"></QCheckbox>
            <QCheckbox label="苹果"></QCheckbox>
            <QCheckbox label="西瓜"></QCheckbox>
        </QCheckboxGroup>
        <QDivider></QDivider>
        <QCheckboxGroup v-model="fruit" size="small">
            <QCheckbox label="香蕉" border></QCheckbox>
            <QCheckbox label="苹果" border></QCheckbox>
            <QCheckbox label="西瓜" border></QCheckbox>
        </QCheckboxGroup>
        <br>
        <QCheckboxGroup v-model="fruit" size="default">
            <QCheckbox label="香蕉" border></QCheckbox>
            <QCheckbox label="苹果" border disabled></QCheckbox>
            <QCheckbox label="西瓜" border></QCheckbox>
        </QCheckboxGroup>
        <br>
        <QCheckboxGroup v-model="fruit" size="large">
            <QCheckbox label="香蕉" border></QCheckbox>
            <QCheckbox label="苹果" border></QCheckbox>
            <QCheckbox label="西瓜" border></QCheckbox>
        </QCheckboxGroup>
        <QDivider></QDivider>
        <QCheckbox v-model="single" size="small" border>单独</QCheckbox>
        <QCheckbox v-model="single" size="default" border disabled>单独</QCheckbox>
        <QCheckbox v-model="single" size="large" border>单独</QCheckbox>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                social: ['facebook', 'github'],
                fruit: ['苹果'],
                tags: [],
                testValue1: null,
                testValue2: null,
                indeterminate: true,
                checkAll: false,
                checkAllGroup: ['香蕉', '西瓜'],
                single: false
            };
        },
        methods: {
            handleCheckAll () {
                if (this.indeterminate) {
                    this.checkAll = false;
                } else {
                    this.checkAll = !this.checkAll;
                }
                this.indeterminate = false;

                if (this.checkAll) {
                    this.checkAllGroup = ['香蕉', '苹果', '西瓜'];
                } else {
                    this.checkAllGroup = [];
                }
            },
            checkAllGroupChange (data) {
                if (data.length === 3) {
                    this.indeterminate = false;
                    this.checkAll = true;
                } else if (data.length > 0) {
                    this.indeterminate = true;
                    this.checkAll = false;
                } else {
                    this.indeterminate = false;
                    this.checkAll = false;
                }
            }
        },
        mounted () {
            setTimeout(() => {
                this.tags = [
                    {
                        label: '香蕉'
                    },
                    {
                        label: '苹果'
                    },
                    {
                        label: '西瓜'
                    }
                ];
            }, 1000);
        }
    };
</script>
