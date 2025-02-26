import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import CssLogo from '../assets/CssLogo.jsx';
import HtmlLogo from '../assets/HtmlLogo.jsx';
import JavaScriptLogo from '../assets/JavaScriptLogo.jsx';
import ReactLogo from '../assets/ReactLogo.jsx';
import SassLogo from '../assets/SassLogo.jsx';
import VueJsLogo from '../assets/VueJsLogo.jsx';
import AngularLogo from '../assets/AngularLogo.jsx';
import PostgresLogo from '../assets/PostgresLogo.jsx';
import FlutterLogo from '../assets/FlutterLogo.jsx';
import LaravelLogo from '../assets/LaravelLogo.jsx';
import JavaLogo from '../assets/JavaLogo.jsx';
import NodeLogo from '../assets/NodeLogo.jsx';
import MongoLogo from '../assets/MongoLogo.jsx';
function Graphics({ circleWidth = "200", porcentage, image, lenguage }) {

    const [progress, setProgress] = useState(0);
    const [active, setActive] = useState(false);

    const radius = 85;
    const dashArray = radius * Math.PI * 2;
    const dashOffSet = dashArray - (dashArray * progress) / 100;


    useEffect(() => {
        setActive(true)
        let speed = 3.5;

        progress > porcentage * 0.82 ? speed = 30 : speed;
        progress < porcentage ? setTimeout(() => { setProgress(progress + 1)}, speed) : progress;
        progress == porcentage ? setTimeout(()=> {setActive(false)}, 1000) : setActive(true)

    /* eslint-disable */
    }, [progress])


    function MouseOver() {
        setActive(true)
    }
    function MouseOut() {
        setActive(false)
    }

    return (
        <>
            <section className='GraphicSection' >
                <div className='Circle'  >
                    <svg
                        width={circleWidth}
                        height={circleWidth}
                        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
                        onMouseOut={MouseOut}
                    >
                        <defs>
                            <linearGradient id="gradient">
                                <stop offset="10%" stopColor="#5D38F1" />
                                <stop offset="50%" stopColor="#C624E0" />
                                <stop offset="100%" stopColor="#DA239B" />
                            </linearGradient>
                        </defs>
                        <circle
                            cx={circleWidth / 2}
                            cy={circleWidth / 2}
                            strokeWidth="15px"
                            r={radius}
                            className="CircleBackground"
                        />
                        <circle
                            cx={circleWidth / 2}
                            cy={circleWidth / 2}
                            strokeWidth="15px"
                            r={radius}
                            style={{
                                strokeDasharray: dashArray,
                                strokeDashoffset: dashOffSet
                            }}
                            transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
                            className="CircleProgress"
                            stroke="url(#gradient)"
                            
                        />
                        <circle
                            cx={circleWidth / 2}
                            cy={circleWidth / 2}
                            strokeWidth="15px"
                            r={radius - 7}
                            style={{
                                strokeDasharray: dashArray,
                                strokeDashoffset: dashOffSet
                            }}
                            transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
                            className={active ? "CircleHover" : 'animation'}
                            stroke='0'
                            onMouseOver={MouseOver}
                        />
                
                        <text
                            x="50%"
                            y="50%"
                            dy="0.3em"
                            textAnchor="middle"
                            className={active ? 'CircleText' : 'animation'}
                            onMouseOver={MouseOver}
                        >
                            {progress}%
                        </text>
                    </svg>
                    { image == 'CssLogo' &&  <CssLogo  /> }
                    { image == 'HtmlLogo' &&  <HtmlLogo /> }
                    { image == 'JavaScriptLogo' &&  <JavaScriptLogo /> }
                    { image == 'ReactLogo' &&  <ReactLogo /> }
                    { image == 'VueLogo' &&  <VueJsLogo /> }
                    { image == 'SassLogo' &&  <SassLogo /> }
                    { image == 'AngularLogo' &&  <AngularLogo /> }
                    { image == 'PostgresLogo' &&  <PostgresLogo /> }
                    { image == 'FlutterLogo' &&  <FlutterLogo /> }
                    { image == 'LaravelLogo' &&  <LaravelLogo /> }
                    { image == 'JavaLogo' &&  <JavaLogo /> }
                    { image == 'NodeLogo' &&  <NodeLogo /> }
                    { image == 'MongoLogo' &&  <MongoLogo /> }
                </div>
                <p x="50%" y="50%" dy="0.3em" textAnchor="middle" className='CircleText'>{lenguage}</p>
            </section>
        </>

    )
}
Graphics.propTypes = {
    circleWidth: PropTypes.string.isRequired, 
    porcentage: PropTypes.string.isRequired, 
    image: PropTypes.node.isRequired, 
    lenguage: PropTypes.string.isRequired
};
export default Graphics
