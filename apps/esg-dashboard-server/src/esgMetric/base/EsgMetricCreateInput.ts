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
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { ReadingCreateNestedManyWithoutEsgMetricsInput } from "./ReadingCreateNestedManyWithoutEsgMetricsInput";
import { Type } from "class-transformer";
import { EnumEsgMetricTypeField } from "./EnumEsgMetricTypeField";

@InputType()
class EsgMetricCreateInput {
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
  description?: string | null;

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
  metricName?: string | null;

  @ApiProperty({
    required: false,
    type: () => ReadingCreateNestedManyWithoutEsgMetricsInput,
  })
  @ValidateNested()
  @Type(() => ReadingCreateNestedManyWithoutEsgMetricsInput)
  @IsOptional()
  @Field(() => ReadingCreateNestedManyWithoutEsgMetricsInput, {
    nullable: true,
  })
  readings?: ReadingCreateNestedManyWithoutEsgMetricsInput;

  @ApiProperty({
    required: false,
    enum: EnumEsgMetricTypeField,
  })
  @IsEnum(EnumEsgMetricTypeField)
  @IsOptional()
  @Field(() => EnumEsgMetricTypeField, {
    nullable: true,
  })
  typeField?: "Option1" | null;
}

export { EsgMetricCreateInput as EsgMetricCreateInput };
