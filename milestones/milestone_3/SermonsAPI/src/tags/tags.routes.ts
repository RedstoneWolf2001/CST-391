import { Router } from 'express';
import * as TagsController from './tags.controller';

const router = Router();

// GET all tags or specific tag by ID
router
    .route('/tags')
    .get(TagsController.readTags);

// POST create tag
router
    .route('/tags')
    .post(TagsController.createTag);

// PUT update tag
router
    .route('/tags')
    .put(TagsController.updateTag);

// DELETE tag
router
    .route('/tags/:tagId')
    .delete(TagsController.deleteTag);

export default router;
