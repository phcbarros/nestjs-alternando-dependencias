import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ModuleRef } from '@nestjs/core';
import { EmailService } from './email.service';
import { FakeEmailService } from './fake-email.service';

const EmailSenderProvider = {
  provide: EmailService,
  useFactory: (config: ConfigService, moduleRef: ModuleRef) => {
    const settings = config.get<string>('USE_FAKES');
    const useFake =
      settings === 'true' ||
      settings.toLowerCase().split(',').includes('email');

    return useFake
      ? moduleRef.create(FakeEmailService)
      : moduleRef.create(EmailService);
  },
  inject: [ConfigService, ModuleRef],
};

@Module({
  providers: [EmailSenderProvider], // altera o provider para usar o nosso que irá decidir se usa o fake ou não
  exports: [EmailService],
})
export class MailingModule {}
