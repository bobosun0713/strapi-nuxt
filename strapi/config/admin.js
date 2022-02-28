module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7751500af8a65645978088914005c62f'),
  },
});
