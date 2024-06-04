// module.exports = ({ env }) => ({
//     // ...
//     upload: {
//       config: {
//         provider: 'cloudinary',
//         providerOptions: {
//           cloud_name: env('dr1b4ezct'),
//           api_key: env('684697795288164'),
//           api_secret: env('o3i0g1WWQp3jcH88BZvPQVAps7g'),
//         },
//         actionOptions: {
//           upload: {},
//           delete: {},
//         },
//       },
//     },
//     // ...
//   });

module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // ...
});
