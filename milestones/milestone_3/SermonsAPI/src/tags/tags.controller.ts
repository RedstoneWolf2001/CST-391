import { Request, RequestHandler, Response } from 'express';
import { Tag } from './tags.model';
import * as TagsDao from './tags.dao';
import { OkPacket } from 'mysql';

export const readTags: RequestHandler = async (req: Request, res: Response) => {
    try {
        let tags;
        let tagId = parseInt(req.query.tagId as string);

        console.log('tagId', tagId);
        if (Number.isNaN(tagId)) {
            tags = await TagsDao.readTags();
        } else {
            tags = await TagsDao.readTagById(tagId);
        }

        res.status(200).json(tags);
    } catch (error) {
        console.error('[tags.controller][readTags][Error]', error);
        res.status(500).json({
            message: 'There was an error when fetching tags'
        });
    }
};

export const createTag: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await TagsDao.createTag(req.body);
        console.log('req.body', req.body);
        console.log('tag', okPacket);

        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[tags.controller][createTag][Error]', error);
        res.status(500).json({
            message: 'There was an error when creating tags'
        });
    }
};

export const updateTag: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await TagsDao.updateTag(req.body);
        console.log('req.body', req.body);
        console.log('tag', okPacket);

        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[tags.controller][updateTag][Error]', error);
        res.status(500).json({
            message: 'There was an error when updating tags'
        });
    }
};

export const deleteTag: RequestHandler = async (req: Request, res: Response) => {
    try {
        let tagId = parseInt(req.params.tagId as string);
        console.log('tagId', tagId);

        if (!Number.isNaN(tagId)) {
            const response = await TagsDao.deleteTag(tagId);
            res.status(200).json(response);
        } else {
            throw new Error("Integer expected for tagId");
        }
    } catch (error) {
        console.error('[tags.controller][deleteTag][Error]', error);
        res.status(500).json({
            message: 'There was an error when deleting tags'
        });
    }
};
