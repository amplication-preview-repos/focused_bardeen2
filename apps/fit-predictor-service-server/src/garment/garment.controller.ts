import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GarmentService } from "./garment.service";
import { GarmentControllerBase } from "./base/garment.controller.base";

@swagger.ApiTags("garments")
@common.Controller("garments")
export class GarmentController extends GarmentControllerBase {
  constructor(protected readonly service: GarmentService) {
    super(service);
  }
}
