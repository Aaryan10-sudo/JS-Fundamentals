//scope
//{} => block

/* 
{
    let a = 10
    console.log(a)
} 
*/
//A variable will be known within its block from the line where it is initialized.

/* 
{
  let a = 10;
  {
    b = 10;
  }
  console.log(a + b);
}
 */

//when a variable is called , first it is searched in its own block,
//  if variable is not found in that block , then it will be searched in its parent block

/*
////ERROR
////{  let a = 1
    ////{
        ////console.log(a)
    ////}
    ////let a = 10
    ////console.log(a)
////}
A variable can not be defined twicw (re-defined) in same block. But we can redifine same variable in 
different block*/
