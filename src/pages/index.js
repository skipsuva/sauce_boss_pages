import React from 'react';
import Link from 'gatsby-link';

const IndexPage = (props) => {
  const sauces = props.data.allSauce.edges;
  return (
    <div>
      {sauces.map((sauce, i) => {
        const sauceData = sauce.node;
        return (
          <div key={i}>
            <Link
              to={sauceData.url_slug}
              css={{ textDecoration: `none`, color: `inherit` }}
            >
              <p>
                {sauceData.name}
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query SauceQuery {
    allSauce {
      edges {
        node {
          id
          name
          maker
          url_slug
        }
      }
    }
  }
`;
