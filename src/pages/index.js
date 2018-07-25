import React from 'react'
import Link from 'gatsby-link'

const IndexPage = (props) => {
  const sauces = props.data.allSauce.edges;
  return (
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby ham.</p>
      <p>Now go build something great.</p>
      {sauces.map((sauce, i) => {
        const sauceData = sauce.node;
        return (
          <div key={i}>
            <p>Maker: {sauceData.maker}</p>
            <p>Name: {sauceData.name}</p>
          </div>
        );
      })}
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  );
};

export default IndexPage

export const query = graphql`
  query SauceQuery {
    allSauce {
      edges {
        node {
          id
          name
          maker
        }
      }
    }
  }
`;
