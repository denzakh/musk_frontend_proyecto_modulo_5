export type ItemType = {
    id: string;
    title: string;
    text: string;
    completed: boolean;
};

export type ItemTypeNullable = {
    id?: string;
    title: string;
    text: string;
    completed: boolean;
} | null;
