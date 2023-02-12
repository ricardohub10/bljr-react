import logo from './logo.svg';
// import fungsi create element punya react
import React from 'react';
import './App.css';



// Dengan format pada class diatas kita masih belum dapat utk menampilkannya. sehingga harus dimasukkan ke dalam function app dimana fnction app di export secara default di dalam file index.js


class App extends React.Component {
// Utk menampilkan suatu ui dari react component kita wajib menggunakan method render dan di dalamnya kita kasih return
  render(){
    return(
      // Kurung lengkung diatas merupakan paranthesis dimana ia menandakan bahwa kuta memakai banyak element html
    <div>
      <h1 className="header">
        Hello, world!    
      </h1>
           <p>Lorem</p>
    </div>
    );
  
  }
  // return <h1>Hello World</h1>
  // Ini pake JSX
  // return <h1 className="header"> Hello, World!</h1>
  // Sampe sini
  // ini Pake Create Element dari React
  // return React.createElement('h1', {class: 'header'}, 'Hello World wii')
  
 
}

export default App;


// Catatan : 1 File Javascript idealnya memiliki sebuah class component & component tersebut bisa diisi bagian terkecil dari element seperti child element, kita bisa taruh di file javascript yang berbeda
