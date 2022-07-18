import { CreateFormDto } from '../dto/create.form.dto'

export class CreateFormCommand {
    constructor(public data: CreateFormDto) {}
}