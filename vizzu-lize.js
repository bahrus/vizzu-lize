import { CE } from 'trans-render/lib/CE.js';
export class VizzuLize extends HTMLElement {
    async playAnimation({ data, configs }) {
        const Vizzu = (await import('vizzu/dist/vizzu.min.js')).default;
        this.chart = new Vizzu(this);
        this.chart.animate({ data, config: configs[0] });
        for (let i = 1, ii = configs.length; i < ii; i++) {
            this.chart.animate({ config: configs[i] });
        }
    }
}
const ce = new CE({
    config: {
        tagName: 'vizzu-lize',
        actions: {
            playAnimation: {
                ifAllOf: ['data', 'configs'],
            }
        }
    },
    superclass: VizzuLize,
});
