<template>
    <div>
        <QAlert>
            An info prompt
            <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>
        </QAlert>
        <QAlert type="success">
            A success prompt
            <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>
        </QAlert>
        <QAlert type="warning">
            A warning prompt
            <template slot="desc">
            Content of prompt. Content of prompt. Content of prompt.
        </template>
        </QAlert>
        <QAlert type="error">
            An error prompt
            <span slot="desc">
            Custom error description copywriting. <QIcon type="help-circled" size="14"></QIcon>
        </span>
        </QAlert>
        <QAlert type="info" show-icon closable>消息提示文案</QAlert>
        <QAlert type="success" show-icon>成功提示文案</QAlert>
        <QAlert type="warning" show-icon>警告提示文案</QAlert>
        <QAlert type="error" show-icon>错误提示文案</QAlert>
        <QAlert show-icon>
            消息提示文案
            <template slot="desc">消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案</template>
        </QAlert>
        <QAlert type="success" show-icon>
            成功提示文案
            <span slot="desc">成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案</span>
        </QAlert>
        <QAlert type="warning" show-icon>
            警告提示文案
            <template slot="desc">
                警告的提示描述文案警告的提示描述文案警告的提示描述文案
            </template>
        </QAlert>
        <QAlert type="error" show-icon>
            错误提示文案
            <span slot="desc">
            自定义错误描述文案。
        </span>
        </QAlert>
        <QAlert show-icon closable>
            自定义图标
            <QIcon type="ios-bulb-outline" slot="icon"></QIcon>
            <template slot="desc">自定义图标文案自定义图标文案自定义图标文案自定义图标文案自定义图标文案</template>
        </QAlert>
        <QAlert banner type="warning">Notice: notification contents...</QAlert>
        <QAlert banner closable type="warning">Notice: notification contents...</QAlert>
        <QAlert closable>An info prompt</QAlert>
        <QAlert type="success" show-icon closable>
            A success prompt
            <span slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </span>
        </QAlert>
        <QAlert type="warning" closable>
            Custom closing content
            <span slot="close">No longer prompt</span>
        </QAlert>
    </div>
</template>
<script>
    import { QAlert, QIcon } from 'iview';
    export default {
        components: { QAlert, QIcon }
    }
</script>
