// Type definitions for iview 3.3.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue from 'vue';

export { QAffix } from './affix';
export { QAlert } from './alert';
export { QAnchor, QAnchorLink } from './anchor';
export { QAutoComplete } from './auto-complete';
export { QAvatar } from './avatar';
export { QBackTop } from './back-top';
export { QBadge } from './badge';
export { QBreadcrumb, QBreadcrumbItem } from './breadcrumb';
export { QButton, ButtonGroup } from './button';
export { QCard } from './card';
export { QCarousel, QCarouselItem } from './carousel';
export { QCascader } from './cascader';
export { QCell, QCellGroup } from './cell';
export { QCheckbox, CheckboxGroup } from './checkbox';
export { QCircle, QCircle as ICircle } from './circle';
export { QCollapse, QCollapsePanel } from './collapse';
export { QColorPicker } from './color-picker';
export { QContent } from './content';
export { QDatePicker, QDatePickerOptions } from './date-picker';
export { QDivider } from './divider';
export { QDrawer } from './drawer';
export { QDropdown, QDropdownMenu, QDropdownItem } from './dropdown';
export { QFooter } from './footer';
export { QForm, QFormItem } from './form';
export { QRow, QCol } from './grid';
export { QHeader } from './header';
export { QIcon } from './icon';
export { QInput } from './input';
export { QInputNumber } from './input-number';
export { QScroll } from './scroll';
export { QSplit } from './split';
export { QLayout } from './layout';
export { QLoadingBar, QLoadingBarConfig } from './loading-bar';
export { QMenu, QMenuGroup, QMenuItem, QSubmenu } from './menu';
export { QMessage, QMessageConfig } from './message';
export { QModal, QModalInstance, QModalConfig } from './modal';
export { QNotice, QNoticeConfig, QNoticeGlobalConfig } from './notice';
export { QPage } from './page';
export { QPoptip } from './poptip';
export { QProgress } from './progress';
export { QRadio, QRadioGroup } from './radio';
export { QRate } from './rate';
export { QSelect, QOption, QOptionGroup } from './select';
export { QSider } from './sider';
export { QSlider } from './slider';
export { QSpin } from './spin';
export { QSteps, QStepsStep } from './steps';
export { QSwitch, QSwitch as ISwitch } from './switch';
export { QTable, QTableColumn, QTableRenderCreateElementData, QTableColumnRenderParams, QTableColumnRenderHeadParams, QTableExportCsvParams } from './table';
export { QTabs, QTabPane } from './tabs';
export { QTag } from './tag';
export { QTime } from './time';
export { QTimeline, QTimelineItem } from './timeline';
export { QTimePicker } from './time-picker';
export { QTooltip } from './tooltip';
export { QTransfer } from './transfer';
export { QTree, QTreeChild } from './tree';
export { QUpload } from './upload';

interface IViewGlobalOptions{
    size?: string;
    transfer?: boolean | string;
    select: {
        arrow: string;
        customArrow: string;
        arrowSize: number | string;
    };
    cell: {
        arrow: string;
        customArrow: string;
        arrowSize: number | string;
    };
    menu: {
        arrow: string;
        customArrow: string;
        arrowSize: number | string;
    };
    tree: {
        arrow: string;
        customArrow: string;
        arrowSize: number | string;
    };
    cascader: {
        arrow: string;
        customArrow: string;
        arrowSize: number | string;
        itemArrow: string;
        customItemArrow: string;
        itemArrowSize: number | string;
    };
    colorPicker: {
        arrow: string;
        customArrow: string;
        arrowSize: number | string;
    };
    datePicker: {
        icon: string;
        customIcon: string;
        iconSize: number | string;
    };
    timePicker: {
        icon: string;
        customIcon: string;
        iconSize: number | string;
    };
    tabs: {
        closeIcon: string;
        customCloseIcon: string;
        closeIconSize: number | string;
    };
    modal: {
        maskClosable: boolean | string;
    };
}

interface IViewInstallOptions extends IViewGlobalOptions{
    locale?: any;
    i18n?: any;
}

declare const API: {
    version: string;
    locale: (l: any) => void;
    i18n: (fn: any) => void;
    install: (
        Vue: Vue,
        opts: IViewInstallOptions
    ) => void;
    lang: (code: string) => void;
};

export default API;

declare module 'vue/types/vue' {
    interface Vue {
        $IVIEW: IViewGlobalOptions;
    }
}
