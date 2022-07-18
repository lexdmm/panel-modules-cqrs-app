import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'
import { FormRepository } from '../repositories/form.repository'
import { UpdateFormCommand } from './update.form.command'

@CommandHandler(UpdateFormCommand)
export class UpdateBookHandler implements ICommandHandler<UpdateFormCommand> {
    constructor(private formRepository: FormRepository) {}

    async execute(command: UpdateFormCommand): Promise<void> {
        this.formRepository.update(command.id, command.data)
    }
}