//tema default
import * as variables from './theme-variables';
export var defaultTheme = {
    themeName: 'Default',
    palette: {
        type: 'light',
        primary: {
            main: variables.color_primary,
            contrastText: '#ffffff',
            light: '#ecf8f8',
        },
        success: {
            main: '#077d55',
            light: '#9a9e4c',
        },
        error: {
            main: '#d91f11',
            light: '#bf4e4b',
        },
        warning: {
            main: '#e86427',
            light: '#ef9c41',
        },
        info: {
            main: '#0d4ea6',
            light: '#2e4970',
        },
    },
    typography: {
        h1: {
            fontSize: 48,
            fontWeight: 400,
        },
        fontFamily: 'Altice',
        fontSize: 16,
        h2: {
            fontSize: 36,
            fontWeight: 400,
        },
        h3: {
            fontSize: 24,
            fontWeight: 400,
        },
        button: {
            fontSize: 14,
            fontWeight: 400,
        },
        subtitle1: {
            fontSize: 24,
            fontWeight: 700,
        },
        subtitle2: {
            fontSize: 12,
            fontWeight: 400,
        },
    },
    shape: {
        borderRadius: variables.borderRadius_default,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: variables.borderRadius_24,
                    paddingLeft: variables.borderRadius_24,
                    paddingRight: variables.borderRadius_24,
                    textTransform: 'capitalize',
                },
            },
        },
        MuiSelect: {
            defaultProps: {
                variant: 'outlined',
            },
            styleOverrides: {
                select: {
                    '&:focus': {
                        backgroundColor: 'none',
                    },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: variables.borderRadius_50,
                },
            },
        },
        MuiToggleButtonGroup: {
            styleOverrides: {
                root: {
                    height: '35px',
                    borderRadius: variables.borderRadius_50,
                },
            },
        },
        MuiToggleButton: {
            styleOverrides: {
                //TODO: Verificar se é possível importar a palette internamente
                root: {
                    color: variables.color_primary,
                    borderColor: variables.color_primary,
                    textTransform: 'capitalize',
                    '&.MuiToggleButtonGroup-grouped:not(:last-of-type)': {
                        borderRadius: variables.borderRadius_50 +
                            'px 0px 0px ' +
                            variables.borderRadius_50 +
                            'px',
                    },
                    '&.MuiToggleButtonGroup-grouped:not(:first-of-type)': {
                        borderRadius: '0px ' +
                            variables.borderRadius_50 +
                            'px ' +
                            variables.borderRadius_50 +
                            'px 0px',
                    },
                    '&.Mui-selected': {
                        backgroundColor: variables.color_primary,
                        color: '#fff',
                        '&:hover': {
                            backgroundColor: variables.color_primary,
                            color: '#fff',
                        },
                    },
                },
            },
        },
        MuiTextField: {
            defaultProps: {
                variant: 'outlined',
                margin: 'normal',
                size: 'small',
                fullWidth: true,
            },
        },
        MuiCheckbox: {
            defaultProps: {
                size: 'small',
            },
        },
        MuiInputBase: {
            defaultProps: {
                margin: 'dense',
            },
        },
        MuiInputLabel: {
            defaultProps: {
                margin: 'dense',
            },
        },
        MuiRadio: {
            defaultProps: {
                size: 'small',
            },
        },
        MuiToogleButtonGroup: {
            defaultProps: {
                color: 'primary',
            },
        },
        // MuiSwitch: {
        //    defaultProps: {
        //   size: 'small',
        //    }
        // },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    "&.contrast": {
                        color: variables.color_primary,
                        // backgroundColor: '#fff',
                        boxShadow: variables.boxShadow_default,
                        border: '4px solid #fff',
                        "&:hover, &.Mui-focusVisible": {
                            backgroundColor: variables.color_primary,
                            color: '#fff',
                            border: '4px solid #fff',
                        }
                    },
                    "&.noShadow": {
                        boxShadow: 'none'
                    },
                }
            },
        },
        MuiList: {
            styleOverrides: {
                root: {
                    margin: 0,
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    margin: 8,
                    padding: 0,
                    width: 'auto',
                    borderRadius: variables.borderRadius_default,
                }
            }
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    borderRadius: variables.borderRadius_default,
                    '&.live-sidebar-item': {
                        '&:hover': {
                            backgroundColor: 'unset'
                        },
                    }
                },
            },
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    marginTop: 0,
                    marginBottom: 0,
                    minWidth: 0,
                    '& .MuiTypography-root': {
                        color: variables.sidebarText_primary,
                        fontSize: 13
                    },
                    '& .MuiListItemText-primary': {
                        margin: 0,
                        fontFamily: 'Altice',
                        fontWeight: 700,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    },
                    '& .MuiListItemText-secondary': {
                        margin: 0,
                        fontFamily: 'Altice',
                        fontWeight: 400,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    },
                }
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    scrollbarColor: "#999 #E4E4E4",
                    "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                        width: 5,
                        height: 5,
                    },
                    "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                        borderRadius: 10,
                        backgroundColor: "#999",
                    },
                    "&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track": {
                        borderRadius: 10,
                        backgroundColor: "#E4E4E4",
                    },
                },
            },
        },
    },
};
//# sourceMappingURL=defaultTheme.js.map