type PostProps = {
  profile: {
    name: string;
    followers: string;
    following: string;
    imageURL: string;
    distance: string;
    id: string;
  };
  shopURL: string;
  post: {
    imageURL: string;
    description: string;
    liked: boolean;
    likes: string;
    comments: string;
    shares: string;
  };
  liked: boolean;
};

export type { PostProps };
