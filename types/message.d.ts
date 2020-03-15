// Type definitions for iview 3.3.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode, CreateElement } from "vue";

export const QMessage: QMessageClass;

export declare class QMessageClass extends Vue {
    /**
     * 消息
     * @param config QMessageConfig为相关配置,string为待显示的内容
     */
    info(config?: QMessageConfig | string): void;

    /**
     * 成功
     * @param config QMessageConfig为相关配置,string为待显示的内容
     */
    success(config?: QMessageConfig | string): void;

    /**
     * 警告
     * @param config QMessageConfig为相关配置,string为待显示的内容
     */
    warning(config?: QMessageConfig | string): void;

    /**
     * 错误
     * @param config QMessageConfig为相关配置,string为待显示的内容
     */
    error(config?: QMessageConfig | string): void;

    /**
     * 配置
     * @param config QMessageConfig为相关配置,string为待显示的内容
     */
    loading(options?: QMessageConfig | string): void;

    /**
     * 配置
     * @param config QMessageConfig为相关配置,string为待显示的内容
     */
    config(options?: QMessageConfig): void;

    /**
     * 销毁
     */
    destroy(): void;
}

export declare class QMessageConfig {
    /**
     * 提示内容
     */
    content?: string;
    /**
     * 自定义描述内容，使用 Vue 的 Render 函数
     * @param h Render函数
     */
    render?: (h?: CreateElement) => VNode;
    /**
     * 关闭时的回调
     */
    onClose?: () => void;
    /**
     * 页面是否可以滚动
     * @default false
     */
    closable?: boolean;
    /**
     * 提示组件距离顶端的距离，单位像素
     * @default 24
     */
    top?: number;
    /**
     * 默认自动关闭的延时，单位秒
     * @default 1.5
     */
    duration?: number;
}

declare module "vue/types/vue" {
    interface Vue {
        /**
         * 全局提示
         */
        $QMessage: QMessageClass;
    }
}
