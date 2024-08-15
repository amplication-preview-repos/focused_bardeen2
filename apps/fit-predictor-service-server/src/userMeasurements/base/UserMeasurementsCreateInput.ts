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
  IsNumber,
  Min,
  Max,
  IsOptional,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { FitPredictionCreateNestedManyWithoutUserMeasurementsItemsInput } from "./FitPredictionCreateNestedManyWithoutUserMeasurementsItemsInput";
import { Type } from "class-transformer";
import { EnumUserMeasurementsGender } from "./EnumUserMeasurementsGender";

@InputType()
class UserMeasurementsCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  armLength?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  bust?: number | null;

  @ApiProperty({
    required: false,
    type: () => FitPredictionCreateNestedManyWithoutUserMeasurementsItemsInput,
  })
  @ValidateNested()
  @Type(() => FitPredictionCreateNestedManyWithoutUserMeasurementsItemsInput)
  @IsOptional()
  @Field(() => FitPredictionCreateNestedManyWithoutUserMeasurementsItemsInput, {
    nullable: true,
  })
  fitPredictions?: FitPredictionCreateNestedManyWithoutUserMeasurementsItemsInput;

  @ApiProperty({
    required: false,
    enum: EnumUserMeasurementsGender,
  })
  @IsEnum(EnumUserMeasurementsGender)
  @IsOptional()
  @Field(() => EnumUserMeasurementsGender, {
    nullable: true,
  })
  gender?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  height?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  hips?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  inseam?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  shoulderWidth?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  waist?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  weight?: number | null;
}

export { UserMeasurementsCreateInput as UserMeasurementsCreateInput };
