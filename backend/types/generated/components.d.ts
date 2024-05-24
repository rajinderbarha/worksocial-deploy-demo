import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutPageOurStory extends Schema.Component {
  collectionName: 'components_about_page_our_stories';
  info: {
    displayName: 'OurStory';
    icon: 'archive';
  };
  attributes: {
    title: Attribute.String;
    heading: Attribute.Blocks;
    description: Attribute.Text;
    OurStoryImg: Attribute.Media;
  };
}

export interface AboutPageOurSupport extends Schema.Component {
  collectionName: 'components_about_page_our_supports';
  info: {
    displayName: 'OurSupport';
  };
  attributes: {
    title: Attribute.String;
    heading: Attribute.String;
    OurSupportBgImage: Attribute.Media;
    SupportCard: Attribute.Component<'about-page.support-card', true>;
  };
}

export interface AboutPageOurTeam extends Schema.Component {
  collectionName: 'components_about_page_our_teams';
  info: {
    displayName: 'OurTeam';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    heading: Attribute.String;
    OurTeamBgInage: Attribute.Media;
    TeamMemberCard: Attribute.Component<'about-page.team-member-card', true>;
  };
}

export interface AboutPageSupportCard extends Schema.Component {
  collectionName: 'components_about_page_support_cards';
  info: {
    displayName: 'SupportCard';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
    JobTitle: Attribute.String;
    SupportImage: Attribute.Media;
    Description: Attribute.Text;
    AssistantImage: Attribute.Media;
    AssistantName: Attribute.String;
  };
}

export interface AboutPageTeamMemberCard extends Schema.Component {
  collectionName: 'components_about_page_team_member_cards';
  info: {
    displayName: 'TeamMemberCard';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
    JobTitle: Attribute.String;
    TeamMemberImg: Attribute.Media;
    Description: Attribute.Text;
    Moto: Attribute.Blocks;
  };
}

export interface AboutPageWelcomeToWorkSocail extends Schema.Component {
  collectionName: 'components_about_page_welcome_to_work_socails';
  info: {
    displayName: 'WelcomeToWorkSocail';
    icon: 'apps';
    description: '';
  };
  attributes: {
    heading: Attribute.Blocks;
    welcomeImage: Attribute.Media;
    description: Attribute.Blocks;
  };
}

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

export interface GlobalFaq extends Schema.Component {
  collectionName: 'components_global_faqs';
  info: {
    displayName: 'FAQ';
    description: '';
  };
  attributes: {
    question: Attribute.Text;
    answer: Attribute.Text;
  };
}

export interface GlobalFooterComponent extends Schema.Component {
  collectionName: 'components_global_footer_components';
  info: {
    displayName: 'FooterComponent';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    links: Attribute.Component<'utils.links', true>;
  };
}

export interface GlobalFooterSocial extends Schema.Component {
  collectionName: 'components_global_footer_socials';
  info: {
    displayName: 'FooterSocial';
    icon: 'crop';
  };
  attributes: {
    title: Attribute.String;
    socialIconLinks: Attribute.Component<'utils.links', true>;
  };
}

export interface GlobalFooter extends Schema.Component {
  collectionName: 'components_global_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    logo: Attribute.Media;
    FooterComponent: Attribute.Component<'global.footer-component', true>;
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
    Locations: Attribute.Component<'global.locations'>;
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
    icons: Attribute.Media;
    duration: Attribute.Enumeration<['/hr', '/day', '/week', '/month']>;
    price: Attribute.String & Attribute.Required;
  };
}

export interface GlobalLocations extends Schema.Component {
  collectionName: 'components_global_locations';
  info: {
    displayName: 'Locations';
  };
  attributes: {
    states: Attribute.Relation<
      'global.locations',
      'oneToMany',
      'api::state.state'
    >;
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

export interface GlobalRequestATour extends Schema.Component {
  collectionName: 'components_global_request_a_tours';
  info: {
    displayName: 'RequestATour';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    image: Attribute.Media;
  };
}

export interface HomepageBenifitsCards extends Schema.Component {
  collectionName: 'components_homepage_benifits_cards';
  info: {
    displayName: 'Benifit_Cards';
    description: '';
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
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    description: Attribute.Text;
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

export interface HomepageFaqComponent extends Schema.Component {
  collectionName: 'components_homepage_faq_components';
  info: {
    displayName: 'FAQComponent';
  };
  attributes: {
    title: Attribute.String;
    heading: Attribute.String;
    image: Attribute.Media;
    FAQ: Attribute.Component<'global.faq', true>;
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

export interface HomepageLiveSocial extends Schema.Component {
  collectionName: 'components_homepage_live_socials';
  info: {
    displayName: 'LiveSocial';
  };
  attributes: {
    title: Attribute.String;
    heading: Attribute.String;
    link: Attribute.Component<'global.button'>;
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

export interface HomepageScaleYourBusiness extends Schema.Component {
  collectionName: 'components_homepage_scale_your_businesses';
  info: {
    displayName: 'ScaleYourBusiness';
  };
  attributes: {
    image: Attribute.Media;
    heading: Attribute.Blocks;
    description: Attribute.Text;
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
    Benifit_Cards: Attribute.Component<'homepage.benifits-cards', true>;
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
    description: '';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
    Image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-page.our-story': AboutPageOurStory;
      'about-page.our-support': AboutPageOurSupport;
      'about-page.our-team': AboutPageOurTeam;
      'about-page.support-card': AboutPageSupportCard;
      'about-page.team-member-card': AboutPageTeamMemberCard;
      'about-page.welcome-to-work-socail': AboutPageWelcomeToWorkSocail;
      'global.button': GlobalButton;
      'global.faq': GlobalFaq;
      'global.footer-component': GlobalFooterComponent;
      'global.footer-social': GlobalFooterSocial;
      'global.footer': GlobalFooter;
      'global.header': GlobalHeader;
      'global.image-card': GlobalImageCard;
      'global.locations': GlobalLocations;
      'global.marquee': GlobalMarquee;
      'global.request-a-tour': GlobalRequestATour;
      'homepage.benifits-cards': HomepageBenifitsCards;
      'homepage.companyfacilities-card': HomepageCompanyfacilitiesCard;
      'homepage.companyfacilities': HomepageCompanyfacilities;
      'homepage.expand-your-bussiness': HomepageExpandYourBussiness;
      'homepage.faq-component': HomepageFaqComponent;
      'homepage.get-every-thing': HomepageGetEveryThing;
      'homepage.live-social': HomepageLiveSocial;
      'homepage.popular-locations': HomepagePopularLocations;
      'homepage.review-card': HomepageReviewCard;
      'homepage.review-component': HomepageReviewComponent;
      'homepage.scale-your-business': HomepageScaleYourBusiness;
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
