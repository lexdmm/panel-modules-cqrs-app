import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { join } from 'path'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { FormsModule } from './forms/forms.module'

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: [`.env`]
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => {
                return {
                    type: 'postgres',
                    host: configService.get('DB_HOST'),
                    port: configService.get('DB_PORT'),
                    username: configService.get('DB_USERNAME'),
                    password: configService.get('DB_PASSWORD'),
                    database: configService.get('DB_NAME'),
                    synchronize: configService.get('DB_SYNC'),
                    entities: [join(__dirname, '**', '*.entity.{ts,js}')],
                    autoLoadEntities: configService.get('ENTITIES_AUTO_LOADS')
                }
            }
        }),
        FormsModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
