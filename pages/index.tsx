import Layout from "../components/common/layout";
import MainPostsList from "../components/post/main-posts-list";
import Post from "../interfaces/post";
import MainContent from "../components/main";
import { getAllPosts } from "../lib/post-api";

type Props = {
  allPosts: Post[];
};

const Home = ({ allPosts }: Props) => {
  const Posts = allPosts;
  return (
    <Layout>
      <MainContent />
      {Posts.length > 0 && <MainPostsList posts={Posts} />}
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
