import { Router } from 'express';
import * as SermonsController from './sermons.controller';

const router = Router();

// GET all sermons or specific sermon by ID
router
    .route('/sermons')
    .get(SermonsController.readSermons);

// GET sermons by speaker
router
    .route('/sermons/speaker/:speaker')
    .get(SermonsController.readSermonsBySpeaker);

// Search sermons by speaker
router
    .route('/sermons/search/speaker/:search')
    .get(SermonsController.readSermonsBySpeakerSearch);

// Search sermons by title
router
    .route('/sermons/search/title/:search')
    .get(SermonsController.readSermonsByTitleSearch);

// Search sermons by tag
router
    .route('/sermons/search/tag/:search')
    .get(SermonsController.readSermonsByTagSearch);

// Search sermons by date range
router
    .route('/sermons/search/date/:startDate/:endDate')
    .get(SermonsController.readSermonsByDateRange);

// POST create sermon
router
    .route('/sermons')
    .post(SermonsController.createSermon);

// PUT update sermon
router
    .route('/sermons')
    .put(SermonsController.updateSermon);

// DELETE sermon
router
    .route('/sermons/:sermonId')
    .delete(SermonsController.deleteSermon);

export default router;
