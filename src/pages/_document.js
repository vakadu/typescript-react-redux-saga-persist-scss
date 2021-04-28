import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return(
            <Html lang='en'>
                <Head>
                    <meta charSet='utf-8'/>
                    <meta name='viewport' content='viewport-fit=cover'/>
                    <meta httpEquiv='Content-type' content='text/html; charset=utf-8'/>
                    <meta httpEquiv='X-UA-Compatible' content='IE=Edge'/>
                    <meta property='fb:page_id' content='884154741719573'/>
                    <meta name='robots' content='noodp'/>
                    <meta property='og:type' content='website'/>
                    <meta name='og_site_name' property='og:site_name' content='https://arzooo.com '/>
                    {/* <meta name='google-site-verification' content='jqfkU59f0sNWg_vgA8p7hEQFC8YU9GpRRslwt6h1G1o'/> */}

                    <link rel='apple-touch-icon' sizes='57x57' href='/favicons/apple-icon-57x57.png'/>
                    <link rel='apple-touch-icon' sizes='60x60' href='/favicons/apple-icon-60x60.png'/>
                    <link rel='apple-touch-icon' sizes='72x72' href='/favicons/apple-icon-72x72.png'/>
                    <link rel='apple-touch-icon' sizes='76x76' href='/favicons/apple-icon-76x76.png'/>
                    <link rel='apple-touch-icon' sizes='114x114' href='/favicons/apple-icon-114x114.png'/>
                    <link rel='apple-touch-icon' sizes='120x120' href='/favicons/apple-icon-120x120.png'/>
                    <link rel='apple-touch-icon' sizes='144x144' href='/favicons/apple-icon-144x144.png'/>
                    <link rel='apple-touch-icon' sizes='152x152' href='/favicons/apple-icon-152x152.png'/>
                    <link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-icon-180x180.png'/>
                    <link rel='icon' type='image/png' sizes='192x192'  href='/favicons/android-icon-192x192.png'/>
                    <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png'/>
                    <link rel='icon' type='image/png' sizes='96x96' href='/favicons/favicon-96x96.png'/>
                    <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png'/>
                    <meta name='msapplication-TileColor' content='#ffffff'/>
                    <meta name='msapplication-TileImage' content='/favicons/ms-icon-144x144.png'/>
                    <meta name='theme-color' content='#ffffff'/>

                    <link rel='canonical' href='https://arzooo.com/'/>
                    <meta name='og_url' property='og:url' content='https://arzooo.com/'/>

                    <link rel='preload' href='/fonts/Barlow-Thin.ttf' as='font' crossOrigin=''/>
                    <link rel='preload' href='/fonts/Barlow-Regular.ttf' as='font'crossOrigin=''/>
                    <link rel='preload' href='/fonts/Barlow-Bold.ttf' as='font'crossOrigin=''/>

                    <link rel='stylesheet' href='/css/elegant-icon.css'/>
                    <link rel='stylesheet' href='/css/icomoon-icon.css' rel='stylesheet' />

                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
