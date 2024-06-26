import { CurrentUserInterface } from '../../shared/types/current-user.interface';
import { BackendErrorsInterface } from '../../shared/types/backend-errors.interface';

export interface RegisterRequestInterface {
    user: {
        username: string;
        email: string;
        password: string;
    };
}
export interface LoginRequestInterface {
    user: {
        email: string;
        password: string;
    };
}

export interface AuthStateInterface {
    isSubmitting: boolean;
    isLoading: boolean;
    currentUser: CurrentUserInterface | null;
    isLoggedIn: boolean | null;
    validationErrors: BackendErrorsInterface | null;
}

export interface AuthResponseInterface {
    user: CurrentUserInterface;
}
