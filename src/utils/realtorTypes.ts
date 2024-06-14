export type AgentDataTypes = {
    about: {
      yearsExperience: string;
      title: null | unknown;
      description: string;
      specialties: string[];
    };
    forSaleListings: { listings: unknown; listing_count: number };
    pastSales: {
      past_sales: unknown;
      total: number;
    };
    serviceAreas: Array<{ url: string; regionId: number; text: string }>;
    profileDisplay: {
      actionToolbar: {
        isMenu: boolean;
        isToolbar: boolean;
        share: null | unknown;
        editProfileInformation: null | unknown;
        deviceType: string;
        switchToPublic: null | unknown;
        hide: boolean;
        switchToPrivate: null | unknown;
        publicActionBar: unknown;
        requestReviews: null | unknown;
      };
      teamMembers: {
        message: string;
        hide: boolean;
        errorCode: string;
      };
      hide: boolean;
      contactCard: {
        reviewsPath: string;
        profilePhotoSrc: string;
        actionBar: unknown;
        isTeamLead: boolean;
        teamProfilePath: null | unknown;
        profilePhotoIsvalid: boolean;
        isTeamMember: boolean;
        profilePhotoHeight: number;
        firstName: string;
        teamRank: null | unknown;
        profilePath: string;
        name: string;
        contactCardType: string;
        profilePhotoWidth: number;
        hide: boolean;
        flag: unknown;
        editProfilePhoto: null | unknown;
        agentTypeDisplay: unknown;
        teamName: null | unknown;
        allActivity: unknown;
        profilePhotoAlt: string;
      };
      teamSummary: {
        message: string;
        hide: boolean;
        errorCode: string;
      };
      private: boolean;
      profileInfo: {
        isEmployee: boolean;
        isPremierAgent: boolean;
        screenName: string;
        isTeamLead: boolean;
        isTeamAccount: boolean;
        isLender: boolean;
        encodedZuid: string;
        hide: boolean;
        isZillowGroupEmployee: boolean;
        isTeamMember: boolean;
        teamName: null | unknown;
        isProfessional: boolean;
        userRating: number;
      };
      actionMenu: {
        message: string;
        hide: boolean;
        errorCode: string;
      };
    };
    reviewsParams: null | unknown;
    displayUser: {
      profileTypeIds: number[];
      cpdUserPronouns: string;
      isTopAgent: boolean;
      ratings: { count: number; average: number };
      screenName: string;
      inCanada: boolean;
      sidebarVideoUrl: null | unknown;
      isPremierAgent: boolean;
      profilePhotoSrc: string;
      businessName: string;
      businessAddress: { city: string; state: string };
      flag: number;
      encodedZuid: string;
      name: string;
      profileTypes: string[];
    };
  
    lastYearPastSalesTotal: { count: number };
    reviewsData: {
      reviews: unknown;
      filters: unknown;
    };
    professionalInformation: [
      { term: string; lines: unknown },
      { term: string; description: string },
      { term: string; description: string },
      { term: string; description: string },
      { term: string; lines: unknown },
      { term: string; description: string }
    ];
    preferredLenders: { lenders: unknown };
    forRentListings: { listings: unknown; listing_count: number };
    map: {
      mapApiKey: string;
      mapCentroid: { longitude: string; latitude: string };
    };
  };
  