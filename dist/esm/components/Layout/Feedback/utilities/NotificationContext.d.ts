/// <reference types="react" />
import { AlertColor } from "@mui/material";
export interface INotification {
    message: string | undefined;
    severity: AlertColor;
    duration?: number;
}
interface INotificationContextData {
    notification: INotification | null;
    addNotification: (notification: INotification) => void;
    removeNotification: () => void;
}
export declare const NotificationContext: import("react").Context<INotificationContextData>;
export {};
//# sourceMappingURL=NotificationContext.d.ts.map