/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteRequest } from 'relay-runtime';
type LocationsPaginated$ref = any;
type LocationsPaginatedBidirectional$ref = any;
type LocationsPaginatedRefetch$ref = any;
export type HomepageQueryVariables = {|
  count: number
|};
export type HomepageQueryResponse = {|
  +$fragmentRefs: LocationsPaginatedBidirectional$ref & LocationsPaginatedRefetch$ref & LocationsPaginated$ref
|};
export type HomepageQuery = {|
  variables: HomepageQueryVariables,
  response: HomepageQueryResponse,
|};

/*
query HomepageQuery(
  $count: Int!
) {
  ...LocationsPaginatedBidirectional_1TJkD9
  ...LocationsPaginatedRefetch
  ...LocationsPaginated
}

fragment Location on Location {
  name
  countryFlagURL
  country {
    name
  }
}

fragment LocationsPaginated on RootQuery {
  incrementalPagination2: locations(first: 20) {
    edges {
      node {
        id
        ...Location
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment LocationsPaginatedBidirectional_1TJkD9 on RootQuery {
  locations(first: $count) {
    edges {
      node {
        id
        ...Location
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}

fragment LocationsPaginatedRefetch on RootQuery {
  incrementalPagination: locations(first: 20) {
    edges {
      node {
        id
        ...Location
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "count"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "countryFlagURL",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "concreteType": "LocationArea",
  "kind": "LinkedField",
  "name": "country",
  "plural": false,
  "selections": [
    (v3/*: any*/)
  ],
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hasNextPage",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endCursor",
  "storageKey": null
},
v8 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
  }
],
v9 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "LocationEdge",
    "kind": "LinkedField",
    "name": "edges",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Location",
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "cursor",
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "PageInfo",
    "kind": "LinkedField",
    "name": "pageInfo",
    "plural": false,
    "selections": [
      (v7/*: any*/),
      (v6/*: any*/)
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "HomepageQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "LocationsPaginatedBidirectional"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "LocationsPaginatedRefetch"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "LocationsPaginated"
      }
    ],
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HomepageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "LocationConnection",
        "kind": "LinkedField",
        "name": "locations",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "LocationEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Location",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              (v6/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasPreviousPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startCursor",
                "storageKey": null
              },
              (v7/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": "incrementalPagination",
        "args": (v8/*: any*/),
        "concreteType": "LocationConnection",
        "kind": "LinkedField",
        "name": "locations",
        "plural": false,
        "selections": (v9/*: any*/),
        "storageKey": "locations(first:20)"
      },
      {
        "alias": "incrementalPagination",
        "args": (v8/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "locations_incrementalPagination",
        "kind": "LinkedHandle",
        "name": "locations"
      },
      {
        "alias": "incrementalPagination2",
        "args": (v8/*: any*/),
        "concreteType": "LocationConnection",
        "kind": "LinkedField",
        "name": "locations",
        "plural": false,
        "selections": (v9/*: any*/),
        "storageKey": "locations(first:20)"
      },
      {
        "alias": "incrementalPagination2",
        "args": (v8/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "locations_incrementalPagination2",
        "kind": "LinkedHandle",
        "name": "locations"
      }
    ]
  },
  "params": {
    "cacheID": "4cf3d7a4ac5dee0119b188436a4dd53c",
    "id": null,
    "metadata": {},
    "name": "HomepageQuery",
    "operationKind": "query",
    "text": "query HomepageQuery(\n  $count: Int!\n) {\n  ...LocationsPaginatedBidirectional_1TJkD9\n  ...LocationsPaginatedRefetch\n  ...LocationsPaginated\n}\n\nfragment Location on Location {\n  name\n  countryFlagURL\n  country {\n    name\n  }\n}\n\nfragment LocationsPaginated on RootQuery {\n  incrementalPagination2: locations(first: 20) {\n    edges {\n      node {\n        id\n        ...Location\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment LocationsPaginatedBidirectional_1TJkD9 on RootQuery {\n  locations(first: $count) {\n    edges {\n      node {\n        id\n        ...Location\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n  }\n}\n\nfragment LocationsPaginatedRefetch on RootQuery {\n  incrementalPagination: locations(first: 20) {\n    edges {\n      node {\n        id\n        ...Location\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node: any).hash = '085ef3ea8676fdcaf828d0cb62550f00';
export default node;
