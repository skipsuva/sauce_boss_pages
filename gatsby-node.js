const path = require(`path`);
const axios = require('axios');
const crypto = require('crypto');

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;

  const fetchSauces = () => axios.get(`https://sauce-boss-api.herokuapp.com/page_generation/sauces/test`);
  const res = await fetchSauces();

  res.data.map((sauce, i) => {
    const sauceNode = {
      id: `${sauce.id}`,
      // id: sauce.id,
      parent: `__SOURCE__`,
      internal: {
        type: `Sauce`, // name of the graphQL query --> allSauce {}
        // contentDigest will be added just after
        // but it is required
      },
      children: [],

      // BASIC IDENTIFIERS
      name: sauce.name,
      maker: sauce.maker,
      img_url: sauce.img_url,
      origin: sauce.origin,
      website: sauce.website,
      user_images: [],
      product_links: [],
      search_string: sauce.search_string,
      url_slug: (sauce.maker + ' ' + sauce.name).replace(/[^\w\s]/gi, '').toLowerCase().split(' ').join('-'),

      // RATING RELATED
      average_rating: sauce.average_rating,
      average_flavor_profile: {
        garlic_onion: sauce.average_flavor_profile.garlic_onion,
        sweet: sauce.average_flavor_profile.sweet,
        smoky: sauce.average_flavor_profile.smoky,
        citrus_fruit: sauce.average_flavor_profile.citrus_fruit,
        vinegar: sauce.average_flavor_profile.vinegar,
        salt: sauce.average_flavor_profile.salt,
        spices: sauce.average_flavor_profile.spices,
        vegetal: sauce.average_flavor_profile.vegetal
      },
      average_heat: sauce.average_heat,
      average_linger: sauce.average_linger,
      food_tags: [],
      recent_reviews: [],
      rating_count: sauce.rating_count,
      review_count: sauce.review_count,


      // MAKER RELATED
      latitude: sauce.latitude,
      longitude: sauce.longitude,
      maker_sauce_count: sauce.maker_sauce_count,
      about: sauce.about
    }

    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(sauceNode))
      .digest(`hex`);
    // add it to sauceNode
    sauceNode.internal.contentDigest = contentDigest;

    // Create node with the gatsby createNode() API
    createNode(sauceNode);
  });

  return;
}

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `Sauce`) {
    // console.log(node)
    const slug = `/${node.url_slug}/`;
    console.log(slug)

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allSauce {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  ).then(result => {
      console.log(JSON.stringify(result, null, 4))
      result.data.allSauce.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/sauce.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
};
