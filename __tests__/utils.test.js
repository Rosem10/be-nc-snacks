const { formatCategories, formatSnacks } = require('../db/utils');

describe('formatCategories()', () => {
  test('should return an array', () => {
    expect(Array.isArray(formatCategories([]))).toBe(true);
  });
  test('should return a nested array for a single category', () => {
    const categories = [
      { category_name: 'test-category-a', description: 'description-a' }
    ];
    const formattedCategories = formatCategories(categories);
    expect(Array.isArray(formattedCategories[0])).toBe(true);
  });
  test('should return a nested array with the correct category name at index 0', () => {
    const categories = [
      { category_name: 'test-category-a', description: 'description-a' }
    ];
    const formattedCategories = formatCategories(categories);
    expect(formattedCategories[0][0]).toBe('test-category-a');
  });
  test('should return a nested array with the correct category description at index 1', () => {
    const categories = [
      { category_name: 'test-category-a', description: 'description-a' }
    ];
    const formattedCategories = formatCategories(categories);
    expect(formattedCategories[0][1]).toBe('description-a');
  });
  test('should return correctly formatted nested array for multiple given categoires', () => {
    const categories = [
      { category_name: 'test-category-a', description: 'description-a' },
      { category_name: 'test-category-b', description: 'description-b' }
    ];
    const formattedCategories = formatCategories(categories);
    expect(formattedCategories).toEqual([
      ['test-category-a', 'description-a'],
      ['test-category-b', 'description-b']
    ]);
  });
  test('should not mutate the original input', () => {
    const categories = [
      { category_name: 'test-category-a', description: 'description-a' },
      { category_name: 'test-category-b', description: 'description-b' }
    ];
    formatCategories(categories);
    expect(categories).toEqual([
      { category_name: 'test-category-a', description: 'description-a' },
      { category_name: 'test-category-b', description: 'description-b' }
    ]);
  });
});

describe('formatSnacks()', () => {
  test('should return a nested array with the snack_name, description and price in the correct positions', () => {
    const categories = [
      {
        category_id: 1,
        category_name: 'test-category-a',
        description: 'description-a'
      }
    ];

    const snacks = [
      {
        snack_name: 'hobnobs',
        price: 100,
        description: 'a biscuit',
        category: 'test-category-a'
      }
    ];

    const formattedSnacks = formatSnacks(snacks, categories);

    expect(formattedSnacks[0][0]).toBe('hobnobs');
    expect(formattedSnacks[0][1]).toBe('a biscuit');
    expect(formattedSnacks[0][2]).toBe(100);
  });
  test('should return the correct category_id as the final index in the sub array', () => {
    const categories = [
      {
        category_id: 1,
        category_name: 'test-category-a',
        description: 'description-a'
      }
    ];

    const snacks = [
      {
        snack_name: 'hobnobs',
        price: 100,
        description: 'a biscuit',
        category: 'test-category-a'
      }
    ];

    const formattedSnacks = formatSnacks(snacks, categories);

    expect(formattedSnacks[0][3]).toBe(1);
  });
});
