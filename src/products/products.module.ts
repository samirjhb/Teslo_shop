import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product, ProductImagen } from './entities';


@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductImagen])],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports:[
    ProductsService,
    TypeOrmModule,
  ]
})
export class ProductsModule {}
