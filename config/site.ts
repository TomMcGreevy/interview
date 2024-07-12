export type SiteConfig = typeof siteConfig
export const siteConfig = {
    name: "SellerAMP",
    navItems: [
        {
            title: "Home",
            href: "/",
            logo: "/selleramp-logo.webp",
        },
        {
            title: "Features",
            href: "/features",
        },
        {
            title: "Pricing",
            href: "/pricing",
        },
        {
            title: "Resources",
            href: "/resources",
        },
        {
            title: "Login",
            href: "/login",
        },
        {
            title: "Free Trial",
            href: "/pricing",
            button: true,
        }
    ]
}