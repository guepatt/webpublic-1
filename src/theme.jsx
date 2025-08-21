import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import Helvetica from './assets/fonts/Helvetica/Helvetica.ttf'
import HelveticaNeuettf from './assets/fonts/HelveticaNeue/HelveticaNeue-01.ttf'
//import { gradientColor_1, gradientColor_2 } from "./colors";


// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "light"
    ? {
      grey: {
            900: 'hsl(230, 12%, 59%)',
            800: 'hsl(230, 12%, 64%)',
            700: 'hsl(229, 13%, 68%)',
            600: 'hsl(230, 13%, 73%)',
            500: 'hsl(229, 14%, 78%)',
            400: 'hsl(231, 14%, 82%)',
            300: 'hsl(229, 16%, 86%)',
            200: 'hsl(233, 17%, 91%)', 
            100: 'hsl(233, 18%, 92%)',
            50: 'hsl(228, 26%, 96%)',
            10: 'hsl(0, 0%, 100%)',
          },

          greydark: { 
            950: 'hsl(40, 6%, 10%)',
            940: 'hsl(40, 8%, 16%)',
            930: 'hsl(40, 4%, 20%)',
            900: 'hsl(233, 19%, 17%)',
            800: 'hsl(236, 13%, 23%)',
            700: 'hsl(230, 12%, 28%)',
            600: 'hsl(234, 11%, 33%)',
            500: 'hsl(231, 11%, 37%)',
            400: 'hsl(231, 9%, 42%)',
            300: 'hsl(229, 9%, 46%)',
            200: 'hsl(232, 9%, 51%)', 
            100: 'hsl(230, 10%, 55%)',
          },
        
          primary: {
            900: "hsl(211, 99%, 20%)",
            800: "hsl(209, 98%, 30%)",
            700: "hsl(207, 98%, 38%)",
            600: "hsl(206, 98%, 43%)",
            500: "hsl(205, 98%, 51%)",
            400: "hsl(205, 98%, 61%)",
            300: "hsl(205, 97%, 70%)",
            200: "hsl(208, 97%, 80%)",
            150: "hsl(208, 100%, 87%)",
            100: "hsl(209, 100%, 91%)",
            50: "hsl(210, 89%, 95%)",
          },

          primarydark: {
            900: "hsl(228, 19%, 30%)",
            800: "hsl(228, 23%, 34%)",
            700: "hsl(218, 30%, 42%)",
            600: "hsl(211, 53%, 57%)",
            500: "hsl(209, 82%, 66%)",
            400: "hsl(208, 83%, 69%)",
            300: "hsl(205, 87%, 73%)",
            200: "hsl(202, 83%, 79%)",
            100: "hsl(203, 89%, 86%)",
          },

          secondary: {
            900: "hsl(24, 8%, 38%)",
            800: "hsl(24, 8%, 38%)",
            700: "hsl(25, 6%, 52%)",
            600: "hsl(25, 8%, 57%)",
            500: "hsl(34, 12%, 62%)",
            400: "hsl(39, 6%, 67%)",
            300: "hsl(28, 6%, 72%)",
            200: "hsl(28, 8%, 77%)",
            100: "hsl(28, 8%, 82%)",
            50: "hsl(0, 0%, 92%)",
          },
          secondarydark: {
            900: "hsl(18, 4%, 6%)",
            800: "hsl(22, 5%, 8%)",
            700: "hsl(20, 6%, 10%)",
            600: "hsl(34, 5%, 12%)",
            500: "hsl(34, 5%, 14%)",
            400: "hsl(26, 6%, 16%)",
            300: "hsl(23, 6%, 20%)",
            200: "hsl(23, 6%, 26%)",
            100: "hsl(23, 6%, 32%)",
          },
          tertiary:{
            900: "hsl(179, 21%, 39%)",
            800: "hsl(174, 18%, 45%)",
            700: "hsl(173, 18%, 51%)",
            600: "hsl(173, 18%, 55%)",
            500: "hsl(170, 18%, 61%)",
            400: "hsl(39, 6%, 67%)",
            300: "hsl(171, 18%, 78%)",
            200: "hsl(173, 19%, 81%)",
            100: "hsl(173, 16%, 88%)",
            80: "hsl(172, 6%, 90%)",
            50: "hsl(175, 16%, 94%)",
          },

          quartiary:{
            900: "hsl(245, 22%, 38%)",
            800: "hsl(241, 24%, 46%)",
            700: "hsl(248, 22%, 51%)",
            600: "hsl(243, 21%, 56%)",
            500: "hsl(240, 18%, 62%)",
            400: "hsl(242, 28%, 67%)",
            300: "hsl(242, 28%, 73%)",
            200: "hsl(240, 29%, 78%)",
            100: "hsl(235, 54%, 88%)",
            50: "hsl(255, 100%, 96%)",
          },

          green: {
            200: "hsl(102, 68%, 71%)",
            300: "hsl(110, 60%, 57%)",
            400: "hsl(115, 61%, 46%)",
          },

          orange: {
            300: "hsl(32, 100%, 71%)",
            400: "hsl(31, 98%, 62%)",
            500: "hsl(30, 96%, 54%)",
          },

          red: { 
            200: "hsl(0, 90%, 81%)",
            300: "hsl(0, 86%, 68%)",
            400: "hsl(0, 74%, 55%)",
          },
        
  }
  : {
    grey: {
            900: 'hsl(230, 12%, 59%)',
            800: 'hsl(230, 12%, 64%)',
            700: 'hsl(229, 13%, 68%)',
            600: 'hsl(230, 13%, 73%)',
            500: 'hsl(229, 14%, 78%)',
            400: 'hsl(231, 14%, 82%)',
            300: 'hsl(229, 16%, 86%)',
            200: 'hsl(233, 17%, 91%)', 
            100: 'hsl(233, 18%, 92%)',
            50: 'hsl(228, 26%, 96%)',
            10: 'hsl(0, 0%, 100%)',
          },

          greydark: { 
            
            950: 'hsl(40, 6%, 10%)',
            940: 'hsl(40, 8%, 16%)',
            930: 'hsl(40, 4%, 20%)',
            900: 'hsl(233, 19%, 17%)',
            800: 'hsl(236, 13%, 23%)',
            700: 'hsl(230, 12%, 28%)',
            600: 'hsl(234, 11%, 33%)',
            500: 'hsl(231, 11%, 37%)',
            400: 'hsl(231, 9%, 42%)',
            300: 'hsl(229, 9%, 46%)',
            200: 'hsl(232, 9%, 51%)', 
            100: 'hsl(230, 10%, 55%)',
          },
        
          primary: {
            900: "hsl(211, 99%, 20%)",
            800: "hsl(209, 98%, 30%)",
            700: "hsl(207, 98%, 38%)",
            600: "hsl(206, 98%, 43%)",
            500: "hsl(205, 98%, 51%)",
            400: "hsl(205, 98%, 61%)",
            300: "hsl(205, 97%, 70%)",
            200: "hsl(208, 97%, 80%)",
            150: "hsl(208, 100%, 87%)",
            100: "hsl(209, 100%, 91%)",
            50: "hsl(210, 89%, 95%)",
          },

          primarydark: {
            900: "hsl(228, 19%, 30%)",
            800: "hsl(228, 23%, 34%)",
            700: "hsl(218, 30%, 42%)",
            600: "hsl(211, 53%, 57%)",
            500: "hsl(209, 82%, 66%)",
            400: "hsl(208, 83%, 69%)",
            300: "hsl(205, 87%, 73%)",
            200: "hsl(202, 83%, 79%)",
            100: "hsl(203, 89%, 86%)",
          },

          secondary: {
            900: "hsl(24, 8%, 38%)",
            800: "hsl(25, 8%, 42%)",
            700: "hsl(25, 6%, 52%)",
            600: "hsl(25, 8%, 57%)",
            500: "hsl(34, 12%, 62%)",
            400: "hsl(39, 6%, 67%)",
            300: "hsl(28, 6%, 72%)",
            200: "hsl(28, 8%, 77%)",
            100: "hsl(28, 8%, 82%)",
            50: "hsl(0, 0%, 92%)",
          },
          secondarydark: {
            900: "hsl(18, 4%, 6%)",
            800: "hsl(22, 5%, 8%)",
            700: "hsl(20, 6%, 10%)",
            600: "hsl(34, 5%, 12%)",
            500: "hsl(34, 5%, 14%)",
            400: "hsl(26, 6%, 16%)",
            300: "hsl(23, 6%, 20%)",
            200: "hsl(23, 6%, 26%)",
            100: "hsl(23, 6%, 32%)",
          },
          tertiary:{
            900: "hsl(179, 21%, 39%)",
            800: "hsl(174, 18%, 45%)",
            700: "hsl(173, 18%, 51%)",
            600: "hsl(173, 18%, 55%)",
            500: "hsl(170, 18%, 61%)",
            400: "hsl(39, 6%, 67%)",
            300: "hsl(171, 18%, 78%)",
            200: "hsl(173, 19%, 81%)",
            100: "hsl(173, 16%, 88%)",
            80: "hsl(172, 6%, 90%)",
            50: "hsl(175, 16%, 94%)",
          },

          quartiary:{
            900: "hsl(245, 22%, 38%)",
            800: "hsl(241, 24%, 46%)",
            700: "hsl(248, 22%, 51%)",
            600: "hsl(243, 21%, 56%)",
            500: "hsl(240, 18%, 62%)",
            400: "hsl(242, 28%, 67%)",
            300: "hsl(242, 28%, 73%)",
            200: "hsl(240, 29%, 78%)",
            100: "hsl(235, 54%, 88%)",
            50: "hsl(255, 100%, 96%)",
          },

          green: {
            200: "hsl(102, 68%, 71%)",
            300: "hsl(110, 60%, 57%)",
            400: "hsl(115, 61%, 46%)",
          },

          orange: {
            300: "hsl(32, 100%, 71%)",
            400: "hsl(31, 98%, 62%)",
            500: "hsl(30, 96%, 54%)",
          },

          red: { 
            200: "hsl(0, 90%, 81%)",
            300: "hsl(0, 86%, 68%)",
            400: "hsl(0, 74%, 55%)",
          },
          
  }),
});


// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
          // palette values for light mode
          primary: {
            main: colors.primary[500],
            C50: colors.primary[50],
            C100: colors.primary[100],
            C200: colors.primary[200],
            C300: colors.primary[300],
            C400: colors.primary[400],
            C500: colors.primary[500],
            C600: colors.primary[600],
            C700: colors.primary[700],
            C800: colors.primary[800],
            C900: colors.primary[900],
          },
          primarydark: {
            main: colors.primarydark[500],
            C50: colors.primarydark[50],
            C100: colors.primarydark[100],
            C200: colors.primarydark[200],
            C300: colors.primarydark[300],
            C400: colors.primarydark[400],
            C500: colors.primarydark[500],
            C600: colors.primarydark[600],
            C700: colors.primarydark[700],
            C800: colors.primarydark[800],
            C900: colors.primarydark[900],
          },
          secondary: {
            main: colors.secondary[500],
            C100: colors.secondary[100],
            C200: colors.secondary[200],
            C300: colors.secondary[300],
            C400: colors.secondary[400],
            C500: colors.secondary[500],
            C600: colors.secondary[600],
            C700: colors.secondary[700],
            C800: colors.secondary[800],
            C900: colors.secondary[900],
          },
          secondarydark: {
            main: colors.secondarydark[500],
            C100: colors.secondarydark[100],
            C200: colors.secondarydark[200],
            C300: colors.secondarydark[300],
            C400: colors.secondarydark[400],
            C500: colors.secondarydark[500],
            C600: colors.secondarydark[600],
            C700: colors.secondarydark[700],
            C800: colors.secondarydark[800],
            C900: colors.secondarydark[900],
          },
          tertiary: {
            main: colors.tertiary[500],
            C50: colors.tertiary[50],
            C80: colors.tertiary[80],
            C100: colors.tertiary[100],
            C200: colors.tertiary[200],
            C300: colors.tertiary[300],
            C400: colors.tertiary[400],
            C500: colors.tertiary[500],
            C600: colors.tertiary[600],
            C700: colors.tertiary[700],
            C800: colors.tertiary[800],
            C900: colors.tertiary[900],
          },
          quartiary: {
            main: colors.quartiary[500],
            C50: colors.quartiary[50],
            C100: colors.quartiary[100],
            C200: colors.quartiary[200],
            C300: colors.quartiary[300],
            C400: colors.quartiary[400],
            C500: colors.quartiary[500],
            C600: colors.quartiary[600],
            C700: colors.quartiary[700],
            C800: colors.quartiary[800],
            C900: colors.quartiary[900],
          },
          grey: {
            dark: colors.grey[900],
            main: colors.grey[500],
            light: colors.grey[50],
            C10: colors.grey[10],
            C50: colors.grey[50],
            C100: colors.grey[100],
            C200: colors.grey[200],
            C300: colors.grey[300],
            C400: colors.grey[400],
            C500: colors.grey[500],
            C600: colors.grey[600],
            C700: colors.grey[700],
            C800: colors.grey[800],
            C900: colors.grey[900],
          },
          greydark: {
            C100: colors.greydark[100],
            C200: colors.greydark[200],
            C300: colors.greydark[300],
            C400: colors.greydark[400],
            C500: colors.greydark[500],
            C600: colors.greydark[600],
            C700: colors.greydark[700],
            C800: colors.greydark[800],
            C900: colors.greydark[900],
            C930: colors.greydark[930],
            C940: colors.greydark[940],
            C950: colors.greydark[950],
          },
          traffic: {
            green: colors.green[400],
            orange: colors.orange[500],
            red: colors.red[400],
          },

          background: {
            default: colors.grey[50],
          },
        }
      : {
            // palette values for dark mode
            primary: {
            main: colors.primary[500],
            C50: colors.primary[50],
            C100: colors.primary[100],
            C200: colors.primary[200],
            C300: colors.primary[300],
            C400: colors.primary[400],
            C500: colors.primary[500],
            C600: colors.primary[600],
            C700: colors.primary[700],
            C800: colors.primary[800],
            C900: colors.primary[900],
          },
          primarydark: {
            main: colors.primarydark[500],
            C50: colors.primarydark[50],
            C100: colors.primarydark[100],
            C200: colors.primarydark[200],
            C300: colors.primarydark[300],
            C400: colors.primarydark[400],
            C500: colors.primarydark[500],
            C600: colors.primarydark[600],
            C700: colors.primarydark[700],
            C800: colors.primarydark[800],
            C900: colors.primarydark[900],
          },
          secondary: {
            main: colors.secondary[500],
            C100: colors.secondary[100],
            C200: colors.secondary[200],
            C300: colors.secondary[300],
            C400: colors.secondary[400],
            C500: colors.secondary[500],
            C600: colors.secondary[600],
            C700: colors.secondary[700],
            C800: colors.secondary[800],
            C900: colors.secondary[900],
          },
          secondarydark: {
            main: colors.secondarydark[500],
            C100: colors.secondarydark[100],
            C200: colors.secondarydark[200],
            C300: colors.secondarydark[300],
            C400: colors.secondarydark[400],
            C500: colors.secondarydark[500],
            C600: colors.secondarydark[600],
            C700: colors.secondarydark[700],
            C800: colors.secondarydark[800],
            C900: colors.secondarydark[900],
          },
          tertiary: {
            main: colors.tertiary[500],
            C50: colors.tertiary[50],
            C80: colors.tertiary[80],
            C100: colors.tertiary[100],
            C200: colors.tertiary[200],
            C300: colors.tertiary[300],
            C400: colors.tertiary[400],
            C500: colors.tertiary[500],
            C600: colors.tertiary[600],
            C700: colors.tertiary[700],
            C800: colors.tertiary[800],
            C900: colors.tertiary[900],
          },
          quartiary: {
            main: colors.quartiary[500],
            C50: colors.quartiary[50],
            C100: colors.quartiary[100],
            C200: colors.quartiary[200],
            C300: colors.quartiary[300],
            C400: colors.quartiary[400],
            C500: colors.quartiary[500],
            C600: colors.quartiary[600],
            C700: colors.quartiary[700],
            C800: colors.quartiary[800],
            C900: colors.quartiary[900],
          },
          grey: {
            dark: colors.grey[900],
            main: colors.grey[500],
            light: colors.grey[50],
            C010: colors.grey[10],
            C50: colors.grey[50],
            C100: colors.grey[100],
            C200: colors.grey[200],
            C300: colors.grey[300],
            C400: colors.grey[400],
            C500: colors.grey[500],
            C600: colors.grey[600],
            C700: colors.grey[700],
            C800: colors.grey[800],
            C900: colors.grey[900],
          },
          greydark: {
            C100: colors.greydark[100],
            C200: colors.greydark[200],
            C300: colors.greydark[300],
            C400: colors.greydark[400],
            C500: colors.greydark[500],
            C600: colors.greydark[600],
            C700: colors.greydark[700],
            C800: colors.greydark[800],
            C900: colors.greydark[900],
            C930: colors.greydark[930],
            C940: colors.greydark[940],
            C950: colors.greydark[950],
          },
          traffic: {
            green: colors.green[400],
            orange: colors.orange[500],
            red: colors.red[400],
          },
          background: {
            default: colors.secondarydark[600],
          },
          }),
        },

        typography: {
        
          fontFamily: ["'Helvetica Neue', 'Helvetica', sans-serif", "'Poppins', sans-serif", "'Inter', sans-serif",].join(','),
  
          h1: {
            fontFamily: "'Helvetica Neue', sans-serif",
            letterSpacing: "0.08rem",
            fontWeight: 300,
            '@media (min-width: 0px)': {
            fontSize: '2rem',
            },
            '@media (min-width: 600px)': {
              fontSize: '3.8rem',
            },
            '@media (min-width: 960px)': {
              fontSize: '3.8rem',
            },
            '@media (min-width:1280px)': {
              fontSize: '3.8rem',
            },
            '@media (min-width:1740px)': {         
              fontSize: '4.9rem',
            },
          },
      
          h2: {
          fontFamily: "'Helvetica Neue', sans-serif",
          fontWeight: 300,
          letterSpacing: "0.02rem",
          '@media (min-width: 0px)': {
            fontSize: "1.6rem",
          },
          '@media (min-width: 600px)': {
            fontSize: "2rem",
          },
          '@media (min-width: 960px)': {
            fontSize: "2rem",
          },
          '@media (min-width:1280px)': {
            fontSize: "2rem",
          },
          '@media (min-width:1740px)': {         
            fontSize: "2.2rem",
          },
        },
  
        h3: {
          fontFamily: "'Helvetica Neue', sans-serif",
          fontWeight: 300,
          letterSpacing: '0.001rem',
          '@media (min-width: 0px)': {
          fontSize: "1.4rem",
          },
          '@media (min-width: 600px)': {
            fontSize: "1.6rem",
          },
          '@media (min-width: 960px)': {
            fontSize: "1.6rem",     
          },
          '@media (min-width:1280px)': {
            fontSize: "1.6rem",
          },
          '@media (min-width:1740px)': {         
            fontSize: "1.8rem",
          },
        },
         
        h4: {
          fontFamily: "'Helvetica Neue', sans-serif",
          fontWeight: 300,
          letterSpacing: '0.05rem',
          '@media (min-width: 0px)': {
            fontSize: "1rem",
          },
          '@media (min-width: 600px)': {
            fontSize: "1.2rem",
          },
          '@media (min-width: 960px)': {
            fontSize: "1.2rem",
          },
          '@media (min-width:1280px)': {
          fontSize: "1.2rem",
          },
          '@media (min-width:1740px)': {         
            fontSize: "1.35rem",
          },
        },
  
        h5: {
          fontFamily: "'Helvetica Neue', sans-serif",
          fontWeight: 200,
          letterSpacing: '0.03rem',
          '@media (min-width: 0px)': {
            fontSize: "0.9rem",
          },
          '@media (min-width: 600px)': {
            fontSize: "1rem",
          },
          '@media (min-width: 960px)': {
            fontSize: "1rem",
          },
          '@media (min-width:1280px)': {
            fontSize: "1rem",
          },
          '@media (min-width:1740px)': {         
            fontSize: "1.1rem",
          },
        },
      
        h6: {
          fontFamily: "'Helvetica Neue', sans-serif",
          fontWeight: 200,
          letterSpacing: '0.03rem',
          '@media (min-width: 0px)': {
            fontSize: "0.7rem",
          },
          '@media (min-width: 600px)': {
            fontSize: "0.8rem",
          },
          '@media (min-width: 960px)': {
            fontSize: "0.8rem",
          },
          '@media (min-width:1280px)': {
            fontSize: "0.8rem",
          },
          '@media (min-width:1740px)': {         
            fontSize: "1rem",
          },
        },
  
        number: {
          fontFamily: "'Poppins', sans-serif",          
          '@media (min-width: 0px)': {
            fontSize: '2.2rem'
          },
          '@media (min-width: 600px)': {
            fontSize: '2.2rem'
          },
          '@media (min-width: 960px)': {
            fontSize: '2.2rem'      
          },
          '@media (min-width:1280px)': {
            fontSize: '2.2rem'
          },
          '@media (min-width:1740px)': {         
            fontSize: '4.4rem'
          },
        },
  
        subtitle1: {
          fontFamily: "'Helvetica Neue', sans-serif",
          fontWeight: 300,
          letterSpacing: '0.03rem',
          lineHeight: '0.98rem',
          '@media (min-width: 0px)': {
            fontSize: "0.7rem",
          },
          '@media (min-width: 600px)': {
            fontSize: "0.75rem",
          },
          '@media (min-width: 960px)': {
            fontSize: "0.75rem",
          },
          '@media (min-width:1280px)': {
            fontSize: "0.75rem",
          },
          '@media (min-width:1740px)': {         
            fontSize: "0.8rem",
          },
        },
  
        subtitle2: {
          fontFamily: "'Helvetica Neue', sans-serif",
          fontWeight: 300,
          letterSpacing: '0.03rem',
          '@media (min-width: 0px)': {
            fontSize: "0.6rem",
          },
          '@media (min-width: 600px)': {
            fontSize: "0.65rem",
          },
          '@media (min-width: 960px)': {
            fontSize: "0.65rem",
          },
          '@media (min-width:1280px)': {
            fontSize: "0.65rem",
          },
          '@media (min-width:1740px)': {         
            fontSize: "0.7rem",
          },
        },
  
        body1: {
          fontFamily: "'Helvetica Neue', sans-serif",
          fontWeight: 300,
          '@media (min-width: 0px)': {
            fontSize: "0.8rem",
          },
          '@media (min-width: 600px)': {
            fontSize: "0.8rem",
          },
          '@media (min-width: 960px)': {
            fontSize: "0.8rem",
          },
          '@media (min-width:1280px)': {
            fontSize: "0.8rem",
          },
          '@media (min-width:1740px)': {
            fontSize: "0.8rem",
          },
        },
  
        body2: {
          fontFamily: "'Helvetica Neue', sans-serif",
          fontWeight: 300,
  
          '@media (min-width: 0px)': {
            fontSize: "0.6rem",
            
          },
          '@media (min-width: 600px)': {
            fontSize: "0.6rem",
          },
          '@media (min-width: 960px)': {
            fontSize: "0.6rem",
          },
          '@media (min-width:1280px)': {
            fontSize: "0.6rem",
          },
          '@media (min-width:1740px)': {
            fontSize: "0.65rem",
          },
        },
  
        button: {
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            lineHeight: 1.4,
            textTransform: "uppercase",
            //letterSpacing: '0.02rem',
          '@media (min-width: 0px)': {
            fontSize: "0.8rem",
          },
          '@media (min-width: 600px)': {
            fontSize: "0.8rem",
          },
          '@media (min-width: 960px)': {
            fontSize: "0.8rem",
          },
          '@media (min-width:1280px)': { 
            fontSize: "0.8rem",
          },
          '@media (min-width:1740px)': {
            fontSize: "0.85rem",
          },
        },
      },

MuiCssBaseline: {
  
  styleOverrides: `

        @font-face {
            font-family: 'Helvetica';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('Helvetica Neue'), url(${HelveticaNeuettf}) format('ttf');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
        `,

  body: {
    maxWidth: '100%',
    overflowX: 'hidden',
    //backgroundColor: '#000000',
    //background: '#000000',
    //backgroundImage: `radial-gradient(#eaf0f9, #d0cdca)`,
  },  
  
},

breakpoints:{
values: {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1740,
}
},

spacing: 8,

};
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};

