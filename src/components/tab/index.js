import eppTab from './src/tab.vue';
import eppTabItem from './src/tab-item.vue';
/* istanbul ignore next */
eppTab.install = function(Vue) {
  Vue.component(eppTab.name, eppTab);
};
eppTabItem.install = function(Vue) {
  Vue.component(eppTabItem.name, eppTabItem);
};
export {
    eppTabItem,
    eppTab
};


// import Cell from '../../src/cell/cell.vue';
// import CellGroup from '../../src/cell/cell-group.vue';
//
// Cell.install = function (Vue) {
//     Vue.component(Cell.name, Cell);
//     Vue.component(CellGroup.name, CellGroup);
// };
//
// Cell.CellGroup = CellGroup;
//
// export default Cell;
