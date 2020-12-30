import { getGlobalVars } from '@fabula/core/styles/methods/misc/getGlobalVars';

export const testResponsive = (responsive, callback) => {
    describe('Responsive', () => {
        it('Should change props', () => {
            const { breakpoints } = getGlobalVars();
            const options = ['down', 'on', 'up'];
            
            for (let i = 0; i < options.length; i++) {
                const option = options[i];

                for (let j = 0; j < Object.keys(breakpoints).length; j++) {
                    const current = Object.keys(breakpoints)[j];
                    const max = breakpoints[current];
                    const next = Object.keys(breakpoints)[j + 1];
                    const min = (j < Object.keys(breakpoints).length - 1) ? breakpoints[next] : null;
                    let media;

                    if (option === 'down') {
                        media = `(max-width: ${max})`;
                    } else if (option === 'on') {
                        media = min ? `(min-width: ${min}) and (max-width: ${max})` : `(max-width: ${max})`;
                    } else if (option === 'up') {
                        media = `(min-width: ${max})`;
                    }

                    if (responsive[current]) {
                        if (callback) { callback(current, media); }
                    }
                }
            }
        });
    });
}