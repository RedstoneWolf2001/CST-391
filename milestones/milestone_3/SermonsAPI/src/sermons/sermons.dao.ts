import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { Sermon } from "./sermons.model";
import { sermonQueries } from './sermons.queries';

export const readSermons = async () => {
    return execute<Sermon[]>(sermonQueries.readSermons, []);
};

export const readSermonById = async (sermonId: number) => {
    return execute<Sermon[]>(sermonQueries.readSermonById, [sermonId]);
};

export const readSermonsBySpeaker = async (speaker: string) => {
    return execute<Sermon[]>(sermonQueries.readSermonsBySpeaker, [speaker]);
};

export const readSermonsBySpeakerSearch = async (search: string) => {
    return execute<Sermon[]>(sermonQueries.readSermonsBySpeakerSearch, [search]);
};

export const readSermonsByTitleSearch = async (search: string) => {
    return execute<Sermon[]>(sermonQueries.readSermonsByTitleSearch, [search]);
};

export const readSermonsByTagSearch = async (search: string) => {
    return execute<Sermon[]>(sermonQueries.readSermonsByTagSearch, [search]);
};

export const readSermonsByDateRange = async (startDate: string, endDate: string) => {
    return execute<Sermon[]>(sermonQueries.readSermonsByDateRange, [startDate, endDate]);
};

export const createSermon = async (sermon: Sermon) => {
    return execute<OkPacket>(sermonQueries.createSermon, 
        [sermon.title, sermon.description, sermon.speaker, sermon.tags, sermon.date, sermon.duration, sermon.audioUrl]
    );
};

export const updateSermon = async (sermon: Sermon) => {
    return execute<OkPacket>(sermonQueries.updateSermon, 
        [sermon.title, sermon.description, sermon.speaker, sermon.tags, sermon.date, sermon.duration, sermon.audioUrl, sermon.sermonId]
    );
};

export const deleteSermon = async (sermonId: number) => {
    return execute<OkPacket>(sermonQueries.deleteSermon, [sermonId]);
};
