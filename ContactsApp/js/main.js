
function validate() {
	var username=document.getElementById("username").value;
	var password=document.getElementById("password").value;
	if(username=="admin" && password=="admin"){
		// alert("Login successful");
		// window.location = "https://example.com/";
		window.location.href="home.html"
		// window.location.replace("https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_redirect_webpage");
		return true;
	}
	else{
		alert("Login failed. The correct Username is 'admin' and Password is also 'admin'")
		return false
	}
}
