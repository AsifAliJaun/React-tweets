/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
import styles from "./Post.module.css";
function Post({author,body}) {
  return (
    <li className={styles.post}>
      <h1 className={styles.author}>{author}</h1>
      <h1 className={styles.text}>{body}</h1>
    </li>
  );
}
export default Post;
