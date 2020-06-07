import { HttpErrorResponse } from '@angular/common/http';
import { ErrorModel } from '../gc-http/models/error.model';

export function analyzeError(err: any): ErrorModel[] {
  console.log('httpCatchFailure', err);
  return err instanceof HttpErrorResponse && [
    new ErrorModel(err)
  ] || err;
}
