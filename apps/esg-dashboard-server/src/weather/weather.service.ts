import { Injectable } from "@nestjs/common";
import { GetWeatherRequestDto } from "./GetWeatherRequestDto";
import { GetWeatherResponseDto } from "./GetWeatherResponseDto";

@Injectable()
export class WeatherService {
  constructor() {}
  async FetchWeather(args: GetWeatherRequestDto): Promise<GetWeatherResponseDto> {
    throw new Error("Not implemented");
  }
}
