

function home(){

	return (
    <div> <h1>Teste de encriptação de texto </h1>

			
			<div>Texto:</div>
			<div><input type="text" id="TextoEncriptar" size = "100" /></div>
			<div><br/></div>
        	
			<div>Chave:</div>
			<div><input type="text" id="chave" size = "100"/></div>

			<div><br/></div>

			<button onClick={Encripta}>Encriptar</button>

			<div><br/></div>
			
			<div>Texto Encriptado:</div>
			<div>
				<input type="text" id="TextoEncriptado" Value = "" size = "100" />
			</div>

			<div><br/></div>

			<button onClick={Descripta}>Desencriptar</button>

			<div><br/></div>
			
			<div>Texto Desencriptado:</div>
			<div>
				<input type="text" id="TextoDesencriptado" Value = "" size = "100" />
			</div>
		<br/>
		<br/>
        <br/>

            

        <br/>
        <br/>

    </div>
    
    )
}

function CapsLock(props) {
    const textoInserido = props.children;
    const textoEmCaps = textoInserido.toUpperCase();
    return <div>{textoEmCaps}</div>;
}

function Encripta() {

    var dados = document.getElementById("TextoEncriptar").value;

    var mensx="";
    var l;
    var i;
    var j=0;
    var ch;
    ch = "aeslsQQEcDDldiVVkadi2342sddfsadfedkdkLLnm";	
    for (i=0;i<dados.length; i++){
        j++;
        l=(Asc(dados.substr(i,1))+(Asc(ch.substr(j,1))));
        if (j==50){
            j=1;
        }
        if (l>255){
            l-=256;
        }
        mensx+=(Chr(l));
    }
//	document.getElementById("1").value=mensx;

	document.getElementById("TextoEncriptado").value = mensx;
    return <div>{mensx}</div>
}

function Descripta(){
    
	var dados = document.getElementById("TextoEncriptado").value;
	var mensx="";
	var l;
	var i;
	var j=0;
	var ch;
	ch = "aeslsQQEcDDldiVVkadi2342sddfsadfedkdkLLnm";	
	for (i=0; i<dados.length;i++){
		j++;
		l=(Asc(dados.substr(i,1))-(Asc(ch.substr(j,1))));
		if (j==50){
			j=1;
		}
		if (l<0){
			l+=256;
		}
		mensx+=(Chr(l));
	}	
	document.getElementById("TextoDesencriptado").value = mensx;
	return <div>{mensx}</div>
	
}
function Asc(String){
	return String.charCodeAt(0);
}
 
function Chr(AsciiNum){
	return String.fromCharCode(AsciiNum)
}

function enter(event, envia){
	var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
	if (keyCode == 13){
		var dados=document.getElementById(envia.id);
		var next=(parseInt(envia.id)+1);
		if(dados.value.lenght<=0){
			return false;
		}else{
			if (envia.id==0){
				Encripta(dados.value);
				document.getElementById(next).focus();
			}else if(envia.id==1){
				Descripta(dados.value);
				document.getElementById(next).focus();
			}else{
				limpar();
			}
			return false;
		}
	}else{
		return true;
	}
}

function limpar(){
	for (var i=0; i<3;i++){
		document.getElementById(i).value="";
	}
	document.getElementById(0).focus();
}

export default home