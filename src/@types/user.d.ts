declare global {
    export interface UserInterface {
        id: string | number

        firstName: string

        lastName: string

        birthday: string

        gender: 0 | 1

        email: string

        phone: string

        address: string

        username: string

        password: string

        status: 0 | 1 | 2

        created_at: string

        updated_at: string

        delete_at: string
    }

    export interface Page {
        current: number
        max: number
        count?: number
    }

    export interface BaseResponse<T> {
        data: T
        page?: Page
    }
}

export {}