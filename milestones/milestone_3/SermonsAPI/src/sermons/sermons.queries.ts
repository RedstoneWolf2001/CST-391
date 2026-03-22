export const sermonQueries = {
    readSermons: `
        SELECT
            id AS sermonId, title AS title, description AS description,
            speaker AS speaker, tags AS tags, date AS date, 
            duration AS duration, audio_url AS audioUrl
            FROM sermons.sermons
        `,
    readSermonById: `
        SELECT
            id AS sermonId, title AS title, description AS description,
            speaker AS speaker, tags AS tags, date AS date,
            duration AS duration, audio_url AS audioUrl
            FROM sermons.sermons
            WHERE sermons.sermons.id = ?
        `,
    readSermonsBySpeaker: `
        SELECT
            id AS sermonId, title AS title, description AS description,
            speaker AS speaker, tags AS tags, date AS date,
            duration AS duration, audio_url AS audioUrl
            FROM sermons.sermons
            WHERE sermons.sermons.speaker = ?
        `,
    readSermonsBySpeakerSearch: `
        SELECT
            id AS sermonId, title AS title, description AS description,
            speaker AS speaker, tags AS tags, date AS date,
            duration AS duration, audio_url AS audioUrl
            FROM sermons.sermons
            WHERE sermons.sermons.speaker LIKE ?
        `,
    readSermonsByTitleSearch: `
        SELECT
            id AS sermonId, title AS title, description AS description,
            speaker AS speaker, tags AS tags, date AS date,
            duration AS duration, audio_url AS audioUrl
            FROM sermons.sermons
            WHERE sermons.sermons.title LIKE ?
        `,
    readSermonsByTagSearch: `
        SELECT
            id AS sermonId, title AS title, description AS description,
            speaker AS speaker, tags AS tags, date AS date,
            duration AS duration, audio_url AS audioUrl
            FROM sermons.sermons
            WHERE sermons.sermons.tags LIKE ?
        `,
    readSermonsByDateRange: `
        SELECT
            id AS sermonId, title AS title, description AS description,
            speaker AS speaker, tags AS tags, date AS date,
            duration AS duration, audio_url AS audioUrl
            FROM sermons.sermons
            WHERE sermons.sermons.date BETWEEN ? AND ?
            ORDER BY sermons.sermons.date DESC
        `,
    createSermon: `
        INSERT INTO sermons.sermons(title, description, speaker, tags, date, duration, audio_url)
        VALUES(?, ?, ?, ?, ?, ?, ?)
        `,
    updateSermon: `
        UPDATE sermons.sermons
        SET title = ?, description = ?, speaker = ?, tags = ?, date = ?, duration = ?, audio_url = ?
        WHERE id = ?
        `,
    deleteSermon: `
        DELETE FROM sermons.sermons
        WHERE id = ?
        `,
};
