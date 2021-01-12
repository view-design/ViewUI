<template>
    <div>
        <Input v-model='filterText' style='width: 200px;' placeholder="请输入关键字过滤"  />
        <Tree ref='tree' :data='data4'  show-checkbox multiple @on-contextmenu="handleContextMenu" :filter-node-method='filterNodeMethod'>
            <template slot="contextMenu">
                <DropdownItem @click.native="handleContextMenuEdit">编辑</DropdownItem>
                <DropdownItem @click.native="handleContextMenuDelete" style="color: #ed4014">删除</DropdownItem>
            </template>
        </Tree>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                filterText: '',
                data4: [
                    {
                        title: 'parent 1',
                        expand: true,
                        selected: true,
                        contextmenu: true,
                        children: [
                            {
                                title: 'parent 1-1',
                                expand: true,
                                disabled: true,
                                contextmenu: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1',
                                        disabled: true
                                    },
                                    {
                                        title: 'leaf 1-1-2'
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expand: true,
                                contextmenu: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1',
                                        checked: true
                                    },
                                    {
                                        title: 'leaf 1-2-1',
                                        contextmenu: true,
                                    }
                                ]
                            }
                        ],
                    }
                ],
                contextTitle: 0
            }
        },
        methods: {
            filterNodeMethod(value, data) {
                if (!value) return true;
                return data.title.indexOf(value) !== -1;
            },
            handleContextMenu (data) {
                this.contextTitle = data.title;
            },
            handleContextMenuEdit () {
                this.$Message.info('Click edit of line' + this.contextTitle);
            },
            handleContextMenuDelete () {
                this.$Message.info('Click delete of line' + this.contextTitle);
            }
        },
        watch: {
            filterText(val) {
                this.$refs.tree.filter(val);
            },
        },
    }
</script>
