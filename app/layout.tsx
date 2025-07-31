import {Footer, Layout, Navbar} from 'nextra-theme-docs'
import {Banner, Head} from 'nextra/components'
import {getPageMap} from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

const navbar = (
    <Navbar
        logo={<img src="/images/logo.png" alt="Logo" width={100} height={20}/>}
    >
         <a
            href="/recordify-1.0.2.zip"
            download
            style={{
            marginLeft: '1rem',
            backgroundColor: '#0070f3',
            color: '#fff',
            padding: '6px 12px',
            borderRadius: '6px',
            textDecoration: 'none'
            }}
        >
            Download Extension
        </a>
    </Navbar>
)

export default async function RootLayout({children}) {
    return (
        <html
            lang="en"
            dir="ltr"
            suppressHydrationWarning
        >
        <Head>
            <link rel="shortcut icon" href="/images/hunarho_favicon.png"/>
        </Head>
        <body>
        <Layout
            banner={null}
            navbar={navbar}
            pageMap={await getPageMap()}
            docsRepositoryBase="https://github.com/yogesh-hunarho/recordify-docs/tree/main"
            footer={null}
        >
            {children}
        </Layout>
        </body>
        </html>
    )
}