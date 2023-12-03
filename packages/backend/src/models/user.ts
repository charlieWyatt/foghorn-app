import { PrismaClient, User } from '@prisma/client';
import { db } from '../utils/db';

export class UserModel {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = db;
  }

  async createUser(data: Partial<User>) {
    return this.prisma.user.create({
      data,
    });
  }

  async getUserById(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async updateUser(id: number, data: Partial<User>) {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async deleteUser(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}