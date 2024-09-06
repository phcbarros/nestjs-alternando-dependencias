import { Injectable } from '@nestjs/common';

@Injectable()
export class FakeEmailService {
  sendEmail(email: string, message: string) {
    console.log(`FAKE email from fake to ${email}: ${message}`);
  }
}
