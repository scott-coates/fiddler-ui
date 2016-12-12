import Analytics from 'analytics.js-loader';

const key       = process.env.NODE_ENV === 'production' ? '2wZrWzavkd5UqYWdxN1IN7aZKMCNl70C' : 'X1bRi9fPNRIuCk3ZfYEtMZefYSoBzNtH';
const analytics = new Analytics({writeKey: key});

export default analytics;
