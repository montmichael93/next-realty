export type SoldTypes = {
  listings: Array<{
    bathrooms: number;
    state: string;
    longitude: number;
    latitude: number;
    bedrooms: number;
    represented: string;
    street_address: string;
    city_state_zipcode: string;
    image_alt: string;
    sold_date: string;
    price: string;
    livingAreaUnitsShort: string;
    city: string;
    image_url: string;
    medium_image_url: string;
    home_details_url: string;
    zpid: number;
    mlsLogoSrc: null | unknown;
    livingAreaValue: number;
  }>;
};
