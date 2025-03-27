import { render } from '@testing-library/react';
import { TodoList } from './index';
import { ItemType } from '@/types';

export const list: ItemType[] = [
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

const testFn = () => {};

test('Genera un snapshot del componente TodoItem', () => {
    const { asFragment } = render(
        <TodoList
            list={list}
            delItem={testFn}
            setCompletedItem={testFn}
            setEditedItem={testFn}
        />
    );
    expect(asFragment()).toMatchSnapshot();
});
