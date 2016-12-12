import Analytics from 'analytics.js-loader';

const key       = process.env.NODE_ENV === 'production' ? 'ufEPB1onsr4oPKSGJgfHHgoiTglC9S4Q' : 'X1bRi9fPNRIuCk3ZfYEtMZefYSoBzNtH';
const analytics = new Analytics({writeKey: key});

export default analytics;
