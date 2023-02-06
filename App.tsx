import * as React from 'react';
import Button from './Button';
import Display from './Display';
import './style.css';
import Title from './Title';

export default function App() {
  const [age,setAge] = React.useState(10);
  const [salary,setSalary] = React.useState(10000);
  const incrementAge = React.useCallback(() => {
    setAge(age+1);
  },[age])
  const incrementSalary = React.useCallback(() => {
    setSalary(salary+1000);
  },[salary])
  return (
    <div>
      <Title/>
      <Display text={'age'} value={age}></Display>
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Display text={'salary'} value={salary}></Display>
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}
