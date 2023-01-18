import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  '@global': {
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      outline: 'none'
    },
    body: {
      margin: 0,
      fontFamily: 'Nunito Sans, sans-serif',
      fontSize: 14,
      fontWeight: 400,
      lineHeight: '18px',
      color: '#000',
      background: '#eee',
      minWidth: 320
    },
    p: {
      marginBottom: 10
    },
    ul: {
      listStyle: 'none'
    },
    h1: {
      fontSize: 32,
      lineHeight: '32px',
      marginBottom: 30
    },
    h2: {
      fontSize: 22,
      fontWeight: 700,
      lineHeight: '25px',
      marginBottom: 25
    },
    input: {},
    'input:-webkit-autofill': {
      '-webkit-box-shadow': '0 0 0 30px white inset !important'
    },
    'input:-webkit-autofill:hover': {
      '-webkit-box-shadow': '0 0 0 30px white inset !important'
    },
    'input:-webkit-autofill:focus': {
      '-webkit-box-shadow': '0 0 0 30px white inset !important'
    },
    'input:-webkit-autofill:active': {
      '-webkit-box-shadow': '0 0 0 30px white inset !important'
    },
    'input::placeholder': {
      color: '#C5CBD8'
    },
    a: {
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline'
      }
    },
    dl: {
      overflow: 'hidden',
      '& dt': {
        fontWeight: 800,
        float: 'left',
        margin: [0, 5, 10, 0]
      },
      '& dd': {
        overflow: 'hidden',
        margin: [0, 0, 10, 0]
      }
    },
    button: {
      padding: 10,
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0px 0px 2px 2px rgb(0, 0, 0, 0.08)',
      color: 'hsl(0, 0%, 52%)',
      background: 'hsl(0, 0%, 98%)',
      margin: [0, 10, 10, 0]
    }
  },
  wrapper: {
    fontSize: 14
  },
  header: {
    padding: [16, 60],
    background: 'hsl(0, 0%, 100%)',
    marginBottom: 40,
    '@media (max-width: 767px)': {
      padding: [15, 10],
      marginBottom: 20
    },
    '& h1': {
      marginBottom: 0
    }
  }
});
