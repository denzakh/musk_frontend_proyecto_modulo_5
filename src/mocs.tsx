import { ItemType, ItemTypeNullable } from '@/types';

export const mockList: ItemType[] = [
    {
        id: '1',
        title: 'title1',
        text: 'text1',
        completed: false,
    },
    { id: '2', title: 'title2', text: 'text2', completed: true },
    {
        id: '3',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        text: 'Numquam, molestias architecto porro sit nihil sapiente alias, eligendi, ullam neque necessitatibus ut aliquid perferendis repellendus ipsum, aliquam in delectus quibusdam voluptates?',
        completed: false,
    },
];

export const emptyItem: ItemTypeNullable = {
    id: undefined,
    title: '',
    text: '',
    completed: false,
};
