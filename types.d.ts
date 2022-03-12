import Vizzu from 'node_modules/vizzu/dist/vizzu.d.js';

export interface VizzuLizeProps {
    data: any,
    chart: Vizzu
}

export interface VizzuLizeActions{
    
    onData(self: this): void;
}

