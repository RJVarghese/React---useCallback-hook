import * as React from 'react';
function Display(props) {
  console.log('Rendering', props.text)
  return (
    <div>{props.text} - {props.value}</div>
  )
}
export default React.memo(Display);