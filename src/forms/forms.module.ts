import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Forms } from './entities/forms.entity'
import { FormsService } from './forms.service'

@Module({
    imports: [TypeOrmModule.forFeature([Forms])],
    providers: [FormsService]
})
export class FormsModule { }
