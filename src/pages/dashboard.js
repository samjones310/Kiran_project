import React,{ Component }  from 'react';
import '../App.css';
import Navbar from '../components/navbar';
import Singleview from '../components/singleview';
import Documentview from '../components/documentview';
import {Image} from 'react-bootstrap';

export default class Dashboard extends Component {
  constructor(props){
    console.log('Main Props',props);
    super();
    this.state = {
      loadings: false,
      document: '',
      switchstate:true,
      data_fin:[],
      data_per:[]

    }
  }

  render(){
  return (
    <div>
      <Navbar />
      <div style={{display: "flex",width:'100%'}}>
        <div style={{width:390}}>
            <Singleview  image={this.props.match.params.id}/>
        </div>
        
        <div style={{background:'#f9f9f9',width:'100%'}}>
            <Documentview model1={this.props.match.params.m1}  model2={this.props.match.params.m2} 
             model3={this.props.match.params.m3}  final={this.props.match.params.final} />
        </div>
         </div>
    </div>
  );
}


}