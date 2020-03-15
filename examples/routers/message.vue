<template>
    <div>
        <QButton type="primary" @click="info">Display info prompt</QButton>
        <QButton @click="success">Display success prompt</QButton>
        <QButton @click="warning">Display warning prompt</QButton>
        <QButton @click="error">Display error prompt</QButton>
        <QButton @click="loading">Display loading...</QButton>
        <QButton @click="closable">Display a closable message</QButton>
    </div>
</template>
<script>
    export default {
        methods: {
            info () {
                this.$QMessage.info({
                    content: '这是一条普通的提示',
                    duration: 1000,
                    background: true
                });
                this.$QMessage.success({
                    content: '这是一条普通的提示',
                    duration: 1000,
                    background: true
                });
                this.$QMessage.warning({
                    content: '这是一条普通的提示',
                    duration: 1000,
                    background: true
                });
                this.$QMessage.error({
                    content: '这是一条普通的提示',
                    duration: 1000,
                    background: true
                });
            },
            success () {
                this.$QMessage.success('This is a success tip');
            },
            warning () {
                this.$QMessage.warning('This is a warning tip');
            },
            error () {
                this.$QMessage.error('This is an error tip');
            },
            loading () {
                const msg = this.$QMessage.loading({
                    content: 'Loading...',
                    duration: 0
                });
                setTimeout(msg, 3000);
            },
            closable () {
                this.$QMessage.info({
                    content: 'Tips for manual closing',
                    duration: 1000,
                    closable: true
                });
            }
        }
    }
</script>
