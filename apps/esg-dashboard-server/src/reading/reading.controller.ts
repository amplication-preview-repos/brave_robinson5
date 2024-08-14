import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ReadingService } from "./reading.service";
import { ReadingControllerBase } from "./base/reading.controller.base";

@swagger.ApiTags("readings")
@common.Controller("readings")
export class ReadingController extends ReadingControllerBase {
  constructor(
    protected readonly service: ReadingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
