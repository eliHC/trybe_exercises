import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Teste da aplicação toda', () => {
  afterEach( () => jest.clearAllMocks() );

  it('renders App', () => {
    const { getByTestId } = render(<App />);
    const searchInput = getByTestId('search-input');
    const searchButton = getByTestId('search-button');

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  test('change do search Digimon', () => {
    const { getByTestId } = render(<App />);
    const searchInput = getByTestId('search-input');

    expect(searchInput).toHaveValue('');
    fireEvent.change(searchInput, {target: { value: 'garurumon' }}); // refac com userEvent
    expect(searchInput).toHaveValue('garurumon');
  });

  test('procura digimon ao clicar', async () => {
    const digimock = [{
      name: "Psychemon",
      level: "Rookie",
      img: "https://digimon.shadowsmith.com/img/psychemon.jpg",
    }];

    const fetchApi = global.fetch = jest.fn(async () => ({
      json: async () => digimock,
    }));

    // global.fetch = jest.fn(() => mockResolvedValue({
    //   json: jest.fn().mockResolvedValue(digimock)
    // }));

    render(<App />);
    const button = screen.getByTestId('search-button');
    const searchInput = screen.getByTestId('search-input');

    expect(searchInput).toHaveValue('');
    userEvent.type(searchInput, 'Psychemon');
    expect(searchInput).toHaveValue('Psychemon');

    userEvent.click(button);

    await screen.findByText('Psychemon');
    const digiName = screen.getByTestId('digimonName');

    expect(digiName).toBeInTheDocument();
    expect(fetchApi).toBeCalledTimes(1);
    expect(fetchApi).toHaveBeenCalledWith(`https://digimon-api.vercel.app/api/digimon/name/${searchInput.value}`);
  });
}); 
