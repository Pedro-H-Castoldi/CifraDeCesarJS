let i = j = 0
let u = ''
let v = [
' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
] 
//alert(v[v.length - 2])
function cifraDeCesar(){
	let a = prompt('Digite algo: ')
    let c = Number(prompt('Insira a chave: '))

	if(!isNaN(c) && c <= 26){
		for (i = 0; i < a.length; i++){
	    for (j = 0; j < v.length; j++){
		if (a[i].toLowerCase() == v[j] && v[j] != ' '){
			u += v[j+c]
			break
		}

		if(a[i] == v[0]){
			u += v[0]
			break
		}
		if(a[i] == '.' || a[i] == '-' || a[i] == ',' || a[i] == ';' || a[i] == '"' || a[i] == "'"){
			u += a[i]
			break
		}
	    }
	    }
	document.write(u)
    }
    else{
    	alert('Insira uma chave válida!')
    }
}

function DescifraDeCesar(){
	let a = prompt('Digite algo: ')
    let c = Number(prompt('Insira a chave: '))

	if(!isNaN(c) && c <= 26){
		for (i = 0; i < a.length; i++){
	    for (j = v.length; j > 0; j--){
		if (a[i].toLowerCase() == v[j] && v[j] != ' '){
			u += v[j-c]
			break
		}

		if(a[i] == v[0]){
			u += v[0]
			break
		}
		if(a[i] == '.' || a[i] == '-' || a[i] == ',' || a[i] == ';' || a[i] == '"' || a[i] == "'"){
			u += a[i]
			break
		}
	    }
	    }
	document.write(u)
    }
    else{
    	alert('Insira uma chave válida!')
    }

}

function op(){
	op = prompt('1- CRIPTOGRAFAR | 2- DESCRIPTOGRAFAR')
	if(!isNaN(op) && op > 0 && op <= 2){
		if(op == 1){
		cifraDeCesar()
	    }
	    else{
		DescifraDeCesar()
	    }
	}
	else{
		alert('Insira uma opção válida!')
	}
}

op()


