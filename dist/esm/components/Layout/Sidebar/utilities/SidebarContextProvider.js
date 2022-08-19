import React, { useCallback } from "react";
import { SidebarContext } from "./SidebarContext";
import useLocalStorage from "../../../Utilities/useLocalStorage";
import { SIDEBARSTATE_KEY } from "../../../Utilities/localStorageKeys";
export var SidebarContextProvider = function (_a) {
    var children = _a.children;
    // estado da sidebar, atualizado através do localstorage
    var _b = useLocalStorage(SIDEBARSTATE_KEY, false), isOpen = _b[0], setOpen = _b[1];
    var setIsOpen = useCallback(function () {
        setOpen(function (prev) { return !prev; });
    }, [setOpen]);
    var contextValue = {
        isOpen: isOpen,
        setIsOpen: setIsOpen,
    };
    return (React.createElement(SidebarContext.Provider, { value: contextValue }, children));
};
//# sourceMappingURL=SidebarContextProvider.js.map