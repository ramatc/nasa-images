import { useRouter } from 'next/router';
import { Image } from '@/types';

import styles from './ImageOfTheDay.module.css';

console.log(styles);

const ImageOfTheDay = ({ url, title, date }: Image) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
        <img src={url} alt={title} onClick={() => router.push(`/picture/${date}`)} className={styles.image}/>
        <h2>{title}</h2>
    </div>
  )
}

export default ImageOfTheDay;