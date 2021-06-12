import { createMuiTheme } from '@material-ui/core/styles';
import palette from './palette.js';
import typography from './typography.js';

const theme = createMuiTheme({
    palette,
    typography
});

export default theme;