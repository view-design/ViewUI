<template>
    <form :class="classes" :autocomplete="autocomplete"><slot></slot></form>
</template>
<script>
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-form';

    export default {
        name: 'iForm',
        props: {
            model: {
                type: Object
            },
            rules: {
                type: Object
            },
            labelWidth: {
                type: [Number, String]
            },
            labelPosition: {
                validator (value) {
                    return oneOf(value, ['left', 'right', 'top']);
                },
                default: 'right'
            },
            inline: {
                type: Boolean,
                default: false
            },
            showMessage: {
                type: Boolean,
                default: true
            },
            autocomplete: {
                validator (value) {
                    return oneOf(value, ['on', 'off']);
                },
                default: 'off'
            },
            // 4.0.0
            hideRequiredMark: {
                type: Boolean,
                default: false
            },
            // 4.0.0
            labelColon: {
                type: [Boolean, String],
                default: false
            },
            // 4.0.0
            disabled: {
                type: Boolean,
                default: false
            }
        },
        provide () {
            return { FormInstance : this };
        },
        data () {
            return {
                fields: [],
                potentialLabelWidthArr: []
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    `${prefixCls}-label-${this.labelPosition}`,
                    {
                        [`${prefixCls}-inline`]: this.inline,
                        [`${prefixCls}-hide-required-mark`]: this.hideRequiredMark
                    }
                ];
            },
            colon () {
                let colon = '';
                if (this.labelColon) {
                    colon = (typeof this.labelColon === 'boolean') ? ':' : this.labelColon;
                }
                return colon;
            },
            autoLabelWidth() {
                if (!this.potentialLabelWidthArr.length) return 0;
                const max = Math.max(...this.potentialLabelWidthArr);
                return max ? `${max}px` : '';
            }
        },
        methods: {
            resetFields() {
                this.fields.forEach(field => {
                    field.resetField();
                });
            },
            validate(callback) {
                return new Promise(resolve => {
                    let valid = true;
                    let count = 0;
                    // fields 为空需要返回promise
                    if (this.fields.length === 0) {
                        resolve(valid);
                        if (typeof callback === 'function') {
                            callback(valid);
                        }
                    }
                    this.fields.forEach(field => {
                        field.validate('', errors => {
                            if (errors) {
                                valid = false;
                            }
                            if (++count === this.fields.length) {
                                // all finish
                                resolve(valid);
                                if (typeof callback === 'function') {
                                    callback(valid);
                                }
                            }
                        });
                    });
                });
            },
            validateField(prop, cb) {
                const field = this.fields.filter(field => field.prop === prop)[0];
                if (!field) { throw new Error('[iView warn]: must call validateField with valid prop string!'); }

                field.validate('', cb);
            },
            getLabelWidthIndex(width) {
                return this.potentialLabelWidthArr.indexOf(width);
            },
            registerLabelWidth(val, oldVal) {
                if (val && oldVal) {
                    const index = this.getLabelWidthIndex(oldVal);
                    if (index > -1) this.potentialLabelWidthArr.splice(index, 1, val);
                } else if (val) {
                    this.potentialLabelWidthArr.push(val);
                }
            },
            deregisterLabelWidth(val) {
                const index = this.getLabelWidthIndex(val);
                if (index > -1) this.potentialLabelWidthArr.splice(index, 1);
            }
        },
        watch: {
            rules() {
                this.validate();
            }
        },
        created () {
            this.$on('on-form-item-add', (field) => {
                if (field) this.fields.push(field);
                return false;
            });
            this.$on('on-form-item-remove', (field) => {
                if (field.prop) this.fields.splice(this.fields.indexOf(field), 1);
                return false;
            });
        }
    };
</script>
