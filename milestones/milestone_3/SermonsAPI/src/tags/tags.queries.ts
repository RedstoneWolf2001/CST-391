export const tagQueries = {
    readTags: `
        SELECT
            id AS tagId, title AS title, description AS description
            FROM sermons.tags
        `,
    readTagById: `
        SELECT
            id AS tagId, title AS title, description AS description
            FROM sermons.tags
            WHERE sermons.tags.id = ?
        `,
    createTag: `
        INSERT INTO sermons.tags(title, description)
        VALUES(?, ?)
        `,
    updateTag: `
        UPDATE sermons.tags
        SET title = ?, description = ?
        WHERE id = ?
        `,
    deleteTag: `
        DELETE FROM sermons.tags
        WHERE id = ?
        `,
};
