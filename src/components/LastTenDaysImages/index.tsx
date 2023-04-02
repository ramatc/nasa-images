import { useRouter } from 'next/router';
import { Image } from '@/types';

type Props = {
    images: Image[];
}

const LastTenDaysImages = ({ images }: Props) => {
    const router = useRouter();

    return (
      <div>
        <h2>Ultimos 10 días</h2>
        <ul>
            {/* COMPONENTE NUEVO */}
            {images?.map((image) => (
                <li key={`last-ten-${image.date}`}>
                    <img src={image.url} alt={image.title} onClick={() => router.push(`/picture/${image.date}`)}/>
                    <h2>{image.title}</h2>
                </li>
            ))}
        </ul>    
      </div>
    )
  }
  
  export default LastTenDaysImages;