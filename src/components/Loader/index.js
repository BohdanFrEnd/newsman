import React from "react";
import './styles.scss';

const Loader = () => {
    return (
        <div className="loader-prewiev">
            <svg className="loader-prewiev__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 350">
                <path className="loader-prewiev__icon-cls-1" d="M180.46,179.46A115.29,115.29,0,0,1,188.25,168l-42.8-42.8a176.56,176.56,0,0,0-20.7,30.52Z" transform="translate(-104.78 -63.21)"/>
                <path className="loader-prewiev__icon-cls-2" d="M165.33,223.15a114.39,114.39,0,0,1,3.27-16l-55.7-23.77a174.18,174.18,0,0,0-8.12,39.78Z" transform="translate(-104.78 -63.21)"/>
                <path className="loader-prewiev__icon-cls-3" d="M209.54,146.68a115,115,0,0,1,13.61-9l-22.58-56.2a176.1,176.1,0,0,0-33.83,22.42Z" transform="translate(-104.78 -63.21)"/>
                <path className="loader-prewiev__icon-cls-4" d="M294.83,123.76a116,116,0,0,1,16,3.27l23.77-55.7a174.26,174.26,0,0,0-39.79-8.12Z" transform="translate(-104.78 -63.21)"/>
                <path className="loader-prewiev__icon-cls-5" d="M338.53,138.89A116.46,116.46,0,0,1,350,146.68l42.8-42.8A175.94,175.94,0,0,0,362.3,83.19Z" transform="translate(-104.78 -63.21)"/>
                <path className="loader-prewiev__icon-cls-6" d="M251.07,126.39a115.87,115.87,0,0,1,13.65-2.63V63.21a174.38,174.38,0,0,0-36.23,7Z" transform="translate(-104.78 -63.21)"/>
                <path className="loader-prewiev__icon-cls-7" d="M168,266.91a115.87,115.87,0,0,1-2.63-13.65H104.78a174.25,174.25,0,0,0,7,36.23Z" transform="translate(-104.78 -63.21)"/>
                <path className="loader-prewiev__icon-cls-8" d="M414.11,125.17,371.31,168a116.24,116.24,0,0,1,9,13.61L436.53,159A176.1,176.1,0,0,0,414.11,125.17Z" transform="translate(-104.78 -63.21)"/>
                <path className="loader-prewiev__icon-cls-9" d="M379.1,297a118.23,118.23,0,0,1-7.79,11.49l42.8,42.8a176.5,176.5,0,0,0,20.69-30.52Z" transform="translate(-104.78 -63.21)"/>
                <path className="loader-prewiev__icon-cls-10" d="M350,329.74a117.09,117.09,0,0,1-13.61,9L359,395a176.72,176.72,0,0,0,33.83-22.42Z" transform="translate(-104.78 -63.21)"/>
                <path className="loader-prewiev__icon-cls-11" d="M394.22,253.26a113.11,113.11,0,0,1-3.27,16l55.7,23.77a174.7,174.7,0,0,0,8.13-39.79Z" transform="translate(-104.78 -63.21)"/>
                <path className="loader-prewiev__icon-cls-12" d="M391.59,209.5a112.3,112.3,0,0,1,2.63,13.65h60.56a174.81,174.81,0,0,0-7-36.22Z" transform="translate(-104.78 -63.21)"/>
                <path className="loader-prewiev__icon-cls-13" d="M264.72,352.65a113.4,113.4,0,0,1-16-3.27l-23.76,55.7a174.72,174.72,0,0,0,39.78,8.13Z" transform="translate(-104.78 -63.21)"/>
                <path className="loader-prewiev__icon-cls-14" d="M221,337.53a116.32,116.32,0,0,1-11.48-7.79l-42.8,42.8a176.5,176.5,0,0,0,30.52,20.69Z" transform="translate(-104.78 -63.21)"/>
                <path className="loader-prewiev__icon-cls-15" d="M188.25,308.45a114.58,114.58,0,0,1-9-13.61L123,317.42a176.25,176.25,0,0,0,22.42,33.83Z" transform="translate(-104.78 -63.21)"/>
                <path className="loader-prewiev__icon-cls-16" d="M308.48,350a111.93,111.93,0,0,1-13.65,2.63v60.56a175,175,0,0,0,36.23-7Z" transform="translate(-104.78 -63.21)"/>
            </svg>
            <p className="loader-prewiev__title"> 
                Loading...
            </p>
        </div>
    )
}

export default Loader;