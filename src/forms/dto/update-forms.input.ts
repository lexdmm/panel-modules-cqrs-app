import { InputType } from '@nestjs/graphql'
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator'

@InputType()
export class UpdateFormsInput {

    @IsString()
    @IsNotEmpty({ message: 'The e-mail in form is not empty!' })
    @IsOptional()
    email?: string

    @IsString()
    @IsNotEmpty({ message: 'The name form is not empty!' })
    @IsOptional()
    name?: string

    @IsString()
    @IsNotEmpty({ message: 'The description form is not empty!' })
    @IsOptional()
    description?: string

    @IsBoolean()
    isModule: boolean

    @IsNotEmpty({ message: 'The description form is not empty!' })
    @IsOptional()
    createdDate?: Date

    @IsNotEmpty({ message: 'The description form is not empty!' })
    @IsOptional()
    updatedDate?: Date

    @IsNotEmpty({ message: 'The description form is not empty!' })
    @IsOptional()
    deletedDate?: Date
}