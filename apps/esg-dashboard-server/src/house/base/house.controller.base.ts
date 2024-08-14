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
import { HouseService } from "../house.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { HouseCreateInput } from "./HouseCreateInput";
import { House } from "./House";
import { HouseFindManyArgs } from "./HouseFindManyArgs";
import { HouseWhereUniqueInput } from "./HouseWhereUniqueInput";
import { HouseUpdateInput } from "./HouseUpdateInput";
import { IoTDeviceFindManyArgs } from "../../ioTDevice/base/IoTDeviceFindManyArgs";
import { IoTDevice } from "../../ioTDevice/base/IoTDevice";
import { IoTDeviceWhereUniqueInput } from "../../ioTDevice/base/IoTDeviceWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class HouseControllerBase {
  constructor(
    protected readonly service: HouseService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: House })
  @nestAccessControl.UseRoles({
    resource: "House",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createHouse(@common.Body() data: HouseCreateInput): Promise<House> {
    return await this.service.createHouse({
      data: data,
      select: {
        address: true,
        createdAt: true,
        id: true,
        owner: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [House] })
  @ApiNestedQuery(HouseFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "House",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async houses(@common.Req() request: Request): Promise<House[]> {
    const args = plainToClass(HouseFindManyArgs, request.query);
    return this.service.houses({
      ...args,
      select: {
        address: true,
        createdAt: true,
        id: true,
        owner: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: House })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "House",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async house(
    @common.Param() params: HouseWhereUniqueInput
  ): Promise<House | null> {
    const result = await this.service.house({
      where: params,
      select: {
        address: true,
        createdAt: true,
        id: true,
        owner: true,
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
  @swagger.ApiOkResponse({ type: House })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "House",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateHouse(
    @common.Param() params: HouseWhereUniqueInput,
    @common.Body() data: HouseUpdateInput
  ): Promise<House | null> {
    try {
      return await this.service.updateHouse({
        where: params,
        data: data,
        select: {
          address: true,
          createdAt: true,
          id: true,
          owner: true,
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
  @swagger.ApiOkResponse({ type: House })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "House",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteHouse(
    @common.Param() params: HouseWhereUniqueInput
  ): Promise<House | null> {
    try {
      return await this.service.deleteHouse({
        where: params,
        select: {
          address: true,
          createdAt: true,
          id: true,
          owner: true,
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
  @common.Get("/:id/ioTDevices")
  @ApiNestedQuery(IoTDeviceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "IoTDevice",
    action: "read",
    possession: "any",
  })
  async findIoTDevices(
    @common.Req() request: Request,
    @common.Param() params: HouseWhereUniqueInput
  ): Promise<IoTDevice[]> {
    const query = plainToClass(IoTDeviceFindManyArgs, request.query);
    const results = await this.service.findIoTDevices(params.id, {
      ...query,
      select: {
        createdAt: true,

        house: {
          select: {
            id: true,
          },
        },

        id: true,
        typeField: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/ioTDevices")
  @nestAccessControl.UseRoles({
    resource: "House",
    action: "update",
    possession: "any",
  })
  async connectIoTDevices(
    @common.Param() params: HouseWhereUniqueInput,
    @common.Body() body: IoTDeviceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      ioTDevices: {
        connect: body,
      },
    };
    await this.service.updateHouse({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/ioTDevices")
  @nestAccessControl.UseRoles({
    resource: "House",
    action: "update",
    possession: "any",
  })
  async updateIoTDevices(
    @common.Param() params: HouseWhereUniqueInput,
    @common.Body() body: IoTDeviceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      ioTDevices: {
        set: body,
      },
    };
    await this.service.updateHouse({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/ioTDevices")
  @nestAccessControl.UseRoles({
    resource: "House",
    action: "update",
    possession: "any",
  })
  async disconnectIoTDevices(
    @common.Param() params: HouseWhereUniqueInput,
    @common.Body() body: IoTDeviceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      ioTDevices: {
        disconnect: body,
      },
    };
    await this.service.updateHouse({
      where: params,
      data,
      select: { id: true },
    });
  }
}
