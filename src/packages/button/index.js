/*
 * @Author: kuangxj 
 * @Email: frankxjkuang@gmail.com 
 * @Date: 2018-07-09 15:49:13 
 * @Last Modified by:   kaungxj 
 * @Last Modified time: 2018-07-09 15:49:13 
 * @Description: File desctiption 
 */

import WatcherskyButton from './watchersky-button';

WatcherskyButton.install = function(Vue) {
  Vue.component(WatcherskyButton.name, WatcherskyButton);
};

export default WatcherskyButton;
