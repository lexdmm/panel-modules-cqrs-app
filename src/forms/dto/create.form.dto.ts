import {
    IsBoolean,
    IsNotEmpty,
    IsString
} from 'class-validator'

export class CreateFormDto {
    @IsString()
    @IsNotEmpty({ message: 'The e-mail in the form cannot be empty!' })
    email?: string

    @IsString()
    @IsNotEmpty({ message: 'The name in the form cannot be empty!' })
    name?: string

    @IsString()
    @IsNotEmpty({ message: 'The description in the form cannot be empty!' })
    description?: string

    @IsBoolean()
    isModule: boolean

    @IsNotEmpty({ message: 'The created date cannot be empty!' })
    createdDate?: Date

    @IsNotEmpty({ message: 'The updated date cannot be empty!' })
    updatedDate?: Date

    @IsNotEmpty({ message: 'The deleted date cannot be empty!' })
    deletedDate?: Date
}
