<template>
    <div>
        <p>With desc</p>
        <QButton @click="info(false)">Info</QButton>
        <QButton @click="success(false)">Success</QButton>
        <QButton @click="warning(false)">Warning</QButton>
        <QButton @click="error(false)">Error</QButton>
        <p>Only title</p>
        <QButton @click="info(true)">Info</QButton>
        <QButton @click="success(true)">Success</QButton>
        <QButton @click="warning(true)">Warning</QButton>
        <QButton @click="error(true)">Error</QButton>
    </div>
</template>
<script>
    export default {
        methods: {
            info (nodesc) {
                this.$QNotice.info({
                    duration: 10000,
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
            success (nodesc) {
                this.$QNotice.success({
                    duration: 10000,
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
            warning (nodesc) {
                this.$QNotice.warning({
                    duration: 10000,
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
            error (nodesc) {
                this.$QNotice.error({
                    duration: 10000,
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            }
        }
    }
</script>
