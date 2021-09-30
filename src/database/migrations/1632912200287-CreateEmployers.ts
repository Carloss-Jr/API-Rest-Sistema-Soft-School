import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";


export class CreateEmployers1632912200287 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tab_employers',
                columns: [
                    { name: "id", type: 'integer', isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                    { name: "name", type: "varchar", length: "30" },
                    { name: "password_hash", type: "varchar", length: "30", isNullable: false },
                    { name: "cpf", type: "varchar", length: "11" },
                    { name: "email", type: "varchar", length: "50", isNullable: false },
                    { name: "isCompany", type: "boolean", default: "false", isNullable: false },
                    { name: "created_at", type: "timestamp", default: "now()" },
                    { name: "updated_at", type: "timestamp", default: "now()" },
                    { name: "id_company", type: "integer", length: "5" }

                ]
            })
        )
        await queryRunner.createForeignKey("tab_employers", new TableForeignKey({
            columnNames: ["id_company"],
            referencedColumnNames: ["id"],
            referencedTableName: "tab_companies",
            name: "fk_employers_company",
            onUpdate: "CASCADE",
            onDelete: "CASCADE"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tab_employers')
    }

}


