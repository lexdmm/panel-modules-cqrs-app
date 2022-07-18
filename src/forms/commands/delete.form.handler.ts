import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'
import { FormRepository } from '../repositories/form.repository'
import { DeleteFormCommand } from './delete.form.command'

@CommandHandler(DeleteFormCommand)
export class DeleteFormHandler implements ICommandHandler<DeleteFormCommand> {
    constructor(private formRepository: FormRepository) {}

    async execute(command: DeleteFormCommand): Promise<void> {
        this.formRepository.delete(command.id)
    }
}