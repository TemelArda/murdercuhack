
import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBIcon, MDBBtn } from 'mdbreact';
import "./guest.css"

const Guests = [
    {name: "Jason", Room: "241"}, {name: "Veronica", Room: "210"}, {name: "Thomas", Room: "248"},
    {name: "Rob", Room: "231"}, {name: "Kristina", Room: "235"}, {name: "Marc-Andre", Room: "Cleaning Stuff"},
    {name: "Dave", Room: "Cooking Staff"}, {name: "Salina", Room: "Receptionist Staff"}, {name: "Harrison", Room: "Reception Late-night Staff"},
    {name: "Eugene", Room: "Room Not Found"}, {name: "Alok", Room: "Room Fot Found"}
]

class GuestList extends React.Component{
    render(){
        return(
            <MDBCol md = '3' className= 'guestLink mx-3'>
                <p><a>{this.props.guest.name}</a> <br/>  {this.props.guest.Room}</p>
            </MDBCol>
        );

    }
}

function GuestSec(){
    return(
        <MDBContainer fluid className = 'px-3 my-5'>
            <MDBRow className = 'd-flex justify-content-center my-5 mx-2'>
                <GuestList guest={Guests[0]}/> 
                <GuestList guest={Guests[1]}/> 
                <GuestList guest={Guests[2]}/>
            </MDBRow>
            <hr className = 'hrguest'/>
            <MDBRow className = 'd-flex justify-content-center my-5 mx-2'>
                <GuestList guest={Guests[3]}/> 
                <GuestList guest={Guests[4]}/> 
                <GuestList guest={Guests[5]}/>
            </MDBRow>
            <hr className = 'hrguest'/>
            <MDBRow className = 'd-flex justify-content-center my-5 mx-2'>
                <GuestList guest={Guests[6]}/>
                <GuestList guest={Guests[7]}/> 
                <GuestList guest={Guests[8]}/>        
            </MDBRow>
            <hr className = 'hrguest'/>
            <MDBRow className = 'd-flex justify-content-center my-5 mx-2'>
                <GuestList guest={Guests[9]}/>
                <GuestList guest={Guests[10]}/>         
            </MDBRow>
          
           
           
        </MDBContainer>
    );
}

export default GuestSec;