import { Injectable } from '@nestjs/common';
import { File } from '@prisma/client';
import { CreateFileDTO } from 'src/dto';
import { PrismaService } from 'src/prisma.service';
import { Response, Status } from 'src/utils/types';

@Injectable()
export class FileService {
  constructor(private readonly Prisma: PrismaService) {}

  async createFile(file: CreateFileDTO): Promise<Response> {
    try {
      const document = await this.Prisma.document.findUnique({
        where: { id: file.document_id },
      });
      await this.Prisma.file.create({
        data: {
          file_content: '',
          file_name: file.title,
          document_id: document.id,
        },
      });
      return { message: 'Successful', status: Status.SUCCESSFUL };
    } catch (e) {
      return {
        message: 'Failed',
        status: Status.FAILED,
        error: e.message.toString(),
      };
    }
  }

  async getAllFiles(): Promise<Response> {
    try {
      const files: File[] = await this.Prisma.file.findMany({});

      return { message: 'Successful', status: Status.SUCCESSFUL, files };
    } catch (e) {
      return { message: 'Failed', status: Status.FAILED, error: e.toString() };
    }
  }

  async getFilesByDocumentId(id: any): Promise<Response> {
    try {
      const files: File[] = await this.Prisma.file.findMany({
        where: { document_id: parseInt(id) },
      });
      return { message: 'Successful', status: Status.SUCCESSFUL, files };
    } catch (e) {
      return { message: 'Failed', status: Status.FAILED, error: e.toString() };
    }
  }

  async getFileById(id: any): Promise<Response> {
    try {
      const file = await this.Prisma.file.findFirst({
        where: { id: parseInt(id) },
      });
    } catch (e) {
      return { message: 'Failed', status: Status.FAILED, error: e.toString() };
    }
  }

  async deleteFile(id: any): Promise<Response> {
    try {
      await this.Prisma.file.delete({ where: { id: parseInt(id) } });
      return { message: 'Successful', status: Status.SUCCESSFUL };
    } catch (e) {
      return { message: 'Failed', error: e.toString, status: Status.FAILED };
    }
  }
}
