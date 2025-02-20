import seoFragment from "./seo"

// const productFragment = /* GraphQL */ `
//   fragment product on Product {
//     id
//     handle
//     availableForSale
//     title
//     description
//     descriptionHtml
//     options {
//       id
//       name
//       values
//     }
//     priceRangeV2 {
//       maxVariantPrice {
//         amount
//         currencyCode
//       }
//       minVariantPrice {
//         amount
//         currencyCode
//       }
//     }
//     variants(first: 10) {
//       edges {
//         node {
//           id
//           title
//           availableForSale
//           selectedOptions {
//             name
//             value
//           }
//           price {
//             amount
//             currencyCode
//           }
//         }
//       }
//     }
//     featuredImage {
//       ...image
//     }
//     images(first: 20) {
//       edges {
//         node {
//           ...image
//         }
//       }
//     }
//     seo {
//       ...seo
//     }
//     tags
//     updatedAt
//   }
//   ${imageFragment}
//   ${seoFragment}
// `;

// export default productFragment;

const productFragment = /* GraphQL */ `
  fragment product on Product {
    id
    handle
    title
    description
    descriptionHtml
    options {
      id
      name
      values
    }
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    variants(first: 10) {
      edges {
        node {
          id
          title
          availableForSale
          selectedOptions {
            name
            value
          }
          price {
            amount
          }
        }
      }
    }
    featuredImage {
      url
      altText
      width
      height
    }
    media(first: 4) {
      edges {
        node {
          alt
          ... on MediaImage {
            id
            image {
              altText
              url
            }
          }
        }
      }
    }
    seo {
      ...seo
    }
    tags
    updatedAt
  }
  ${seoFragment}
`

export default productFragment
