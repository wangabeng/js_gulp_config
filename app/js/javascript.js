{{{{
  let insane = 'Hello World outer';
  {insane = 'Hello World inner';console.log('inner' + insane)}
  console.log('outer' + insane)
}}}};