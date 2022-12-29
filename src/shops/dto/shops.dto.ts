import { PickType } from "@nestjs/swagger";
import { Shop } from "../shops.entity";

export class createShopRequestDto extends PickType(Shop, [
  "shop_name",
  "address",
  "detailed_address",
  "ceo_name",
  "business_license_number",
  "manager_number",
  "manager_name",
  "email",
]) {}

export class updateShopRequestDto extends PickType(Shop, [
  "id",
  "shop_name",
  "address",
  "detailed_address",
  "ceo_name",
  "business_license_number",
  "manager_number",
  "manager_name",
  "email",
]) {}
