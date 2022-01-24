import React from "react";

export const FaStar = ({classClick, index, handleStarClick}) => {
    return(
        <svg onClick={(e) => handleStarClick(e, index)} className={classClick ? classClick : null} xmlns="http://www.w3.org/2000/svg" version="1.0" width="17pt" height="17pt" viewBox="0 0 1280.000000 1186.000000" preserveAspectRatio="xMidYMid meet">
            <metadata>
                Created by potrace 1.15, written by Peter Selinger 2001-2017
            </metadata>
            <g transform="translate(0.000000,1186.000000) scale(0.100000,-0.100000)" stroke="none">
                <path d="M6310 11852 c0 -5 -71 -159 -159 -343 -199 -418 -1408 -2968 -1622 -3419 -87 -184 -164 -346 -172 -360 l-13 -25 -2172 4 -2172 4 0 -30 c0 -27 160 -183 1565 -1528 1280 -1225 1564 -1502 1560 -1519 -3 -12 -21 -145 -40 -296 -35 -267 -124 -953 -225 -1720 -27 -206 -81 -618 -120 -915 -110 -841 -128 -976 -175 -1340 -25 -187 -45 -346 -45 -352 0 -7 12 -13 26 -13 16 0 525 275 1283 692 691 380 1565 861 1944 1070 378 208 691 378 696 378 5 0 905 -464 2001 -1031 1096 -566 1995 -1028 1997 -1025 3 3 -35 270 -86 593 -50 323 -156 1011 -236 1528 -80 517 -202 1300 -271 1740 l-124 800 99 95 c54 52 740 716 1525 1474 1227 1188 1426 1384 1426 1408 l0 28 -1088 0 c-599 0 -1581 3 -2184 7 l-1094 6 -142 281 c-78 155 -430 853 -782 1551 -353 699 -754 1494 -891 1768 -245 486 -251 497 -280 497 -16 0 -29 -4 -29 -8z"/>
            </g>
        </svg>
    )
}