<style scoped>
    .demo-QBadge{
        width: 42px;
        height: 42px;
        background: #eee;
        border-radius: 6px;
        display: inline-block;
    }
</style>
<style>
    .demo-QBadge-alone{
        background: #5cb85c !important;
    }
</style>
<template>
    <div>
        <QBadge :count="count">
            <a href="#" class="demo-QBadge"></a>
        </QBadge>
        <QBadge :count="0" showZero>
            <a href="#" class="demo-QBadge"></a>
        </QBadge>
        <QBadge>
            <QIcon type="md-time" slot="count" size="16" color="#ff6600" />
            <a href="#" class="demo-QBadge"></a>
        </QBadge>
        <QButton @click="setCount">set count</QButton>
        <QDivider></QDivider>
        <QBadge :count="count" text="new">
            <a href="#" class="demo-QBadge"></a>
        </QBadge>
        <QBadge :count="count">
            <a href="#" class="demo-QBadge"></a>
            <span slot="text">hhh</span>
        </QBadge>
        <br><br>
        <QBadge text="hot">
            <QButton type="primary" ghost>Hello</QButton>
        </QBadge>
        <br><br>
        <div>
            <QBadge status="success" />
            <QBadge status="error" />
            <QBadge status="default" />
            <QBadge status="processing" />
            <QBadge status="warning" />
            <br />
            <QBadge status="success" text="Success" />
            <QBadge status="success">
                <strong slot="text">Success</strong>
            </QBadge>
            <br />
            <QBadge status="error" text="Error" />
            <br />
            <QBadge status="default" text="Default" />
            <br />
            <QBadge status="processing" text="Processing" />
            <br />
            <QBadge status="warning" text="Warning" />
        </div>
        <div style="margin: 50px">
            <QBadge dot>
                <a href="//iviewui.com">我是一个链接</a>
            </QBadge>
            <br><br>
            <QBadge :count="10" :offset="[-5, -5]">
                <a href="//iviewui.com">我是一个链接</a>
            </QBadge>
        </div>
        <div>
            <QBadge :count="count" type="primary">
                <a href="#" class="demo-QBadge"></a>
            </QBadge>
            <QBadge :count="count" type="success">
                <a href="#" class="demo-QBadge"></a>
            </QBadge>
            <QBadge :count="count" type="normal">
                <a href="#" class="demo-QBadge"></a>
            </QBadge>
            <QBadge :count="count" type="info">
                <a href="#" class="demo-QBadge"></a>
            </QBadge>
            <QBadge :count="count" type="error">
                <a href="#" class="demo-QBadge"></a>
            </QBadge>
            <QBadge :count="count" type="warning">
                <a href="#" class="demo-QBadge"></a>
            </QBadge>
            <QBadge :count="count">
                <a href="#" class="demo-QBadge"></a>
            </QBadge>
        </div>
        <QDivider></QDivider>
        <QBadge status="success" text="Success" />
        <br />
        <QBadge status="error" text="Error" />
        <br />
        <QBadge status="default" text="Default" />
        <br />
        <QBadge status="processing" text="Processing" />
        <br />
        <QBadge status="warning" text="Warning" />
        <br />
        <QBadge color="blue" text="blue" />
        <QBadge color="green" text="green" />
        <QBadge color="red" text="red" />
        <QBadge color="yellow" text="yellow" />
        <QBadge color="pink" text="pink" />
        <QBadge color="magenta" text="magenta" />
        <QBadge color="volcano" text="volcano" />
        <QBadge color="orange" text="orange" />
        <QBadge color="gold" text="gold" />
        <QBadge color="lime" text="lime" />
        <QBadge color="cyan" text="cyan" />
        <QBadge color="geekblue" text="geekblue" />
        <QBadge color="purple" text="purple" />
        <br />
        <QBadge color="#2db7f5" text="#2db7f5" />
        <QBadge color="#f50" text="#f50" />
    </div>
</template>
<script>
    export default {
        props: {},
        data () {
            return {
                count: 5
            };
        },
        methods: {
            setCount () {
                this.count = 10;
            }
        }
    };
</script>
