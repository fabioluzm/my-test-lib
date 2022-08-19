import React, { useState } from 'react';
import { AppLogo as Logo } from '../AppLogo';
import { Button, TextField, Link, Box, Grid, Typography, InputAdornment, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Visibility, VisibilityOff } from '@mui/icons-material';
export var Login = function (_a) {
    var logo = _a.logo, alt = _a.alt, title = _a.title, recover = _a.recover, buttonLabel = _a.buttonLabel;
    var handleSubmit = function (event) {
        event.preventDefault();
        var data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    var message = recover.message, path = recover.path;
    var _b = useState(false), showPassword = _b[0], setShowPassword = _b[1];
    return (React.createElement(Grid, { item: true, xs: 12, sm: 8, md: 5 },
        React.createElement(Box, { sx: {
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start'
            } },
            logo && (React.createElement(Logo, { variant: 'square', alt: alt, src: logo, sx: {
                    width: 200,
                    height: 'auto'
                } })),
            React.createElement(Typography, { variant: 'h1', color: 'secondary', sx: {
                    fontWeight: 700,
                    my: 4
                }, children: title }),
            React.createElement(Box, { component: 'form', noValidate: true, onSubmit: handleSubmit },
                React.createElement(TextField, { id: 'email', label: 'Email', name: 'email' }),
                React.createElement(TextField, { name: 'password', label: 'Password', id: 'password', type: showPassword ? 'text' : 'password', InputProps: {
                        endAdornment: (React.createElement(InputAdornment, { position: 'end' },
                            React.createElement(IconButton, { onClick: function () { setShowPassword(!showPassword); } }, showPassword ? React.createElement(VisibilityOff, null) : React.createElement(Visibility, null))))
                    } }),
                React.createElement(Box, { sx: {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'end'
                    } },
                    React.createElement(Link, { href: path, variant: 'subtitle2', sx: { mr: 1 } }, message),
                    React.createElement(Button, { type: 'submit', variant: 'contained', disableElevation: true, sx: { mt: 3 } },
                        buttonLabel,
                        React.createElement(ArrowForwardIcon, { sx: { fontSize: 16, ml: 1 } })))))));
};
//# sourceMappingURL=Login.js.map