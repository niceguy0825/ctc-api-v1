import { EntityRepository, Repository } from "typeorm";
import { ShopDetail } from "./shops_detail.entity";

@EntityRepository(ShopDetail)
export class ShopsDetailRepository extends Repository<ShopDetail> {}
