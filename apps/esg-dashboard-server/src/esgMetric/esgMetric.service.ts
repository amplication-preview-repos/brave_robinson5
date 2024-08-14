import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EsgMetricServiceBase } from "./base/esgMetric.service.base";

@Injectable()
export class EsgMetricService extends EsgMetricServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
