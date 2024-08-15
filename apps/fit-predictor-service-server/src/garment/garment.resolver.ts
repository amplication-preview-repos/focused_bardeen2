import * as graphql from "@nestjs/graphql";
import { GarmentResolverBase } from "./base/garment.resolver.base";
import { Garment } from "./base/Garment";
import { GarmentService } from "./garment.service";

@graphql.Resolver(() => Garment)
export class GarmentResolver extends GarmentResolverBase {
  constructor(protected readonly service: GarmentService) {
    super(service);
  }
}
