import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'
import { Form } from '../entities/form.entity'
import { FormRepository } from '../repositories/form.repository'
import { GetFormQuery } from './get.form.query'

@QueryHandler(GetFormQuery)
export class GetFormQueryHandler implements IQueryHandler<GetFormQuery> {
    constructor(private formRepository: FormRepository) {}

    async execute(query: GetFormQuery): Promise<Form> {
        return await this.formRepository.findOneById(query.id)
    }
}
