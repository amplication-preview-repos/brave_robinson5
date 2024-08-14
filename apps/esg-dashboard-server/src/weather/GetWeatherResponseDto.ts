import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("GetWeatherResponseDtoObject")
class GetWeatherResponseDto {
    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    temperature!: number;

    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    humidity!: number;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    weatherDescription!: string;

    @Field(() => Date)
    @Type(() => Date)
    timestamp!: Date;
}

export { GetWeatherResponseDto as GetWeatherResponseDto };