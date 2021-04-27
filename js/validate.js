window.onload = function()
{
	var fname = document.getElementById('txtFirstName');
	fname.onchange = function(){
		if(fname.value.trim()=="")
		{
			var temp=document.getElementById('l1');
			temp.innerHTML = '* First name cannot be blank *';
			temp.style.color="red";
			fname.style.border= "2px solid red";
			chk=0;
		}
		else
		{
			regx=/^[A-Za-z]+$/;
			if(fname.value.trim()!="" && !regx.test(fname.value))
			{
				var temp=document.getElementById('l1');
				temp.innerHTML = '* First name should be only letters *';
				temp.style.color="red";
				fname.style.border= "2px solid red";
				chk=0;
			}
			else
			{
				var temp=document.getElementById('l1');
				temp.innerHTML = '';
				fname.style.border= "2px solid #ccc";
			}
		}
	}
	var lname = document.getElementById('txtLastName');
	lname.onchange = function(){
		if(lname.value.trim()=="")
		{
			var temp=document.getElementById('l2');
			temp.innerHTML = '* Last name cannot be blank *';
			lname.style.border= "2px solid red";
			temp.style.color="red";
			chk=0;
		}
		else
		{
			regx=/^[A-Za-z]+$/;
			if(lname.value.trim()!="" && !regx.test(lname.value))
			{
				var temp=document.getElementById('l2');
				temp.innerHTML = '* Last name should be only letters *';
				temp.style.color="red";
				lname.style.border= "2px solid red";
				chk=0;
			}
			else
			{
				var temp=document.getElementById('l2');
				temp.innerHTML = '';
				lname.style.border= "2px solid #ccc";
			}
		}
	}
	var e_mail = document.getElementById('Email');
	e_mail.onchange = function(){
		regx=/^(\d{2}[A-za-z]{3}\d{3}@nirmauni\.ac\.in$)|(\w+@gmail\.com)$/;
		if(!regx.test(e_mail.value))
		{
			var temp=document.getElementById('l3');
			temp.innerHTML = '* Email not in correct format *'
			temp.style.color="red";
			e_mail.style.border= "2px solid red";
			chk=0;
		}
		else
		{
			var temp=document.getElementById('l3');
			temp.innerHTML = '';
			e_mail.style.border= "2px solid #ccc";
		}
	}
	var ps = document.getElementById('pass');
	var ps1 = document.getElementById('pass1');
	ps.onchange = function(){
		regx=/^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*)$/;
		if(regx.test(ps.value))
		{
			var temp=document.getElementById('l4');
			temp.innerHTML = '* Password not in correct format *'
			temp.style.color="red";
			ps.style.border= "2px solid red";
			chk=0;
		}
		else
		{
			var temp=document.getElementById('l4');
			temp.innerHTML = '';
			ps.style.border= "2px solid #ccc";
		}
	}
	ps1.onchange = function(){
		if(ps1.value != ps.value)
		{
			var temp=document.getElementById('l5');
			temp.innerHTML = '* Re-Password should be same as Password *'
			temp.style.color="red";
			ps1.style.border= "2px solid red";
			chk=0;
		}
		else
		{
			var temp=document.getElementById('l5');
			temp.innerHTML = '';
			ps1.style.border= "2px solid #ccc";
		}
	}
}

function validate()
{
	var chk=1;
	var fname = document.getElementById('txtFirstName');
		if(fname.value.trim()=="")
		{
			var temp=document.getElementById('l1');
			temp.innerHTML = '* First name cannot be blank *';
			temp.style.color="red";
			fname.style.border= "2px solid red";
			chk=0;
		}
		else
		{
			regx=/^[A-Za-z]+$/;
			if(fname.value.trim()!="" && !regx.test(fname.value))
			{
				var temp=document.getElementById('l1');
				temp.innerHTML = '* First name should be only letters *';
				temp.style.color="red";
				fname.style.border= "2px solid red";
				chk=0;
			}
			else
			{
				var temp=document.getElementById('l1');
				temp.innerHTML = '';
				fname.style.border= "2px solid #ccc";
			}
		}
	var lname = document.getElementById('txtLastName');
		if(lname.value.trim()=="")
		{
			var temp=document.getElementById('l2');
			temp.innerHTML = '* Last name cannot be blank *';
			lname.style.border= "2px solid red";
			temp.style.color="red";
			chk=0;
		}
		else
		{
			var temp=document.getElementById('l2');
			temp.innerHTML = '';
			lname.style.border= "2px solid #ccc";
		}
	var e_mail = document.getElementById('Email');
		regx=/^(\d{2}[A-za-z]{3}\d{3}@nirmauni\.ac\.in$)|(\w+@gmail\.com)$/;
		if(!regx.test(e_mail.value))
		{
			var temp=document.getElementById('l3');
			temp.innerHTML = '* Email not in correct format *'
			temp.style.color="red";
			e_mail.style.border= "2px solid red";
			chk=0;
		}
		else
		{
			var temp=document.getElementById('l3');
			temp.innerHTML = '';
			e_mail.style.border= "2px solid #ccc";
		}
	var ps = document.getElementById('pass');
	var ps1 = document.getElementById('pass1');
		regx=/^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*)$/;
		if(regx.test(ps.value))
		{
			var temp=document.getElementById('l4');
			temp.innerHTML = '* Password not in correct format *'
			temp.style.color="red";
			ps.style.border= "2px solid red";
			chk=0;
		}
		else
		{
			var temp=document.getElementById('l4');
			temp.innerHTML = '';
			ps.style.border= "2px solid #ccc";
		}
		if(ps1.value != ps.value)
		{
			var temp=document.getElementById('l5');
			temp.innerHTML = '* Re-Password should be same as Password *'
			temp.style.color="red";
			ps1.style.border= "2px solid red";
			chk=0;
		}
		else
		{
			var temp=document.getElementById('l5');
			temp.innerHTML = '';
			ps1.style.border= "2px solid #ccc";
		}
	if(!chk)
		return false;
}