import { DataGridProps } from '@mui/x-data-grid';

declare module '@mui/material/styles' {
    interface Theme {
        customIcons: {
            base: object;
            sizes: {
                small: number;
                medium: number;
                large: number;
            };
        };
        customIconsSun: {
            base: object;
            sizes: {
                small: number;
                medium: number;
                large: number;
            };
        };
    }

    interface ThemeOptions {
        customIcons?: {
            base?: object;
            sizes?: {
                small?: number;
                medium?: number;
                large?: number;
            };
        };
        customIconsSun?: {
            base?: object;
            sizes?: {
                small?: number;
                medium?: number;
                large?: number;
            };
        };
    }

    interface Components {
        MuiDataGrid?: {
            defaultProps?: Partial<DataGridProps>;
            styleOverrides?: {
                root?: any;
                row?: any;
                [key: string]: any;
            };
        };
    }

    interface Palette {
        base: {
            main: string;
            mainOp10: string;
            mainOp15: string;
            mainOp20: string;
            mainOp25: string;
            mainOp30: string;
            mainOp35: string;
            mainOp40: string;
            mainOp45: string;
            mainOp50: string;
            mainOp55: string;
            mainOp60: string;
            mainOp65: string;
            mainOp70: string;
            mainOp75: string;
            mainOp80: string;
            mainOp85: string;
            mainOp90: string;
            secondary: string;
            light: string;
            lightest: string;
            disabledLight: string;
            hoverFade: string;
            selected: string;
            alternateRow: string;
        };
        white: {
            main: string;
        };
        black: {
            main: string;
            op80: string;
        };
        gray: {
            main: string;
            sub: string;
            light: string;
            lightSub: string;
            op15: string;
        };
        information: {
            main: string;
            light: string;
            lightest: string;
            lightestOp50: string;
            accent: string;
        };
        natural: {
            lightest: string;
        };
        data: {
            primaryMain: string;
            primarySub: string;
            secondarySub: string;
            tealSub: string;
            yellowSub: string;
            redSub: string;
            blue: string;
        },
        border: {
            main: string;
            head: string;
            body: string;
        },
        bg: {
            mainOp10: string;
            disabled: string;
            light: string;
        },
        scrollbar: {
            track: string;
            thumb: string;
            trackSolid: string;
            thumbSolid: string;
        },
        tag: {
            light: string;
            dark: string;
            blue: string;
        };
        customIcons: {
            [key: string]: string;
        };
    }
    interface PaletteOptions {
        base: {
            main: string;
            mainOp10: string;
            mainOp15: string;
            mainOp20: string;
            mainOp25: string;
            mainOp30: string;
            mainOp35: string;
            mainOp40: string;
            mainOp45: string;
            mainOp50: string;
            mainOp55: string;
            mainOp60: string;
            mainOp65: string;
            mainOp70: string;
            mainOp75: string;
            mainOp80: string;
            mainOp85: string;
            mainOp90: string;
            secondary: string;
            light: string;
            light: string;
            lightest: string;
            disabledLight: string;
            hoverFade: string;
            selected: string;
            alternateRow: string;
        };
        white: {
            main: string;
        };
        black: {
            main: string;
            op80: string;
        };
        gray: {
            main: string;
            sub: string;
            light: string;
            lightSub: string;
            op15: string;
        };
        information: {
            main: string;
            light: string;
            lightest: string;
            lightestOp50: string;
            accent: string;
        };
        natural: {
            lightest: string;
        };
        data: {
            primaryMain: string;
            primarySub: string;
            secondarySub: string;
            tealSub: string;
            yellowSub: string;
            redSub: string;
            blue: string;
        },
        border: {
            main: string;
            head: string;
            body: string;
        },
        bg: {
            mainOp10: string;
            disabled: string;
            light: string;
        },
        scrollbar: {
            track: string;
            thumb: string;
            trackSolid: string;
            thumbSolid: string;
        },
        tag: {
            light: string;
            dark: string;
            blue: string;
        };
        customIcons?: {
            [key: string]: string;
        };
    }

    interface PaletteColor {
        sub?: string;
        lightest?: string;
        lightestOp50?: string;
        lightOp90?: string;
        lightOp95?: string;
        hovered?: string;
        selected?: string;
        accent? :string;
        op04?: string;
        op10?: string;
        op15?: string;
        op20?: string;
        op25?: string;
        op30?: string;
        op50?: string;
        op80?: string;
        op90?: string;
    }
    interface SimplePaletteColorOptions {
        sub?: string;
        lightest?: string;
        lightestOp50?: string;
        lightOp90?: string;
        lightOp95?: string;
        hovered?: string;
        selected?: string;
        accent? :string;
        op04?: string;
        op10?: string;
        op15?: string;
        op20?: string;
        op25?: string;
        op30?: string;
        op50?: string;
        op80?: string;
        op90?: string;
    }
}
