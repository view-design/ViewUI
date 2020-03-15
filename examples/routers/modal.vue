<template>
    <div>
        <QButton type="primary" @click="modal1 = true">Display dialog box</QButton>
        <QModal
                v-model="modal1"
                title="Common Modal dialog box title"
                @on-ok="ok"
                @on-cancel="cancel">
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <QButton @click="openMessage">Message</QButton>
            <QSelect v-model="model1" style="width:200px" :transfer="false">
                <QOption v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</QOption>
            </QSelect>
            <QSelect v-model="model1" style="width:200px" :transfer="true">
                <QOption v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</QOption>
            </QSelect>
            <QDropdown transfer>
                <a href="javascript:void(0)">
                    下拉菜单
                    <QIcon type="ios-arrow-down"></QIcon>
                </a>
                <QDropdownMenu slot="list">
                    <QDropdownItem>驴打滚</QDropdownItem>
                    <QDropdownItem>炸酱面</QDropdownItem>
                    <QDropdownItem disabled>豆汁儿</QDropdownItem>
                    <QDropdownItem>冰糖葫芦</QDropdownItem>
                    <QDropdownItem divided>北京烤鸭</QDropdownItem>
                </QDropdownMenu>
            </QDropdown>
            <QDatePicker type="date" placeholder="Select date" style="width: 200px" transfer></QDatePicker>
            <QCascader :data="data" v-model="value1" transfer></QCascader>
            <QTooltip content="Here is the prompt text" transfer>
                A balloon appears when the mouse passes over this text
            </QTooltip>
            <QPoptip trigger="hover" title="Title" content="content" transfer>
                <QButton>Hover</QButton>
            </QPoptip>
            <QButton type="primary" @click="handleSpinShow">整页显示，3秒后关闭</QButton>
        </QModal>
        <QSelect v-model="model1" style="width:200px" :transfer="false">
            <QOption v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</QOption>
        </QSelect>
        <QSelect v-model="model1" style="width:200px" :transfer="true">
            <QOption v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</QOption>
        </QSelect>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                modal1: false,
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
                model1: '',
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
                }]
            }
        },
        methods: {
            ok () {
//                this.$Message.info('Clicked ok');
            },
            cancel () {
//                this.$Message.info('Clicked cancel');
            },
            openMessage () {
                this.$QMessage.info({
                    content: 'hello world',
                    duration: 2
                });
            },
            handleSpinShow () {
                this.$QSpin.show();
            },
        }
    }
</script>
