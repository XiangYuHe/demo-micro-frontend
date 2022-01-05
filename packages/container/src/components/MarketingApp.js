import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';

export default () => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        let current = ref.current;

        const { onParentNavigate } = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({ pathname: nextPathname }) => { //location obj have information about history
                // console.log(nextPathname);
                const { pathname } = history.location;
                
                // Avoid infinite flow here
                if (pathname !== nextPathname) {
                    history.push(nextPathname);
                }
            }
        });

        history.listen(onParentNavigate);

        return () => {
            ReactDOM.unmountComponentAtNode(current);
        }

    }, []);

    return <div ref={ref} />;
};