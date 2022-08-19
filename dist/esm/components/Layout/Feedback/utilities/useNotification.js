import { NotificationContext } from "./NotificationContext";
import { useContext } from "react";
function useNotification() {
    var _a = useContext(NotificationContext), notification = _a.notification, addNotification = _a.addNotification, removeNotification = _a.removeNotification;
    return { notification: notification, addNotification: addNotification, removeNotification: removeNotification };
}
export default useNotification;
//# sourceMappingURL=useNotification.js.map