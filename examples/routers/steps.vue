<template>
    <div style="border: 1px solid #ccc;">
        <QSteps :current="1">
            <QStep title="已完成">
                <div slot="content">
                    这里是该步骤的描述信息
                </div>
            </QStep>
            <QStep title="进行中" content="这里是该步骤的描述信息"></QStep>
            <QStep title="待进行" content="这里是该步骤的描述信息"></QStep>
            <QStep title="待进行" content="这里是该步骤的描述信息"></QStep>
        </QSteps>
        <QDivider></QDivider>
        <QSteps :current="2" size="small">
            <QStep title="已完成"></QStep>
            <QStep title="进行中"></QStep>
            <QStep title="待进行"></QStep>
            <QStep title="待进行"></QStep>
        </QSteps>
        <QDivider></QDivider>
        <QSteps :current="1">
            <QStep title="注册">
                <QIcon type="md-alarm" slot="icon" />
            </QStep>
            <QStep title="上传头像" icon="ios-camera"></QStep>
            <QStep title="验证邮箱" icon="ios-mail"></QStep>
        </QSteps>
        <QDivider></QDivider>
        <p>当前正在进行第 {{ current + 1 }} 步</p>
        <QSteps :current="current">
            <QStep title="步骤1"></QStep>
            <QStep title="步骤2"></QStep>
            <QStep title="步骤3"></QStep>
            <QStep title="步骤4"></QStep>
        </QSteps>
        <QButton type="primary" @click="next">Next step</QButton>
        <QDivider></QDivider>
        <QSteps :current="2" direction="vertical">
            <QStep title="已完成" content="这里是该步骤的描述信息"></QStep>
            <QStep title="已完成" content="这里是该步骤的描述信息"></QStep>
            <QStep title="进行中" content="这里是该步骤的描述信息"></QStep>
            <QStep title="待进行" content="这里是该步骤的描述信息"></QStep>
        </QSteps>
        <QDivider></QDivider>
        <QSteps :current="1" status="error">
            <QStep title="已完成" content="这里是该步骤的描述信息"></QStep>
            <QStep title="进行中" content="这里是该步骤的描述信息"></QStep>
            <QStep title="待进行" content="这里是该步骤的描述信息"></QStep>
            <QStep title="待进行" content="这里是该步骤的描述信息"></QStep>
        </QSteps>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                current: 0
            }
        },
        methods: {
            next () {
                if (this.current == 3) {
                    this.current = 0;
                } else {
                    this.current += 1;
                }
            }
        }
    }
</script>
