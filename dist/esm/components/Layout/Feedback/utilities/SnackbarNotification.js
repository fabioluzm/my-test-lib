import { useLayoutEffect } from "react";
import React from 'react';
import useNotification from "./useNotification";
import { withSnackbar } from "./SnackbarHOC";
export var SnackbarNotification = withSnackbar(function (props) {
    var _a = useNotification(), notification = _a.notification, removeNotification = _a.removeNotification;
    var snackbarShowMessage = props.snackbarShowMessage;
    useLayoutEffect(function () {
        if (notification) {
            snackbarShowMessage(notification.message, notification.severity, notification.duration);
        }
        return function () {
            // remove Notification
            removeNotification();
        };
    }, [notification, removeNotification, snackbarShowMessage]);
    return React.createElement(React.Fragment, null);
});
//# sourceMappingURL=SnackbarNotification.js.map