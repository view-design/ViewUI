<template>
    <div>
        <q-button @click.native="start">Start</q-button>
        <q-button @click.native="finish">Finish</q-button>
        <q-button @click.native="error">Error</q-button>
    </div>
</template>
<script>
    export default {
        methods: {
            start () {
                this.$QLoading.start();
            },
            finish () {
                this.$QLoading.finish();
            },
            error () {
                this.$QLoading.error();
            }
        },
        created () {
//            this.$Loading.config({
//                color: '#5cb85c',
//                failedColor: '#f0ad4e',
//                height: 5
//            });
        }
    }
</script>
