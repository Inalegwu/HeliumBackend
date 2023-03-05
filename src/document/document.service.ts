import { Injectable } from '@nestjs/common';
import { createDocumentDTO } from 'src/dto';
import { PrismaService } from 'src/prisma.service';
import { Response, Status } from 'src/utils/types';

@Injectable()
export class DocumentService {
  constructor(private readonly Prisma: PrismaService) {}

  async createDocument(document: createDocumentDTO): Promise<Response> {
    try {
      await this.Prisma.document.create({
        data: {
          document_name: document.document_name,
          description: document.description,
        },
      });
      return { message: 'Successfull', status: Status.SUCCESSFUL };
    } catch (e) {
      return { message: 'Failed', status: Status.FAILED, error: e.toString() };
    }
  }

  async getAllDocuments(): Promise<Response> {
    try {
      const documents = await this.Prisma.document.findMany({});
      return { message: 'Successful', status: Status.SUCCESSFUL, documents };
    } catch (e) {
      return {
        message: 'Failed',
        error: e.message.toString,
        status: Status.FAILED,
      };
    }
  }

  async getDocumentById(id: any): Promise<Response> {
    try {
      const document = await this.Prisma.document.findFirst({
        where: { id: parseInt(id) },
      });
      return { message: 'Successful', status: Status.SUCCESSFUL, document };
    } catch (e) {
      return { message: 'Failed', status: Status.FAILED, error: e.toString() };
    }
  }

  async deleteDocument(id: any): Promise<Response> {
    try {
      await this.Prisma.document.delete({ where: { id: parseInt(id) } });

      return { message: 'Successfull', status: Status.SUCCESSFUL };
    } catch (e) {
      return { message: 'Failed', status: Status.FAILED, error: e.toString() };
    }
  }
}
