import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { QuestionsModule } from './modules/questions/questions.module';
import { AnswersModule } from './modules/answers/answers.module';

@Module({
  imports: [UsersModule, QuestionsModule, AnswersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
