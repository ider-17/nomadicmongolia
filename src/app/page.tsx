import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import Carousel from "@/components/Carousel";
import { getAboutPage, getSlides } from "@/sanity/lib/queries";

export default async function Home() {

  const slides = await getSlides();
  // const sections = await getAboutPage();
  // console.log(sections, "sections")

  return (
    <div className="bg-white">

      <Header />

      {/* section 1 */}

      <Carousel slides={slides} />

      {/* section 2 */}

      <AboutSection />

      {/* section 3 */}

      {/* <section>
        <div className="w-full text-black px-[150px] mb-20">

          <div className="flex gap-4 items-center">
            <div className="w-1/2">
              <h1 className="text-3xl font-bold text-center mb-6">MONGOLIA</h1>

              <p className="text-center text-lg">La nostra paese, Mongolia, è uno stato dell&#39;Asia Centrale ed è il secondo più grande del mondo.
                Con  i suoi 1.566.000 km²  e una popolazione di circa 3,2 milioni di persone. Nonostante questo
                dato che abbiamo  la più bassa densità di abitanti al mondo . La nostra paese è  privo di accesso al
                mare  e confina a Nord con la  Russia  e a Sud con la  Cina . Un luogo misterioso ed affascinante
                adatto per una vacanza diversa dal solito. Il fascino della popolazione, lo sciamanesimo e una
                storia millenaria sono alcuni dei motivi che rendono la Mongolia una meta che ha molto da
                offrire ai suoi visitatori.
              </p>
            </div>

            <div className="w-1/2 h-[400px] bg-cover bg-center rounded-2xl hover:scale-103 transition-all duration-400" style={{ backgroundImage: `url("/assets/map.webp")` }}></div>

          </div>
        </div>

        <div className="w-full text-black px-[150px] mb-20">

          <div className="flex gap-4 items-center">
            <div className="w-1/2 h-[400px] bg-cover bg-center rounded-2xl hover:scale-103 transition-all duration-400" style={{ backgroundImage: `url("/assets/DSC_0069.JPG")` }}></div>

            <div className="w-1/2">
              <h1 className="text-3xl font-bold text-center mb-6">ULAANBAATOR</h1>

              <p className="text-center text-lg">è la  capitale  e la città più grande, dove risiede circa il 45,9% della  popolazione .
                Ulaanbaatar è diventata unica vera città della Mongolia. La sua architettura è un groviglio di
                fatiscenti appartamenti di epoca sovietica e moderna. Recentemente, la città ha goduto di un
                rinnovamento, con la nascita di molti caffè, ristoranti, negozi alla moda e un monumento ai
                Beatles, e, stranamente, uno dei migliori negozi LEGO fuori della Danimarca. Ulaanbaatar
                è ricca di monasteri, musei, mercati e mille altre sorprese. Tutto intorno la natura più sacra
      </p>
            </div>
          </div>
        </div>

        <div className="w-full text-black px-[150px] mb-20">

          <div className="flex gap-4 items-center">
            <div className="w-1/2">
              <h1 className="text-3xl font-bold text-center mb-6">I NOMADI</h1>

              <p className="text-lg text-justify">In Mongolia si trovano le ultime società nomadi sopravvissute che seguono stili di vita pastorali
                che da anni non siamo stati per niente toccata come il progresso dei paesi sviluppati.
                L&#39;emozionante contatto diretto con gli ospitalissimi abitanti della steppa e del deserto legati
                ancora a tradizioni millenarie. Questo si può ammirare soprattutto a Gobi, uno dei deserti più
                emozionanti del pianeta, con paesaggi fiabeschi e nomadi a cammello. Circa il 30% della nostra
                popolazione è  nomade , dedita prevalentemente all&#39; allevamento . Noi alleviamo cinque animali: il
                cavallo, il camello, la muca, la pecora e la capra da latte e da carne questi sono tradizionalmente
                divisi in uso e ci sono 70 milioni di capi di bestiame e 300.000 persone vivono di pastorizia.
              </p>
            </div>

            <div className="w-1/2 h-[400px] bg-cover bg-center rounded-2xl hover:scale-103 transition-all duration-400" style={{ backgroundImage: `url("/assets/_BAY0058.webp")` }}></div>

          </div>
        </div>

        <div className="w-full text-black px-[150px] mb-20">

          <div className="flex gap-4 items-center">
            <div className="w-1/2 h-[400px] bg-cover bg-center rounded-2xl hover:scale-103 transition-all duration-400" style={{ backgroundImage: `url("/assets/pexels-lazarevkirill-8532283.jpg")` }}></div>

            <div className="w-1/2">
              <h1 className="text-3xl font-bold text-center mb-6">NATURA</h1>

              <p className="text-center text-lg">La Mongolia è uno dei paesi meno densamente popolati della terra. Davanti ai occhi, le distese,
                gli scenari sono stupefacenti e immacolati, qui vivono animali rari e selvatici allo stato puro
                soprattutto nelle zone centrali del Paese. Il paese presenta tre grandi aree geografiche da nord a
                sud: la montagna boscosa, la steppa e il deserto del Gobi. Inoltre la Mongolia è uno dei paesi più
                alti del mondo, anche se le sue montagne superano raramente i 4.000 metri, l&#39;altitudine media si
                aggira intorno ai 1.500 metri.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full text-black px-[150px] mb-20">

          <div className="flex gap-4 items-start">
            <div className="w-1/2">
              <h1 className="text-3xl font-bold text-center mb-6">LA GHER</h1>

              <p className="text-lg text-justify">è l’abitazione tradizionale mongola, ha una struttura molto particolare ed unica nel
                suo genere. Può essere smontata in breve tempo e caricata sui carri in occasione del cambio dei
                pascoli.
                Oggi giorno si può riconoscere facilmente una gher stabile, da una che viene spostata ai campi
                stagionali, grazie alla piattaforma su cui poggia ed alla base che, nelle abitazioni fisse, può essere
                cementata.L’ossatura della gher è costituita da un intreccio di tralicci di legno, khana, che hanno
                misure standard e vengono affiancati l’uno all’altro in modo di costituire un recinto circolare. La
                porta, khalga, di legno decorato, viene rivolta sempre a sud.Al centro della gher si pongono due
                baghana, strutture portanti che servono per sorreggere la cupola del tetto, toono, alla quale
                poggiano gli uni, i pali di legno che costituiscono il tetto vero e proprio. Il tutto è poi rivestito di
                panni di feltro e
              </p>
            </div>
            <div className="w-1/2 h-[400px] bg-cover bg-center rounded-2xl hover:scale-103 transition-all duration-400" style={{ backgroundImage: `url("/assets/pexels-lazarevkirill-8532283.jpg")` }}></div>

          </div>
          <p className="text-lg text-justify">teli di cotone bianco incerati (è questa un’usanza moderna).Gli spazi all’interno
            della gher hanno una forte valenza sociale e non si può sedere ovunque si desideri, si deve al
            contrario rispettare una specifica divisione gerarchica che vede il posto d’onore al nord
            (destinato agli dei) e i posti di minor prestigio distribuiti man mano verso sud ove sta la soglia
            della casa. Il lato destro è destinato agli uomini, il sinistro alle donne. Al centro la stufa, simbolo
            della famiglia e della progenie, il cui fuoco rappresenta la continuazione genealogica e la cui
            “custodia” è affidata al figlio più giovane Otgon (dal turco principe del fuoco) che è
            generalmente anche l’erede delle sostanze paterne. In realtà occuparsi del fuoco sono le donne
            che lo accendono la mattina presto e lo alimentano durante il giorno per cucinare e scaldare
            l’abitazione.</p>
        </div>
      </section> */}

      {/* {highlights.map((item, index) => (
        <div key={index} className="flex gap-4 items-center mb-20 flex-col md:flex-row" style={{ flexDirection: item.reverse ? 'row-reverse' : 'row' }}>
          <div className="w-1/2 h-[400px] bg-cover bg-center rounded-2xl" style={{ backgroundImage: `url(${item.imageUrl})` }} />
          <div className="w-1/2">
            <h1 className="text-3xl font-bold text-center mb-6">{item.title}</h1>
            <p className="text-lg text-justify">{item.description}</p>
          </div>
        </div>
      ))} */}

      {/* {sections.map((block, i) => (
        <div key={i} className="w-full text-black px-[150px] mb-20">
          <div className={`flex gap-4 items-center ${block.imagePosition === 'left' ? 'flex-row-reverse' : ''}`}>
            <div className="w-1/2">
              <h1 className="text-3xl font-bold text-center mb-6">{block.title}</h1>
              <p className="text-lg text-justify">{block.description}</p>
            </div>
            <div
              className="w-1/2 h-[400px] bg-cover bg-center rounded-2xl hover:scale-103 transition-all duration-400"
              style={{ backgroundImage: `url(${block.image.asset.url})` }}
            ></div>
          </div>
        </div>
      ))} */}


      <Footer />

    </div >
  )
};