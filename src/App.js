import { useState } from 'react';
import './App.css';

const img1 = 'https://media.istockphoto.com/id/477333976/photo/female-portrait-icon-as-avatar-or-profile-picture.jpg?s=1024x1024&w=is&k=20&c=0g3XdKRmdQI7EtmhUkGDvj4_WGzwcMm_N91f-sXcIQw='

function Icon(props){
  return(
    <div className='Icon'>
      <div><img className='Iconimage'src={props.Image} alt=''/></div>
      <div><h4>{props.Text}</h4></div>
    </div>
  )
}

function LeftComponent(){
  return(
    <div className='LeftComponent'>
      <div><img className='Logo' src={img1} /></div>
      <Icon Image={img1} Text={'Student Management'}/> 
      <Icon Image={img1} Text={'Remedial Management'}/> 
      <Icon Image={img1} Text={'Quality Control'}/> 
      <Icon Image={img1} Text={'Report Delivery'}/> 
      <Icon Image={img1} Text={'Attendance'}/> 
    </div>
  );
}

function Card(props){
  const[count, setCount] = useState(props.countNumber)
  const styles = {
    backgroundColor: props.Color,
  }
  return(
    <div className='card' style={styles}>
      <div>
        <div><img className='Iconimage' src={props.avatar}/></div>
      </div>
      <div className='cardText'>
        <div>{count}</div>
        <div>{props.title}</div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className='Page'>
      <LeftComponent />
      <div className='RightComponents'>
        <div className='Upper'>Student Management</div>
        <div className='ThreeCard'>
          <Card avatar={img1} countNumber={9} title={'Regular Students'} Color={'red'}/>
          <Card avatar={img1} countNumber={1} title={'Remedial Students'} Color={'blue'}/>
          <Card avatar={img1} countNumber={7} title={'In Paid Clubs'} Color={'Green'}/>
        </div>
        <div>
          <div className='Menu'>
            <h5>Menu</h5>
          </div>
          <div className='Grid'>
            <Icon Image={img1} Text={'Student Management'}/> 
            <Icon Image={img1} Text={'Remedial Management'}/> 
            <Icon Image={img1} Text={'Quality Control'}/> 
            <Icon Image={img1} Text={'Report Delivery'}/> 
            <Icon Image={img1} Text={'Student Management'}/> 
            <Icon Image={img1} Text={'Remedial Management'}/> 
            <Icon Image={img1} Text={'Quality Control'}/> 
            <Icon Image={img1} Text={'Report Delivery'}/> 
            <Icon Image={img1} Text={'Attendance'}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
