import { XE } from 'xtal-element/src/XE.js';
export class VizzuLize extends HTMLElement {
    async onOptions({ options }) {
        const Vizzu = (await import('vizzu/dist/vizzu.min.js')).default;
        this.chart = new Vizzu(this);
        this.chart.animate(options);
    }
}
const xe = new XE({
    config: {
        tagName: 'vizzu-lize',
        actions: {
            onOptions: 'options'
        }
    },
    superclass: VizzuLize,
});
