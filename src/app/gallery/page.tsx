import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getGalleryGroups } from "@/sanity/lib/queries";

interface GalleryImage {
  imageUrl: string;
  alt?: string;
}

interface GalleryItem {
  _type: "singleImage" | "doubleImage";
  imageUrl?: string;
  alt?: string;
  images?: GalleryImage[];
}

interface GalleryGroup {
  _id: string;
  title?: string;
  items: GalleryItem[];
}

export default async function GalleryPage() {
  const galleryGroups = (await getGalleryGroups()) as GalleryGroup[];

  // Debug: log data to see what we're getting
  console.log("Gallery Groups:", JSON.stringify(galleryGroups, null, 2));

  if (!galleryGroups || galleryGroups.length === 0) {
    return (
      <div className="bg-white min-h-screen">
        <Header />
        <section className="w-full min-h-screen text-black sm:px-37.5 px-[5%] pt-25 space-y-6 bg-white pb-6">
          <p>Gallery хоосон байна. Sanity Studio-д орж зургууд нэмнэ үү.</p>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <section className="w-full min-h-screen text-black sm:px-37.5 px-[5%] sm:pt-25 pt-22 space-y-6 bg-white pb-6">
        {/* <div className="sm:block hidden"> */}
          {galleryGroups.map((group, groupIndex) => (
            <div
              key={group._id || groupIndex}
              className="w-full h-fit sm:grid sm:grid-cols-2 sm:grid-rows-3 gap-2 flex flex-col *:bg-cover *:bg-center *:rounded mb-2"
            >
              {group.items.map((item, index) => {
                if (item._type === "doubleImage" && item.images) {
                  return (
                    <div key={index} className="w-full flex gap-2">
                      {item.images.map((img, i) => (
                        <div
                          key={i}
                          className="w-1/2 sm:h-59 h-48 bg-cover bg-center bg-no-repeat rounded"
                          style={{ backgroundImage: `url(${img.imageUrl})` }}
                          role="img"
                          aria-label={
                            img.alt ||
                            `Gallery image ${groupIndex + 1}-${index + 1}-${i + 1}`
                          }
                        ></div>
                      ))}
                    </div>
                  );
                } else if (item._type === "singleImage" && item.imageUrl) {
                  return (
                    <div
                      key={index}
                      className="sm:h-59 h-48 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${item.imageUrl})` }}
                      role="img"
                      aria-label={
                        item.alt ||
                        `Gallery image ${groupIndex + 1}-${index + 1}`
                      }
                    ></div>
                  );
                }
                return null;
              })}
            </div>
          ))}
        {/* </div> */}
        {/* <div className="block sm:hidden">
          {galleryGroups.map((group, groupIndex) => (
            <div key={groupIndex}></div>
          ))}
        </div> */}
      </section>

      <Footer />
    </div>
  );
}
