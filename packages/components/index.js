// 引入组件
import componentName from './components/public/Steps'
componentName.install = Vue => Vue.component(componentName.name, componentName);

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(componentName);
}

export default componentName;
