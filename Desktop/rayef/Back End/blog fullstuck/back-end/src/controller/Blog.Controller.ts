import { Blog } from '@prisma/client';
import { Request, Response } from 'express';
import { prisma } from '../config/db';
import { IUser } from '../middlewares/auth';
import {
  deleteBlogSchemaType,
  updateBlogSchemaType,
} from '../zod-schema/Blogs.Schema';

export const getAllBlogsHandler = async (req: Request, res: Response) => {
  const user = res.locals.user as IUser;

  const Blog = await prisma.blog.findMany({
    where: { user_id: user.id },
  });

  return res.status(200).json(Blog);
};

export const addBlogHandler = async (req: Request, res: Response) => {
  const { title ,message} = req.body as Blog;
  const user = res.locals.user as IUser;

  await prisma.blog.create({
    data: {
      title,
      message,
      user_id: user.id,
    },
  });

  return res.status(201).json({
    message: 'New Blog created for user : ' + user.id,
  });
};

export const updateBlogHandler = async (req: Request, res: Response) => {
  try {
    const user = res.locals.user as IUser;
    const updatedBlog = req.body as Blog;
    const { blogid } = req.params as updateBlogSchemaType;

    const isUpdated = await prisma.blog.updateMany({
      where: {
        id: blogid,
        user_id: user.id,
      },
      data: updatedBlog,
    });

    if (isUpdated.count == 0) {
      return res.status(400).json({
        message: 'Invalid Blog id',
      });
    }

    return res.status(200).json({
      message: 'Blog updated !',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Server error !',
    });
  }
};

export const deleteBlogHandler = async (req: Request, res: Response) => {
  const user = res.locals.user as IUser;
  const { blogid } = req.params as deleteBlogSchemaType;

  const deleteCount = await prisma.blog.deleteMany({
    where: {
      id: blogid,
      user_id: user.id,
    },
  });

  if (deleteCount.count == 0) {
    return res.status(400).json({
      message: 'Invalid blog id',
    });
  }

  return res.status(200).json({
    message: 'blog deleted !',
  });
};