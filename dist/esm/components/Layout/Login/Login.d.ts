import { FC } from 'react';
export interface ILogin {
    logo?: string;
    alt?: string;
    title: string;
    recover: {
        message: string;
        path: string;
    };
    buttonLabel: string;
}
export declare const Login: FC<ILogin>;
//# sourceMappingURL=Login.d.ts.map