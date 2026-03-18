export interface Worker {
  id: string;
  name: string;
  platform: 'Zomato' | 'Swiggy' | 'Uber' | 'Ola';
  riskScore: number;
}
