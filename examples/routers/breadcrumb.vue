<style>
    .demo-QBreadcrumb-separator{
        color: #ff5500;
        padding: 0 5px;
    }
</style>
<template>
<div>
    <QBreadcrumb separator="<b class='demo-QBreadcrumb-separator'>=></b>">
        <QBreadcrumb-item to="/button">Home4</QBreadcrumb-item>
        <QBreadcrumb-item to="//iviewui.com" target="_blank">Home4</QBreadcrumb-item>
        <QBreadcrumb-item :to="{name: 'icon', params: { userId: 123 }}">Components</QBreadcrumb-item>
        <QBreadcrumb-item>QBreadcrumb</QBreadcrumb-item>
    </QBreadcrumb>
    <QBreadcrumb separator="">
        <QBreadcrumb-item href="/">
            <template>Home</template>
            <template slot="separator">
                <b style="color: #ff5500;">-></b>
            </template>
        </QBreadcrumb-item>
        <QBreadcrumb-item href="/components/page">
            <template>QBreadcrumb</template>
            <template slot="separator">
                <b style="color: #ff5500;">-></b>
            </template>
        </QBreadcrumb-item>
        <QBreadcrumb-item>QBreadcrumb</QBreadcrumb-item>
    </QBreadcrumb>
</div>
</template>
<script>
    export default {

    }
</script>
