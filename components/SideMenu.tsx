'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import FocusLock from 'react-focus-lock';
import {
    Menu,
    X,
    House,
    User,
    Briefcase,
    Folder,
    Github,
    Linkedin,
    Mail,
    MessageCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';

const MENU_LINKS = [
    { name: 'Home', url: '/', icon: <House size={20} /> },
    { name: 'About Me', url: '/#about-me', icon: <User size={20} /> },
    {
        name: 'Experience',
        url: '/#my-experience',
        icon: <Briefcase size={20} />,
    },
    {
        name: 'Projects',
        url: '/#selected-projects',
        icon: <Folder size={20} />,
    },
];

export default function SideMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    const triggerRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsMenuOpen(false);
        };
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'; // disable background scroll
            window.addEventListener('keydown', onKeyDown);
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isMenuOpen]);

    useEffect(() => {
        if (!isMenuOpen && triggerRef.current) {
            triggerRef.current.focus();
        }
    }, [isMenuOpen]);

    return (
        <>
            {/* toggle button */}
            <button
                ref={triggerRef}
                aria-controls="side-menu"
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
                className="fixed top-5 right-0 lg:right-2 z-[60] p-2 rounded-md border-0 outline-none ring-0 bg-transparent hover:bg-white/10 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 transition"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? (
                    <X size={24} className="text-white" />
                ) : (
                    <Menu size={24} className="text-white" />
                )}
            </button>

            {/* overlay */}
            <div
                className={cn(
                    'fixed inset-0 z-40 transition-opacity duration-300',
                    {
                        'opacity-0 pointer-events-none': !isMenuOpen,
                        'opacity-100': isMenuOpen,
                    },
                )}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* side panel */}
            <FocusLock disabled={!isMenuOpen}>
                <nav
                    id="side-menu"
                    role="dialog"
                    aria-modal="true"
                    className={cn(
                        'fixed top-0 right-0 z-50 h-full w-[260px] md:w-[360px] max-w-[90vw] bg-background-light shadow-xl overflow-y-auto transform transition-transform duration-500',
                        {
                            'translate-x-full': !isMenuOpen,
                            'translate-x-0': isMenuOpen,
                        },
                    )}
                >
                    <div className="flex flex-col h-full p-8 space-y-14">
                        {/* navigation links */}
                        <ul className="flex flex-col space-y-5">
                            {MENU_LINKS.map((link) => (
                                <li key={link.name}>
                                    <button
                                        onClick={() => {
                                            setIsMenuOpen(false);

                                            if (link.url.startsWith('/#')) {
                                                const id = link.url.replace(
                                                    '/#',
                                                    '',
                                                );

                                                if (
                                                    window.location.pathname ===
                                                    '/'
                                                ) {
                                                    document
                                                        .getElementById(id)
                                                        ?.scrollIntoView({
                                                            behavior: 'smooth',
                                                        });
                                                } else {
                                                    router.push(link.url);
                                                }
                                            } else {
                                                router.push(link.url);
                                            }
                                        }}
                                        className="flex items-center gap-4 text-sm md:text-base lg:text-lg text-foreground transition-colors hover:text-primary rounded-md border-0 outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
                                    >
                                        <span className="text-primary">
                                            {link.icon}
                                        </span>
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        {/* social links */}
                        <div>
                            <p className="text-muted-foreground uppercase mb-2 text-sm md:text-base">
                                Social
                            </p>

                            <ul className="flex flex-col space-y-5">
                                {SOCIAL_LINKS.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center text-sm md:text-base text-foreground hover:text-primary transition-colors"
                                        >
                                            {link.name.includes('GitHub') && (
                                                <Github className="mr-2" />
                                            )}
                                            {link.name.includes('LinkedIn') && (
                                                <Linkedin className="mr-2" />
                                            )}
                                            {link.name.includes('WhatsApp') && (
                                                <MessageCircle className="mr-2" />
                                            )}
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* contact email */}
                        <div>
                            <p className="text-muted-foreground uppercase mb-2 text-sm md:text-base">
                                Get in Touch
                            </p>

                            <a
                                href={`mailto:${GENERAL_INFO.email}`}
                                className="flex items-center text-sm md:text-base text-foreground hover:text-primary transition-colors"
                            >
                                <Mail className="mr-2" /> {GENERAL_INFO.email}
                            </a>
                        </div>
                    </div>
                </nav>
            </FocusLock>
        </>
    );
}
