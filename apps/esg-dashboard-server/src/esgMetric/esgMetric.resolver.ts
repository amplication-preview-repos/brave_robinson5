import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EsgMetricResolverBase } from "./base/esgMetric.resolver.base";
import { EsgMetric } from "./base/EsgMetric";
import { EsgMetricService } from "./esgMetric.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EsgMetric)
export class EsgMetricResolver extends EsgMetricResolverBase {
  constructor(
    protected readonly service: EsgMetricService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
