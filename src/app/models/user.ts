export interface Roles {
    editor?: boolean;
    admin?: boolean;
    reader?: boolean;

}


export interface UserInterface {
    id?: string;
    name?: string;
    email?: string;
    surname1?: string;
    surname2?: string;
    birthday?: string;
    country?: string;
    cp?: string;
    phoneNumber?: string;
    password?: string;
    photoUrl?: string;
    roles?: Roles;
}