import type { Schema, Attribute } from '@strapi/strapi';

export interface GlobalButton extends Schema.Component {
  collectionName: 'components_global_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
    icon: Attribute.Media;
  };
}

export interface GlobalHeader extends Schema.Component {
  collectionName: 'components_global_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    Links: Attribute.Component<'utils.links', true>;
    logo: Attribute.Media & Attribute.Required;
    searchIcon: Attribute.Media;
  };
}

export interface GlobalImageCard extends Schema.Component {
  collectionName: 'components_global_image_cards';
  info: {
    displayName: 'ImageCard';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    price: Attribute.Blocks;
    icons: Attribute.Media;
  };
}

export interface GlobalMarquee extends Schema.Component {
  collectionName: 'components_global_marquees';
  info: {
    displayName: 'marquee';
    description: '';
  };
  attributes: {
    logo: Attribute.Media;
  };
}

export interface HomepageBenifitsCards extends Schema.Component {
  collectionName: 'components_homepage_benifits_cards';
  info: {
    displayName: 'BenifitsCards';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.String;
    description: Attribute.String;
  };
}

export interface HomepageCompanyfacilitiesCard extends Schema.Component {
  collectionName: 'components_homepage_companyfacilities_cards';
  info: {
    displayName: 'CompanyfacilitiesCard';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
  };
}

export interface HomepageCompanyfacilities extends Schema.Component {
  collectionName: 'components_homepage_companyfacilities';
  info: {
    displayName: 'Companyfacilities';
    description: '';
  };
  attributes: {
    CompanyFacilitiesCard: Attribute.Component<
      'homepage.companyfacilities-card',
      true
    >;
  };
}

export interface HomepageExpandYourBussiness extends Schema.Component {
  collectionName: 'components_homepage_expand_your_bussinesses';
  info: {
    displayName: 'ExpandYourBussiness';
  };
  attributes: {
    heading1: Attribute.String;
    heading2: Attribute.String;
    heading3: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface HomepageGetEveryThing extends Schema.Component {
  collectionName: 'components_homepage_get_every_things';
  info: {
    displayName: 'GetEveryThing';
    description: '';
  };
  attributes: {
    smalldescription: Attribute.Text;
    image: Attribute.Media;
    heading: Attribute.Blocks;
  };
}

export interface HomepagePopularLocations extends Schema.Component {
  collectionName: 'components_homepage_popular_locations';
  info: {
    displayName: 'PopularLocations';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    mapviewbtn: Attribute.Component<'global.button'>;
    office: Attribute.Component<'global.image-card', true>;
    bookbtn: Attribute.Component<'global.button'>;
  };
}

export interface HomepageReviewCard extends Schema.Component {
  collectionName: 'components_homepage_review_cards';
  info: {
    displayName: 'Review_Card';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
    profileImg: Attribute.Media;
    role: Attribute.String;
    name: Attribute.String;
  };
}

export interface HomepageReviewComponent extends Schema.Component {
  collectionName: 'components_homepage_review_components';
  info: {
    displayName: 'ReviewComponent';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    heading: Attribute.String;
    Review_Card: Attribute.Component<'homepage.review-card', true>;
  };
}

export interface HomepageSlider extends Schema.Component {
  collectionName: 'components_homepage_sliders';
  info: {
    displayName: 'slider';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    Slidersec: Attribute.Component<'homepage.slidersec', true>;
  };
}

export interface HomepageSlidersec extends Schema.Component {
  collectionName: 'components_homepage_slidersecs';
  info: {
    displayName: 'slidersec';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    sliderimg: Attribute.Media;
  };
}

export interface HomepageTrustedByEnterprices extends Schema.Component {
  collectionName: 'components_homepage_trusted_by_enterprices';
  info: {
    displayName: 'TrustedByEnterprices';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    smallldesc: Attribute.Text;
    logo: Attribute.Component<'global.marquee', true>;
  };
}

export interface HomepageVarietRooms extends Schema.Component {
  collectionName: 'components_homepage_variet_rooms';
  info: {
    displayName: 'VarietyRooms';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    button: Attribute.Component<'global.button'>;
    varietyroomsheading: Attribute.String;
    varietyroomstitle: Attribute.String;
    Varietyroomcard: Attribute.Component<'homepage.varietyroomcard', true>;
  };
}

export interface HomepageVarietyroomcard extends Schema.Component {
  collectionName: 'components_homepage_varietyroomcards';
  info: {
    displayName: 'Varietyroomcard';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    image: Attribute.Media;
  };
}

export interface HomepageWorkSocialBenifits extends Schema.Component {
  collectionName: 'components_homepage_work_social_benifits';
  info: {
    displayName: 'WorkSocialBenifits';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    title: Attribute.String;
    heading: Attribute.Blocks;
    BenifitsCards: Attribute.Component<'homepage.benifits-cards', true>;
  };
}

export interface HomepageWorkTogether extends Schema.Component {
  collectionName: 'components_homepage_work_togethers';
  info: {
    displayName: 'WorkTogether';
    description: '';
  };
  attributes: {
    description: Attribute.Blocks;
    image: Attribute.Media;
    heading: Attribute.Blocks;
  };
}

export interface HomepageWorkWithPeople extends Schema.Component {
  collectionName: 'components_homepage_work_with_people';
  info: {
    displayName: 'WorkWithPeople';
  };
  attributes: {
    heading_left: Attribute.String;
    heading_top: Attribute.String;
    description: Attribute.Text;
  };
}

export interface UtilsLinks extends Schema.Component {
  collectionName: 'components_utils_links';
  info: {
    displayName: 'Links';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'global.button': GlobalButton;
      'global.header': GlobalHeader;
      'global.image-card': GlobalImageCard;
      'global.marquee': GlobalMarquee;
      'homepage.benifits-cards': HomepageBenifitsCards;
      'homepage.companyfacilities-card': HomepageCompanyfacilitiesCard;
      'homepage.companyfacilities': HomepageCompanyfacilities;
      'homepage.expand-your-bussiness': HomepageExpandYourBussiness;
      'homepage.get-every-thing': HomepageGetEveryThing;
      'homepage.popular-locations': HomepagePopularLocations;
      'homepage.review-card': HomepageReviewCard;
      'homepage.review-component': HomepageReviewComponent;
      'homepage.slider': HomepageSlider;
      'homepage.slidersec': HomepageSlidersec;
      'homepage.trusted-by-enterprices': HomepageTrustedByEnterprices;
      'homepage.variet-rooms': HomepageVarietRooms;
      'homepage.varietyroomcard': HomepageVarietyroomcard;
      'homepage.work-social-benifits': HomepageWorkSocialBenifits;
      'homepage.work-together': HomepageWorkTogether;
      'homepage.work-with-people': HomepageWorkWithPeople;
      'utils.links': UtilsLinks;
    }
  }
}
