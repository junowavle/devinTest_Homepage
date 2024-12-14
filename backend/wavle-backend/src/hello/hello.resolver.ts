import { Query, Resolver } from '@nestjs/graphql';
import { Hello } from '../common/models/hello.model';

@Resolver(() => Hello)
export class HelloResolver {
  @Query(() => Hello, { description: 'Returns a hello message' })
  async hello(): Promise<Hello> {
    return { message: 'Hello from WAVLE API!' };
  }
}
