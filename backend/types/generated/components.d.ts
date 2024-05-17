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
  };
  attributes: {
    title: Attribute.String;
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
      'homepage.get-every-thing': HomepageGetEveryThing;
      'homepage.slider': HomepageSlider;
      'homepage.slidersec': HomepageSlidersec;
      'homepage.variet-rooms': HomepageVarietRooms;
      'homepage.varietyroomcard': HomepageVarietyroomcard;
      'utils.links': UtilsLinks;
    }
  }
}
