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
import { NotificationContext } from "./NotificationContext";
import { useState, useCallback } from "react";
import React from 'react';
export var NotificationContextProvider = function (_a) {
    var children = _a.children;
    var _b = useState(null), notification = _b[0], setNotification = _b[1];
    var removeNotification = function () { return setNotification(null); };
    var addNotification = function (notification) {
        return setNotification(__assign(__assign({}, notification), { duration: notification.duration || 5000 }));
    };
    var contextValue = {
        notification: notification,
        addNotification: useCallback(function (notification) { return addNotification(notification); }, []),
        removeNotification: useCallback(function () { return removeNotification(); }, []),
    };
    return (React.createElement(NotificationContext.Provider, { value: contextValue }, children));
};
//# sourceMappingURL=NotificationContextProvider.js.map