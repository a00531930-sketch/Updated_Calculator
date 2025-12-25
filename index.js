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
    var result=eval(input_data)
    ans.value=result
}
function Reset()
{
    input_data=''
    ans.value=''
}