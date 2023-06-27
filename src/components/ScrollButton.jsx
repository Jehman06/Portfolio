import React, { useState, useEffect, useLayoutEffect } from "react";
import { FaArrowCircleUp } from 'react-icons/fa';
import { Button } from "./Styles";
import { debounce } from 'lodash';

export default function ScrollButton() {
    const [visible, setVisible] = useState(false);

    const handleScroll = debounce(() => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    }, 100); // Adjust debounce delay as needed

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useLayoutEffect(() => {
        const handleInitialScroll = () => {
            handleScroll();
            window.removeEventListener('scroll', handleInitialScroll);
        };

        window.addEventListener('scroll', handleInitialScroll);
        return () => {
            window.removeEventListener('scroll', handleInitialScroll);
        };
    }, [handleScroll]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <Button>
            <FaArrowCircleUp onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }} />
        </Button>
    );
}