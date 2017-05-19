app.provider("custdata" , function(){

var myObj=
{
Firstname :"pooja",
Lastname: "biswal",
phone : "8956327415",
dob:"123654"

}

this.$get=function()
{
	return myObj;
}



})