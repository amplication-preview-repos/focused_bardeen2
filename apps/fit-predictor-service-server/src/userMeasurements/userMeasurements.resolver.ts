import * as graphql from "@nestjs/graphql";
import { UserMeasurementsResolverBase } from "./base/userMeasurements.resolver.base";
import { UserMeasurements } from "./base/UserMeasurements";
import { UserMeasurementsService } from "./userMeasurements.service";

@graphql.Resolver(() => UserMeasurements)
export class UserMeasurementsResolver extends UserMeasurementsResolverBase {
  constructor(protected readonly service: UserMeasurementsService) {
    super(service);
  }
}
