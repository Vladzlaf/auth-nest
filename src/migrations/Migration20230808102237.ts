import { Migration } from '@mikro-orm/migrations';

export class Migration20230808102237 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "characters" ("id" serial primary key, "name" varchar(255) not null, "email" varchar(255) not null, "password" varchar(255) not null);');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "characters" cascade;');
  }

}
