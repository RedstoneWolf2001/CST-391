import { Request, RequestHandler, Response } from 'express';
import { Sermon } from './sermons.model';
import * as SermonsDao from './sermons.dao';
import { OkPacket } from 'mysql';

export const readSermons: RequestHandler = async (req: Request, res: Response) => {
    try {
        let sermons;
        let sermonId = parseInt(req.query.sermonId as string);

        console.log('sermonId', sermonId);
        if (Number.isNaN(sermonId)) {
            sermons = await SermonsDao.readSermons();
        } else {
            sermons = await SermonsDao.readSermonById(sermonId);
        }

        res.status(200).json(sermons);
    } catch (error) {
        console.error('[sermons.controller][readSermons][Error]', error);
        res.status(500).json({
            message: 'There was an error when fetching sermons'
        });
    }
};

export const readSermonsBySpeaker: RequestHandler = async (req: Request, res: Response) => {
    try {
        const sermons = await SermonsDao.readSermonsBySpeaker(req.params.speaker);
        res.status(200).json(sermons);
    } catch (error) {
        console.error('[sermons.controller][readSermonsBySpeaker][Error]', error);
        res.status(500).json({
            message: 'There was an error when fetching sermons'
        });
    }
};

export const readSermonsBySpeakerSearch: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('search', req.params.search);
        const sermons = await SermonsDao.readSermonsBySpeakerSearch('%' + req.params.search + '%');
        res.status(200).json(sermons);
    } catch (error) {
        console.error('[sermons.controller][readSermonsBySpeakerSearch][Error]', error);
        res.status(500).json({
            message: 'There was an error when fetching sermons'
        });
    }
};

export const readSermonsByTitleSearch: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('search', req.params.search);
        const sermons = await SermonsDao.readSermonsByTitleSearch('%' + req.params.search + '%');
        res.status(200).json(sermons);
    } catch (error) {
        console.error('[sermons.controller][readSermonsByTitleSearch][Error]', error);
        res.status(500).json({
            message: 'There was an error when fetching sermons'
        });
    }
};

export const readSermonsByTagSearch: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('search', req.params.search);
        const sermons = await SermonsDao.readSermonsByTagSearch('%' + req.params.search + '%');
        res.status(200).json(sermons);
    } catch (error) {
        console.error('[sermons.controller][readSermonsByTagSearch][Error]', error);
        res.status(500).json({
            message: 'There was an error when fetching sermons'
        });
    }
};

export const readSermonsByDateRange: RequestHandler = async (req: Request, res: Response) => {
    try {
        const startDate = req.params.startDate as string;
        const endDate = req.params.endDate as string;
        console.log('startDate:', startDate, 'endDate:', endDate);
        
        const sermons = await SermonsDao.readSermonsByDateRange(startDate, endDate);
        res.status(200).json(sermons);
    } catch (error) {
        console.error('[sermons.controller][readSermonsByDateRange][Error]', error);
        res.status(500).json({
            message: 'There was an error when fetching sermons'
        });
    }
};

export const createSermon: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await SermonsDao.createSermon(req.body);
        console.log('req.body', req.body);
        console.log('sermon', okPacket);

        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[sermons.controller][createSermon][Error]', error);
        res.status(500).json({
            message: 'There was an error when writing sermons'
        });
    }
};

export const updateSermon: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await SermonsDao.updateSermon(req.body);
        console.log('req.body', req.body);
        console.log('sermon', okPacket);

        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[sermons.controller][updateSermon][Error]', error);
        res.status(500).json({
            message: 'There was an error when updating sermons'
        });
    }
};

export const deleteSermon: RequestHandler = async (req: Request, res: Response) => {
    try {
        let sermonId = parseInt(req.params.sermonId as string);
        console.log('sermonId', sermonId);

        if (!Number.isNaN(sermonId)) {
            const response = await SermonsDao.deleteSermon(sermonId);
            res.status(200).json(response);
        } else {
            throw new Error("Integer expected for sermonId");
        }
    } catch (error) {
        console.error('[sermons.controller][deleteSermon][Error]', error);
        res.status(500).json({
            message: 'There was an error when deleting sermons'
        });
    }
};
