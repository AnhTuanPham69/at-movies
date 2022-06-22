const path = require('path');

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, '5s')],
  },
  images: {
    domains: ['image.tmdb.org'],
},
};
