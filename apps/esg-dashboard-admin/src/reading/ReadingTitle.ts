import { Reading as TReading } from "../api/reading/Reading";

export const READING_TITLE_FIELD = "id";

export const ReadingTitle = (record: TReading): string => {
  return record.id?.toString() || String(record.id);
};
