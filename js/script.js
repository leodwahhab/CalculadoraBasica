function calcular(tipo, valor){
    
    if(tipo === 'acao'){
        if(valor === 'c'){
            document.getElementById('tela').value = ''
        }
        else if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            document.getElementById('tela').value += valor
        }
        else if(valor === '='){
            document.getElementById('tela').value = eval(document.getElementById('tela').value)
        }
    }
    else if(tipo === 'valor'){
        document.getElementById('tela').value += valor
    }
    
}