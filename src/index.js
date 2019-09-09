import HelloWorld from './packages/hello-world/index.js';
import WatcherskyButton from './packages/button/index.js';
import WatcherskySelect from './packages/select/index.js';
import WatcherskyInput from './packages/input/index.js';
import WatcherskySwitch from './packages/switch/index.js';

const components = [
  HelloWorld,
  WatcherskyButton,
  WatcherskySelect,
  WatcherskyInput,
  WatcherskySwitch
]

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  HelloWorld,
  WatcherskyButton,
  WatcherskySelect,
  WatcherskyInput,
  WatcherskySwitch
}