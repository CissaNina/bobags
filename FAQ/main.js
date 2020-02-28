// Pegando corpo do site 
let body = document.getElementById('body')

// Definindo array de objetos
let questList = [
    {
        title: 'Como funciona?',
        text: 'Somos uma plataforma de aluguel de itens originais. Pense no ClosetBoBags como um closet online e virtual: ' +
        'você pega algumas peças que gostaria de usar por um tempo, usa, devolve (e, se amar, muitas estão a venda). É só ' +
        'navegar pelo site e escolher o item (ou os itens) e o período pelo qual deseja alugar. E pronto! Itens de festa e ' +
        'de ski possuem a opção de agendamento. Para os demais itens, o envio é imediato com prazo de até 4 dias úteis (RJ e ' +
        'SP em até 2 dias - podendo ser entregue no mesmo dia). Ficou com dúvidas? Segue um videozinho curto explicando o processo:',
        video: 'https://www.youtube.com/watch?v=qi5WUuuTXFo'
    },
    {
        title: 'Como faço para devolver o item?',
        text: 'Para a devolução, temos 3 opções: 1) Você pode deixar em um de nossos escritórios, em SP, no Itaim, ou no RJ, ' +
        'em ipanema; 2) Você pode adquirir o serviço de coleta domiciliar - dessa forma faremos a coleta na sua residência ou 3) ' +
        'Você pode postar via sedex para nosso escritório de SP ou do RJ. Ainda ficou com dúvidas? Segue aqui um vídeo curtinho ' +
        'explicando o processo:',
        video: 'https://www.youtube.com/watch?v=qYC1Nrg7RYI'
    },
    {
        title: 'Como funciona o caução?',
        text: 'Uma análise de risco é feita no momento da compra e no pós compra mediante confirmação de aluguel. Em um processo normal, ' +
        'o caução não é cobrado previamente. Em casos descritos nos Termos e Condições, como a não devolução do item, ou caso a peça ' +
        'retorne com algum dano ou avaria, ele será cobrado. Mas, você será previamente comunicado, evitando assim, qualquer surpresa. ' +
        'Além disso, como nenhum valor é cobrado no momento do aluguel, o valor caução não compromete o limite do seu cartão de crédito.',
        video: ''
    },
    {
        title: 'Como faço para renovar?',
        text: 'Para você renovar o seu aluguel é só fazer seu login no site, ir em "meus pedidos" e clicar no + ao lado do pedido que ' +
        'você quer renovar. Lá, você verá a opção "renovar aluguel". É só clicar e selecionar por quanto tempo você quer renovar e ' +
        'pronto! Ficou com dúvidas? Segue um videozinho curto explicando o processo:',
        video: 'https://www.youtube.com/watch?v=BhOt-XAKYtA'
    },
    {
        title: 'Está aparecendo uma mensagem de que a data escolhida não possui intervalo mínimo entre aluguéis. O que significa?',
        text: 'Qual seria o item e para qual data você gostaria de alugar? Provavelmente você não está conseguindo agendar porque o ' +
        'site calcula uma carência de dias em relação ao aluguel anterior e aluguel posterior da(s) peça(s).',
        video: ''
    },
    {
        title: 'Estou finalizando um pedido mas não aparece a data que quero receber, como faço?',
        text: 'Provavelmente esse item que você selecionou não é "agendável". Itens de festa, por ex, possuem a opção de agendamento. ' +
        'Itens do dia-a-dia precisam estar disponíveis para serem alugados e o envio deles é imediato. 🙂 Após a finalização do pedido, ' +
        'nos envie um email com a data que quer receber o item. Ficou com dúvidas? Segue um videozinho curto explicando o processo:',
        video: 'https://www.youtube.com/watch?v=qi5WUuuTXFo'
    },
    {
        title: 'Não paguei coleta, ainda consigo pagar?',
        text: 'Claro! Você pode fazer o pagamento da coleta através do link de pagamento que vamos gerar para você.',
        video: ''
    },
    {
        title: 'É garantido que vou receber meu pedido na data que escolhi?',
        text: 'Sim! Nós sempre sugerimos colocar de 1 a 2 dias antes da data do evento ou viagem. Pode deixar que a logística é com a gente!',
        video: ''
    },
    {
        title: 'Tem cupom de desconto para primeiro aluguel?',
        text: 'Sim! O cupom é o PROMO10 e você precisa estar logada para a plataforma identificar que esse será seu primeiro aluguel. ' +
        'É só usá-lo no checkout.',
        video: ''
    },
    {
        title: 'Até que horas posso retirar meu pedido?',
        text: 'Nossos escritórios possuem horário de atendimento das 09:00 às 18:00, de segunda a sexta.',
        video: ''
    },
    {
        title: 'A que horas vocês vão entregar meu pedido?',
        text: 'Todas as nossas entregas acontecem em horário comercial, de 9:00 as 19:00.',
        video: ''
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
        
    // Definindo estrutura de repetição para consumir o arrey
    for(let i = 0; i < 11; i++){
        // Criando elementos do HTML
        let a = document.createElement('a');
        let div = document.createElement('div');
        conteudo = document.createElement('p');
        video = document.createElement('a');
        li = document.createElement('li');

        // Inserindo conteudo do array em variaveis
        textCont = document.createTextNode(questList[i].text)
        link = document.createTextNode(questList[i].video)
        title = document.createTextNode(questList[i].title)
       
        // Definindo pais e filhos 
        conteudo.appendChild(textCont)
        video.appendChild(link)
        a.appendChild(title)
        li.appendChild(a)
        li.appendChild(div)
        div.appendChild(conteudo)
        div.appendChild(video)
        ul.appendChild(li)

        // Alterando atributos
        video.setAttribute('href', questList[i].video)
        video.setAttribute('target', '_blanck')
        div.setAttribute('class', 'questionBox')
        ul.setAttribute('class', 'ul')
        a.setAttribute('class', 'item_list--question')
        conteudo.setAttribute('class','item_list--text')

        if(questList[i].video === ''){
            video.setAttribute('class', 'linkVideo')
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
    body.appendChild(ul)
}

// Chamando a função 
renderList()