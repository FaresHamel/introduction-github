const singIn = async (values)=>{
  const result = null;
  
  await singInWithEmailAndPassword(auth,email,password).then((response)=>{
   
    result = response.data();
  
  }).catche((error)=>{
  
    console.log(error.message);
  
  });
  
  return result;
}
