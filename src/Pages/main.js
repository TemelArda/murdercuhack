import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBIcon } from 'mdbreact';
import './main.css';




class MainPage extends React.Component{
    render(){
        return(
            <MDBRow>
                <MDBCol>
                    <div className="header text-center"> 
                        <h1 className=' title my-3'>DataEctive</h1>'
                        <hr className="titlehr"/>
                        <h2>A murder Mystery App</h2>
                    </div>
                </MDBCol>
            </MDBRow>
        );
    }
}

function Main(){
    return(
        <MDBContainer fluid className = 'main exp p-5'>
          <MainPage/>  
        </MDBContainer>
    );
}

export default Main;