// Import required decorators and types
import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';

// Base entity class with common fields
@ObjectType()
export abstract class BaseEntity {
  // Primary key field
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // Creation timestamp
  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date;

  // Update timestamp
  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt: Date;
}
