// import original module declarations
import 'solid-styled-components';
import { Colors } from './foundations';
import { THEME } from './THEME';

declare module 'solid-styled-components' {
    export interface DefaultTheme {
        theme: THEME;

        colors: Colors;
    }
}
