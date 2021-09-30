import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class User1633022762482 implements MigrationInterface {

    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tab_usuário',
                columns: [
                    {
                        name: "id",
                        type: 'integer',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "50"

                    },
                    {
                        name: "cnpj",
                        type: "varchar",
                        length: "15"
                    },
                    {
                        name: "email",
                        type: "varchar",
                        length: "30",
                        isNullable: false, isUnique: true
                    },
                    {
                        name: "password_hash",
                        type: "varchar",
                        length: "20", isNullable: false
                    },
                    {
                        name: "company",
                        type: "boolean",
                        default: "true",
                        isNullable: false
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }

                ]
            })
        )


    }


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tab_usuário')
    }

}

