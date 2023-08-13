import React, { useState } from 'react';
import { Button, Popover } from '@mui/material';
import { LanguageOutlined } from '@mui/icons-material';

const FloatingButton = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'google-translate-popover' : undefined;

    return (
        <>
            <Button variant="contained" color="primary" onClick={handleClick}>
                <LanguageOutlined />
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <div id="google_translate_element"></div>
            </Popover>
        </>
    );
};

export default FloatingButton;















// import React, { useEffect } from 'react';

// const Translator = () => {

//   useEffect(() => {
//     // Load the Google Translate script
//     const script = document.createElement('script');
//     script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
//     script.async = true;
//     document.body.appendChild(script);

//     // Initialize the Google Translate button
//     window.googleTranslateElementInit = () => {
//       new window.google.translate.TranslateElement({autoDisplay: true}, 'google_translate_element');
//     }
//   }, []);

//   return (
//     <div id="google_translate_element"></div>
//   );
// }

// export default Translator;


// import React, { useEffect } from 'react'

// const GoogleTranslator = () => {
//     const googleTranslateElementInit = () => {
//         new window.google.translate.TranslateElement(
//             {
//                 pageLanguage: "en",
//                 autoDisplay: false
//             },
//             "google_translate_element"
//         );
//     };
//     useEffect(() => {
//         var addScript = document.createElement("script");
//         addScript.setAttribute(
//             "src",
//             "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
//         );
//         document.body.appendChild(addScript);
//         window.googleTranslateElementInit = googleTranslateElementInit;
//     }, []);
//     return (
//         <>
//             <div id="google_translate_element"></div>
//         </>
//     );
// }

// export default GoogleTranslator
