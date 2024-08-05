import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { Circles } from 'react-loaders';
import FilterForm from './FilterForm/FilterForm';

const App = () => {
  const isLoading = false;

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        marginTop: '40px',
      }}
    >
      {isLoading ? (
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          visible={true}
        />
      ) : (
        <>
          <ContactForm />
          <FilterForm />
          <ContactList />
        </>
      )}
    </div>
  );
};
export default App;
