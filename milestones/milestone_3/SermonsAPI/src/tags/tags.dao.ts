import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { Tag } from "./tags.model";
import { tagQueries } from './tags.queries';

export const readTags = async () => {
    return execute<Tag[]>(tagQueries.readTags, []);
};

export const readTagById = async (tagId: number) => {
    return execute<Tag[]>(tagQueries.readTagById, [tagId]);
};

export const createTag = async (tag: Tag) => {
    return execute<OkPacket>(tagQueries.createTag, 
        [tag.title, tag.description]
    );
};

export const updateTag = async (tag: Tag) => {
    return execute<OkPacket>(tagQueries.updateTag, 
        [tag.title, tag.description, tag.tagId]
    );
};

export const deleteTag = async (tagId: number) => {
    return execute<OkPacket>(tagQueries.deleteTag, [tagId]);
};
