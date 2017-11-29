import React from 'react';
import userlist from './userlist.json';
const userlistitem = userlist.users.list;
console.log(userlist);
let fulltext='';
const getfunction = function(job,name){
 alert('Hi My Name is '+name+' and I am a '+job);
}
const userlistItems = userlistitem.map((userlistitem) =>
      <li job={userlistitem.job} onClick={() => getfunction(userlistitem.job,userlistitem.name)} >{userlistitem.name}</li>
);
console.log(userlistItems);
class CurrUsers extends React.Component{
  render() {
return(
  <div>
  <h4>List of Trainees</h4>
  <ul className="traineeList">
  {userlistItems}
  </ul>

  </div>
);
  }
}


class Userlist extends React.Component {
  constructor(props, context) {
      super(props, context);
      this.state = {
        coursename: 'React Basics',
        trainingsession: 1
      };
    };
    handleStateClick() {
         this.setState({
             coursename: 'React with Redux'
         });
     }

  render() {
    return (<div className="container"> <h4> {this.state.coursename} </h4>
    <p>Training Session  {this.state.trainingsession}</p>
<a className="btn btn-default pull-right" onClick={ this.handleStateClick.bind(this)}>Change Session</a>
<CurrUsers />
       </div> );
  }

    }

export default Userlist;
