import  React from 'react'

let options = { year: 'numeric', month: 'long', day: 'numeric' };
const date = new Date(2021, 5, 22)

  class Profile extends React.Component {
    render() {
        return (
            <div>  
                <div style={{ fontSize: 22 }}>Привет, <b>{ this.props.name }!</b></div>
                <div>Дата регистрации: { date.toLocaleString('ru-RU', options) }</div>
            </div>
        )
    }  
  }
  
  export default Profile