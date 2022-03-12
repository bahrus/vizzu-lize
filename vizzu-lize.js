import Vizzux from 'node_modules/vizzu/dist/vizzu.d.js';
import { XE } from 'xtal-element/src/XE.js';
// let data = {
//     series: [
//       { name: 'Foo', values: ['Alice', 'Bob', 'Ted'] },
//       { name: 'Bar', values: [15, 32, 12] },
//       { name: 'Baz', values: [5, 3, 2] }
//     ]
//   };
//   let chart = new Vizzu('myVizzu', { data });
export class VizzuLize extends HTMLElement {
    onData({ data }) {
        this.chart = new Vizzu(this, { data });
    }
}
const xe = new XE({
    config: {
        tagName: 'vizzu-lize',
        actions: {
            onData: 'data'
        }
    }
});
