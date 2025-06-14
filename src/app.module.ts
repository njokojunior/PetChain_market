import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetModule } from './pet/pet.module';
import { NotificationModule } from './notification/notification.module';
import { PricingModule } from './pricing/pricing.module';
import { TriageModule } from './triage/triage.module';
import { EmergencyBookingModule } from './emergency-booking/emergency-booking.module';
import { ActivityModule } from './activity/activity.module';
import { PhotoModule } from './photo/photo.module';
import { MedicalModule } from './medical/medical.module';
import { MedicalRecordModule } from './medical_record/medical_record.module';
import { ShoppingCartModule } from './shopping_cart/shopping_cart.module';
import { StaffModule } from './veterinarian/staff/staff.module';
import { EmergencyModule } from './emergency/emergency.module';
import { TelemedicineModule } from './telemedicine/telemedicine.module';
import { CustomerModule } from './customer-pet/customer-pet.module';
import { ReviewModule } from './review/review.module';
import { PetModule } from './pets/pet.module';
import { MedicalRecordModule } from './pets/medical_record.module';
import { LoyaltyModule } from './loyalty/loyalty.module';
import { AdminModule } from './admin/admin.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UserModule,
    AuthModule,
    PetModule,
    MedicalRecordModule,
    ShoppingCartModule,
    StaffModule,
    EmergencyModule,
    TelemedicineModule,
    CustomerModule,
    ReviewModule,
    LoyaltyModule,
    MedicalModule,
    PhotoModule,
    ActivityModule,
    EmergencyBookingModule,
    TriageModule,
    PricingModule,
    NotificationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
