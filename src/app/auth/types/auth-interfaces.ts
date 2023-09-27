export interface RegisterRequestInterface {
    user: {
        userName: string;
        email: string;
        password: string;
    };
}

export interface AuthStateInterface {
    isSubmitted: boolean;
}
