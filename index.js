var input_data=''
var button=document.querySelectorAll('button')
var ans=document.getElementById('res')
for (item of button){
    item.addEventListener('click',(e)=>{
        var btn_val=e.target.value
        ans.value+=btn_val
        input_data+=btn_val
        console.log(input_data)

    })
}
function Calculation(){
    if (input_data.includes('%'))
    {
      let arr_data=input_data.split('%')
      let a=parseInt(arr_data[0])
      let b=parseInt(arr_data[1])
      let per=(a*b)/100
      ans.value=per
    }else if (input_data.includes('√'))
    {
        let a=parseInt(input_data.substring(1))
        let sqr=Math.sqrt(a)
        ans.value=sqr
    }
    else{
    var result=eval(input_data)
    ans.value=result
    }
}
function Reset()
{
    input_data=''
    ans.value=''
}