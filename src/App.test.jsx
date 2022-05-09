import { screen, render, waitForElementToBeRemoved } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'
import App from './App';

describe('App', () => {
    it('tests navigation with Memory Router', async () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );

        await waitForElementToBeRemoved(screen.getByAltText('loading spinner'));

        const heading = await screen.findByText('Rick and Morty: Characters');

        expect(heading).toBeInTheDocument();

        const link = await screen.findByText('Beth Smith');

        userEvent.click(link);

        const gender = await screen.findByText('Female');

        expect(gender).toBeInTheDocument();
    });

    it('tests detail page via initialEntries', async () => {
        render(
            <MemoryRouter
                initialEntries={['/', '/characters/4', '/', '/characters/6']}
                initialIndex={3}>
                <App />
            </MemoryRouter>
        );

        await waitForElementToBeRemoved(screen.getByAltText('loading spinner'));

        const name = await screen.findByText('Abadango Cluster Princess');

        const gender = await screen.findByText('Female');

        expect(name).toHaveTextContent('Abadango Cluster Princess');
        expect(gender).toBeInTheDocument();
    });
})