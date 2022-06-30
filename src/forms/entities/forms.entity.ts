import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@ObjectType()
@Entity()
export class Forms {

    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: string

    @Column({ length: 150, nullable: false })
    email: string

    @Column({ length: 200, nullable: false })
    name: string

    @Column({ length: 400, nullable: false })
    description: string

    @Column({ type: 'boolean', default: false })
    isModule: boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt: Date
}
