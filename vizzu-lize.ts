import {CE} from 'trans-render/lib/CE.js';
import {VizzuLizeActions, VizzuLizeProps} from './types';

declare class Vizzu{
  constructor(element: Element)
}

export class VizzuLize extends HTMLElement implements VizzuLizeActions{
  async playAnimation({data, configs}: this) {
    const Vizzu = (await import('vizzu/dist/vizzu.min.js')).default;
    this.chart = new Vizzu(this);
    this.chart.animate({data, config: configs[0]});
    for(let i = 1, ii = configs.length; i < ii; i++){
        this.chart.animate({config: configs[i]});
    }
  }
}

export interface VizzuLize extends VizzuLizeProps{}

const ce = new CE<VizzuLizeProps, VizzuLizeActions>({
  config:{
    tagName: 'vizzu-lize',
    actions:{
      playAnimation: {
        ifAllOf: ['data', 'configs'],
      }
    }
  },
  superclass: VizzuLize,
});


