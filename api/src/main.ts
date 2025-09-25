import cookieParser from 'cookie-parser';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());

  // CORS
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  app.useGlobalGuards(app.get(JwtAuthGuard));

  const port = process.env.PORT || 4000;
  const host = process.env.HOST || 'localhost';

  await app.listen(port, host);
}
bootstrap();
