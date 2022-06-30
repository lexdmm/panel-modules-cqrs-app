import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateFormsInput } from './dto/create.forms.imput'
import { Forms } from './entities/forms.entity'

@Injectable()
export class FormsService {
    constructor(
        @InjectRepository(Forms) //Ta dizendo que o papel de criar a instancia é do repositório
        private _formsRepository: Repository<Forms>
    ) { }

    async createForms(data: CreateFormsInput): Promise<Forms> {
        const forms = this._formsRepository.create(data)
        const formsSaved = await this._formsRepository.save(forms)

        if (!formsSaved) {
            throw new InternalServerErrorException(
                'There was an error creating the form. Try again.'
            )
        }
        return formsSaved
    }
}
