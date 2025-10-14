let placarPessoa = 0;
let placarComputador= 0;

    function PEDRA(){
        const p = document.getElementById('Pessoa').textContent = '✊';
        const jogadaComputador = jgmaq();
        vencedor('✊', jogadaComputador);
    }
    function Papel(){
        const p = document.getElementById('Pessoa').textContent = '🧻' ;
        const jogadaComputador = jgmaq();
        vencedor('🧻', jogadaComputador);
    }
    function Tesoura(){
        const p = document.getElementById('Pessoa').textContent = '✌️' ;
        const jogadaComputador = jgmaq();
        vencedor('✌️', jogadaComputador);
    }

    function jgmaq(){
    let nma = Math.floor(Math.random() * 3) ;
    let jogada;
    if (nma === 0){
    jogada = '✊';
    } 
    else if (nma === 1){
    jogada = '🧻' ;
    } 
    else{
    jogada = '✌️' ;
    }
    document.getElementById('Computador').textContent = jogada;
    return jogada;
    }


    function vencedor(jogadaPessoa,jogadaComputador){
        
        if (
            (jogadaPessoa === '✊' && jogadaComputador === '✌️') ||
            (jogadaPessoa === '🧻' && jogadaComputador === '✊') ||
            (jogadaPessoa === '✌️' && jogadaComputador === '🧻')
        ) {
        placarPessoa++;
        } 
        else if((jogadaPessoa === '🧻' && jogadaComputador === '🧻')||
                (jogadaPessoa === '✊' && jogadaComputador === '✊')||
                (jogadaPessoa === '✌️' && jogadaComputador === '✌️')) {
        

        }
        else 
        {
         placarComputador++;
        }  
        document.getElementById('r_p').textContent = placarPessoa;
        document.getElementById('r_c').textContent = placarComputador;
        }


