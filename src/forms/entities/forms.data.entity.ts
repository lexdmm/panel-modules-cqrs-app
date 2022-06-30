import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { FormRoles } from '../enum/EnumForms'

@ObjectType()
@Entity()
export class FormData {

    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: string

    @Column({ length: 300, nullable: false })
    question: string

    @Column({ type: "enum", enum: FormRoles, default: FormRoles.SHORT_ANSWER })
    formType: FormRoles

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt: Date
}
