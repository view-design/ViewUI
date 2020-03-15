<template>
    <div style="margin: 100px;">
        <q-row :gutter="64">
            <q-col span="12">
                <QForm ref="formValidate1" :model="formValidate" :rules="ruleValidate" :label-width="80">
                    <QFormItem label="Name" prop="name">
                        <QInput v-model="formValidate.name" placeholder="Enter your name"></QInput>
                    </QFormItem>
                    <QFormItem label="E-mail" prop="mail">
                        <QInput v-model="formValidate.mail" placeholder="Enter your e-mail"></QInput>
                    </QFormItem>
                    <QFormItem label="City" prop="city">
                        <QSelect v-model="formValidate.city" placeholder="Select your city">
                            <QOption value="beijing">New York</QOption>
                            <QOption value="shanghai">London</QOption>
                            <QOption value="shenzhen">Sydney</QOption>
                        </QSelect>
                    </QFormItem>
                    <QFormItem label="Date">
                        <QRow>
                            <QCol span="11">
                                <QFormItem prop="date">
                                    <QDatePicker type="date" placeholder="Select date" v-model="formValidate.date"></QDatePicker>
                                </QFormItem>
                            </QCol>
                            <QCol span="2" style="text-align: center">-</QCol>
                            <QCol span="11">
                                <QFormItem prop="time">
                                    <QTimePicker type="time" placeholder="Select time" v-model="formValidate.time"></QTimePicker>
                                </QFormItem>
                            </QCol>
                        </QRow>
                    </QFormItem>
                    <QFormItem label="Gender" prop="gender">
                        <QRadioGroup v-model="formValidate.gender">
                            <QRadio label="male">Male</QRadio>
                            <QRadio label="female">Female</QRadio>
                        </QRadioGroup>
                    </QFormItem>
                    <QFormItem label="Hobby" prop="interest">
                        <QCheckboxGroup v-model="formValidate.interest">
                            <QCheckbox label="Eat"></QCheckbox>
                            <QCheckbox label="Sleep"></QCheckbox>
                            <QCheckbox label="Run"></QCheckbox>
                            <QCheckbox label="Movie"></QCheckbox>
                        </QCheckboxGroup>
                    </QFormItem>
                    <QFormItem label="Desc" prop="desc">
                        <QInput v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></QInput>
                    </QFormItem>
                    <QFormItem label="Switch" prop="switch">
                        <q-switch v-model="formValidate.switch"></q-switch>
                    </QFormItem>
                    <QFormItem label="Slider" prop="slider">
                        <QSlider v-model="formValidate.slider"></QSlider>
                    </QFormItem>
                    <QFormItem label="AutoComplete" prop="autoComplete">
                        <QAutoComplete
                                v-model="formValidate.autoComplete"
                                :data="data1"
                                @on-search="handleSearch1"
                                placeholder="input here"
                                style="width:200px"></QAutoComplete>
                    </QFormItem>
                    <QFormItem label="cascader" prop="cascader">
                        <QCascader v-model="formValidate.cascader" :data="data2"></QCascader>
                    </QFormItem>
                    <QFormItem label="inputNumber" prop="inputNumber">
                        <QInputNumber :max="10" :min="1" v-model="formValidate.inputNumber"></QInputNumber>
                    </QFormItem>
                    <QFormItem label="rate" prop="rate">
                        <QRate v-model="formValidate.rate" />
                    </QFormItem>
                    <QFormItem label="colorPicker" prop="colorPicker">
                        <QColorPicker v-model="formValidate.colorPicker" />
                    </QFormItem>
                    <QFormItem label="upload" prop="upload">
                        <QUpload action="//jsonplaceholder.typicode.com/posts/">
                            <QButton icon="ios-cloud-upload-outline">Upload files</QButton>
                        </QUpload>
                    </QFormItem>
                    <QFormItem>
                        <QButton type="primary" @click="handleSubmit('formValidate1')">Submit</QButton>
                        <QButton @click="handleReset('formValidate1')" style="margin-left: 8px">Reset</QButton>
                    </QFormItem>
                </QForm>
            </q-col>
            <q-col span="12">
                <QForm disabled ref="formValidate2" :model="formValidate" :rules="ruleValidate" :label-width="80">
                    <QFormItem label="Name" prop="name">
                        <QInput v-model="formValidate.name" placeholder="Enter your name"></QInput>
                    </QFormItem>
                    <QFormItem label="E-mail" prop="mail">
                        <QInput v-model="formValidate.mail" placeholder="Enter your e-mail"></QInput>
                    </QFormItem>
                    <QFormItem label="City" prop="city">
                        <QSelect v-model="formValidate.city" placeholder="Select your city">
                            <QOption value="beijing">New York</QOption>
                            <QOption value="shanghai">London</QOption>
                            <QOption value="shenzhen">Sydney</QOption>
                        </QSelect>
                    </QFormItem>
                    <QFormItem label="Date">
                        <QRow>
                            <QCol span="11">
                                <QFormItem prop="date">
                                    <QDatePicker type="date" placeholder="Select date" v-model="formValidate.date"></QDatePicker>
                                </QFormItem>
                            </QCol>
                            <QCol span="2" style="text-align: center">-</QCol>
                            <QCol span="11">
                                <QFormItem prop="time">
                                    <QTimePicker type="time" placeholder="Select time" v-model="formValidate.time"></QTimePicker>
                                </QFormItem>
                            </QCol>
                        </QRow>
                    </QFormItem>
                    <QFormItem label="Gender" prop="gender">
                        <QRadioGroup v-model="formValidate.gender">
                            <QRadio label="male">Male</QRadio>
                            <QRadio label="female">Female</QRadio>
                        </QRadioGroup>
                    </QFormItem>
                    <QFormItem label="Hobby" prop="interest">
                        <QCheckboxGroup v-model="formValidate.interest">
                            <QCheckbox label="Eat"></QCheckbox>
                            <QCheckbox label="Sleep"></QCheckbox>
                            <QCheckbox label="Run"></QCheckbox>
                            <QCheckbox label="Movie"></QCheckbox>
                        </QCheckboxGroup>
                    </QFormItem>
                    <QFormItem label="Desc" prop="desc">
                        <QInput v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></QInput>
                    </QFormItem>
                    <QFormItem label="Switch" prop="switch">
                        <q-switch v-model="formValidate.switch"></q-switch>
                    </QFormItem>
                    <QFormItem label="Slider" prop="slider">
                        <QSlider v-model="formValidate.slider"></QSlider>
                    </QFormItem>
                    <QFormItem label="AutoComplete" prop="autoComplete">
                        QAutoComplete
                                v-model="formValidate.autoComplete"
                                :data="data1"
                                @on-search="handleSearch1"
                                placeholder="input here"
                                style="width:200px"></QAutoComplete>
                    </QFormItem>
                    <QFormItem label="cascader" prop="cascader">
                        <QCascader v-model="formValidate.cascader" :data="data2"></QCascader>
                    </QFormItem>
                    <QFormItem label="inputNumber" prop="inputNumber">
                        <QInputNumber :max="10" :min="1" v-model="formValidate.inputNumber"></QInputNumber>
                    </QFormItem>
                    <QFormItem label="rate" prop="rate">
                        <QRate v-model="formValidate.rate" />
                    </QFormItem>
                    <QFormItem label="colorPicker" prop="colorPicker">
                        <QColorPicker v-model="formValidate.colorPicker" />
                    </QFormItem>
                    <QFormItem label="upload" prop="upload">
                        <QUpload action="//jsonplaceholder.typicode.com/posts/">
                            <QButton icon="ios-cloud-upload-outline">Upload files</QButton>
                        </QUpload>
                    </QFormItem>
                    <QFormItem>
                        <QButton type="primary" @click="handleSubmit('formValidate2')">Submit</QButton>
                        <QButton @click="handleReset('formValidate2')" style="margin-left: 8px">Reset</QButton>
                    </QFormItem>
                </QForm>
            </q-col>
        </q-row>
        <div style="margin: 100px;width: 200px;">
            <QDivider>普通组件</QDivider>
            <QButton>123</QButton>
            <QButton disabled>123</QButton>
            <br>
            <QInput value="" />
            <QInput value="" disabled />
            <br>
            <QRadio :value="false">Radio</QRadio>
            <QRadio :value="false" disabled>Radio</QRadio>
            <QRadioGroup value="爪哇犀牛">
                <QRadio label="金斑蝶"></QRadio>
                <QRadio label="爪哇犀牛"></QRadio>
                <QRadio label="印度黑羚"></QRadio>
            </QRadioGroup>
            <QRadioGroup value="爪哇犀牛">
                <QRadio label="金斑蝶" disabled></QRadio>
                <QRadio label="爪哇犀牛"></QRadio>
                <QRadio label="印度黑羚"></QRadio>
            </QRadioGroup>
            <br>
            <QCheckbox :value="false">Checkbox</QCheckbox>
            <QCheckbox :value="false" disabled>Checkbox</QCheckbox>
            <QCheckboxGroup :value="['香蕉']">
                <QCheckbox label="香蕉"></QCheckbox>
                <QCheckbox label="苹果" disabled></QCheckbox>
                <QCheckbox label="西瓜"></QCheckbox>
            </QCheckboxGroup>
            <br>
            <q-switch :value="false" />
            <q-switch :value="false" disabled />
            <br>
            <QSelect value="London" disabled style="width:200px">
                <QOption v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</QOption>
            </QSelect>
            <QSelect value="London" style="width:200px">
                <QOption value="beijing">New York</QOption>
                <QOption value="shanghai" disabled>London</QOption>
                <QOption value="shenzhen">Sydney</QOption>
            </QSelect>
            <QSelect value="" filterable>
                <QOption v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</QOption>
            </QSelect>
            <QSelect value="" filterable disabled>
                <QOption v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</QOption>
            </QSelect>
            <br>
            <QSlider :value="20"></QSlider>
            <QSlider :value="20" disabled></QSlider>
            <br>
            <QAutoComplete
                    v-model="value1"
                    :data="data1"
                    @on-search="handleSearch1"
                    placeholder="input here"
                    style="width:200px"></QAutoComplete>
            <QAutoComplete
                    v-model="value1"
                    :data="data1"
                    @on-search="handleSearch1"
                    placeholder="input here"
                    disabled
                    style="width:200px"></QAutoComplete>
            <br>
            <QDatePicker type="date" placeholder="Select date" style="width: 200px"></QDatePicker>
            <QDatePicker type="date" placeholder="Select date" style="width: 200px" disabled></QDatePicker>
            <br>
            <QTimePicker type="time" placeholder="Select time" style="width: 168px"></QTimePicker>
            <QTimePicker type="time" placeholder="Select time" style="width: 168px" disabled></QTimePicker>
            <br>
            <QCascader :data="data2"></QCascader>
            <QCascader :data="data2" disabled></QCascader>
            <br>
            <QInputNumber :max="10" :min="1" :value="2"></QInputNumber>
            <QInputNumber :max="10" :min="1" :value="2" disabled></QInputNumber>
            <br>
            <QRate :value="3" />
            <QRate :value="3" disabled />
            <br>
            <QColorPicker value="#19be6b" />
            <QColorPicker value="#19be6b" disabled />
            <br>
            <QUpload action="//jsonplaceholder.typicode.com/posts/">
                <QButton icon="ios-cloud-upload-outline">Upload files</QButton>
            </QUpload>
            <QUpload action="//jsonplaceholder.typicode.com/posts/" disabled>
                <QButton icon="ios-cloud-upload-outline">Upload files</QButton>
            </QUpload>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value1: '',
                data1: [],
                formValidate: {
                    name: '',
                    mail: '',
                    city: '',
                    gender: '',
                    interest: [],
                    date: '',
                    time: '',
                    desc: '',
                    switch: false,
                    slider: 20,
                    autoComplete: '',
                    cascader: [],
                    inputNumber: 2,
                    rate: 3,
                    colorPicker: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ],
                    slider: [
                        { required: true, type: 'number', message: 'Slider', trigger: 'change' }
                    ],
                    switch: [
                        { required: true, type: 'boolean', message: 'Switch...', trigger: 'change' }
                    ],
                    mail: [
                        { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                        { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                    ],
                    city: [
                        { required: true, message: 'Please select the city', trigger: 'change' }
                    ],
                    gender: [
                        { required: true, message: 'Please select gender', trigger: 'change' }
                    ],
                    interest: [
                        { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
                        { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
                    ],
                    date: [
                        { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
                    ],
                    time: [
                        { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
                        { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
                    ]
                },
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
                data2: [{
                    value: 'zhejiang',
                    label: '浙江',
                    children: [{
                        value: 'hangzhou',
                        label: '杭州',
                        children: [{
                            value: 'xihu',
                            label: '西湖'
                        }]
                    }]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    disabled: true,
                    children: [{
                        value: 'nanjing',
                        label: '南京',
                        children: [{
                            value: 'zhonghuamen',
                            label: '中华门'
                        }]
                    }]
                }]
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            handleSearch1 (value) {
                this.data1 = !value ? [] : [
                    value,
                    value + value,
                    value + value + value
                ];
            }
        }
    }
</script>
