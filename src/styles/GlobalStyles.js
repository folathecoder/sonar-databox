import { createGlobalStyle } from "styled-components";
import { QUERIES } from "../helpers/mediaQueries";

export const GlobalStyles = createGlobalStyle`
    ///////////////////////////////////////////////////////
    // TODO: ROOT VALUES
    :root {
        // BACKGROUND COLORS
        --color-bg-100: hsl(252, 33%, 12%);
        --color-bg-200: #4B4853;

        // FONT COLORS
        --color-font-100: hsl(0, 0%, 100%);
        --color-font-200: #868291;
        --color-font-300: #B2B0B5;

        // FONTS
        --font-pry-100: 'Inter', sans-serif;;
        --font-weight-100: 100;
        --font-weight-200: 200; 
        --font-weight-300: 300; 
        --font-weight-400: 400; 
        --font-weight-500: 500;
        --font-weight-600: 600; 
        --font-weight-700: 700; 
        --font-weight-800: 800; 
        --font-weight-900: 900; 

        // WIDTH
        --max-container: 69.375rem;
        --center-container: 0 auto;

        //BORDER
        --border-radius: 0.5rem;
        --border-dotted: 0.2rem dotted var(--color-font-200);

        //ANIMATION 
        --transition: all 0.5s;
    }

    ///////////////////////////////////////////////////////
    //TODO: DEFAULT STYLE RESETS
    html {
        scrollbar-width: none;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    img {
        display: block;
        max-width: 100%;
        height: auto;
    }
    li {
        list-style: none;
    }

    button {
        border: none;
        background: none;
    }

    //! Remove all animations and transitions for people that prefer not to see them
    @media (prefers-reduced-motion: reduce) {
    html:focus-within {
    scroll-behavior: auto;
    }
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}
    ::-webkit-scrollbar {
        display: none !important;
    }

    ///////////////////////////////////////////////////////
    //TODO: BASE STYLES
    body {
        font-family: var(--font-pry-100);
        font-weight: var(--font-weight-200);
        background-color: var(--color-bg-100);
        color: var(--color-font-100);
    }
    ///////////////////////////////////////////////////////
    //TODO: TYPOGRAPHY

    h3, h4 {
        font-size: 0.8rem;
        line-height: 1rem;
        font-weight: var(--font-weight-400);
        color: var(--color-font-200);
    }

    h4 {
        font-size: 0.6rem;
    }

    h5 {
        font-size: 1rem;
        line-height: 1.2rem;
    }
    
`;
