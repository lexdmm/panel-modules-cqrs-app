import { UpdateFormDto } from '../dto/update-forms.dto'

export class UpdateFormCommand {
    constructor(public id: string, public data: UpdateFormDto) {}
}