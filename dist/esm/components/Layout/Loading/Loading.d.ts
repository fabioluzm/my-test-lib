import React, { FC } from "react";
export interface ILiveLoadingProps {
    show: boolean;
    text?: string;
    color?: "inherit" | "primary" | "secondary" | "error" | "info" | "success" | "warning" | undefined;
}
export declare const Loading: FC<React.PropsWithChildren<ILiveLoadingProps>>;
//# sourceMappingURL=Loading.d.ts.map