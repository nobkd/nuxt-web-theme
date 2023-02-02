import { defineTheme, palette } from 'pinceau';

const primary = palette('#00DC82');

export default defineTheme({
    color: {
        primary: primary,
    },
    prose: {
        h1: {
            margin: '1rem 0 2rem',
        },
    },
});
