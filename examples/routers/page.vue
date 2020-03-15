<template>
    <div>
        <QPage prev-text="上一页" next-text="下一页" :total="total" show-sizer show-elevator show-total  :current.sync="current"></QPage>
        {{ current }}
        <QButton type="primary" @click="subject">- 1</QButton>
        <QButton type="primary" @click="change">Change</QButton>
        <QPage :current="2" :total="50" simple></QPage>

        <div style="margin:10px 0px">
            <QPage :total="1000" show-sizer show-elevator show-total  :current="12"></QPage>
        </div>
        <div style="margin:10px 0px">
            <QPage disabled :total="1000" show-sizer show-elevator show-total  :current="12"></QPage>
            <QPage :current="2" :total="50" simple disabled />
        </div>
        <div style="margin:100px 0px">
            <QPage :total="500" show-sizer show-elevator show-total  ></QPage>
        </div>
        <div style="margin:100px 0px">
            <QPage :total="500" show-sizer show-elevator  ></QPage>
        </div>
        <div style="margin:100px 0px">
            <QPage :total="500" show-sizer show-elevator   ></QPage>
        </div>
        <div style="margin:10px 0px">
            <QPage :total="500" show-sizer  ></QPage>
        </div>
        <div style="margin: 10px 0px">
            <QPage :total="40" size="small"></QPage>
            <br><br>
            <QPage :total="40" size="small" show-elevator show-sizer></QPage>
            <br><br>
            <QPage :total="40" size="small" show-total></QPage>
            <br><br>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                current: 1,
                total: 21
            }
        },
        methods: {
            subject() {
                this.total -= 1;
            },
            change() {
                this.current = 1;
            }
        }
    }
</script>
