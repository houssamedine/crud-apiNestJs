import { User } from 'src/users/entities/user.entity';

export class CreatePostDto {
  id: string;

  title: string;

  body: string;

  UserId: User;
}
