/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsInt,
  Min,
  Max,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { GarmentWhereUniqueInput } from "../../garment/base/GarmentWhereUniqueInput";
import { Type } from "class-transformer";
import { UserMeasurementsWhereUniqueInput } from "../../userMeasurements/base/UserMeasurementsWhereUniqueInput";

@InputType()
class FitPredictionUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  fitRating?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  fitScore?: string | null;

  @ApiProperty({
    required: false,
    type: () => GarmentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GarmentWhereUniqueInput)
  @IsOptional()
  @Field(() => GarmentWhereUniqueInput, {
    nullable: true,
  })
  garment?: GarmentWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  recommendation?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserMeasurementsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserMeasurementsWhereUniqueInput)
  @IsOptional()
  @Field(() => UserMeasurementsWhereUniqueInput, {
    nullable: true,
  })
  userMeasurement?: UserMeasurementsWhereUniqueInput | null;
}

export { FitPredictionUpdateInput as FitPredictionUpdateInput };