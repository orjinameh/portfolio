// import React, { useState } from "react";
// import "./index.css";
// import clipboardCopy from 'clipboard-copy';

// const CopyToClipboardField = ({ textToBeCopied }) => {
//     const [copied, setIsCopied]=useState(false)
//     const handleClick = () => {
//         clipboardCopy(textToBeCopied);
//         setIsCopied(true);
//     };
//     return (
//         <>
//             <input className="input-clipboard" type="text" value={textToBeCopied} readOnly />
//             <span className="clip" style={{backgroundColor:`${copied?"#c0c0c0":""}`}} onClick={handleClick}>{copied?"copied!":"copy"}</span>
//         </>
//     );
// }

// export default CopyToClipboardField;