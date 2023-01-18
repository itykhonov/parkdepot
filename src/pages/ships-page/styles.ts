import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(() => {
  return {
    main: {
      padding: 50,
      transition: 'opacity 2s',
      '@media (max-width: 767px)': {
        padding: [20, 30]
      },
      '&.loading': {
        opacity: 0.5,
        pointerEvents: 'none !important'
      },
      '& .slick-next': {
        '&:before': {
          color: '#000'
        }
      },
      '& .slick-prev': {
        '&:before': {
          color: '#000'
        }
      }
    },
    filtersHolder: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 40,
      '@media (max-width: 1000px)': {
        display: 'block'
      },
      '@media (max-width: 767px)': {
        padding: 0
      },
      '& .filter-select': {
        width: 300,
        '@media (max-width: 1000px)': {
          width: '70%'
        }
      }
    },
    item: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 40,
      padding: 20,
      '@media (max-width: 767px)': {
        display: 'block'
      },
      '& .column': {
        width: '48%',
        '@media (max-width: 767px)': {
          width: '100%'
        }
      },
      '& img': {
        width: '100%',
        height: 'auto',
        marginBottom: 20
      },
      '& a': {
        color: '#000',
        '&:hover': {
          textDecoration: 'none',
          color: '#ccc'
        }
      },
      '& dl': {
        overflow: 'hidden',
        '& dt': {
          float: 'left',
          margin: [0, 20, 20, 0]
        },
        '& dd': {
          overflow: 'hidden',
          margin: [0, 0, 20, 20],
          textAlign: 'right'
        }
      }
    },
    button: {
      color: '#000',
      background: '#fff',
      '&.active': {
        color: '#fff',
        background: '#000'
      }
    }
  };
});
