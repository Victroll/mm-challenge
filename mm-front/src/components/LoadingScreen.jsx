import React from 'react';

class LoadingScreen extends React.Component {
    render() {
        return (
            <section className='loading-screen'>
                <div className='loading-screen-center'>
                    <div className='loading-logo-1'></div>
                    <div className='loading-logo-2'></div>
                    <div className='loading-logo-3'></div>
                    <div className='loading-logo-4'></div>
                    <div className='loading-logo-5'></div>
                </div>
            </section>
        );
    }
}

export default LoadingScreen;