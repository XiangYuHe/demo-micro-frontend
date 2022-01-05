import { mount } from 'dashboard/DashboardApp';
import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

export default () => {
    const ref = useRef(null);

    useEffect(() => {
        let current = ref.current;

        mount(ref.current);

        return () => {
            ReactDOM.unmountComponentAtNode(current);
        }
    }, []);

    return <div ref={ref} />;
};