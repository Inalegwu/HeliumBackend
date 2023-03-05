import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { FileService } from './file.service';
import { CreateFileDTO } from 'src/dto';

@Controller('file')
export class FileController {
  constructor(private readonly FileService: FileService) {}
  @Get('/get_files')
  async getAllFiles() {
    return this.FileService.getAllFiles();
  }

  @Get('/get_file_by_document_id/:id')
  async getFileByDocumentId(@Param('id') id: any) {
    return this.FileService.getFilesByDocumentId(id);
  }

  @Get('/get_file_by_id/:id')
  async getFileById(@Param('id') id: any) {
    return this.FileService.getFileById(id);
  }

  @Post('/create_file')
  async createFile(@Body() file: CreateFileDTO) {
    return this.FileService.createFile(file);
  }

  @Delete('/delete_file/:id')
  async deleteFile(@Param('id') id: any) {
    return this.FileService.deleteFile(id);
  }
}
