<template>
    <div style="margin: 100px;">
        <QSelect v-model="model1" filterable style="width:200px" prefix="ios-albums">
            <QOption v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</QOption>
        </QSelect>

        <QSelect v-model="model10" filterable :max-tag-count="2" multiple style="width:400px">
            <QOption v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</QOption>
        </QSelect>

        <QSelect v-model="model10" filterable :max-tag-count="2" multiple style="width:400px" prefix="ios-albums">
            <QOption v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</QOption>
        </QSelect>

        <br><br>

        <QSelect v-model="model1" style="width:200px">
            <QIcon type="ios-alarm" slot="prefix" color="red" />
            <QOption v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</QOption>
        </QSelect>

        <QSelect v-model="model1" style="width:200px">
            <QAvatar src="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" slot="prefix" size="small" />
            <QOption v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</QOption>
        </QSelect>

        <QSelect v-model="model10" :max-tag-count="3" :max-tag-placeholder="more" multiple style="width:400px" prefix="ios-albums">
            <QOption v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</QOption>
        </QSelect>

        <br><br>

        <QSelect size="small" v-model="model1" style="width:200px" prefix="ios-albums">
            <QOption v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</QOption>
        </QSelect>

        <QSelect size="small" v-model="model10" multiple style="width:400px" prefix="ios-albums">
            <QOption v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</QOption>
        </QSelect>

        <br><br>

        <QSelect size="large" v-model="model1" style="width:200px" prefix="ios-albums">
            <QOption v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</QOption>
        </QSelect>

        <QSelect size="large" v-model="model10" multiple style="width:400px" prefix="ios-albums">
            <QOption v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</QOption>
        </QSelect>
        <QDivider></QDivider>
        <QSelect v-model="model13" filterable allow-create @on-create="handleCreate" style="width:260px">
            <QOption v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</QOption>
        </QSelect>
        <QSelect v-model="model12" multiple filterable allow-create @on-create="handleCreate" style="width:260px">
            <QOption v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</QOption>
        </QSelect>
        <QDivider></QDivider>
        <QSelect v-model="model31" size="small" style="width:200px">
            <QOption v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</QOption>
        </QSelect>
        <QSelect v-model="model31" style="width:200px">
            <QOption v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</QOption>
        </QSelect>
        <QSelect v-model="model31" size="large" style="width:200px">
            <QOption v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</QOption>
        </QSelect>
        <QDivider></QDivider>
        <QSelect v-model="model31" filterable size="small" style="width:200px">
            <QOption v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</QOption>
        </QSelect>
        <QSelect v-model="model31" filterable style="width:200px">
            <QOption v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</QOption>
        </QSelect>
        <QSelect v-model="model31" filterable size="large" style="width:200px">
            <QOption v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</QOption>
        </QSelect>
        <QDivider></QDivider>
        <QSelect v-model="model34" multiple size="small" style="width:200px">
            <QOption v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</QOption>
        </QSelect>
        <QSelect v-model="model34" multiple style="width:200px">
            <QOption v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</QOption>
        </QSelect>
        <QSelect v-model="model34" multiple size="large" style="width:200px">
            <QOption v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</QOption>
        </QSelect>
        <QDivider></QDivider>
        <QSelect v-model="model34" filterable multiple size="small" style="width:200px">
            <QOption v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</QOption>
        </QSelect>
        <QSelect v-model="model34" filterable multiple style="width:200px">
            <QOption v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</QOption>
        </QSelect>
        <QSelect v-model="model34" filterable allow-create multiple size="large" style="width:200px">
            <QOption v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</QOption>
        </QSelect>
    </div>
</template>
<script>
    export default {
        data () {
            return {
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
                model10: [],
                model12: [],
                model13: '',
                model31: '',
                model32: '',
                model33: '',
                model34: [],
                model35: [],
                model36: []
            }
        },
        methods: {
            more (num) {
                return 'more' + num;
            },
            handleCreate (val) {
                console.log(111,val);
                this.cityList.push({
                    value: val,
                    label: val
                });
            }
        }
    }
</script>
