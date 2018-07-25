import React from "react";

export default ({ data }) => {
  const sauce = data.sauce;
  return (
    <div>
      <h1>{sauce.name}</h1>
      <h1>{sauce.maker}</h1>
    </div>
  );
};

export const query = graphql`
  query SauceTemplateQuery($slug: String!) {
    sauce(fields: { slug: { eq: $slug } }) {
      name
      maker
    }
  }
`;
