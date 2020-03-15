<template>
    <div>
        <QPoptip trigger="hover" title="Title" content="content">
            <QButton>Hover</QButton>
        </QPoptip>
        <QPoptip title="Title" content="content">
            <QButton>Click</QButton>
        </QPoptip>
        <QPoptip trigger="focus" title="Title" content="content">
            <QButton>Focus</QButton>
        </QPoptip>
        <QPoptip trigger="focus" title="Title" content="content">
            <Input placeholder="Input focus" />
        </QPoptip>
    </div>
</template>
<script>
    export default {

    }
</script>
