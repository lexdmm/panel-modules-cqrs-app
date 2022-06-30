import { InputType } from '@nestjs/graphql'
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator'

@InputType()
export class CreateFormsInput {

    @IsString()
    @IsNotEmpty({ message: 'The e-mail in form is not empty!' })
    email?: string

    @IsString()
    @IsNotEmpty({ message: 'The name form is not empty!' })
    name?: string

    @IsString()
    @IsNotEmpty({ message: 'The description form is not empty!' })
    description?: string

    @IsBoolean()
    isModule: boolean

    @IsNotEmpty({ message: 'The description form is not empty!' })
    createdDate?: Date

    @IsNotEmpty({ message: 'The description form is not empty!' })
    updatedDate?: Date

    @IsNotEmpty({ message: 'The description form is not empty!' })
    deletedDate?: Date
}