import { Module } from "@nestjs/common";
import { UserMeasurementsModuleBase } from "./base/userMeasurements.module.base";
import { UserMeasurementsService } from "./userMeasurements.service";
import { UserMeasurementsController } from "./userMeasurements.controller";
import { UserMeasurementsResolver } from "./userMeasurements.resolver";

@Module({
  imports: [UserMeasurementsModuleBase],
  controllers: [UserMeasurementsController],
  providers: [UserMeasurementsService, UserMeasurementsResolver],
  exports: [UserMeasurementsService],
})
export class UserMeasurementsModule {}
