var file = {};
var tokens =  [
    {'i': 000, 's':''},
    {'i': 001, 's':'move'},
    {'i': 002, 's':'end'},
    {'i': 003, 's':'lea'},
    {'i': 004, 's':'xor'},
    {'i': 005, 's':'push'},
    {'i': 006, 's':'call'},
    {'i': 007, 's':'set'},
    {'i': 008, 's':'goto'},
    {'i': 009, 's':'indice'},
    {'i': 010, 's':'call'},
    {'i': 011, 's':'call'},
    {'i': 012, 's':'call'},
    {'i': 013, 's':'call'},
    {'i': 014, 's':'call'},
    {'i': 015, 's':'call'},
    {'i': 016, 's':'call'},
    {'i': 017, 's':'call'},
    {'i': 018, 's':'call'},
    {'i': 019, 's':'call'},
    {'i': 020, 's':'call'},
    {'i': 021, 's':'call'},
    {'i': 022, 's':'call'},
    {'i': 023, 's':'call'},
    {'i': 024, 's':'call'},
    {'i': 025, 's':'call'},
    {'i': 026, 's':'call'},
    {'i': 027, 's':'call'},
    {'i': 028, 's':'call'},
    {'i': 029, 's':'call'},
    {'i': 030, 's':'call'},
    {'i': 031, 's':'call'},
    {'i': 032, 's':'call'},
    {'i': 033, 's':'call'},
    {'i': 034, 's':'call'},
    {'i': 035, 's':'call'},
    {'i': 036, 's':'call'}

];

var tipos =  [
    {'i': 000, 's':''}
];

const ascii_table = "\0\1\2\3\4\5\6\7\8\9\10\11\12\13\14\15\16\17\0\0\20\21\22\23\24\25\26\27\0\0\30\31\32\33\34\35\36\37\0\0\40\41\42\43\44\45\46\47\0\0\50\51\52\53\54\55\56\57\0\0\60\61\62\63\64\65\66\67\0\0\70\71\72\73\74\75\76\77\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\100\101\102\103\104\105\106\107\0\0\110\111\112\113\114\115\116\117\0\0\120\121\122\123\124\125\126\127\0\0\130\131\132\133\134\135\136\137\0\0\140\141\142\143\144\145\146\147\0\0\150\151\152\153\154\155\156\157\0\0\160\161\162\163\164\165\166\167\0\0\170\171\172\173\174\175\176\177\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\200\201\202\203\204\205\206\207\0\0\210\211\212\213\214\215\216\217\0\0\220\221\222\223\224\225\226\227\0\0\230\231\232\233\234\235\236\237\0\0\240\241\242\243\244\245\246\247\0\0\250\251\252\253\254\255";

function chr(chr){
  return ascii_table.indexOf(chr);
}

function ord(index){
  return ascii_table[index];
}

//tokens.push({'b':0, 'a':'call', 'x':''});

console.log(tokens);
file.traduzir_palavra = function(s){
    let i = 0;
    tokens.forEach(function(token, indice, aTokens){
        
        if(token.s == s) {
            //console.log(token.s + ":" + token.i);
            i = token.i;
            return;
        }
            

    });

    return i;
};

file.traduzir = function(){
    let buff = [];
    let texto = document.querySelector('.text').value;
    let linhas = texto.split("\n");
    //console.log(linhas);
    //texto = texto.split(" ");

    //Caregar os tokens do buff
    
    linhas.forEach(function(linha, lIndice, aLinhas){
        //console.log(linha);
        
        let palavras = linha.split(" ");
        /*
        palavras.forEach(function(palavra, pIndice, aPalavra){
            let token = {};
            token.s = palavra;
            token.i = file.traduzir_palavra(palavra);
            buff.push(token);
        });*/
        //Comando
        buff.push({'s':palavras[0],'i':file.traduzir_palavra(palavras[0])});

        //Parametros
        for(let pIndice = 1; pIndice < palavras.length; pIndice++){
            //console.log(palavras[pIndice]);
            for(let cIndice = 0; cIndice < palavras[pIndice].length; cIndice++){
                //console.log(chr(palavras[pIndice][cIndice]));
                buff.push({
                    's':palavras[pIndice][cIndice],
                    'i':chr(palavras[pIndice][cIndice])
                });
            }

            //Fim do parametro
            buff.push({'s':'','i':0});
            buff.push({'s':'','i':0});

        }

        //Fim do comando
        buff.push({'s':'end','i':2});
      
    });
    

    //console.log(buff);
    //Buff para exadecimal
    document.querySelector('.out').value = '';
    buff.forEach(function(token, pIndice, aBuff){
        //console.log('[' + token.i + ']');
        document.querySelector('.out').value += token.i + '|';  
        if(token.i == 2){
            document.querySelector('.out').value += '\n';
        }
    });

    
    
}

