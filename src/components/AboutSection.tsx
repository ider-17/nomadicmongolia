// components/AboutSection.tsx

import Link from 'next/link'
import Image from 'next/image'
import { getAboutSection } from '@/sanity/lib/queries'

export default async function AboutSection() {
    const data = await getAboutSection()

    if (!data) return null

    return (
        <section className="w-full h-fit text-black px-[150px] mb-20">
            <h1 className="text-center font-bold text-4xl my-5 mb-10">{data.mainTitle}</h1>
            <div className="flex gap-4 items-center">
                <div
                    className="w-1/2 h-[400px] bg-cover bg-center rounded-2xl hover:scale-103 transition-all duration-400"
                    style={{ backgroundImage: `url(${data.imageUrl})` }}
                ></div>

                <div className="w-1/2">
                    <h1 className="text-3xl font-bold text-center mb-6">{data.sectionTitle}</h1>
                    <p className="text-center text-lg">
                        {data.description}
                        <Link href={data.buttonLink}>
                            <button className="ml-3 border border-black py-0 px-1 rounded-2xl hover:bg-black hover:text-white cursor-pointer">
                                {data.buttonText}
                            </button>
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}
