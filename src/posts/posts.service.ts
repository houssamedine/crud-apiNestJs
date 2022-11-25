import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}

  async create(createPostDto: CreatePostDto) {
    return await this.postsRepository.save(createPostDto);
  }

  async findAll(): Promise<Post[]> {
    return await this.postsRepository.find({ relations: ['UserId'] });
  }

  async findOne(id: string): Promise<Post> {
    return await this.postsRepository.findOneBy({ id });
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    await this.postsRepository.update(id, updatePostDto);
    return await this.postsRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<boolean> {
    const result = await this.postsRepository.delete(id);
    return result.affected == 1 ? true : false;
  }
}
