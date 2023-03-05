import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocumentController } from './document/document.controller';
import { DocumentService } from './document/document.service';
import { DocumentModule } from './document/document.module';
import { FileModule } from './file/file.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [DocumentModule, FileModule],
  controllers: [AppController, DocumentController],
  providers: [AppService, DocumentService, PrismaService],
})
export class AppModule {}
