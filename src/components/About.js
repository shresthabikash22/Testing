import React, { useState } from "react";

export default function (props) {

  // below commented lines are used to control modes using a button in the same page. not from the prop sent from app.js

  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  // const [btnText, setBtnText] = useState("Enable dark mode")

  // const toggleStyle = () =>{
  //    if( myStyle.color === 'white')
  //    {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     })
  //     setBtnText("Enablen dark mode")
  //    }
  //    else{
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border:'1px solid white'
  //     })
  //     setBtnText("Enable light mode")

  //    }
  // }

  return (
    <div className="container my-2" style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'black'}}>
      <h1 className="my-4">About Us</h1>
      <div className="accordion my-2" id="accordionExample" style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'black'}}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'black'}}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'black'}}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'black'}}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'black'}}>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'black'}}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'black'}}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <button onClick={toggleStyle} className="btn btn-primary my-3">{btnText}</button>
      </div> */}
    </div>
  );
}
