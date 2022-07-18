import { CreateFormDto } from '../dto/create.form.dto'
import { UpdateFormDto } from '../dto/update-forms.dto'
import { Form } from '../entities/form.entity'

export abstract class FormRepository {
    abstract findOneById(id: string): Promise<Form>
    abstract findAll(): Promise<Form[]>

    abstract create(data: CreateFormDto): Promise<void>
    abstract delete(id: string): Promise<void>
    abstract update(id: string, data: UpdateFormDto): Promise<void>
}