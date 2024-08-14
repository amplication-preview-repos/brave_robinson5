/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { IoTDevice } from "./IoTDevice";
import { IoTDeviceCountArgs } from "./IoTDeviceCountArgs";
import { IoTDeviceFindManyArgs } from "./IoTDeviceFindManyArgs";
import { IoTDeviceFindUniqueArgs } from "./IoTDeviceFindUniqueArgs";
import { CreateIoTDeviceArgs } from "./CreateIoTDeviceArgs";
import { UpdateIoTDeviceArgs } from "./UpdateIoTDeviceArgs";
import { DeleteIoTDeviceArgs } from "./DeleteIoTDeviceArgs";
import { ReadingFindManyArgs } from "../../reading/base/ReadingFindManyArgs";
import { Reading } from "../../reading/base/Reading";
import { House } from "../../house/base/House";
import { IoTDeviceService } from "../ioTDevice.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => IoTDevice)
export class IoTDeviceResolverBase {
  constructor(
    protected readonly service: IoTDeviceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "IoTDevice",
    action: "read",
    possession: "any",
  })
  async _ioTDevicesMeta(
    @graphql.Args() args: IoTDeviceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [IoTDevice])
  @nestAccessControl.UseRoles({
    resource: "IoTDevice",
    action: "read",
    possession: "any",
  })
  async ioTDevices(
    @graphql.Args() args: IoTDeviceFindManyArgs
  ): Promise<IoTDevice[]> {
    return this.service.ioTDevices(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => IoTDevice, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "IoTDevice",
    action: "read",
    possession: "own",
  })
  async ioTDevice(
    @graphql.Args() args: IoTDeviceFindUniqueArgs
  ): Promise<IoTDevice | null> {
    const result = await this.service.ioTDevice(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => IoTDevice)
  @nestAccessControl.UseRoles({
    resource: "IoTDevice",
    action: "create",
    possession: "any",
  })
  async createIoTDevice(
    @graphql.Args() args: CreateIoTDeviceArgs
  ): Promise<IoTDevice> {
    return await this.service.createIoTDevice({
      ...args,
      data: {
        ...args.data,

        house: args.data.house
          ? {
              connect: args.data.house,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => IoTDevice)
  @nestAccessControl.UseRoles({
    resource: "IoTDevice",
    action: "update",
    possession: "any",
  })
  async updateIoTDevice(
    @graphql.Args() args: UpdateIoTDeviceArgs
  ): Promise<IoTDevice | null> {
    try {
      return await this.service.updateIoTDevice({
        ...args,
        data: {
          ...args.data,

          house: args.data.house
            ? {
                connect: args.data.house,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => IoTDevice)
  @nestAccessControl.UseRoles({
    resource: "IoTDevice",
    action: "delete",
    possession: "any",
  })
  async deleteIoTDevice(
    @graphql.Args() args: DeleteIoTDeviceArgs
  ): Promise<IoTDevice | null> {
    try {
      return await this.service.deleteIoTDevice(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Reading], { name: "readings" })
  @nestAccessControl.UseRoles({
    resource: "Reading",
    action: "read",
    possession: "any",
  })
  async findReadings(
    @graphql.Parent() parent: IoTDevice,
    @graphql.Args() args: ReadingFindManyArgs
  ): Promise<Reading[]> {
    const results = await this.service.findReadings(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => House, {
    nullable: true,
    name: "house",
  })
  @nestAccessControl.UseRoles({
    resource: "House",
    action: "read",
    possession: "any",
  })
  async getHouse(@graphql.Parent() parent: IoTDevice): Promise<House | null> {
    const result = await this.service.getHouse(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
