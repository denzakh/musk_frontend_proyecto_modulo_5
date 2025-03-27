import { render, screen, fireEvent } from '@testing-library/react';
import TodoApp from './TodoApp';

test('Permite agregar una tarea a la lista', () => {
    render(<TodoApp startList={[]} />);
    const newBtn = screen.getByTestId('new');
    fireEvent.click(newBtn);
    const formBox = screen.getByTestId('formBox');
    expect(formBox).toBeInTheDocument();

    const inputTitle = screen.getByTestId('formTitle');
    const inputText = screen.getByTestId('formText');
    const btnSubmit = screen.getByTestId('formSubmit');

    fireEvent.change(inputTitle, { target: { value: 'Nueva tarea title' } });
    fireEvent.change(inputText, { target: { value: 'Nueva tarea text' } });
    fireEvent.click(btnSubmit);

    const newTaskTitle = screen.getByText(/Nueva tarea title/i);
    expect(newTaskTitle).toBeInTheDocument();

    const newTaskText = screen.getByText(/Nueva tarea text/i);
    expect(newTaskText).toBeInTheDocument();

    expect(formBox).not.toBeInTheDocument();
});

test('Simula completar la tarea', () => {
    const startList = [
        {
            id: '1',
            title: 'title1',
            text: 'text1',
            completed: false,
        },
    ];
    render(<TodoApp startList={startList} />);

    // Comprueba que la tarea esté en la página.
    expect(screen.getByTestId('item1')).toBeInTheDocument();
    expect(screen.getByText(/title1/i)).toBeInTheDocument();
    expect(screen.getByText(/text1/i)).toBeInTheDocument();

    // Marcar la tarea como completada
    const checkbox = screen.getByTestId('checkboxItem1');
    fireEvent.click(checkbox);

    // Comprueba que la tarea ha desaparecido
    expect(screen.queryByTestId('item1')).not.toBeInTheDocument();

    // Ir a la página de tareas completadas
    const link = screen.getByText(/Tareas completadas/i);
    fireEvent.click(link);

    // Comprobando que la tarea se encuentra entre las completadas
    expect(screen.queryByTestId('item1')).toBeInTheDocument();
    expect(screen.queryByText(/title1/i)).toBeInTheDocument();
    expect(screen.queryByText(/text1/i)).toBeInTheDocument();
});

test('Simulación de eliminación de tareas', () => {
    const startList = [
        {
            id: '1',
            title: 'title1',
            text: 'text1',
            completed: false,
        },
    ];
    render(<TodoApp startList={startList} />);
    expect(screen.getByTestId('item1')).toBeInTheDocument();

    const deleteBtn = screen.getByTestId('deleteItem1');
    fireEvent.click(deleteBtn);

    expect(screen.queryByTestId('item1')).not.toBeInTheDocument();
});
