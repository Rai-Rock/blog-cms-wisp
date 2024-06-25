import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `
Benvenuto/a nel mio piccolo mondo nell'internet.
Sono appassionato di quiz e alla continua ricerca del mio posto nel mondo. 
Dopo la laurea in design , ho scoperto una passione per il mondo della finanza, settore in cui tuttora lavoro.
Ho creato questo [taccuino digitale](/) per creare archivio personale di link, articoli, pensieri e idee che stimolano la mia curiosità,
sperando che faccia altrettanto per te.
Se hai due secondi e vuoi farmi sapere quello che pensi su un determinato argomento che hai trovato su questo sito,
fammi un [fischio](mailto:riccardo.gualtieri@icloud.com) e sarò felice di rispondere.
`;

export async function generateMetadata() {
  return {
    title: "About Me",
    description: "Learn more about Samantha and her travel adventures",
    openGraph: {
      title: "About Me",
      description: "Learn more about Samantha and her travel adventures",
      images: [
        signOgImageUrl({
          title: "Samantha",
          label: "About Me",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
