import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToAnchor() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Scroll to top on route change
        if (hash === '') {
            window.scrollTo(0, 0);
        }
        // Scroll to anchor on fragment change
        else {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [pathname, hash]);

    return null;
}
