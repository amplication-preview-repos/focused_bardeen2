import { Module } from "@nestjs/common";
import { GarmentModuleBase } from "./base/garment.module.base";
import { GarmentService } from "./garment.service";
import { GarmentController } from "./garment.controller";
import { GarmentResolver } from "./garment.resolver";

@Module({
  imports: [GarmentModuleBase],
  controllers: [GarmentController],
  providers: [GarmentService, GarmentResolver],
  exports: [GarmentService],
})
export class GarmentModule {}
