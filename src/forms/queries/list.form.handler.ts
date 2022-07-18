import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'
import { Form } from '../entities/form.entity'
import { FormRepository } from '../repositories/form.repository'
import { ListFormsQuery } from './list.form.query'

@QueryHandler(ListFormsQuery)
export class ListFormQueryHandler implements IQueryHandler<ListFormsQuery> {
    constructor(private formRepository: FormRepository) {}

    async execute(query: ListFormsQuery): Promise<Form[]> {
        return await this.formRepository.findAll()
    }
}