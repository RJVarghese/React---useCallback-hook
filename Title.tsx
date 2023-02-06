import * as React from 'react';
 function Title () {
  console.log('Rendering', 'title')
  return (
    <div>
    <h1>UseCallback Hook</h1>
    <span>Updating a single component re-renders all the components which is undesirable and causes performance issues. We have to restrict re-renders to components that need to re-render.</span>
    <p>React.memo is an HOC which prevents a component from being re-rendered if its props or state do not change</p>
    <p>UseCallback hook returns a memoized version of the callback function that is passed to optimized child components to prevent re-renders which changes only  if one of the dependencies change. It gives us a function with referential equality</p>
    </div>
  )
}
export default React.memo(Title);