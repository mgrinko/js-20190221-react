const API_URL = 'https://mgrinko.github.io/js-20190221/api';

export const getAll = async ({ query = '', order = '' } = {}) => {
  try {
    const response = await fetch(`${API_URL}/phones.json?query=${query}&order=${order}`);
    let phones = await response.json();

    if (query) {
      const lowerQuery = query.toLowerCase();

      phones = phones.filter(
        phone => phone.name.toLowerCase().includes(lowerQuery)
      );
    }

    if (order && phones.length > 0) {
      const defaultSortFn = (a, b) => a[order] > b[order] ? 1 : -1;

      const sortFunctions = {
        'number': (a, b) => a[order] - b[order],
        'string': (a, b) => a[order].localeCompare(b[order]),
      };

      const type = typeof phones[0][order];
      const sortFn = sortFunctions[type] || defaultSortFn;

      phones = phones.sort(sortFn);
    }

    return phones;
  } catch (e) {
    return [];
  }
};

export const getById = (phoneId) => (
  fetch(`${API_URL}/phones/${phoneId}.json`)
    .then(response => response.json())
    .catch(() => 0)
);
