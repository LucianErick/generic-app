import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAttendance1643306260331 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "attendances",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "user_id",
            type: "uuid",
            isNullable: false,
          },
          {
            name: "service_id",
            type: "uuid",
            isNullable: false,
          },
          {
            name: "start",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKUser",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FKService",
            referencedTableName: "services",
            referencedColumnNames: ["id"],
            columnNames: ["service_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "attendances"`);
  }
}
