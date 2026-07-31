import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import {
    ArrowUpRight,
    Github,
    Linkedin,
    Mail,
    MessageCircle,
} from 'lucide-react';

const ICONS = {
    GitHub: Github,
    LinkedIn: Linkedin,
    WhatsApp: MessageCircle,
};

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
    return (
        <footer
            id="contact"
            className="relative border-t border-white/10 bg-background lg:mt-6"
        >
            <div className="container pt-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-anton">
                        Let&apos;s Build
                        <br />
                        Something Amazing.
                    </h1>

                    <p className="mt-6 text-sm lg:text-base text-muted-foreground leading-relaxed md:leading-7">
                        I&apos;m always interested in discussing exciting
                        projects, frontend engineering opportunities, and
                        innovative ideas. If you have something in mind,
                        I&apos;d love to hear from you.
                    </p>

                    <a
                        href={`mailto:${
                            GENERAL_INFO.email
                        }?subject=${encodeURIComponent(
                            GENERAL_INFO.emailSubject,
                        )}&body=${encodeURIComponent(GENERAL_INFO.emailBody)}`}
                        aria-label={`Email Prabin Joshi at ${GENERAL_INFO.email}`}
                        className="group inline-flex items-center justify-center gap-3 mt-10 rounded-full bg-primary px-6 py-3 text-sm md:text-base text-primary-foreground transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_40px_rgba(34,197,94,.25)]"
                    >
                        <Mail size={20} />
                        {GENERAL_INFO.email}
                        <ArrowUpRight
                            size={18}
                            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-12"
                        />
                    </a>

                    <div className="mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-4">
                        {SOCIAL_LINKS.map((item) => {
                            const Icon = ICONS[item.name as keyof typeof ICONS];

                            return (
                                <a
                                    key={item.name}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Follow Prabin Joshi on ${item.name}`}
                                    className="text-sm group inline-flex items-center gap-3 rounded-full border border-white/10 bg-background-light p-3 transition-all duration-300 ease-out hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_25px_rgba(34,197,94,.2)]"
                                >
                                    <Icon size={18} />
                                    <span>{item.name}</span>
                                    <ArrowUpRight
                                        size={18}
                                        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-12"
                                    />
                                </a>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-14 border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left text-xs md:text-sm text-muted-foreground">
                    <p>© {CURRENT_YEAR} Prabin Joshi. All rights reserved.</p>

                    <p>Crafted with Next.js, TypeScript, and Tailwind CSS.</p>
                </div>
            </div>
        </footer>
    );
}
