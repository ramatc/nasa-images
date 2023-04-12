import { useRouter } from 'next/router';
import { Image as ImageTypes} from '@/types';
import Image from 'next/image';

import styles from './ImageOfTheDay.module.css';

const ImageOfTheDay = ({ url, title, date }: ImageTypes) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
        <Image 
          src={url || ""} 
          alt={title || ""} 
          onClick={() => router.push(`/picture/${date}`)} 
          className={styles.image}
          width={200}
          height={600}
        />
        <h2>{title}</h2>
    </div>
  )
}

export default ImageOfTheDay;