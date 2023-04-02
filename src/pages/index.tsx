import fetcher from '@/utils/fetcher';
import ImageOfTheDay from '@/components/ImageOfTheDay';
import LastTenDaysImages from '@/components/LastTenDaysImages';
import { Image } from '@/types';

type Props = {
  imageOfTheDay: Image;
  last10DaysImages: Image[];
}

export default function Home({imageOfTheDay, last10DaysImages}: Props) {
  return (
    <main>
      <ImageOfTheDay {...imageOfTheDay} />
      <LastTenDaysImages images={last10DaysImages}/>
    </main>
  )
}

export async function getServerSideProps() {
  try {
    const imageOfTheDay = await fetcher();
    // https://date-fns.org/
    const last10DaysImages = await fetcher('&start_date=2023-03-01&end_date=2023-03-10');

    return {
      props: {
        imageOfTheDay,
        last10DaysImages
      }
    }
  } catch (error) {
    console.error(error);
  }
}