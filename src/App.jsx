    
import React from 'react'
import Card from './Card'
import Sdata from './Sdata'

const App=()=>(<React.Fragment>
      <h1 className="heading_style">Top Netflix Series of 2020</h1>
      {Sdata.map((val)=>{
      return(<Card
      key={val.id}
      imgsrc={val.img}
      title={val.title}
      sname={val.sname}
    />)
      })}
</React.Fragment>)
export default App;


