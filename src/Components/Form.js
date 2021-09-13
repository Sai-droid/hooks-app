import React,{useRef,useEffect} from "react";
import '../App.css';


function Form() {

  const nameRef = useRef();
  const ageRef = useRef();
  const marriedRef = useRef();
  const submitRef = useRef();


  useEffect(()=>{
      nameRef.current.focus();
  },[])

  const keyPressHandle = (e)=>{
    if(e.keyCode===13){
        if(e.target.id==="nameInput"){
            nameRef.current.focus();
        }
        if(e.target.id==="ageInput"){
            ageRef.current.focus();
        }
        if(e.target.id==="marriedInput"){
            marriedRef.current.focus();
        }
    }
  }

  const submitFormData =()=>{
      alert("submittedData")
  }
  return (
    <div className="App">
      <header className="App-header">
        <h3>useRefs hooks</h3>
        <div className ="form-field">
            <span>Name</span>
            <input ref={nameRef} id={"nameInput"} type ="text"keyPressDown={keyPressHandle}></input>
        </div>
        <div className ="form-field">
            <span>Age</span>
            <input ref={ageRef}  id={"ageInput"} type ="text" keyPressDown={keyPressHandle}></input>
        </div>
        <div className ="form-field">
            <span>Married</span>
            <input name={marriedRef} id={"marriedInput"}  type ="checkbox" keyPressDown={keyPressHandle}></input>
        </div>
        <button ref ={submitRef} onClick ={submitFormData}>Submit</button>
      </header>
    </div>
  );
}

export default Form;
