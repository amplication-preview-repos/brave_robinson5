/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { EsgMetricService } from "../esgMetric.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { EsgMetricCreateInput } from "./EsgMetricCreateInput";
import { EsgMetric } from "./EsgMetric";
import { EsgMetricFindManyArgs } from "./EsgMetricFindManyArgs";
import { EsgMetricWhereUniqueInput } from "./EsgMetricWhereUniqueInput";
import { EsgMetricUpdateInput } from "./EsgMetricUpdateInput";
import { ReadingFindManyArgs } from "../../reading/base/ReadingFindManyArgs";
import { Reading } from "../../reading/base/Reading";
import { ReadingWhereUniqueInput } from "../../reading/base/ReadingWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class EsgMetricControllerBase {
  constructor(
    protected readonly service: EsgMetricService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: EsgMetric })
  @nestAccessControl.UseRoles({
    resource: "EsgMetric",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createEsgMetric(
    @common.Body() data: EsgMetricCreateInput
  ): Promise<EsgMetric> {
    return await this.service.createEsgMetric({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        metricName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [EsgMetric] })
  @ApiNestedQuery(EsgMetricFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "EsgMetric",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async esgMetrics(@common.Req() request: Request): Promise<EsgMetric[]> {
    const args = plainToClass(EsgMetricFindManyArgs, request.query);
    return this.service.esgMetrics({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        metricName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: EsgMetric })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "EsgMetric",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async esgMetric(
    @common.Param() params: EsgMetricWhereUniqueInput
  ): Promise<EsgMetric | null> {
    const result = await this.service.esgMetric({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        metricName: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: EsgMetric })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "EsgMetric",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateEsgMetric(
    @common.Param() params: EsgMetricWhereUniqueInput,
    @common.Body() data: EsgMetricUpdateInput
  ): Promise<EsgMetric | null> {
    try {
      return await this.service.updateEsgMetric({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          metricName: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: EsgMetric })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "EsgMetric",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteEsgMetric(
    @common.Param() params: EsgMetricWhereUniqueInput
  ): Promise<EsgMetric | null> {
    try {
      return await this.service.deleteEsgMetric({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          metricName: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/readings")
  @ApiNestedQuery(ReadingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Reading",
    action: "read",
    possession: "any",
  })
  async findReadings(
    @common.Req() request: Request,
    @common.Param() params: EsgMetricWhereUniqueInput
  ): Promise<Reading[]> {
    const query = plainToClass(ReadingFindManyArgs, request.query);
    const results = await this.service.findReadings(params.id, {
      ...query,
      select: {
        createdAt: true,

        esgMetric: {
          select: {
            id: true,
          },
        },

        id: true,

        ioTDevice: {
          select: {
            id: true,
          },
        },

        timestamp: true,
        updatedAt: true,
        value: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/readings")
  @nestAccessControl.UseRoles({
    resource: "EsgMetric",
    action: "update",
    possession: "any",
  })
  async connectReadings(
    @common.Param() params: EsgMetricWhereUniqueInput,
    @common.Body() body: ReadingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      readings: {
        connect: body,
      },
    };
    await this.service.updateEsgMetric({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/readings")
  @nestAccessControl.UseRoles({
    resource: "EsgMetric",
    action: "update",
    possession: "any",
  })
  async updateReadings(
    @common.Param() params: EsgMetricWhereUniqueInput,
    @common.Body() body: ReadingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      readings: {
        set: body,
      },
    };
    await this.service.updateEsgMetric({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/readings")
  @nestAccessControl.UseRoles({
    resource: "EsgMetric",
    action: "update",
    possession: "any",
  })
  async disconnectReadings(
    @common.Param() params: EsgMetricWhereUniqueInput,
    @common.Body() body: ReadingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      readings: {
        disconnect: body,
      },
    };
    await this.service.updateEsgMetric({
      where: params,
      data,
      select: { id: true },
    });
  }
}
