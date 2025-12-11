// import React, { useState } from "react";
// import "./App.css"

// function App() {
//   return <Button></Button>;
// }

// function Button() {
//   const [istrue, setIstrue] = useState(false);
//   return (
//     <>
//       <button
//         onClick={() => {
//           setIstrue(!istrue);
//         }}
//       >
//         click here
//       </button>
//       {istrue?<Model istrue={istrue} setIstrue={setIstrue}></Model>:""}
//     </>
//   );
// }

// function Model({ istrue, setIstrue }) {
//   return (
//     <div className="divstyle">
//       <button onClick={() => {
//         setIstrue(false)
//       }}>click</button>
//       <br/>
//       <div>hello suraj sharma is here and i want to tell you one thing that if you truely want to get 
//         your dreams ,please work hard and put your efferts and time on those things that is directly 
//         relative to your goals.
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '5px',
            }}>
                <button onClick={onClose}>Close</button>
                {children}
            </div>
        </div>
    );
};

const App = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setModalOpen(true)}>Open Modal</button>
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <h2>Modal Title</h2>
                <p>This is some content inside the modal.</p>
            </Modal>
        </div>
    );
};

export default App;