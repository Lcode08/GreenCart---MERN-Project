import { assets, footerLinks } from "../assets/assets";

const Footer = () => {

    return (
        <div className="px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32 mt-16 sm:mt-20 md:mt-24 bg-primary/10 dark:bg-slate-800/50 transition-colors duration-300">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8 sm:gap-10 py-8 sm:py-10 border-b border-gray-500/30 dark:border-gray-600/50 text-gray-500 dark:text-gray-400">
                <div className="w-full lg:w-auto">
                    <img className="w-28 sm:w-32 md:w-36" src={assets.logo} alt="logo" />
                    <p className="max-w-full sm:max-w-[410px] mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed">
                        We deliver fresh groceries and snacks straight to your door. Trusted by thousands, we aim to make your shopping experience simple and affordable.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-5 w-full lg:w-[45%]">
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-gray-200 mb-3 sm:mb-2 md:mb-5">{section.title}</h3>
                            <ul className="text-xs sm:text-sm space-y-1 sm:space-y-1">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href={link.url} className="hover:underline transition hover:text-primary">{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <p className="py-3 sm:py-4 text-center text-xs sm:text-sm md:text-base text-gray-500/80 dark:text-gray-400/80 leading-relaxed">
                Copyright {new Date().getFullYear()} © <span className="font-semibold text-primary hover:text-primary-dull transition-colors cursor-pointer">Lokesh Patil</span> • Crafted with 💚 for Fresh Living
            </p>
        </div>
    );
};

export default Footer