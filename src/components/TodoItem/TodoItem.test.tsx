import { render, screen } from '@testing-library/react';
import { TodoItem } from './index';

const item = {
    id: '1',
    title: 'title1',
    text: 'Aprender Jest',
    completed: false,
};

const testFn = () => {};

test('Muestra la tarea correctamente', () => {
    render(
        <TodoItem
            item={item}
            delItem={testFn}
            setCompletedItem={testFn}
            setEditedItem={testFn}
        />
    );
    const taskElement = screen.getByText('Aprender Jest');
    expect(taskElement).toBeInTheDocument();
});

test('Genera un snapshot del componente TodoItem', () => {
    const { asFragment } = render(
        <TodoItem
            item={item}
            delItem={testFn}
            setCompletedItem={testFn}
            setEditedItem={testFn}
        />
    );
    expect(asFragment()).toMatchSnapshot();
});
