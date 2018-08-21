import React from "react";
import SauceHeader from "../components/sauce/SauceHeader";
import SauceInfo from "../components/sauce/SauceInfo";
import SauceMaker from "../components/sauce/SauceMaker";
import SauceReviews from "../components/sauce/SauceReviews";
import './sauce.css';

export default ({ data }) => {
  const sauce = data.sauce;
  return (
    <div id="sauce-container" className="container">
      <SauceHeader
        name={sauce.name}
        maker={sauce.maker}
        img_url={sauce.img_url}
        origin={sauce.origin}
        website={sauce.website}
        average_rating={sauce.average_rating}
        rating_count={sauce.rating_count}
        review_count={sauce.review_count}
      />

      <SauceInfo
        average_heat={sauce.average_heat}
        average_linger={sauce.average_linger}
        average_flavor_profile={sauce.average_flavor_profile}
      />

      <SauceMaker
        maker_sauce_count={sauce.maker_sauce_count}
        about={sauce.about}
        latitude={sauce.latitude}
        longitude={sauce.longitude}
      />

      <SauceReviews
        average_rating={sauce.average_rating}
        rating_count={sauce.rating_count}
        review_count={sauce.review_count}
      />
    </div>
  );
};

export const query = graphql`
  query SauceTemplateQuery($slug: String!) {
    sauce(fields: { slug: { eq: $slug } }) {
      name
      maker
      img_url
      origin
      website
      average_rating
      rating_count
      review_count
      search_string
      url_slug

      average_heat
      average_linger
      average_flavor_profile {
        garlic_onion
        sweet
        smoky
        citrus_fruit
        vinegar
        salt
        spices
        vegetal
      }

      maker_sauce_count
      about
      latitude
      longitude
    }
  }
`;

// user_images
// product_links
// food_tags
// recent_reviews
