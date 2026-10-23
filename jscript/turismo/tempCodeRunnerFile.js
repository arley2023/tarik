
        if (selecao > passageiro.length || selecao <= 0) {
            console.warn("PASSAGEIRO NÃO ENCONTRADO!");
        } else {
            passageiro.splice(selecao, selecao--);
        }

