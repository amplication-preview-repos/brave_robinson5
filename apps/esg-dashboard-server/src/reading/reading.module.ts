import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ReadingModuleBase } from "./base/reading.module.base";
import { ReadingService } from "./reading.service";
import { ReadingController } from "./reading.controller";
import { ReadingResolver } from "./reading.resolver";

@Module({
  imports: [ReadingModuleBase, forwardRef(() => AuthModule)],
  controllers: [ReadingController],
  providers: [ReadingService, ReadingResolver],
  exports: [ReadingService],
})
export class ReadingModule {}
