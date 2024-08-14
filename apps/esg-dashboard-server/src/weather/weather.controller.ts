import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { WeatherService } from "./weather.service";
import { GetWeatherRequestDto } from "./GetWeatherRequestDto";
import { GetWeatherResponseDto } from "./GetWeatherResponseDto";

@swagger.ApiTags("weathers")
@common.Controller("weathers")
export class WeatherController {
  constructor(protected readonly service: WeatherService) {}

  @common.Get("/weather")
  @swagger.ApiOkResponse({
    type: GetWeatherResponseDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchWeather(
    @common.Body()
    body: GetWeatherRequestDto
  ): Promise<GetWeatherResponseDto> {
        return this.service.FetchWeather(body);
      }
}
