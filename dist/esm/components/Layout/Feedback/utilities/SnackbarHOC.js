var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { Alert, Slide, Snackbar, } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import React from 'react';
import history from "../../../Utilities/history";
export var withSnackbar = function (WrappedComponent) {
    // Try to create a nice displayName for React Dev Tools.
    var displayName = WrappedComponent.displayName ||
        WrappedComponent.name ||
        "SnackbarComponent";
    var WithSnackbarComponent = function (props) {
        var _a = useState(false), open = _a[0], setOpen = _a[1];
        var _b = useState(""), message = _b[0], setMessage = _b[1];
        var _c = useState(5000), duration = _c[0], setDuration = _c[1];
        var _d = useState("success"), severity = _d[0], setSeverity = _d[1]; /** error | warning | info */
        useEffect(function () {
            return history.listen(function () {
                // when location change, close notification
                setOpen(false);
            });
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);
        var showMessage = useCallback(function (message, severity, duration) {
            if (severity === void 0) { severity = "success"; }
            if (duration === void 0) { duration = 5000; }
            if (severity === "error")
                duration = null;
            setMessage(message);
            setSeverity(severity);
            setDuration(duration);
            setOpen(true);
        }, []);
        var handleClose = function (event, reason) {
            if (reason === "clickaway") {
                return;
            }
            setOpen(false);
        };
        return (React.createElement(React.Fragment, null,
            React.createElement(WrappedComponent, __assign({}, props, { snackbarShowMessage: showMessage })),
            React.createElement(Snackbar, { open: open, autoHideDuration: duration, onClose: handleClose, sx: { width: "90%" }, anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "center",
                }, TransitionComponent: Slide },
                React.createElement(Alert, { onClose: handleClose, severity: severity, sx: { width: "100%" } }, message || props.unknowError))));
    };
    WithSnackbarComponent.displayName = "withSnackBar(".concat(displayName, ")");
    return WithSnackbarComponent;
};
//# sourceMappingURL=SnackbarHOC.js.map