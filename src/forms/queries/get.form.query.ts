import { IQuery } from '@nestjs/cqrs'

export class GetFormQuery implements IQuery {
    constructor(public id: string) {}
}
