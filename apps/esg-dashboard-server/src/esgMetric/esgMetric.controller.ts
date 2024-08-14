import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EsgMetricService } from "./esgMetric.service";
import { EsgMetricControllerBase } from "./base/esgMetric.controller.base";

@swagger.ApiTags("esgMetrics")
@common.Controller("esgMetrics")
export class EsgMetricController extends EsgMetricControllerBase {
  constructor(
    protected readonly service: EsgMetricService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
