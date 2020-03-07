import cAffix from './components/affix';
import cAlert from './components/alert';
import cAnchor from './components/anchor';
import cAnchorLink from './components/anchor-link';
import cAutoComplete from './components/auto-complete';
import cAvatar from './components/avatar';
import cBackTop from './components/back-top';
import cBadge from './components/badge';
import cBreadcrumb from './components/breadcrumb';
import cButton from './components/button';
import cCard from './components/card';
import cCarousel from './components/carousel';
import cCascader from './components/cascader';
import cCell from './components/cell';
import cCheckbox from './components/checkbox';
import cCircle from './components/circle';
import cCollapse from './components/collapse';
import cColorPicker from './components/color-picker';
import cContent from './components/content';
import cDatePicker from './components/date-picker';
import cDivider from './components/divider';
import cDrawer from './components/drawer';
import cDropdown from './components/dropdown';
import cFooter from './components/footer';
import cForm from './components/form';
import cHeader from './components/header';
import cIcon from './components/icon';
import cInput from './components/input';
import cInputNumber from './components/input-number';
import cScroll from './components/scroll';
import cSplit from './components/split';
import cLayout from './components/layout';
import cList from './components/list';
import cLoadingBar from './components/loading-bar';
import cMenu from './components/menu';
import cMessage from './components/message';
import cModal from './components/modal';
import cNotice from './components/notice';
import cPage from './components/page';
import cPoptip from './components/poptip';
import cProgress from './components/progress';
import cRadio from './components/radio';
import cRate from './components/rate';
import cSider from './components/sider';
import cSlider from './components/slider';
import cSpin from './components/spin';
import cSteps from './components/steps';
import cSwitch from './components/switch';
import cTable from './components/table';
import cTabs from './components/tabs';
import cTag from './components/tag';
import cTime from './components/time';
import cTimeline from './components/timeline';
import cTimePicker from './components/time-picker';
import cTooltip from './components/tooltip';
import cTransfer from './components/transfer';
import cTree from './components/tree';
import cUpload from './components/upload';
import {Row, Col} from './components/grid';
import {Select, Option, OptionGroup} from './components/select';

let cRow = Row;
let cCol = Col;
let cSelect = Select;
let cOption = Option;
let cOptionGroup = OptionGroup;

// 修改所有组件的输出为"c-"开头
const components = {
    cCircle,
    cSwitch,

    cAffix,
    cAlert,
    cAnchor,
    cAnchorLink,
    cAutoComplete,
    cAvatar,
    cBackTop,
    cBadge,
    cBreadcrumb,
    cBreadcrumbItem: cBreadcrumb.Item,
    cButton,
    cButtonGroup: cButton.Group,
    cCard,
    cCarousel,
    cCarouselItem: cCarousel.Item,
    cCascader,
    cCell,
    cCellGroup: cCell.Group,
    cCheckbox,
    cCheckboxGroup: cCheckbox.Group,
    cCol,
    cCollapse,
    cColorPicker,
    cContent: cContent,
    cDatePicker,
    cDivider,
    cDrawer,
    cDropdown,
    cDropdownItem: cDropdown.Item,
    cDropdownMenu: cDropdown.Menu,
    cFooter: cFooter,
    cForm,
    cFormItem: cForm.Item,
    cHeader: cHeader,
    cIcon,
    cInput,
    cInputNumber,
    cScroll,
    cSider: cSider,
    cSplit,
    cSubmenu: cMenu.Sub,
    cLayout: cLayout,
    cList,
    cListItem: cList.Item,
    cListItemMeta: cList.Item.Meta,
    cLoadingBar,
    cMenu,
    cMenuGroup: cMenu.Group,
    cMenuItem: cMenu.Item,
    cMessage,
    cModal,
    cNotice,
    cOption: cOption,
    cOptionGroup,
    cPage,
    cPanel: cCollapse.Panel,
    cPoptip,
    cProgress,
    cRadio,
    cRadioGroup: cRadio.Group,
    cRate,
    cRow,
    cSelect,
    cSlider,
    cSpin,
    cStep: cSteps.Step,
    cSteps,
    cTable,
    cTabs: cTabs,
    cTabPane: cTabs.Pane,
    cTag,
    cTime,
    cTimeline,
    cTimelineItem: cTimeline.Item,
    cTimePicker,
    cTooltip,
    cTransfer,
    cTree,
    cUpload
};

export default components;