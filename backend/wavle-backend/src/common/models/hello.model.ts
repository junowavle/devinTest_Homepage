import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Hello message response type' })
export class Hello {
  @Field(() => String, { description: 'Welcome message' })
  message: string;
}
