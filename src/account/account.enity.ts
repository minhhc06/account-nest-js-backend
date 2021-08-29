import { Column, Entity, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm'
// import { NewsStatus } from './news-status.enum'

@Entity()
export class Account {
    @PrimaryColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    content: string;

    // @Column()
    // status: NewsStatus;

}
