import { Controller, Post } from '@nestjs/common';
import { EmailService } from './mailing/email.service';

@Controller()
export class AppController {
  constructor(private readonly email: EmailService) {}

  @Post('send-email')
  sendEmail() {
    this.email.sendEmail('paulo@teste.com', 'This is a test email');
  }
}
