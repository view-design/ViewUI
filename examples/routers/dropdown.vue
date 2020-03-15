<template>
    <div>
        <QDatePicker :capture="false" size="small" v-model="updatedate" type="datetimerange" placement="bottom-end" placeholder="请输入变更时间" style="width: 150px"></QDatePicker>
        <QDropdown trigger="click" transfer @on-click="aaaa(111)">
            <QButton  size="small" type="primary">
                更多
                <QIcon type="md-arrow-QDropdown" />
            </QButton>
            <QDropdownMenu slot="list">
                <QDropdownItem>驴打滚</QDropdownItem>
                <QDropdownItem>炸酱面</QDropdownItem>
                <QDropdownItem>豆汁儿</QDropdownItem>
                <QDropdownItem>冰糖葫芦</QDropdownItem>
                <QDropdownItem>北京烤鸭</QDropdownItem>
                <QDropdownItem>驴打滚</QDropdownItem>
                <QDropdownItem>炸酱面</QDropdownItem>
                <QDropdownItem>豆汁儿</QDropdownItem>
                <QDropdownItem>冰糖葫芦</QDropdownItem>
                <QDropdownItem>北京烤鸭</QDropdownItem>
                <QDropdownItem>驴打滚</QDropdownItem>
                <QDropdownItem>炸酱面</QDropdownItem>
                <QDropdownItem>豆汁儿</QDropdownItem>
                <QDropdownItem>冰糖葫芦</QDropdownItem>
                <QDropdownItem>北京烤鸭</QDropdownItem>
            </QDropdownMenu>
        </QDropdown>
        <QCascader :data="data" v-model="value1" transfer style="width: 200px"></QCascader>
        <QSelect v-model="model1" multiple transfer style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </QSelect>
        <QPoptip trigger="click" transfer title="Title" content="content">
            <QButton>Hover</QButton>
        </QPoptip>
        <QColorPicker v-model="color1" transfer />
    </div>
</template>
<script>
    export default {
        data () {
            return {
                updatedate:null,
                color1: '#19be6b',
                value1: [],
                data: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }],
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model1: []
            }
        },
        methods: {
            aaaa(){
                this.$Message.info("aaaaa")
            }
        },
        mounted () {

        }
    }
</script>
