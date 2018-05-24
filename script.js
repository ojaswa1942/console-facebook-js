// alert("Open console to see newsfeed");
var user = prompt("Enter username");
var pass = prompt("Enter password");

accounts=[
{
	username:"ojaswa",
	password:"sharma"
},
{
	username:"david",
	password:"miller"
},
{
	username:"vande",
	password:"matram"
},
{
	username:"root",
	password:"toor"
}];

newsFeed=[
{
	username:"ojaswa",
	status:"I am very excited to learn JS"
},
{
	username:"david",
	status:"I am retiring"
},
{
	username:"vande",
	status:"Life is bad!"
},
{
	username:"root",
	status:"The ultimate power lies with me!!"
},
{
	username:"root",
	status:"Stop me if you can"
}];
var test=true;
for(var i=0;i<accounts.length;i++)
{
	if(accounts[i].username===user && accounts[i].password===pass)
		{console.log(newsFeed);
			test=false;
			break;
		}
}

if(test){
		console.log("Sorry, invalid input! Refresh to try again.");
	}