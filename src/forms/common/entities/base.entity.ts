import { CreateDateColumn, DeleteDateColumn, Entity, UpdateDateColumn, VersionColumn } from 'typeorm'

@Entity()
export class BaseEntity {
    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt: Date

    @VersionColumn()
    version = 0;
}