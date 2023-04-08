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
    document.getElementById("password").setAttribute("value", pass);
    document.getElementById("password").setAttribute("type","password");

    //when I click the icon copy the password 
    document.getElementById("copy").onclick = function() {
    navigator.clipboard.writeText(pass);
    document.getElementById("alert").style = "right: 20px; transition: transform 1s;";
    
    }
}

