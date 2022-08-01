var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
export const Button = (_a) => {
    var { children, backgroundColor, color, style } = _a, props = __rest(_a, ["children", "backgroundColor", "color", "style"]);
    let _style = style || {};
    // override defaults
    if (backgroundColor)
        _style.backgroundColor = backgroundColor;
    if (color)
        _style.color = color;
    return (React.createElement("button", Object.assign({ style: _style }, props), children));
};
//# sourceMappingURL=Button.js.map