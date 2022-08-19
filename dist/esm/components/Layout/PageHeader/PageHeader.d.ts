import React, { FC } from "react";
export interface IPageHeaderProps {
    title: string;
    subTitle?: string;
    subTitleInfo?: string;
    backPage?: React.ReactNode;
    select?: React.ReactNode;
    children?: React.ReactNode;
    action?: React.ReactNode;
}
export declare const PageHeader: FC<IPageHeaderProps>;
//# sourceMappingURL=PageHeader.d.ts.map