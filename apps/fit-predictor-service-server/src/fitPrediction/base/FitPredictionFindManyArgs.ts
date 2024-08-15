/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FitPredictionWhereInput } from "./FitPredictionWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FitPredictionOrderByInput } from "./FitPredictionOrderByInput";

@ArgsType()
class FitPredictionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FitPredictionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FitPredictionWhereInput, { nullable: true })
  @Type(() => FitPredictionWhereInput)
  where?: FitPredictionWhereInput;

  @ApiProperty({
    required: false,
    type: [FitPredictionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FitPredictionOrderByInput], { nullable: true })
  @Type(() => FitPredictionOrderByInput)
  orderBy?: Array<FitPredictionOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FitPredictionFindManyArgs as FitPredictionFindManyArgs };