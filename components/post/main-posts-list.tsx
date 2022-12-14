import { NeoContent } from "../common/styled-component";
import DateFormatter from "../common/date-formatter";
import Link from "next/link";
import { RSSItemType } from "../../interfaces/rss";
import { ItemCategory } from "../common/ItemCategory";
import { title } from "process";

type MainPostsListProps = {
  posts: RSSItemType[];
  generator: string;
  managingEditor: string;
  title: string;
};

const MainPostsList = ({
  posts,
  generator,
  managingEditor,
  title,
}: MainPostsListProps) => {
  const postsItem = posts;
  const postGenerator = generator;
  const postManager = managingEditor;
  const postTile = title;
  return (
    <NeoContent>
      <p className="min-[770px]:pb-6 text-lg font-semibold leading-snug text-textSub">
        New Posts
      </p>
      {postsItem.length > 0 &&
        postsItem.map((post, key) => {
          if (key < 3) return <MainPost key={key} post={post} />;
        })}
      <p className="text-end text-sm leading-snug text-textSub">
        from {postTile} by {postManager} | {postGenerator}
      </p>
    </NeoContent>
  );
};

export default MainPostsList;

type MainPostsProps = {
  post: RSSItemType;
};
export const MainPost = ({ post }: MainPostsProps) => {
  // const description = parse(post.description._text.replaceAll("<a","<p").replaceAll("/a>","/p>"));

  return (
    <a href={post.link._text} target="_blick">
      <article className="cursor-pointer hover:content-underline">
        <h3 className="text-lg font-semibold text-textMain">
          {post.title._text}
        </h3>
        <span className="mt-2 mr-2 text-md text-textMain">
          {post.author._text}
        </span>
        <DateFormatter dateString={post.pubDate._text} />
        <ItemCategory category={post.category} />
        <p
          className="mt-2 text-sm text-textSub"
          // dangerouslySetInnerHTML={{ __html: description}}
        >
          read more...
        </p>
        <p className="border-b border-textSub my-4 min-[770px]:mt-4 min-[770px]:mb-6" />
      </article>
    </a>
  );
};
