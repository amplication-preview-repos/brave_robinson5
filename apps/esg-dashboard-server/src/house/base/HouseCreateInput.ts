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
} from "class-validator";
import { IoTDeviceCreateNestedManyWithoutHousesInput } from "./IoTDeviceCreateNestedManyWithoutHousesInput";
import { Type } from "class-transformer";

@InputType()
class HouseCreateInput {
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
  address?: string | null;

  @ApiProperty({
    required: false,
    type: () => IoTDeviceCreateNestedManyWithoutHousesInput,
  })
  @ValidateNested()
  @Type(() => IoTDeviceCreateNestedManyWithoutHousesInput)
  @IsOptional()
  @Field(() => IoTDeviceCreateNestedManyWithoutHousesInput, {
    nullable: true,
  })
  ioTDevices?: IoTDeviceCreateNestedManyWithoutHousesInput;

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
  owner?: string | null;
}

export { HouseCreateInput as HouseCreateInput };
