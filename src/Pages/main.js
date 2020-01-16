import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBIcon } from 'mdbreact';
import './main.css';






function Main(){
    return(
        <MDBContainer fluid className = 'main exp p-5'>
          <MDBRow>
                <MDBCol>
                    <div className="header text-center"> 
                        <h1 className=' title my-3'>DataEctive</h1>'
                        <hr className="titlehr"/>
                        <h2>A murder Mystery App</h2>
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Main;