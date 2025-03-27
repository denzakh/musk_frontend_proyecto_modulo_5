import { render, screen, fireEvent } from '@testing-library/react';
import TodoApp from './TodoApp';

test('Permite al usuario agregar y completar tareas', () => {
    render(<TodoApp startList={[]} />);

    // Permite agregar una tarea a la lista
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

    // Simula completar la tarea
    const itemId = screen.getByTitle('item').id;

    const checkbox = screen.getByTestId(`checkboxItem${itemId}`);
    fireEvent.click(checkbox);

    // Comprueba que la tarea ha desaparecido
    expect(screen.queryByTestId(`item${itemId}`)).not.toBeInTheDocument();

    // Ir a la página de tareas completadas
    const link = screen.getByText(/Tareas completadas/i);
    fireEvent.click(link);

    // Comprobando que la tarea se encuentra entre las completadas
    expect(screen.queryByTestId(`item${itemId}`)).toBeInTheDocument();

    // Simulación de eliminación de tareas
    const deleteBtn = screen.getByTestId(`deleteItem${itemId}`);
    fireEvent.click(deleteBtn);

    // Comprueba que la tarea ha desaparecido
    expect(screen.queryByTestId(`item${itemId}`)).not.toBeInTheDocument();
});
