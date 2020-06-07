export class ErrorModel {
  type: string;
  page: Location;
  message: string;
  date: Date = new Date();
  statusCode: number;

  constructor(error) {
    this.page = window.location;
    this.message = error.message;
    this.statusCode = error.statusCode;
  }
}
