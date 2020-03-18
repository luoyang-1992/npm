// 导入颜色选择器组件
import Steps from './components/src/public/Steps'
import Attachment from './components/src/public/Attachment'
import LeavingMsg from './components/src/public/LeavingMsg'
import FormInfo from "./components/src/public/FormInfo/index";
import EmployeeSearch from "./components/src/public/EmployeeSearch/index";
import OnlineReport from "./components/src/public/OnlineReport/index";
import BatchTool from "./components/src/public/BatchTool/index";

// import './theme/default/index.css'
// import './styles/index.scss'


// 存储组件列表
const components = [
  Steps,
  Attachment,
  LeavingMsg,
  FormInfo,
  EmployeeSearch,
  OnlineReport,
  BatchTool
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  Steps,
  Attachment,
  LeavingMsg,
  FormInfo,
  EmployeeSearch,
  OnlineReport,
  BatchTool
}
