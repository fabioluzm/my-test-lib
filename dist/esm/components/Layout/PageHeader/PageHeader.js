import { Stack, Typography } from "@mui/material";
import React from "react";
export var PageHeader = function (_a) {
    var title = _a.title, subTitle = _a.subTitle, subTitleInfo = _a.subTitleInfo, backPage = _a.backPage, select = _a.select, children = _a.children, action = _a.action;
    return (React.createElement(React.Fragment, null,
        backPage,
        React.createElement(Stack, { direction: "row", spacing: 2, alignItems: "baseline" },
            React.createElement(Typography, { gutterBottom: true, variant: "h1", noWrap: true }, title),
            subTitle && (React.createElement(Typography, { ml: 2, gutterBottom: true, variant: "subtitle1", noWrap: true }, subTitle)),
            subTitleInfo && React.createElement(Typography, { variant: "subtitle2", ml: 1 }, subTitleInfo),
            select && (React.createElement(Stack, { direction: "row", alignContent: "flex-start" }, select)),
            children,
            action && (React.createElement(Stack, { direction: "row", justifyContent: "flex-end", flexGrow: "1" }, action)))));
};
//# sourceMappingURL=PageHeader.js.map