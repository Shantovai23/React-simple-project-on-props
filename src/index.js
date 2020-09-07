import React from 'react'
import ReactDom from 'react-dom'
import Card from './Card'
import './index.css'
import Sdata from './Sdata'
console.log(Sdata)



ReactDom.render(<React.Fragment>
      <h1 className="heading_style">Top Netflix Series</h1>
      {Sdata.map((val)=>{
      return( <Card imgsrc={val.img}
      title={val.title}
      sname={val.sname}
    />)
      })}
</React.Fragment>,document.getElementById('root'))


