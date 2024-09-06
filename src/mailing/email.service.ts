import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EmailService {
  private readonly from: string;

  constructor(config: ConfigService) {
    this.from = config.get('EMAIL_FROM');
  }

  sendEmail(email: string, message: string) {
    console.log(`Sending email from ${this.from} to ${email}: ${message}`);
  }
}
