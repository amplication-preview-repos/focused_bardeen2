import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserMeasurementsService } from "./userMeasurements.service";
import { UserMeasurementsControllerBase } from "./base/userMeasurements.controller.base";

@swagger.ApiTags("userMeasurements")
@common.Controller("userMeasurements")
export class UserMeasurementsController extends UserMeasurementsControllerBase {
  constructor(protected readonly service: UserMeasurementsService) {
    super(service);
  }
}
