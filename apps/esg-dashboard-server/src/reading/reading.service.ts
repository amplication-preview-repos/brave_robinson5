import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReadingServiceBase } from "./base/reading.service.base";

@Injectable()
export class ReadingService extends ReadingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
