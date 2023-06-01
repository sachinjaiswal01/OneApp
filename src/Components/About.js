import React from "react";

export default function About(props) {
   let myStyle={
    color:props.mode==='dark'?'white':'#191919',
    backgroundColor:props.mode==='dark'?'black':'white'
   }

//     const [btntext,setBtnText]=useState("Enable Light mode")
//  const toggleStyle =()=>{
//     if(myStyle.color ==='white'){
//         setMyStyle({
//             color:'#222222',
//             backgroundColor:'white',
//             border:'1px solid grey'
//         })
//         setBtnText("Enable Dark mode")
//     }
//     else{
//         setMyStyle({
//             color:'white',
//             backgroundColor:'#222222',
//         })
//         setBtnText("Enable Light mode");
//     }
//   }
  return (
    <div classNameName="container" style={myStyle}>
        <h1 classNmae="my-3">About Us</h1>
      <div className="accordion" id="accordionExample" >
        <div className="accordion-item" >
          <h2 className="accordion-header" >
            <button style={myStyle}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            Textutils is a powerful tool that can help you analyze and manipulate text in various ways. One of the most useful features of textutils is its ability to convert alphabetic cases in a given text. This means that you can easily switch between uppercase and lowercase letters, or even convert all the letters to uppercase or lowercase.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            One of the best things about textutils is that it is free to use. You don't need to pay for a subscription or download any special software to access its features. Instead, you can simply visit the textutils website or use a similar tool built into your text editor or word processor.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
            <strong>Browser compatibility</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            When it comes to using textutils, one important consideration is browser compatibility. While textutils is designed to work on most modern web browsers, there may be some variations in how it behaves depending on the browser you are using.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <button type="button" onClick={toggleStyle} className="btn btn-primary my-3">{btntext}</button>
      </div> */}
    </div>
  );
}
