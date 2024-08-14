/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  House as PrismaHouse,
  IoTDevice as PrismaIoTDevice,
} from "@prisma/client";

export class HouseServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.HouseCountArgs, "select">): Promise<number> {
    return this.prisma.house.count(args);
  }

  async houses(args: Prisma.HouseFindManyArgs): Promise<PrismaHouse[]> {
    return this.prisma.house.findMany(args);
  }
  async house(args: Prisma.HouseFindUniqueArgs): Promise<PrismaHouse | null> {
    return this.prisma.house.findUnique(args);
  }
  async createHouse(args: Prisma.HouseCreateArgs): Promise<PrismaHouse> {
    return this.prisma.house.create(args);
  }
  async updateHouse(args: Prisma.HouseUpdateArgs): Promise<PrismaHouse> {
    return this.prisma.house.update(args);
  }
  async deleteHouse(args: Prisma.HouseDeleteArgs): Promise<PrismaHouse> {
    return this.prisma.house.delete(args);
  }

  async findIoTDevices(
    parentId: string,
    args: Prisma.IoTDeviceFindManyArgs
  ): Promise<PrismaIoTDevice[]> {
    return this.prisma.house
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .ioTDevices(args);
  }
}
