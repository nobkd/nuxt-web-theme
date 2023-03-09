import { defineTheme } from 'pinceau';
import { getColors } from 'theme-colors';

export default defineTheme({
    color: {
        primary: getColors('#00DC82'),
    },
    prose: {
        h1: {
            margin: '1rem 0 2rem',
        },
    },
});
