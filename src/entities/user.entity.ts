import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Characters {
  @PrimaryKey({ autoincrement: true })
  id!: number;

  @Property()
  name!: string;

  @Property()
  email!: string;

  @Property()
  password!: string;
}
