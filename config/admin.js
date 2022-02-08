module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '12633b07fe26806a0068782ebdc2b038'),
  },
});
