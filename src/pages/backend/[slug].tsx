import Head from 'next/head'
import { getPrismicClient } from '../../services/prismic';
import { RichText } from "prismic-dom";
import { GetServerSideProps } from 'next';

import { FaRegCalendarAlt } from "react-icons/fa";

import styles from '../../styles/posts.module.scss'

interface IPostProp {
  posts: {
    slug: string;
    tag: string;
    title: string;
    thumb: string;
    content: string;
    updatedAt: string;
  }
}

export default function backend({ posts }: IPostProp) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kauai Guarilha - Backend - {posts.title}</title>
      </Head>
      <main>
        <div className={styles.containerPosts}>
          <h2>{posts.title}</h2>

          <time>
            <FaRegCalendarAlt />
            {posts.updatedAt}
          </time>

          <div
            dangerouslySetInnerHTML={{ __html: posts.content }}            
          />
        </div>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const prismic = getPrismicClient(req);
  const { slug }: any = params;
  
  const response = await prismic.getByUID("posts", String(slug), {}); 
     
  const date: any = response.last_publication_date;
  
  const posts = {
    slug,
    tag: response.tags[0] ?? "",
    title: RichText.asText(response.data.title),
    thumb: response.data.thumb,
    content: RichText.asHtml(response.data.content),
    updatedAt: new Date(date).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    })
  };
  
  return {
    props: {
      posts
    }
  }
}