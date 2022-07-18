import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'
import { FormRepository } from '../repositories/form.repository'
import { CreateFormCommand } from './create.form.command'

@CommandHandler(CreateFormCommand)
export class CreateFormHandler implements ICommandHandler<CreateFormCommand> {
    constructor(
        private formRepository: FormRepository,
    ) {}

    async execute(command: CreateFormCommand): Promise<void> {
        this.formRepository.create(command.data)
    }
}