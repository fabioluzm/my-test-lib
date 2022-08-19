declare function useNotification(): {
    notification: import("./NotificationContext").INotification | null;
    addNotification: (notification: import("./NotificationContext").INotification) => void;
    removeNotification: () => void;
};
export default useNotification;
//# sourceMappingURL=useNotification.d.ts.map