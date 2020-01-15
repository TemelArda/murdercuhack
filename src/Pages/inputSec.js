import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput , MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import './Input.css'
import Papa from 'papaparse';
import file from '../data/Murder-on-the-2nd-Floor-Raw-Data.csv';
    

 

  //window.onload = () =>{getData();}
  
   

 function getData(){
    
    const ids = [];
    const devices = [];
    const deviceids = [];
    const events = [];
    const guestids = []

     Papa.parse(file, {
        header: false,
        download: true,
        dynamicTyping: true,
        complete:  (results) => {
            results.data.splice(0,1);
            results.data.pop();
            results.data.forEach( (row) => {
                ids.push(row[0]);
                devices.push(row[1]);
                deviceids.push(row[2]);
                events.push(row[3]);
                guestids.push(row[4]);
            })
        }
    });  
    
    return[ids, devices, deviceids, events, guestids];
      //let table = text.split('\n').splice(1);
      
      //table.pop()
    
    //   table.forEach(row=> {
    //     row = row.split(",");
    //     let id = row[0].substring(1, row[0].length-2);
    //     ids.push(id);
    //     let device = row[1].substring(1, row[1].length-1);
    //     devices.push(device);
    //     let deviceid = row[2].substring(1, row[2].length-1);
    //     let event = row[3].substring(1, row[3].length-1);
    //     let guestid = row[4].substring(1, row[4].length-2);
    //     deviceids.push(deviceid);
    //     events.push(event);
    //     guestids.push(guestid);


    //  })

        
}

class Inputs extends React.Component{
    constructor(){
       
        super();
        this.state = {
            Time:"",
            Device:"",
            DeviceId:"",
            Event:"",
            GuestId:"",
            val:  getData()
        }
    }

    handleInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

      sendForm = async () => {

        const valueIndex = [];  
        let vl = this.state.val;
        
       

        let list = document.getElementById('table');
        while(list.childNodes.length>0){
            list.removeChild(list.childNodes[0]);
        }

        for (let index = 0; index < vl[0].length; index++) {
            if(this.state.Device == "" || this.state.Device == vl[1][index]){
              if(this.state.DeviceId == "" || this.state.DeviceId == vl[2][index]){
                if( this.state.Event == "" || this.state.Event == vl[3][index]){
                  if( this.state.GuestId === ""|| this.state.GuestId === vl[4][index]){     
                    valueIndex.push(index);
                  }
                }
              }
            }  
        }
        this.Control(valueIndex);
    }   

    async Control(valueIndex){
        let vl = this.state.val;

        if(valueIndex.length > 0){
            for(let i = 0 ; i < valueIndex.length; i++){   
                var d = new Date(0);        
                d.setUTCSeconds(vl[0][valueIndex[i]]);
                let date = d.toString().split(" ")[4]
                
                let data1 = document.createElement("td");
                let node1 = document.createTextNode(date);
                let data2 = document.createElement("td");
                let node2 = document.createTextNode(vl[1][valueIndex[i]]);
                let data3 = document.createElement("td");
                let node3 = document.createTextNode(vl[2][valueIndex[i]]);
                let data4 = document.createElement("td");
                let node4 = document.createTextNode(vl[3][valueIndex[i]]);
                let data5 = document.createElement("td");
                let node5 = document.createTextNode(vl[4][valueIndex[i]]);
                data1.appendChild(node1);
                data2.appendChild(node2);
                data3.appendChild(node3);
                data4.appendChild(node4);
                data5.appendChild(node5);
                let row = document.createElement("tr");
                row.appendChild(data1);
                row.appendChild(data2);
                row.appendChild(data3);
                row.appendChild(data4);
                row.appendChild(data5);
                var element = document.getElementById("table");
                element.appendChild(row);    
            }
        }
        
      }

    render(){
        return(
            <MDBRow>
                <MDBCol>
                <h1 className= 'tabTitle text-center mb-5'>Filter Information</h1>
                    <div className = "inputarea mb-5 p-3 ">
                    <MDBRow>
                        <MDBCol>
                        <MDBInput 
                                label="Device"
                                icon="angle-double-right"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                                name="Device"
                                value={this.state.Device}
                                onInput={this.handleInput}/>
                        </MDBCol>
                        <MDBCol>
                            <MDBInput 
                                label="Device Id"
                                icon="angle-double-right"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                                name="DeviceId"
                                value={this.state.DeviceId}
                                onInput={this.handleInput}/>
                        </MDBCol>
                        <MDBCol>
                            <MDBInput 
                                label="Event"
                                icon="angle-double-right"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                                name="Event"
                                value={this.state.Event}
                                onInput={this.handleInput}/>
                        </MDBCol>
                        <MDBCol>
                            <MDBInput 
                               label="Guest Name"
                               icon="angle-double-right"
                               group
                               type="text"
                               validate
                               error="wrong"
                               success="right"
                               name="GuestId"
                               value={this.state.GuestId}
                               onInput={this.handleInput}/>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className = 'd-flex justify-content-center'>
                        <MDBCol className='d-flex justify-content-center'>
                            <MDBBtn gradient="peach" onClick={this.sendForm}>Apply</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                    </div>
                         
                    <div>
                        <h2 className= 'text-center'>Result Table</h2>
                    <MDBTable scrollY className="table mt-5 h-100">
                        <MDBTableHead id="tableHead">
                            <tr>
                            <th>Time</th>
                            <th>Device</th>
                            <th>Device ID</th>
                            <th>Event</th>
                            <th>GUEST ID</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody id = "table">
                           
                        </MDBTableBody>
                        </MDBTable>
                    </div>  
                </MDBCol>
            </MDBRow>
        );
    }
}



function InputSec(){
    return(
        <MDBContainer fluid className = 'inputs p-5'>
          <Inputs/> 
          
        </MDBContainer>
    );
}

export default InputSec;