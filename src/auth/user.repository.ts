import { EntityRepository, Repository } from "typeorm";
import { User } from "./user.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findByUid(uid: string) {
    const member = await this.findOne(uid);

    return member !== undefined;
  }
}
