import * as graphql from "@nestjs/graphql";
import { GetWeatherRequestDto } from "./GetWeatherRequestDto";
import { GetWeatherResponseDto } from "./GetWeatherResponseDto";
import { WeatherService } from "./weather.service";

export class WeatherResolver {
  constructor(protected readonly service: WeatherService) {}

  @graphql.Query(() => GetWeatherResponseDto)
  async FetchWeather(
    @graphql.Args()
    args: GetWeatherRequestDto
  ): Promise<GetWeatherResponseDto> {
    return this.service.FetchWeather(args);
  }
}
