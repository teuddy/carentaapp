export interface User {
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    phone_number: string,
    address: string,
    avatar_url: string,
    is_verified: Boolean,
    verification_token: string,
    reset_password_token: string,
}