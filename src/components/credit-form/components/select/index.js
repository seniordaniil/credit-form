export const selectStyles = {
  indicatorSeparator: () => ({ display: 'none' }),
  control: (base, state) => ({
    ...base,
    background: '#fff',
    paddingRight: '30px',
    border: state.menuIsOpen ? '2px solid black' : '2px solid orangered',
    borderRadius: '20px',
    boxShadow: 'none',
    '&:hover': {
      border: state.menuIsOpen ? '2px solid black' : '2px solid orangered',
    },
    '& > :last-child': {
      display: 'none',
    },
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '14px',
      right: '14px',
      width: '2px',
      height: '7px',
      borderRadius: '1px',
      background: state.menuIsOpen ? '#333' : '#ccc',
      transform: state.menuIsOpen ? 'rotate(-45deg)' : 'rotate(-135deg)',
      transition: 'All .3s',
      zIndex: '1',
    },
    '&:after': {
      right: '18px',
      transform: state.menuIsOpen ? 'rotate(45deg)' : 'rotate(135deg)',
    },
  }),
  option: (styles) => ({
    ...styles,
    backgroundColor: '#fff',
    color: 'orangered',
    '&:hover': {
      backgroundColor: '#f8f9fa',
    },
  }),
  menu: (styles) => ({
    ...styles,
    border: '2px solid orangered',
    borderRadius: '8px',
    overflow: 'hidden',
    zIndex: '2',
  }),
  input: (styles) => ({
    ...styles,
    color: 'orangered',
  }),
  singleValue: (styles) => ({
    ...styles,
    color: 'orangered',
  }),
};
