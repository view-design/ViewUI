<template>
    <!--<div>-->
        <!--<Input v-model="value" placeholder="Enter something..." style="width: 300px"></Input>-->
        <!--<Input v-model="value11">-->
            <!--<span slot="prepend">http://</span>-->
            <!--<span slot="append">.com</span>-->
        <!--</Input>-->
        <!--<br>-->
        <!--<Input v-model="value12">-->
            <!--<Select v-model="select1" slot="prepend" style="width: 80px">-->
                <!--<Option value="http">http://</Option>-->
                <!--<Option value="https">https://</Option>-->
            <!--</Select>-->
            <!--<Select v-model="select2" slot="append" style="width: 70px">-->
                <!--<Option value="com">.com</Option>-->
                <!--<Option value="org">.org</Option>-->
                <!--<Option value="io">.io</Option>-->
            <!--</Select>-->
        <!--</Input>-->
        <!--<br>-->
        <!--<Input v-model="value13">-->
            <!--<Select v-model="select3" slot="prepend" style="width: 80px">-->
                <!--<Option value="day">Day</Option>-->
                <!--<Option value="month">Month</Option>-->
            <!--</Select>-->
            <!--<Button slot="append" icon="ios-search"></Button>-->
        <!--</Input>-->
        <!--<br>-->

        <!--<Input v-model="value11" size="small">-->
        <!--<span slot="prepend">http://</span>-->
        <!--<span slot="append">.com</span>-->
        <!--</Input>-->
        <!--<br>-->
        <!--<Input v-model="value12" size="small">-->
        <!--<Select v-model="select1" slot="prepend" style="width: 80px">-->
            <!--<Option value="http">http://</Option>-->
            <!--<Option value="https">https://</Option>-->
        <!--</Select>-->
        <!--<Select v-model="select2" slot="append" style="width: 70px">-->
            <!--<Option value="com">.com</Option>-->
            <!--<Option value="org">.org</Option>-->
            <!--<Option value="io">.io</Option>-->
        <!--</Select>-->
        <!--</Input>-->
        <!--<br>-->
        <!--<Input v-model="value13" size="small">-->
        <!--<Select v-model="select3" slot="prepend" style="width: 80px">-->
            <!--<Option value="day">Day</Option>-->
            <!--<Option value="month">Month</Option>-->
        <!--</Select>-->
        <!--<Button slot="append" icon="ios-search"></Button>-->
        <!--</Input>-->
        <!--<br>-->

        <!--<Input v-model="value11" size="large">-->
        <!--<span slot="prepend">http://</span>-->
        <!--<span slot="append">.com</span>-->
        <!--</Input>-->
        <!--<br>-->
        <!--<Input v-model="value12" size="large">-->
        <!--<Select v-model="select1" slot="prepend" style="width: 80px">-->
            <!--<Option value="http">http://</Option>-->
            <!--<Option value="https">https://</Option>-->
        <!--</Select>-->
        <!--<Select v-model="select2" slot="append" style="width: 70px">-->
            <!--<Option value="com">.com</Option>-->
            <!--<Option value="org">.org</Option>-->
            <!--<Option value="io">.io</Option>-->
        <!--</Select>-->
        <!--</Input>-->
        <!--<br>-->
        <!--<Input v-model="value13" size="large">-->
        <!--<Select v-model="select3" slot="prepend" style="width: 80px">-->
            <!--<Option value="day">Day</Option>-->
            <!--<Option value="month">Month</Option>-->
        <!--</Select>-->
        <!--<Button slot="append" icon="ios-search"></Button>-->
        <!--</Input>-->
        <!--<br>-->
    <!--</div>-->

    <!--<div>-->
        <!--<Input-->
                <!--v-model="value"-->
                <!--size="small"-->
                <!--prefix="ios-contact"-->
                <!--suffix="ios-search"-->
                <!--placeholder="Enter something..."-->
                <!--style="width: 300px"></Input>-->
        <!--<br>-->
        <!--<Input-->
                <!--v-model="value"-->
                <!--prefix="ios-contact"-->
                <!--suffix="ios-search"-->
                <!--placeholder="Enter something..."-->
                <!--style="width: 300px"></Input>-->
        <!--<br>-->
        <!--<Input-->
                <!--v-model="value"-->
                <!--size="large"-->
                <!--prefix="ios-contact"-->
                <!--suffix="ios-search"-->
                <!--placeholder="Enter something..."-->
                <!--style="width: 300px"></Input>-->
        <!--<br><br>-->
        <!--<Input-->
                <!--v-model="value"-->
                <!--size="small"-->
                <!--icon="ios-search"-->
                <!--placeholder="Enter something..."-->
                <!--style="width: 300px"></Input>-->
        <!--<br>-->
        <!--<Input-->
                <!--v-model="value"-->
                <!--icon="ios-search"-->
                <!--placeholder="Enter something..."-->
                <!--style="width: 300px"></Input>-->
        <!--<br>-->
        <!--<Input-->
                <!--v-model="value"-->
                <!--size="large"-->
                <!--icon="ios-search"-->
                <!--placeholder="Enter something..."-->
                <!--style="width: 300px"></Input>-->
        <!--<br><br><br>-->
        <!--<Input v-model="value" placeholder="Enter something..." style="width: 300px">-->
            <!--<Icon type="ios-alarm-outline" slot="suffix" />-->
            <!--<Icon type="ios-aperture" slot="prefix" />-->
        <!--</Input>-->
        <!--<br><br><br><br>-->
        <!--<Input v-model="value" search enter-button style="width: 300px" @on-search="hs" size="small" />-->
        <!--<br>-->
        <!--<Input v-model="value" search enter-button style="width: 300px" @on-search="hs" />-->
        <!--<br>-->
        <!--<Input v-model="value" search enter-button style="width: 300px" @on-search="hs" size="large" />-->
        <!--<br><br>-->
        <!--<Input v-model="value" search style="width: 300px" @on-search="hs" />-->
        <!--<br><br>-->
        <!--<Input v-model="value" search enter-button="Search" style="width: 300px" @on-search="hs" />-->
    <!--</div>-->
    <div style="width: 200px">
        <Input v-model="value7" type="textarea" :autosize="true" placeholder="Enter something..."></Input>
        <Input @input="inputHander" :value="value8" placeholder="对input 输入行为进行完全控制"></Input>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value: '',
                value11: '',
                value12: '',
                value13: '',
                select1: 'http',
                select2: 'com',
                select3: 'day',
                value7: '',
                value8: '2'
            };
        },
        methods: {
            hs (val) {
                console.log(val);
            },
            inputHander (v) {
                // 只能输入int数字
                this.value8 = String(parseInt(v) || '')
                // console.log('inputHander', this.value8)
            }
        }
    }
</script>
