// const imageFragment = /* GraphQL */ `
//   fragment image on Image {
//     url
//     altText
//     width
//     height
//   }
// `;

// export default imageFragment;

const imageFragment = /* GraphQL */ `
  fragment mediaFields on Media {
    alt
    ... on MediaImage {
      id
      image {
        altText
        url
      }
    }
    ... on Video {
      id
      sources {
        url
        mimeType
      }
    }
    ... on ExternalVideo {
      id
      originUrl
    }
    ... on Model3d {
      id
      sources {
        url
        mimeType
      }
    }
  }
`

export default imageFragment
