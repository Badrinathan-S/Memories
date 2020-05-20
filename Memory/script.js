const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

function SubmitSignIn(){
    var EmailSignIn = document.getElementById('emailSignin').value;
    var PasswordSignIn = document.getElementById('passwordSignin').value;
    
    const SignIn = {
        Email: EmailSignIn,
        Password: PasswordSignIn 
    };
    console.log('SignIn:',SignIn);
    
}

function SubmitSignUp(){
    var NameSignUp = document.getElementById('nameSignup').value;
    var EmailSignUp = document.getElementById('emailSignup').value;
    var PasswordSignUp = document.getElementById('passwordSignup').value;
    
    const SignUp = {
        Name: NameSignUp,
        Email: EmailSignUp,
        Password: PasswordSignUp 
    };
    console.log('SignUp:',SignUp);
}