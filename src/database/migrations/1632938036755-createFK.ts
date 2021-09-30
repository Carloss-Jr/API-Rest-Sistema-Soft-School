import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class createFK1632938036755 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("tab_companies", new TableColumn({
            name: "employersId",
            type: "int",
            generationStrategy: "increment"
        }));
        await queryRunner.createForeignKey("tab_companies", new TableForeignKey({
            columnNames: ["employersId"],
            referencedColumnNames: ["id"],
            referencedTableName: "tab_employers",
            name: "fk_company_employers",
            onUpdate: "CASCADE",
            onDelete: "CASCADE"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropColumn("employers", "tab_companies")
    }

}
