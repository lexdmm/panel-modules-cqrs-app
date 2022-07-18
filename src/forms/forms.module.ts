import { Module } from '@nestjs/common'
import { CqrsModule } from '@nestjs/cqrs'
import { FormsController } from './forms.controller'
import { GetFormQueryHandler } from './queries/get.form.handler'

@Module({
    providers: [GetFormQueryHandler],
    imports: [CqrsModule],
    controllers: [FormsController]
})
export class FormsModule {}
