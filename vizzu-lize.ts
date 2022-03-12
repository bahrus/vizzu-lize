import {XE} from 'xtal-element/src/XE.js';
import {VizzuLizeActions, VizzuLizeProps} from './types';

declare class Vizzu{
  constructor(element: Element)
}

export class VizzuLize extends HTMLElement implements VizzuLizeActions{
  async onOptions({options}: this){
    const Vizzu = (await import('vizzu/dist/vizzu.min.js')).default;
    this.chart = new Vizzu(this);
    this.chart.animate(options);
  }
}

export interface VizzuLize extends VizzuLizeProps{}

const xe = new XE<VizzuLizeProps, VizzuLizeActions>({
  config:{
    tagName: 'vizzu-lize',
    actions:{
      onOptions: 'options'
    }
  },
  superclass: VizzuLize,
});


