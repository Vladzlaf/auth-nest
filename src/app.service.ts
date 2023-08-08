import { Injectable } from '@nestjs/common';
import { EntityManager, MikroORM } from '@mikro-orm/core';
import { Characters } from './entities/user.entity';

@Injectable()
export class AppService {
  constructor(
    private readonly em: EntityManager,
    private readonly orm: MikroORM,
  ) {}

  async create(data: any): Promise<Characters> {
    const user = new Characters();
    Object.assign(user, data);

    await this.em.persistAndFlush(user);
    return user;
  }

  async findOne(condition: any): Promise<Characters | null> {
    return this.em.findOne(Characters, condition);
  }

  async delete(id: number): Promise<void> {
    const user = await this.findOne({ id });
    if (user) {
      await this.em.removeAndFlush(user);
    }
  }
}
