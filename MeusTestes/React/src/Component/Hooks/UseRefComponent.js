import React, { useRef } from "react";
import './style.css';
import { Button, Input } from 'rbx'
// https://medium.com/trabe/react-useref-hook-b6c9d39e2022
function UseRefComponent () {
  const textInput = useRef(null);
  
  const focusTextInput = () => {
    textInput.current.focus();
  };
  
    return (
      <>
        <Input className="in" type="text" />
        <Button color='black' className="btn" onClick={focusTextInput}>Next</Button>
        <Input className="in" type="text" ref={textInput} />
       
      </>
    );
}
export default UseRefComponent

// import React, { useRef, createRef, useState } from "react";

// function CustomTextInput() {
//   const [renderIndex, setRenderIndex] = useState(1);
//   const refFromUseRef = useRef();
//   const refFromCreateRef = createRef();
//   if (!refFromUseRef.current) {
//     refFromUseRef.current = renderIndex;
//   }
//   if (!refFromCreateRef.current) {
//     refFromCreateRef.current = renderIndex;
//   }
//   return (
//     <>
//       Current render index: {renderIndex}
//       <br />
//       First render index remembered within refFromUseRef.current:
//       {refFromUseRef.current}
//       <br />
//       First render index unsuccessfully remembered within
//       refFromCreateRef.current:
//       {refFromCreateRef.current}
//       <br />
//       <button onClick={() => setRenderIndex(prev => prev + 1)}>
//         Cause re-render
//       </button>
//     </>
//   );
// }
// export default CustomTextInput
