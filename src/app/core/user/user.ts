export interface User{
    jti: number;
    sub: string;
    iat: string;
    exp: string;
    roles: Authority[];
}


export interface Authority{
    authority: string;
}