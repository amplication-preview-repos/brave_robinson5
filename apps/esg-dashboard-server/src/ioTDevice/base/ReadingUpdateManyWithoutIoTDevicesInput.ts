/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ReadingWhereUniqueInput } from "../../reading/base/ReadingWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ReadingUpdateManyWithoutIoTDevicesInput {
  @Field(() => [ReadingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ReadingWhereUniqueInput],
  })
  connect?: Array<ReadingWhereUniqueInput>;

  @Field(() => [ReadingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ReadingWhereUniqueInput],
  })
  disconnect?: Array<ReadingWhereUniqueInput>;

  @Field(() => [ReadingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ReadingWhereUniqueInput],
  })
  set?: Array<ReadingWhereUniqueInput>;
}

export { ReadingUpdateManyWithoutIoTDevicesInput as ReadingUpdateManyWithoutIoTDevicesInput };
