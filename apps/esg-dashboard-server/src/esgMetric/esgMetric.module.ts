import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EsgMetricModuleBase } from "./base/esgMetric.module.base";
import { EsgMetricService } from "./esgMetric.service";
import { EsgMetricController } from "./esgMetric.controller";
import { EsgMetricResolver } from "./esgMetric.resolver";

@Module({
  imports: [EsgMetricModuleBase, forwardRef(() => AuthModule)],
  controllers: [EsgMetricController],
  providers: [EsgMetricService, EsgMetricResolver],
  exports: [EsgMetricService],
})
export class EsgMetricModule {}
