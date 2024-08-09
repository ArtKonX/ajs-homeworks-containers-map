import ErrorRepository from '../ErrorRepository';

let errorRepository;

beforeEach(() => {
    errorRepository = new ErrorRepository();
});

test('Получить текст ошибки по коду', () => {
    expect(errorRepository.translate(201)).toBe('Webpage Created');
});

test('Получить текст ошибки по умолчанию', () => {
    expect(errorRepository.translate(404)).toBe('Unknown error');
});
