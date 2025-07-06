"use client"

import { useState, useEffect } from 'react';
import Loading from '../components/Loading'; // Loading компонент
import { useRouter } from 'next/router'; // next/router ашиглах

type AppProps = {
    Component: React.ComponentType<any>;
    pageProps: any;
};

const App = ({ Component, pageProps }: AppProps) => {
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();

    // Хуудас ачаалагдаж эхлэх үед loading үзүүлэх
    useEffect(() => {
        const handleRouteChange = () => {
            setLoading(true);  // Хуудас ачаалагдаж эхлэхэд
        };

        const handleRouteComplete = () => {
            setLoading(false);  // Хуудас амжилттай ачаалагдвал
        };

        const handleRouteError = () => {
            setLoading(false);  // Хуудас ачаалагдсан үед
        };

        // Хуудас шилжих үед route event-уудыг сонсох
        router.events.on('routeChangeStart', handleRouteChange);
        router.events.on('routeChangeComplete', handleRouteComplete);
        router.events.on('routeChangeError', handleRouteError);

        // Очих үедээ эдгээр event-үүдийн тохиргоог устгах
        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
            router.events.off('routeChangeComplete', handleRouteComplete);
            router.events.off('routeChangeError', handleRouteError);
        };
    }, [router]);

    return (
        <>
            {loading ? <Loading /> : <Component {...pageProps} />}
        </>
    );
};

export default App;
