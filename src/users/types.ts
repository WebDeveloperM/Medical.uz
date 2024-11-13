import { ModelType } from "@core/types.ts"

export type BaseUserType = ModelType & {
    firstName: string
    lastName: string
}

export type SignUpFormDataForSuperUSer = BaseUserType & {
    clinicName: string,
    personalNumber: number
    personSerNum: string
}


