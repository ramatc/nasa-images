import { useRouter } from 'next/router';
import { Image } from '@/types';

const ImageOfTheDay = ({ url, title, date }: Image) => {
  const router = useRouter();

  return (
    <div>
        <img src={url} alt={title} onClick={() => router.push(`/picture/${date}`)} />
        <h2>{title}</h2>
    </div>
  )
}

export default ImageOfTheDay;