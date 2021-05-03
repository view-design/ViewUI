<script>
const prefixCls = 'ivu-form-item';

export default {
    name: 'FormLabel',

    props: {
        isAutoWidth: Boolean,
        updateAll: Boolean
    },

    inject: ['FormInstance', 'FormItem'],

    render() {
        const slots = this.$slots.default;
        if (!slots) return null;
        if (this.isAutoWidth) {
            const autoLabelWidth = this.FormInstance.autoLabelWidth;
            const style = {};
            if (autoLabelWidth && autoLabelWidth !== 'auto') {
                const marginLeft = parseInt(autoLabelWidth, 10) - this.computedWidth;
                if (marginLeft) {
                    style.marginLeft = marginLeft + 'px';
                }
            }
            const className = prefixCls + '-label-wrap'
            return (<div class={className} style={style}>
                {slots}
            </div>);
        } else {
            return slots[0];
        }
    },

    methods: {
        getLabelWidth() {
            if (this.$el && this.$el.firstElementChild) {
                const computedWidth = window.getComputedStyle(this.$el.firstElementChild).width;
                return Math.ceil(parseFloat(computedWidth));
            } else {
                return 0;
            }
        },
        updateLabelWidth(action = 'update') {
            if (this.$slots.default && this.isAutoWidth && this.$el.firstElementChild) {
                if (action === 'update') {
                    this.computedWidth = this.getLabelWidth();
                } else if (action === 'remove') {
                    this.FormInstance.deregisterLabelWidth(this.computedWidth);
                }
            }
        }
    },

    watch: {
        computedWidth(val, oldVal) {
            if (this.updateAll) {
                this.FormInstance.registerLabelWidth(val, oldVal);
                this.FormItem.updateComputedLabelWidth(val);
            }
        }
    },

    data() {
        return {
            computedWidth: 0
        };
    },

    mounted() {
        this.updateLabelWidth('update');
    },

    updated() {
        this.updateLabelWidth('update');
    },

    beforeDestroy() {
        this.updateLabelWidth('remove');
    }
};
</script>
