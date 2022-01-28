import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateService1643221918653 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "services",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "worker_id",
            type: "uuid",
            isNullable: false,
          },
          {
            name: "category_id",
            type: "uuid",
            isNullable: false,
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "price",
            type: "real",
            isNullable: false,
          },
          {
            name: "estimated_time",
            type: "smallint",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKWorker",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["worker_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FKCategory",
            referencedTableName: "categories",
            referencedColumnNames: ["id"],
            columnNames: ["category_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "services"`);
  }
}
