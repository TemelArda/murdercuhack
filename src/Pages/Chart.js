import React, {Components} from 'react';
import { MDBContainer,  MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from 'mdbreact';
import Papa from 'papaparse';
import file from '../data/Murder-on-the-2nd-Floor-Raw-Data.csv';


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
}

 const guests = ["Jason", "Veronica", "Thomas", "Rob", "Kristina", "Marc-Andre",
           "Dave", "Salina", "Harrison", "Eugene", "Alok"];
 let i = 0;

class ChartIt extends React.Component{
    constructor(){
        super();
        this.state = {
            val: getData()
        }
       
    }
    
    
   tracker = () => {
     let vals = this.state.val;
     
  if(i < vals[0].length && vals[4][i] != "n/a"){
      let list = document.getElementById(vals[4][i]);     
      while(list.childNodes.length > 1){
        list.removeChild(list.childNodes[list.childNodes.length - 1 ]);
      }
      let d = new Date(0);        
      d.setUTCSeconds(vals[0][i]);
      let date = d.toString().split(" ")[4]
      let data1 = document.createElement("td");
      let node1 = document.createTextNode(date);
      let data2 = document.createElement("td");
      let node2 = document.createTextNode(vals[1][i]);
      let data3 = document.createElement("td");
      let node3 = document.createTextNode(vals[2][i]);
      let data4 = document.createElement("td");
      let node4 = document.createTextNode(vals[3][i]);
      data1.appendChild(node1);
      data2.appendChild(node2);
      data3.appendChild(node3);
      data4.appendChild(node4);
      list.appendChild(data1);
      list.appendChild(data2);
      list.appendChild(data3);
      list.appendChild(data4);
      i+=3;
    } 
    else{
      i+=3;
    }
  }
  refresh = ()=>{
    
      
        for(let j = 0; j < 11; j++){
            let list = document.getElementById(guests[j]);     
            while (list.firstChild) {
                list.removeChild(list.firstChild);
            }
        }
        document.getElementById('startB').disabled = false;
        document.getElementById('clearB').disabled = true;
        document.getElementById('forwardB').disabled = true; 

     i=0; 
  }
  start = ()=>{
    
      if(i==0){
        for(let j = 0; j < 11; j++){
            let list = document.getElementById(guests[j]);     
            
            let data1 = document.createElement("td");
            let node1 = document.createTextNode(guests[j]);
            data1.appendChild(node1);
            list.appendChild(data1);
            
        } 
        document.getElementById('startB').disabled = true;
        document.getElementById('clearB').disabled = false;
        document.getElementById('forwardB').disabled = false;
    }
  }

    render(){
        return(
            <div>
            <MDBTable id="table2">
                    <MDBTableHead>
                        
                        <th> </th>
                        <th>Time </th>
                        <th>Device </th>
                        <th>Device ID</th>
                        <th>Event</th> 
                        <th></th>
                                           
                    </MDBTableHead>
                    <MDBTableBody id="tbody">
                    <tr id="Veronica">
                        
                    </tr>
                    <tr id="Jason">
                        
                    </tr>
                    <tr id="Thomas">
                       
                    </tr>
                    <tr id="Rob">
                      
                    </tr>
                    <tr id="Kristina">
                        
                    </tr>
                    <tr id="Marc-Andre">
                       
                    </tr>
                    <tr id="Dave">
                       
                    </tr>
                    <tr id="Salina">
                        
                    </tr>
                    <tr id="Harrison">
                       
                    </tr>
                    <tr id="Alok">
                        
                    </tr>
                    <tr id="Eugene">
                        
                    </tr>
                    </MDBTableBody>
                </MDBTable>
                <MDBContainer fluid className = "d-flex justify-content-around">
                <MDBBtn gradient="peach" id='clearB'onClick={this.refresh}>Clear</MDBBtn>
                <MDBBtn gradient="peach" id = "startB" onClick={this.start}>Start</MDBBtn>
                <MDBBtn gradient="peach" id = "forwardB" onClick={this.tracker} >Forward</MDBBtn>
                </MDBContainer> 
            </div>
        );
    }
}


function Chart(){

    

    return(
        <MDBContainer className = 'px-3 my-5'>
          <ChartIt />
        </MDBContainer>
    );
}

export default Chart;



