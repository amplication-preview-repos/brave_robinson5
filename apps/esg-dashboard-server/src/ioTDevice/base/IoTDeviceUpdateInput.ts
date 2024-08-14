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
import { HouseWhereUniqueInput } from "../../house/base/HouseWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { ReadingUpdateManyWithoutIoTDevicesInput } from "./ReadingUpdateManyWithoutIoTDevicesInput";

@InputType()
class IoTDeviceUpdateInput {
  @ApiProperty({
    required: false,
    type: () => HouseWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HouseWhereUniqueInput)
  @IsOptional()
  @Field(() => HouseWhereUniqueInput, {
    nullable: true,
  })
  house?: HouseWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ReadingUpdateManyWithoutIoTDevicesInput,
  })
  @ValidateNested()
  @Type(() => ReadingUpdateManyWithoutIoTDevicesInput)
  @IsOptional()
  @Field(() => ReadingUpdateManyWithoutIoTDevicesInput, {
    nullable: true,
  })
  readings?: ReadingUpdateManyWithoutIoTDevicesInput;

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
  typeField?: string | null;
}

export { IoTDeviceUpdateInput as IoTDeviceUpdateInput };
