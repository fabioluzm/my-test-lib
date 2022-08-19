import React from "react";
import { NotificationContextProvider, SnackbarNotification } from "./utilities";
export var Feedback = function (_a) {
    var children = _a.children;
    return (React.createElement(React.Fragment, null,
        React.createElement(NotificationContextProvider, null,
            children,
            React.createElement(SnackbarNotification, null))));
};
//# sourceMappingURL=Feedback.js.map