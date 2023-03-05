import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DocumentService } from './document.service';
import { createDocumentDTO } from 'src/dto';

@Controller('document')
export class DocumentController {
  constructor(private readonly DocumentService: DocumentService) {}

  @Get('/get_all_documents')
  async getAllDocuments() {
    return this.DocumentService.getAllDocuments();
  }

  @Get('/get_document_by_id/:id')
  async getDocumentById(@Param('id') id: any) {
    return this.DocumentService.getDocumentById(id);
  }

  @Post('/create_document')
  async createDocument(@Body() document: createDocumentDTO) {
    return this.DocumentService.createDocument(document);
  }

  @Delete('/delete_document/:id')
  async deleteDocument(@Param('id') id: any) {
    return this.DocumentService.deleteDocument(id);
  }
}
