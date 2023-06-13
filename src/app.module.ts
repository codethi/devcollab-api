import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { QuestionsModule } from './modules/questions/questions.module';
import { AnswersModule } from './modules/answers/answers.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [UsersModule, QuestionsModule, AnswersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
