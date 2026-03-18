export const mlClient = {
  calculatePremium: async (data: any) => {
    const res = await fetch('/api/premium/calculate', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return res.json();
  },
};
