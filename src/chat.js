import React, { useEffect } from 'react';

function KommunicateChat() {
    useEffect(() => {
        if (!window.kommunicate) {
            (function (d, m) {
                var kommunicateSettings = {
                    appId: '2cd782f2f60d6fe251839c478d4e82b56',
                    popupWidget: true,
                    automaticChatOpenOnNavigation: true,
                };
                var s = document.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src = 'https://widget.kommunicate.io/v2/kommunicate.app';
                var h = document.getElementsByTagName('head')[0];
                h.appendChild(s);
                window.kommunicate = m;
                m._globals = kommunicateSettings;
            })(document, window.kommunicate || {});
        }
    }, []);

    return <div></div>;
}

export default KommunicateChat;
