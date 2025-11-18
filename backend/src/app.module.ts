import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// modulos de dominio 
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { BarbersModule } from './modules/barbers/barbers.module';
import { ServicesModule } from './modules/services/services.module';
import { AppointmentsModule } from './modules/appointments/appointments.module';
import { CalendarModule } from './modules/calendar/calendar.module';
import { NotificationsModule } from './modules/notifications/notifications.module';


import { PrismaModule } from './prisma/prisma.module';


@Module({
  imports: [AuthModule, UsersModule, BarbersModule, ServicesModule, AppointmentsModule, CalendarModule, NotificationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
