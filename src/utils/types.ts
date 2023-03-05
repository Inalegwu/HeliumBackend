import { Document, File } from '@prisma/client';

export enum Status {
  SUCCESSFUL = 'SUCCESSFUL',
  FAILED = 'FAILED',
}

export interface Response {
  message: string;
  files?: File[];
  file?: File;
  documents?: Document[];
  document?: Document;
  status: Status;
  error?: string;
}
