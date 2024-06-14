export type TypesForReviews = {
  reviews: Array<{
    reviewId: number;
    rating: number;
    subRatings: Array<{
      score: number;
      description: string;
    }>;
    reviewComment: string;
    rebuttal: null | unknown;
    reviewer: {
      lastName: null | string;
      encodedZuid: string;
      suffix: null | string;
      screenName: string;
      showName: true;
      firstName: null | string;
    };
    createDate: string;
    workDescription: string;
    reviewee: unknown;
  }>;
  totalCount: number;
};
