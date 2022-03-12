import Vizzux from 'node_modules/vizzu/dist/vizzu.d.js';
// @ts-ignore
import Vizzu from 'vizzu/dist/vizzu.min.js';
import {XE} from 'xtal-element/src/XE.js';
import {VizzuLizeActions, VizzuLizeProps} from './types';

declare class Vizzu extends Vizzux{}

// let data = {
//     series: [
//       { name: 'Foo', values: ['Alice', 'Bob', 'Ted'] },
//       { name: 'Bar', values: [15, 32, 12] },
//       { name: 'Baz', values: [5, 3, 2] }
//     ]
//   };


  
//   let chart = new Vizzu('myVizzu', { data });

export class VizzuLize extends HTMLElement implements VizzuLizeActions{
  onData({data}: this){
    this.chart = new Vizzu(this, {data});
  }
}

export interface VizzuLize extends VizzuLizeProps{}

const xe = new XE<VizzuLizeProps, VizzuLizeActions>({
  config:{
    tagName: 'vizzu-lize',
    actions:{
      onData: 'data'
    }
  }
});


