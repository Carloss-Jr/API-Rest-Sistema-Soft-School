import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateCompany1632912331408 implements MigrationInterface {

    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tab_companies',
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
                        length: "15",
                        isNullable: false
                    },
                    {
                        name: "email",
                        type: "varchar",
                        length: "50",
                        isNullable: false
                    },
                    {
                        name: "password_hash",
                        type: "varchar",
                        length: "30", isNullable: false
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
        queryRunner.dropTable('tab_companies')
    }

}
