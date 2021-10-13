let mail = '';
let pass = '';

function handleChangeInput (event) {
  if(event.target.name === 'mail') {
    mail = event.target.value;
  }

  if(event.target.name === 'pass') {
    pass = event.target.value;
  }
}

function handleSubmit (event) {
  event.preventDefault();
  if(mail == ''){
    alert('Заполните поле mail');
  }
  else if (pass == '') {
    alert('Заполните поле pass');
  }
  else{
    console.log({ mail, pass });
    event.target.reset();
  }
}


function App() {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" name="mail" onChange={handleChangeInput} placeholder="E-mail" />
      </div><br />
      <div> 
        <input type="password" name="pass" onChange={handleChangeInput} placeholder="Пароль" />
      </div><br />
      <button type="submit">Войти</button>
    </form>  
  );
}

export default App;