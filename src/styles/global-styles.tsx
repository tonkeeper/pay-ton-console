import { JSXElement } from 'solid-js';
import { createGlobalStyles } from 'solid-styled-components';
import { fontFamily } from './foundations/font-family';

const disableScrollClass = 'disable-scroll';
const usingMouseClass = 'using-mouse';

export const GlobalStyles = (): JSXElement => {
    document.body.addEventListener('mousedown', () => document.body.classList.add(usingMouseClass));

    document.body.addEventListener('keydown', event => {
        if (event.key === 'Tab') {
            document.body.classList.remove(usingMouseClass);
        }
    });

    const Styles = createGlobalStyles`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        font-family: ${fontFamily.body};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;        
        -webkit-tap-highlight-color: transparent;
    }
    
    img {
      -webkit-user-select: none;
      -webkit-touch-callout: none;
    }   
 
    *:focus {
        outline: #08f auto 2px;
    }
    
    li {
        list-style: none;
    }
    
    button {
        outline: none;
    }
    
    body.${disableScrollClass} {
        position: fixed; 
        overflow-y: scroll;
        right: 0;
        left: 0;
    }
    
    body.${usingMouseClass} *:focus {
        outline: none;
    }
    
    .mb-1 {
        margin-bottom: 4px;
    }
    
    .mb-2 {
        margin-bottom: 8px;
    }
    
    .mb-3 {
        margin-bottom: 12px;
    }
    
    .mt-1 {
        margin-top: 4px;
    }
    
    .mt-2 {
        margin-top: 8px;
    }
    
    .mt-3 {
        margin-top: 12px;
    }
    
    .ml-1 {
        margin-left: 4px;
    }
    
    .ml-2 {
        margin-left: 8px;
    }
    
    .ml-3 {
        margin-left: 12px;
    }
    
    .mr-1 {
        margin-right: 4px;
    }
    
    .mr-2 {
        margin-right: 8px;
    }
    
    .mr-3 {
        margin-right: 12px;
    }
`;
    return <Styles />;
};
