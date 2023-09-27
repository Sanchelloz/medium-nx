import { CurrentUserInterface } from '../../shared/types/current-user.interface';

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

export interface AuthResponseInterface {
    user: CurrentUserInterface;
}
