import express from 'express';
import {
  addBlogHandler,
  deleteBlogHandler,
  getAllBlogsHandler,
  updateBlogHandler,
} from '../controller/Blog.Controller';
import { protect } from '../middlewares/auth';
import validate from '../middlewares/Validate';
import {
  addBlogSchema,
  deleteBlogSchema,
  updateBlogSchema,
} from '../zod-schema/Blogs.Schema';

const router = express.Router();

router.get('/', protect, getAllBlogsHandler);
router.post('/', protect, validate(addBlogSchema), addBlogHandler);
router.put('/:blogid', protect, validate(updateBlogSchema), updateBlogHandler);
router.delete('/:blogid',  protect,  validate(deleteBlogSchema),  deleteBlogHandler);

export default router;