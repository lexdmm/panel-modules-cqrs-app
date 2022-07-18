import { Body, Controller, Delete, Get, HttpStatus, Inject, Param, Post, Put } from '@nestjs/common'
import { CommandBus, QueryBus } from '@nestjs/cqrs'
import { CreateFormCommand } from './commands/create.form.command'
import { DeleteFormCommand } from './commands/delete.form.command'
import { UpdateFormCommand } from './commands/update.form.command'
import { CreateFormDto } from './dto/create.form.dto'
import { UpdateFormDto } from './dto/update-forms.dto'
import { GetFormQuery } from './queries/get.form.query'
import { ListFormsQuery } from './queries/list.form.query'

@Controller('forms')
export class FormsController {
    @Inject(QueryBus)
    private readonly queryBus: QueryBus
    @Inject(CommandBus)
    private readonly commandBus: CommandBus

    @Post()
    create(@Body() createFormDto: CreateFormDto) {
        return this.commandBus.execute(new CreateFormCommand(createFormDto))
    }

    @Get()
    findAll() {
        return this.queryBus.execute(new ListFormsQuery())
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.queryBus.execute(new GetFormQuery(id))
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateFormDto: UpdateFormDto) {
        return this.commandBus.execute(new UpdateFormCommand(id, updateFormDto))
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.commandBus.execute(new DeleteFormCommand(id))
    }
}
