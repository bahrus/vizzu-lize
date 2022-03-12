import {XE} from 'xtal-element/src/XE.js';
import {VizzuLizeActions, VizzuLizeProps} from './types';

declare class Vizzu{
  constructor(element: Element, {data: any})
}

// let data = {
//     series: [
//       { name: 'Foo', values: ['Alice', 'Bob', 'Ted'] },
//       { name: 'Bar', values: [15, 32, 12] },
//       { name: 'Baz', values: [5, 3, 2] }
//     ]
//   };


  
//   let chart = new Vizzu('myVizzu', { data });

export class VizzuLize extends HTMLElement implements VizzuLizeActions{
  async onData({data}: this){
    const Vizzu = (await import('vizzu/dist/vizzu.min.js')).default;
    this.chart = new Vizzu(this);
    this.chart.animate(data);
  }
}

export interface VizzuLize extends VizzuLizeProps{}

const xe = new XE<VizzuLizeProps, VizzuLizeActions>({
  config:{
    tagName: 'vizzu-lize',
    actions:{
      onData: 'data'
    }
  },
  superclass: VizzuLize,
});


