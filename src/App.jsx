import "./App.scss";

function App() {
  const name = 'easy FrontEnd';
  const age = 20 ;
  const isMale = true ; 

  
  const studentA = {
    name : "blue" ,
    age  : 20 ,
  }
  const studentList = [
    {
      id : null , 
      name : "blue", 
      age :18 ,
    }, 
    {
      id :2 , 
      name : "dangnlh", 
      age : 20 ,
    }, 
  
    
  ];

  const colorList = ['green', 'red', 'blue', 'yellow'];
  return ( 
    
    <section className="add">
      <h1>Hello Blue {name}</h1>
      <p>Age : {age}</p>
      <p>Is ale : {isMale ? 'yes': 'no'}</p>
      <p>Render null/undefined : {null} {undefined}</p>
     <p>Name : {studentA.name}</p>
     <p>age : {studentA.age}</p>


     {true && <p>True Render NE</p>} 
     {false && <p>No Render NE</p>} 
     {null && <p>null Render NE</p>} 
     {undefined && <p>undefined Render NE</p>} 
     {0 && <p>0 Render NE</p>} 
     {1 && <p>1 Render NE</p>} 
     {'hello' && <p>dasdasd</p>} 
     
     <ul className="student-list">
          {studentList.map(student =>(
              <li key={student.id}>
                <p>Name :{student.name}</p>
                <p>Age  :{student.age}</p>

              </li>
            ))}
     </ul>

     <h2>Color List</h2>
     <ul className="color-list">
     {colorList.map(color =>(
            <li key={color} style={{color:color}}> {color} </li>
    ))}
    </ul>
    </section>
  );
}

export default App;
