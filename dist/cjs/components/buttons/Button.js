"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const Button = (_a) => {
    var { children, backgroundColor, color, width, height, opacity, style } = _a, props = __rest(_a, ["children", "backgroundColor", "color", "width", "height", "opacity", "style"]);
    let _style = style || {};
    // override defaults
    if (backgroundColor)
        _style.backgroundColor = backgroundColor;
    if (color)
        _style.color = color;
    if (width)
        _style.width = width;
    if (height)
        _style.height = height;
    if (height)
        _style.opacity = height;
    return (react_1.default.createElement("button", Object.assign({ style: _style }, props), children));
};
exports.Button = Button;
//# sourceMappingURL=Button.js.map