import React from "react";
import { ApolloClient, InMemoryCache, useQuery, gql } from "@apollo/client";
import "./Screenshots.css";

const mockChildScreenshots = [
  { id: 1, thumbnail: "https://picsum.photos/200/300/?random" },
  { id: 2, thumbnail: "https://picsum.photos/200/300/?random" },
  { id: 3, thumbnail: "https://picsum.photos/200/300/?random" },
];

const cache = new InMemoryCache();

cache.writeQuery({
  query: gql`
    query {
      childScreenshots {
        id
        thumbnail
      }
    }
  `,
  data: {
    childScreenshots: mockChildScreenshots,
  },
});

const client = new ApolloClient({
  uri: "https://fakeGraphQLURL.com",
  cache: cache,
});

const GET_CHILD_SCREENSHOTS = gql`
  query {
    childScreenshots {
      id
      thumbnail
    }
  }
`;

const ChildScreenshots = () => {
  const { loading, error, data } = useQuery(GET_CHILD_SCREENSHOTS, { client });

  if (loading) return <p>loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="screenshot-list">
      {data.childScreenshots.map((screenshot) => (
        <div key={screenshot.id} className="screenshot-card">
          <img src={screenshot.thumbnail} alt={`Screenshot ${screenshot.id}`} />
        </div>
      ))}
    </div>
  );
};

export default ChildScreenshots;
