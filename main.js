// Pegando corpo do site 
// let body = document.getElementById('body')

let categoriaOperacao = document.getElementById('operacao')
let categoriaFinanca = document.getElementById('financa')
let categoriaLogistica = document.getElementById('logistica')
let categoriaMarket = document.getElementById('marketplace')
let categoriaAssinatura = document.getElementById('assinatura')

// Definindo array de objetos
let questList = [
    {
        categoria:'operacao',
        title: 'Os itens são originais?',
        text: 'Sim. Somos uma plataforma de aluguel de itens especiais com curadoria apurada.',
        video: '',
        info:''
    },
    {
        categoria:'operacao',
        title: 'Como funciona?',
        text: 'Somos uma plataforma de aluguel de itens originais. Pense no ClosetBoBags como um closet online e virtual: ' +
        'você pega algumas peças que gostaria de usar por um tempo, usa, devolve (e, se amar, muitas estão a venda). É só ' +
        'navegar pelo site e escolher o item (ou os itens) e o período pelo qual deseja alugar. E pronto!' +
        ' Itens de festa e de ski possuem a opção de agendamento. Para os demais itens, o envio é imediato com prazo de até 4 dias úteis'+ 
        '(RJ e SP em até 2 dias - podendo ser entregue no mesmo dia). Ficou com dúvidas? Segue um videozinho curto explicando o processo:',
        video: 'https://www.youtube.com/watch?v=qi5WUuuTXFo',
        info:''
    },
    {
        categoria:'operacao',
        title: 'Tem cupom de desconto para primeiro aluguel?',
        text: 'Sim! O cupom é o PROMO10 e você precisa estar logada para a plataforma identificar que esse será seu primeiro aluguel. ' +
        'É só usá-lo no checkout.',
        video: '',
        info:''
    },
    {
        categoria:'operacao',
        title: 'Como faço para devolver o item?',
        text: 'Para a devolução, temos 3 opções: 1) Você pode deixar em um de nossos escritórios, em SP, no Itaim, ou no RJ, ' +
        'em ipanema; 2) Você pode adquirir o serviço de coleta domiciliar - dessa forma faremos a coleta na sua residência ou 3) ' +
        'Você pode postar via sedex para nosso escritório de SP ou do RJ. Ainda ficou com dúvidas? Segue aqui um vídeo curtinho ' +
        'explicando o processo:',
        video: 'https://www.youtube.com/watch?v=qYC1Nrg7RYI',
        info:''
    },
    {   
        categoria:'operacao',
        title: 'Como faço para renovar??',
        text: 'Para você renovar o seu aluguel é só fazer seu login no site, ir em "meus pedidos" e clicar no + ao lado do pedido que você quer renovar.' +
               'Lá, você verá a opção "renovar aluguel". É só clicar e selecionar por quanto tempo você quer renovar e pronto!'+
               'Ficou com dúvidas? Segue um videozinho curto explicando o processo:',
        video: 'https://www.youtube.com/watch?v=BhOt-XAKYtA',
        info:''
    },
    {
        categoria:'operacao',
        title: 'Amei e quero comprar, como faço?',
        text: 'Ao iniciar o seu aluguel, você terá a chance de fazer uma oferta pelo item alugado. ' +
        'Para fazer isso, é só fazer seu login, ir em “meus pedidos” e lá você verá a opção de realizar a oferta. ' +
        'Nossos escritórios possuem horário de atendimento das 09:00 às 18:00, de segunda a sexta.',
        video: '',
        info:''
    },
    {
        categoria:'operacao',
        title: 'Aluguei dois itens e gostaria de devolver um e ficar mais um tempo com o outro. É possível?',
        text: 'Sim, é possível. Se o item que você gostaria de ficar mais tempo for um item renovável, é só você fazer o login,' +
        'ir em “meus pedido” e lá você verá a opção de renovação. Quanto ao outro item, é só devolver dessa forma',
        video: '',
        info: '(Clique aqui “como devolver”).'
    },
    {
        categoria:'operacao',
        title: 'QNão paguei coleta, ainda consigo pagar??',
        text: 'Claro! Você pode fazer o pagamento da coleta através do link de pagamento que vamos gerar para você.',
        video: '',
        info:''
    },
    {
        categoria:'operacao',
        title: 'Recebi o meu item e gostaria de trocar. Como eu faço?',
        text: 'Claro. Só precisa nos informar assim que receber que gostaria de trocar e, caso já saiba, por qual item. ' +
        'Lembrando que o aluguel é uma ótima forma de experimentar seu compromisso da compra. ',
        video: '',
        info:''
    },
    {
        categoria:'operacao',
        title: 'Está aparecendo uma mensagem de  que a data escolhida não possui intervalo mínimo entre aluguéis. O que significa?',
        text: 'Qual seria o item e para qual data você gostaria de alugar? ' +
               'Provavelmente você não está conseguindo agendar porque o site calcula' +
               'uma carência de dias em relação ao aluguel anterior e aluguel posterior da(s) peça(s).',
        video: '',
        info:''
    },
    {
        categoria:'operacao',
        title: 'Estou finalizando um pedido mas não aparece a data que quero receber, como faço?',
        text: 'Provavelmente esse item que você selecionou não é "agendável". Itens de festa, por ex, possuem a opção de agendamento. ' +
        'Itens do dia-a-dia precisam estar disponíveis para serem alugados e o envio deles é imediato. 🙂 Após a finalização do pedido, ' +
        'nos envie um email com a data que quer receber o item. Ficou com dúvidas? Segue um videozinho curto explicando o processo:',
        video: 'https://www.youtube.com/watch?v=qi5WUuuTXFo',
        info:''
    },
    {
        categoria:'financa',
        title: 'Como é feito o pagamento na plataforma?',
        text: 'Todos os pagamentos são realizados via cartão de crédito e você pode parcelar em até 6x sem juros.',
        video: '',
        info:''
    },
    {   
        categoria:'financa',
        title: 'Como funciona o caução?',
        text: 'Uma análise de risco é feita no momento da compra e no pós compra mediante confirmação de aluguel. Em um processo normal, Ao iniciar o seu aluguel, você terá a chance de fazer uma oferta pelo item alugado. Para fazer isso, é só fazer seu login, ir em “meus pedidos” e lá você verá a opção de realizar a oferta. ' +
        'o caução não é cobrado previamente. Em casos descritos nos Termos e Condições, como a não devolução do item, ou caso a peça ' +
        'retorne com algum dano ou avaria, ele será cobrado. Mas, você será previamente comunicado, evitando assim, qualquer surpresa. ' +
        'Além disso, como nenhum valor é cobrado no momento do aluguel, o valor caução não compromete o limite do seu cartão de crédito.',
        video: '',
        info:''
    },
    {
        categoria:'logistica',
        title: 'É garantido que vou receber meu pedido na data que escolhi?',
        text: 'Sim! Nós sempre sugerimos colocar de 1 a 2 dias antes da data do evento ou viagem. Pode deixar que a logística é com a gente!',
        video: '',
        info:''
    },
    {
        categoria:'logistica',
        title: 'Como os produtos são enviados?',
        text: 'Nós trabalhamos com operadores logísticos aéreos e terrestres.' +
        'Ao enviar o produto, você irá receber o código de rastreamento para acompanhar a chegada do seu pedido.',
        video: '',
        info:''
    },
    {
        categoria:'logistica',
        title: 'Até que horas posso retirar meu pedido?',
        text: 'Nossos escritórios possuem horário de atendimento das 09:00 às 18:00, de segunda a sexta.',
        video: '',
        info:''
    },
    {
        categoria:'logistica',   
        title: 'A que horas vocês vão entregar meu pedido?',
        text: 'Todas as nossas entregas acontecem em horário comercial, de 9:00 as 19:00.',
        video: '',
        info:''
    },
    {
        categoria:'logistica',
        title: 'Pedido de entrega expressa. Como funciona?',
        text: 'Temos esse serviço para as cidades do Rio de Janeiro e São Paulo. ' +
        'Para pagamentos confirmados pela instituição financeira até as 11:00 a entrega será no mesmo dia até as 19:00. ' +
        'Após as 11:01, a entrega será no dia útil seguinte, até as 19:00.',
        video: '',
        info:''
    },  
    {
        categoria:'logistica',
        title: 'Qual o valor do frete?',
        text: 'Nosso frete varia entre 27 e 37 reais. Para alguns CEPs, esse valor do frete é gratuito em pedidos acima de R$250,00. ' +
        'Você verá se isso se aplica na página de checkout, após colocar seu CEP.',
        video: '',
        info:''
    },  
    {
        categoria:'marketplace',
        title: 'Quero deixar meus itens para alugar. Como eu faço?',
        text: 'É só você fazer seu login e depois clicar em “venda ou alugue o seu closet”. ' + 
        'Você irá preencher um formulário com as informações necessárias para iniciarmos o processo de avaliação dos seus itens.',
        video: '',
        info:''
    },  
    {
        categoria:'marketplace',
        title: 'Cadastrei meus produtos para serem alugados no marketplace. E agora?',
        text: 'O próximo passo é a avaliação deles e posterior resposta pelo email. O prazo de avaliação é de até 5 dias úteis.',
        video: '',
        info:''
    },  
    {
        categoria:'marketplace',
        title: 'Meus produtos foram acordados e coletados para o marketplace. Quais são os próximos passos?',
        text: 'Nós iniciaremos o procedimento de análise, higienização, fotografia e cadastro. O prazo para isso é de até 10 dias úteis. ' +
        'Para ver seus produtos cadastrados, é só realizar seu login na plataforma e ir em “meu marketplace”.',
        video: '',
        info:''
    },  
    {
        categoria:'marketplace',
        title: 'Deixei meus itens alugando. Como saber quando foi alugado?',
        text: 'Ao se cadastrar na plataforma, todos os seus itens estarão atrelados ao email cadastrado. ' +
        'Com isso, sempre que um item for alugado, você receberá essa comunicação via email. ' +
        'Lembrando de sempre verificar sua caixa de spam também. '+
        'Além disso, você tem acesso a uma área exclusiva no seu login chamada “meu marketplace” onde você poderá acompanhar todos os seus recebíveis e datas de pagamento.',
        video: '',
        info:''
    },  
    {
        categoria:'marketplace',
        title: 'Meu item foi alugado. Quando eu recebo?',
        text: 'Você receberá o repasse diretamente na sua conta sempre em D+30 da data do pedido. Por exemplo, se o pedido foi dia 1 de janeiro, seu recebimento será por volta do dia 1 ou 2 de fevereiro. ' +
        'Se esse dia cair no fim de semana ou feriado, ele será passado para o próximo dia útil.',
        video: '',
        info:''
    },  
    {
        categoria:'marketplace',
        title: 'Gostaria de trocar a minha conta cadastrada para recebimento de marketplace. Como eu faço?',
        text: 'É só nos enviar um email para atendimento@bobags.com.br com essa solicitação que iremos fazer a troca dos dados no sistema.',
        video: '',
        info:''
    },  
    {
        categoria:'assinatura',
        title: 'Como eu me cadastro para um plano de assinatura?',
        text: 'Nosso serviço de assinatura é super exclusivo e, atualmente, estamos oferecendo para as cidades do Rio de Janeiro e São Paulo. ' +
        'Para se inscrever, é só ir no www.bobags.com.br/subscription e escolher o plano desejado!',
        video: '',
        info:''
    },  
    {
        categoria:'assinatura',
        title: 'Quando eu sou assinante, como eu posso pré-selecionar itens que gostaria de receber? ',
        text: 'Você fará seu login na plataforma e, em seguida, é só clicar no símbolo de coração que aparece ao lado dos produtos. ' +
        'Através da sua wishlist conseguimos sempre te sugerir itens para as próximas trocas.',
        video: '',
        info:''
    },  
    {
        categoria:'assinatura',
        title: 'No meu plano eu posso trocar de item uma vez por mês. Posso pagar o frete ou deixar em um showroom de vocês para fazer a troca?',
        text: 'Claro! Os serviços de frete e coleta estão inclusos somente uma vez por mês, mas caso você queira trocar mais de uma vez, ' +
        'é só nos avisar que podemos enviar o link de cobrança do frete ou você pode deixar em um dos nossos showroom.',
        video: '',
        info:''
    },  
     
      
]

// Função para renderizar os elementos e executar a lógica 
function renderList(){
    // Criando variaveis
    let li; 
    let ul = document.createElement('ul');
    let title;  
    let video;
    let link;
    let conteudo;
    let textCont;

    // console.log(categoriaMarket)
        
    // Definindo estrutura de repetição para consumir o arrey
    for(let i = 0; i < questList.length; i++){
        // Criando elementos do HTML
        let info;
        let infoA = document.createElement('a')
        let a = document.createElement('a');
        let div = document.createElement('div');
        conteudo = document.createElement('p');
        video = document.createElement('a');
        li = document.createElement('li');

        // Inserindo conteudo do array em variaveis
        info = document.createTextNode(questList[i].info)
        textCont = document.createTextNode(questList[i].text)
        link = document.createTextNode(questList[i].video)
        title = document.createTextNode(questList[i].title)
       
        // Definindo pais e filhos 
        if(questList[i].categoria === 'operacao'){
            categoriaOperacao.appendChild(li)    
        }
        if (questList[i].categoria === 'financa'){
            categoriaFinanca.appendChild(li)
        }
        if (questList[i].categoria === 'logistica'){
            categoriaLogistica.appendChild(li)
        }
        if (questList[i].categoria === 'marketplace'){
            categoriaMarket.appendChild(li)
        }
        if (questList[i].categoria === 'assinatura'){
            categoriaAssinatura.appendChild(li)
        }
        
        infoA.setAttribute('href', '#linkInfo')
        
        infoA.appendChild(info)
        conteudo.appendChild(textCont)
        video.appendChild(link)
        a.appendChild(title)
        li.appendChild(a)
        li.appendChild(div)
        div.appendChild(conteudo)
        div.appendChild(video)
        div.appendChild(infoA)
        // ul.appendChild(li)
        
        // Alterando atributos
        video.setAttribute('href', questList[i].video)
        video.setAttribute('target', '_blanck')
        div.setAttribute('class', 'questionBox')
        ul.setAttribute('class', 'ul')
        a.setAttribute('class', 'item_list--question')
        conteudo.setAttribute('class','item_list--text')
        
        if(a.text === 'Como faço para devolver o item?'){
            // console.log(a.text)
            a.setAttribute('id', 'linkInfo')
            a.setAttribute('target', '')
        }
        else{
            // console.log(a.text)
        }
        if(questList[i].video === ''){
            video.setAttribute('class', 'linkVideo')
        }
        if(infoA.text !== '(Clique aqui “como devolver”).'){
            infoA.style.display = 'none'
        }
        else{
            console.log('else')
        }
        // Adicionando evento de click nos titulos
        a.addEventListener('click', function(){
            // Condição para alternar os atributos dos elementos
            if(div.className === 'questionBox'){
                div.setAttribute('class', 'questionBox2')
            }
            else{
                div.setAttribute('class', 'questionBox')
            }
        })
    }

    // Inserindo lista no corpo do site
    // body.appendChild(ul)
}

// Chamando a função 
renderList()