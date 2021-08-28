import Link from "next/link";
import styles from "./styles.module.scss";

interface ICardPostProps {
  slug: string;
  thumb: any;
  title: string;
  datePost: string;
  tech: string;
}

export const Post = ({ datePost, tech, thumb, title, slug }: ICardPostProps) => {
  
  return (
    <Link href={`/${tech.toLowerCase()}/${slug}`} >
      <article className={styles.containerList}>        
          <h2 className={styles.titleCard}>{title}</h2>
          <time
            className={styles.dateCard}
            dateTime={datePost}>
            published - {datePost}
          </time>

          <Link  href={`/${tech.toLowerCase()}`}>
            <a className={styles.linkTech}>{tech}</a>
          </Link>        
     </article>
    </Link>  
  )

}