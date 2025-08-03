import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
    noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
    title = 'WHIPLE.tech - Innovative Technology Solutions',
    description = 'WHIPLE.tech provides cutting-edge technology solutions and innovative digital experiences. Discover our expertise in web development, software engineering, and digital transformation.',
    keywords = 'whiple, technology, web development, software engineering, digital solutions, innovation, tech consulting',
    image = 'https://whiple.tech/logo.svg',
    url = 'https://whiple.tech',
    type = 'website',
    noindex = false,
}) => {
    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Robots */}
            <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content="WHIPLE.tech" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Canonical URL */}
            <link rel="canonical" href={url} />
        </Helmet>
    );
};

export default SEO;
