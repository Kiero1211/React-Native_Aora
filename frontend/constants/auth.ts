export interface ILoginForm {
    email: string;
    password: string;
}

export interface ISignUpForm {
    username: string;
    email: string;
    password: string;
}

export const initialLoginFormState: ILoginForm = {
    email: "",
    password: ""
}

export const initialSignUpFormState: ISignUpForm = {
    username: "",
    email: "",
    password: ""
}