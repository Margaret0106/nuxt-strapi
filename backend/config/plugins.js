// ./config/plugins.js
'use strict';

module.exports = {
  'preview-button': {
    config: {
      contentTypes: [
        {
          uid: 'api::about.about',
          published: {
            url: 'http://localhost:3000/about',
          },
        },
        {
          uid: 'api::article.article',
          draft: {
            url: 'http://localhost:3000/api/preview',
            query: {
              type: 'page',
              slug: '{slug}',
            },
          },
          published: {
            url: 'http://localhost:3000/articles/{slug}',
          },
        },
      
      ],
    },
  },
};
