export type ImageDATA = {
  images: string[];
};

export type TypePropertyDATA = {
  listingProvider: null | unknown;
  zpid: number;
  buildingPermits: null | unknown;
  propertyTaxRate: number;
  contact_recipients: Array<{
    agent_reason: number;
    zpro: null | unknown;
    recent_sales: number;
    review_count: number;
    display_name: string;
    zuid: string;
    rating_average: number;
    badge_type: string;
    phone: unknown; //Object
    image_url: string;
  }>;
  zipcode: string;
  openHouseSchedule: unknown; //Object
  longitude: number;
  zestimateLowPercent: string;
  address: {
    community: null | unknown;
    city: string;
    state: string;
    neighborhood: null | unknown;
    subdivision: null | unknown;
    streetAddress: string;
    zipcode: string;
  };
  cityId: number;
  timeOnZillow: string;
  url: string;
  zestimate: number;
  imgSrc: string;
  description: string;
  price: number;
  livingAreaValue: number;
  resoFacts: {
    hasAttachedProperty: boolean;
    frontageType: null | unknown;
    poolFeatures: null | unknown;
    flooring: string[];
    builderModel: null | unknown;
    accessibilityFeatures: null | unknown;
    hasGarage: boolean;
    hasPetsAllowed: null | unknown;
    bodyType: null | unknown;
    topography: null | unknown;
    landLeaseExpirationDate: null | unknown;
    hasAdditionalParcels: boolean;
    waterViewYN: null | unknown;
    livingQuarters: unknown; //empty object
    atAGlanceFacts: Array<{
      factValue: string | null;
      factLabel: string | null;
    }>;
    offerReviewDate: null;
    horseYN: null;
    view: unknown; //array of array of objects
    buyerAgencyCompensationType: string;
    rooms: Array<{
      level: null;
      dimensions: null;
      features: null;
      roomAreaUnits: null;
      roomArea: null;
      roomAreaSource: null;
      roomType: string;
      roomDescription: null;
      roomWidth: null;
      roomLevel: null;
      description: null;
      roomLengthWidthUnits: null;
      roomLength: null;
      roomFeatures: string[];
      roomDimensions: null;
      roomLengthWidthSource: null;
      area: null;
    }>; //array of array of objects
    belowGradeFinishedArea: null;
    feesAndDues: unknown; //empty object
    cityRegion: string;
    subAgencyCompensation: string;
    hasPrivatePool: null | unknown;
    associationFeeIncludes: null | unknown;
    waterSource: string[];
    carportParkingCapacity: number;
    transactionBrokerCompensationType: null | unknown;
    hasFireplace: boolean;
    gas: null | unknown;
    sewer: string[];
    elevationUnits: null | unknown;
    roadSurfaceType: null | unknown;
    mainLevelBedrooms: null | unknown;
    numberOfUnitsVacant: null | unknown;
    hasWaterfrontView: null | unknown;
    bathroomsOneQuarter: null | unknown;
    lotSize: string;
    subAgencyCompensationType: string;
    entryLevel: null | unknown;
    irrigationWaterRightsAcres: null | unknown;
    greenWaterConservation: null | unknown;
    stories: number;
    bathrooms: number;
    numberOfUnitsInCommunity: null | unknown;
    listingTerms: string;
    otherParking: null | unknown;
    associationFee: null | unknown;
    marketingType: null | unknown;
    greenEnergyEfficient: string[];
    greenSustainability: null | unknown;
    heating: string[];
    associationPhone: null | unknown;
    greenBuildingVerificationType: null | unknown;
    hasAttachedGarage: boolean;
    bedrooms: number;
    architecturalStyle: string;
    listingId: null | unknown;
    structureType: string;
    interiorFeatures: string[];
    horseAmenities: null | unknown;
    electric: null | unknown;
    otherFacts: unknown;
    lotFeatures: string[];
    roofType: string;
    compensationBasedOn: null | unknown;
    greenEnergyGeneration: null | unknown;
    taxAnnualAmount: number;
    daysOnZillow: number;
    listAOR: null | unknown;
    hasHeating: boolean;
    elementarySchool: string;
    constructionMaterials: string[];
    basementYN: null | unknown;
    hoaFeeTotal: null | unknown;
    appliances: string[];
    virtualTour: null | unknown;
    bathroomsPartial: null | unknown;
    fencing: null | unknown;
    yearBuiltEffective: null | unknown;
    foundationDetails: string[];
    buildingName: null | unknown;
    hasAssociation: null | unknown;
    isSeniorCommunity: null | unknown;
    propertySubType: string[];
    propertyCondition: null | unknown;
    hasCarport: boolean;
    canRaiseHorses: boolean;
    hasLandLease: boolean;
    communityFeatures: null | unknown;
    parcelNumber: string;
    elevation: null | unknown;
    lotSizeDimensions: null | unknown;
    buildingAreaSource: null | unknown;
    contingency: null | unknown;
    yearBuilt: number;
    otherStructures: null | unknown;
    livingArea: string;
    bathroomsFull: number;
    livingAreaRangeUnits: null | string;
    incomeIncludes: null | string;
    highSchool: string;
    aboveGradeFinishedArea: null | unknown;
    isNewConstruction: boolean;
    inclusions: null | unknown;
    hasHomeWarranty: boolean;
    additionalFeeInfo: null | unknown;
    windowFeatures: null | unknown;
    ownership: string;
    woodedArea: null | unknown;
    middleOrJuniorSchoolDistrict: string;
    associationPhone2: null | unknown;
    exteriorFeatures: unknown; //empty object;
    buildingFeatures: null | unknown;
    frontageLength: null | unknown;
    buildingArea: string;
    associationAmenities: null | unknown;
    bathroomsHalf: number;
    hasCooling: boolean;
    additionalParcelsDescription: null | unknown;
    parkingFeatures: string[];
    foundationArea: null | unknown;
    zoning: null | unknown;
    hoaFee: null | unknown;
    livingAreaRange: null | unknown;
    zoningDescription: null | unknown;
    developmentStatus: null | unknown;
    availabilityDate: null | unknown;
    waterfrontFeatures: null | unknown;
    waterBodyName: null | unknown;
    utilities: null | unknown;
    entryLocation: null | unknown;
    totalActualRent: null | unknown;
    hasView: boolean;
    subdivisionName: string;
    securityFeatures: string[];
    attic: null | unknown;
    fireplaceFeatures: null | unknown;
    mainLevelBathrooms: null | unknown;
    doorFeatures: null | unknown;
    ownershipType: null | unknown;
    associationName: null | unknown;
    associations: unknown; //empty object;
    waterView: null | unknown;
    garageParkingCapacity: number;
    cropsIncludedYN: null | unknown;
    laundryFeatures: string[];
    buyerAgencyCompensation: string;
    greenIndoorAirQuality: null | unknown;
    homeType: string;
    spaFeatures: null | unknown;
    municipality: null | unknown;
    bathroomsThreeQuarter: null | unknown;
    hasSpa: boolean;
    basement: null | unknown;
    associationFee2: null | unknown;
    cooling: string[];
    openParkingCapacity: null | unknown;
    associationName2: null | unknown;
    hasRentControl: null | unknown;
    elementarySchoolDistrict: string;
    otherEquipment: null | unknown;
    commonWalls: null | unknown;
    specialListingConditions: null | unknown;
    furnished: null | unknown;
    vegetation: null | unknown;
    patioAndPorchFeatures: null | unknown;
    bathroomsFloat: number;
    builderName: null | unknown;
    highSchoolDistrict: string;
    transactionBrokerCompensation: null | unknown;
    storiesTotal: null | unknown;
    cumulativeDaysOnMarket: null | unknown;
    fireplaces: number;
    irrigationWaterRightsYN: null | unknown;
    exclusions: null | unknown;
    hasOpenParking: null | unknown;
    landLeaseAmount: null | unknown;
    coveredParkingCapacity: number;
    middleOrJuniorSchool: string;
    hasElectricOnProperty: null | unknown;
    onMarketDate: number;
    pricePerSquareFoot: null | number;
    parkingCapacity: number;
    levels: null | unknown;
  };
  taxHistory: Array<{
    time: number;
    valueIncreaseRate: number;
    taxIncreaseRate: number;
    taxPaid: null | unknown;
    value: number;
  }>;
  brokerId: null | unknown;
  stateId: number;
  streetAddress: string;
  listingSubType: {
    is_FSBA: boolean;
    is_comingSoon: boolean;
    is_newHome: boolean;
    is_pending: boolean;
    is_forAuction: boolean;
    is_foreclosure: boolean;
    is_bankOwned: boolean;
    is_openHouse: boolean;
    is_FSBO: boolean;
  };
  solarPotential: null | unknown;
  dateSold: null | unknown;
  countyId: number;
  timeZone: string;
  homeType: string;
  livingAreaUnits: string;
  comingSoonOnMarketDate: null | unknown;
  rentZestimate: number;
  bathrooms: number;
  annualHomeownersInsurance: number;
  state: string;
  propertyTypeDimension: string;
  building: null | unknown;

  listed_by: {
    agent_reason: number;
    zpro: boolean;
    recent_sales: number;
    zuid: string;
    review_count: number;
    display_name: string;
    profile_url: string;
    business_name: string;
    rating_average: number;
    phone: { prefix: string; areacode: string; number: string };
    badge_type: string;
    image_url: string;
  };
  yearBuilt: number;
  brokerageName: string;
  pageViewCount: number;
  county: string;
  mortgageRates: { thirtyYearFixedRate: number };
  attributionInfo: {
    buyerAgentName: null | unknown;
    mlsName: string;
    coAgentLicenseNumber: null | unknown;
    listingOffices: unknown; //array of array of objects,
    lastUpdated: string;
    buyerAgentMemberStateLicense: null | unknown;
    brokerName: string;
    listingAgreement: string;
    infoString10: string;
    trueStatus: null | unknown;
    infoString3: string;
    agentEmail: null | unknown;
    agentName: string;
    attributionTitle: null | unknown;
    mlsId: string;
    coAgentName: null | unknown;
    coAgentNumber: null | unknown;
    infoString5: string;
    listingAgents: unknown; //array of array of objects,,
    agentPhoneNumber: string;
    agentLicenseNumber: string;
    providerLogo: string;
    infoString16: null | unknown;
    buyerBrokerageName: null | unknown;
    mlsDisclaimer: string;
    brokerPhoneNumber: string;
    lastChecked: string;
  };

  monthlyHoaFee: null | unknown;
  homeStatus: string;
  homeFacts: null | unknown;
  latitude: number;
  datePosted: string;
  bedrooms: number;
  nearbyHomes: Array<{
    livingArea: number;
    livingAreaValue: number;
    lotAreaUnits: string;
    lotAreaValue: number;
    lotSize: number;
    miniCardPhotos: unknown;
    zpid: number;
    longitude: number;
    livingAreaUnits: string;
    address: unknown; //array of array of objects,,;
    livingAreaUnitsShort: string;
    price: number;
    homeType: string;
    homeStatus: string;
    currency: string;
    latitude: number;
  }>;
  livingArea: number;
  priceHistory: Array<{
    priceChangeRate: number;
    date: string;
    source: string;
    postingIsRental: boolean;
    time: number;
    sellerAgent: null | unknown;
    showCountyLink: boolean;
    attributeSource: unknown; //array of array of objects,,;,
    pricePerSquareFoot: null | number;
    buyerAgent: null | unknown;
    event: string;
    price: null | number;
  }>;

  favoriteCount: number;
  schools: Array<{
    link: string;
    rating: number;
    totalCount: null | unknown;
    distance: number;
    assigned: null | unknown;
    name: string;
    studentsPerTeacher: null | unknown;
    isAssigned: null | unknown;
    size: null | unknown;
    level: string;
    grades: string;
    type: string;
  }>;
  zestimateHighPercent: string;
  mlsid: string;
  countyFIPS: string;
  city: string;
  providerListingID: null | unknown;
  country: string;
  currency: string;
  isListedByOwner: null | unknown;
  contingentListingType: null | unknown;
};
