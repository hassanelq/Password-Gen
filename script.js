//make an array of characters
const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^&*()_-+={[}:]|;<,>.?/"\'';
const chars = Array.from(charset);

//function generate 14 random characters
const generatePass = () => {
    let password='';
    for (let index = 0; index < 14; index++) {
        let i = Math.floor((Math.random() * chars.length));
        password = password+chars[i];
    }
    return password;
}

//when I click generete put the password 
document.getElementById("generate").onclick = function() {
    let pass = generatePass();
    document.getElementById("password").value = pass;
    document.getElementById("password").type ="password";
    
    //when I click the icon copy the password 
    if (document.getElementById("password").value) {
        document.getElementById("copy").onclick = function() {
            document.getElementById("password").select();
            navigator.clipboard.writeText(pass);
            document.getElementById("alert").classList.remove("active");
            setTimeout(()=>{
                document.getElementById("alert").classList.add("active");
            },1700)
        }
    }
}

