const showdown = require('showdown');
require('markflat.showdown');
import MarkFlatComponent from "./src/MarkFlatComponent";

const Markflat = {
  install(Vue, options) {
    // eslint-disable-next-line
    console.log(options)
    Vue.prototype.$markflat = new showdown.Converter({
      extensions: ['markflat'],
      ...options
    });
    Vue.component('markflat', MarkFlatComponent);
  }
}
export default Markflat;
