import productFragment from "../fragments/product"
import seoFragment from "../fragments/seo"

const collectionFragment = /* GraphQL */ `
  fragment collection on Collection {
    handle
    title
    description
    image {
      url
    }
    seo {
      ...seo
    }
    updatedAt
  }
  ${seoFragment}
`

export const getCollectionQuery = /* GraphQL */ `
  query getCollection($handle: String!) {
    collection(handle: $handle) {
      handle
      title
      description
      image {
        url
      }
      updatedAt
    }
  }
`

export const getCollectionsQuery = /* GraphQL */ `
  query getCollections {
    collections(first: 100, sortKey: TITLE) {
      edges {
        node {
          ...collection
        }
      }
    }
  }
  ${collectionFragment}
`

// export const getCollectionProductsQuery = /* GraphQL */ `
//   query getCollectionProducts(
//     $handle: String!
//     $sortKey: ProductCollectionSortKeys
//     $reverse: Boolean
//   ) {
//     collection(handle: $handle) {
//       products(sortKey: $sortKey, reverse: $reverse, first: 100) {
//         edges {
//           node {
//             ...product
//           }
//         }
//       }
//     }
//   }
//   ${productFragment}
// `;

export const getCollectionProductsQuery = /* GraphQL */ `
  query getCollectionProducts(
    $handle: String!
    $sortKey: ProductCollectionSortKeys
    $reverse: Boolean
  ) {
    collectionByHandle(handle: $handle) {
      products(sortKey: $sortKey, reverse: $reverse, first: 100) {
        edges {
          node {
            ...product
          }
        }
      }
    }
  }
  ${productFragment}
`
