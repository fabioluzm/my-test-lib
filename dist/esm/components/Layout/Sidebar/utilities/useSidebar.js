import { useContext } from "react";
import { SidebarContext } from "./SidebarContext";
function useSidebar() {
    var _a = useContext(SidebarContext), isOpen = _a.isOpen, setIsOpen = _a.setIsOpen;
    return { isOpen: isOpen, setIsOpen: setIsOpen };
}
export default useSidebar;
//# sourceMappingURL=useSidebar.js.map