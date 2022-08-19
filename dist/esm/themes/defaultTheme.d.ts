export declare const defaultTheme: {
    themeName: string;
    palette: {
        type: string;
        primary: {
            main: string;
            contrastText: string;
            light: string;
        };
        success: {
            main: string;
            light: string;
        };
        error: {
            main: string;
            light: string;
        };
        warning: {
            main: string;
            light: string;
        };
        info: {
            main: string;
            light: string;
        };
    };
    typography: {
        h1: {
            fontSize: number;
            fontWeight: number;
        };
        fontFamily: string;
        fontSize: number;
        h2: {
            fontSize: number;
            fontWeight: number;
        };
        h3: {
            fontSize: number;
            fontWeight: number;
        };
        button: {
            fontSize: number;
            fontWeight: number;
        };
        subtitle1: {
            fontSize: number;
            fontWeight: number;
        };
        subtitle2: {
            fontSize: number;
            fontWeight: number;
        };
    };
    shape: {
        borderRadius: number;
    };
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: number;
                    paddingLeft: number;
                    paddingRight: number;
                    textTransform: string;
                };
            };
        };
        MuiSelect: {
            defaultProps: {
                variant: string;
            };
            styleOverrides: {
                select: {
                    '&:focus': {
                        backgroundColor: string;
                    };
                };
            };
        };
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: number;
                };
            };
        };
        MuiToggleButtonGroup: {
            styleOverrides: {
                root: {
                    height: string;
                    borderRadius: number;
                };
            };
        };
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    color: string;
                    borderColor: string;
                    textTransform: string;
                    '&.MuiToggleButtonGroup-grouped:not(:last-of-type)': {
                        borderRadius: string;
                    };
                    '&.MuiToggleButtonGroup-grouped:not(:first-of-type)': {
                        borderRadius: string;
                    };
                    '&.Mui-selected': {
                        backgroundColor: string;
                        color: string;
                        '&:hover': {
                            backgroundColor: string;
                            color: string;
                        };
                    };
                };
            };
        };
        MuiTextField: {
            defaultProps: {
                variant: string;
                margin: string;
                size: string;
                fullWidth: boolean;
            };
        };
        MuiCheckbox: {
            defaultProps: {
                size: string;
            };
        };
        MuiInputBase: {
            defaultProps: {
                margin: string;
            };
        };
        MuiInputLabel: {
            defaultProps: {
                margin: string;
            };
        };
        MuiRadio: {
            defaultProps: {
                size: string;
            };
        };
        MuiToogleButtonGroup: {
            defaultProps: {
                color: string;
            };
        };
        MuiIconButton: {
            styleOverrides: {
                root: {
                    "&.contrast": {
                        color: string;
                        boxShadow: string;
                        border: string;
                        "&:hover, &.Mui-focusVisible": {
                            backgroundColor: string;
                            color: string;
                            border: string;
                        };
                    };
                    "&.noShadow": {
                        boxShadow: string;
                    };
                };
            };
        };
        MuiList: {
            styleOverrides: {
                root: {
                    margin: number;
                };
            };
        };
        MuiListItem: {
            styleOverrides: {
                root: {
                    margin: number;
                    padding: number;
                    width: string;
                    borderRadius: number;
                };
            };
        };
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    borderRadius: number;
                    '&.live-sidebar-item': {
                        '&:hover': {
                            backgroundColor: string;
                        };
                    };
                };
            };
        };
        MuiListItemText: {
            styleOverrides: {
                root: {
                    marginTop: number;
                    marginBottom: number;
                    minWidth: number;
                    '& .MuiTypography-root': {
                        color: string;
                        fontSize: number;
                    };
                    '& .MuiListItemText-primary': {
                        margin: number;
                        fontFamily: string;
                        fontWeight: number;
                        whiteSpace: string;
                        overflow: string;
                        textOverflow: string;
                    };
                    '& .MuiListItemText-secondary': {
                        margin: number;
                        fontFamily: string;
                        fontWeight: number;
                        whiteSpace: string;
                        overflow: string;
                        textOverflow: string;
                    };
                };
            };
        };
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    scrollbarColor: string;
                    "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                        width: number;
                        height: number;
                    };
                    "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                        borderRadius: number;
                        backgroundColor: string;
                    };
                    "&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track": {
                        borderRadius: number;
                        backgroundColor: string;
                    };
                };
            };
        };
    };
};
//# sourceMappingURL=defaultTheme.d.ts.map