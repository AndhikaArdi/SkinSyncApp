const BASE_URL = 'https://be-skinsync-api-production.up.railway.app';

const Api = {
  async analyzeSkin(file) {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${BASE_URL}/analyze`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to analyze skin');
    }

    return response.json();
  },

  async getRecommendation(type) {
    const response = await fetch(`${BASE_URL}/recommend`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch recommendations');
    }

    return response.json();
  },
};

export default Api;
