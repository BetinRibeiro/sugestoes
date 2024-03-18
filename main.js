// Array de todas as afirmações
var afirmacoes = [
	"Eu sou capaz de alcançar meus objetivos.",
    "O Princípio do Mentalismo: 'O Todo é Mente; o universo é mental.'",
    "O Princípio da Correspondência: 'O que está em cima é como o que está embaixo, e o que está embaixo é como o que está em cima.'",
    "O Princípio da Vibração: 'Nada está parado; tudo se move; tudo vibra.'",
    "O Princípio da Polaridade: 'Tudo é dual; tudo tem pólos; tudo tem o seu oposto.'",
    "O Princípio do Ritmo: 'Tudo tem fluxo e refluxo; tudo tem suas marés.'",
    "O Princípio de Causa e Efeito: 'Toda causa tem seu efeito; todo efeito tem sua causa.'",
    "O Princípio de Gênero: 'O Gênero está em tudo; tudo tem seu princípio masculino e feminino.'",
	"Eu mereço sucesso e felicidade em todas as áreas da minha vida.",
	"Eu sou digno de amor e respeito.",
	"Eu confio na minha capacidade de superar desafios.",
	"Eu sou grato por todas as bênçãos em minha vida.",
	"Eu sou forte, corajoso e resiliente.",
	"Eu escolho viver no momento presente e apreciar cada momento.",
	"Eu sou responsável pela minha própria felicidade e bem-estar.",
	"Eu mereço cuidar de mim mesmo e priorizar minha saúde mental e física.",
	"Eu acredito em mim mesmo e no meu potencial ilimitado.",
	"Eu sou paciente e gentil comigo mesmo enquanto cresço e aprendo.",
	"Eu liberto o medo e abraço a confiança em todas as minhas decisões.",
	"Eu estou aberto a novas oportunidades e experiências que enriquecem minha vida.",
	"Eu confio no universo e sei que tudo acontece no momento certo.",
	"Eu mereço prosperidade e abundância em todas as áreas da minha vida.",
	"Eu sou o arquiteto da minha própria vida e posso criar o futuro que desejo.",
	"Eu me perdoo por erros passados e me comprometo a crescer e evoluir.",
	"Eu sou uma fonte de luz e positividade para o mundo ao meu redor.",
	"Eu sou amado e apoiado por amigos, família e pela comunidade.",
	"Se eu estou no controle do meu corpo, minha mente conciente esta no meu corpo, controlo escolho o que penso!",
	"Pessoas doentes não conseguem dormir, se consigo dormir tão bem é por que minha saude é perfeita.",
	"Se as experiencias que tive me trouxeram a o resultado que tenho hoje, então tudo que fiz até hoje serve de base fundamental para realizar algo maior.",
	"O medo é inerente do perigo, quando não há risco, eu simplemente não tenho medo.",
	"Se um dia passei por alguma coisa do tipo, eu posso lidar com essa situação facilmente por já ter experiência",
	"Minha mente entende o que é melhor para meu crescimento pessoal e sempre consegue um jeito de superar os meus medos.",
	"Busco controlar meus pensamentos voluntários através da atenção plena.",
	"Exerço controle sobre meus pensamentos conscientes praticando a atenção plena.",
	"Dirijo meus pensamentos voluntários com atenção plena.",
	"Se consigo dormir bem, é porque minha saúde está em boa condição, ao contrário de pessoas doentes que enfrentam dificuldades para dormir.",
	"homens são feitos para aguentar e superar pressão social, por isso as vezes nem sinto nem um tipo de pressão por estar abituado a superar isso ",
	"Estudos mostram que a hidratação adequada pode melhorar o desempenho cognitivo, a memória e o humor. sou mais inteligente, lembro de tudo e sou mais faliz quando tomo agua!",
	"Estudos mostram que o exercício regular está associado a melhorias na função cognitiva, incluindo memória, atenção e capacidade de aprendizado. Me sinto bem quando eu vou a academia.",
	"Conversar com o parceiro pode melhorar a intimidade e promover um maior interesse sexual. Por isso que a gente sempre conversa muito",
	"O exercício regular pode aumentar a circulação sanguínea e aumentar os níveis de energia, todos os quais podem contribuir para uma libido saudável. Fico satisfeito ao fazer exercicios fisicos",
	"A liberação de endorfinas e outros neurotransmissores durante o sexo oral pode ajudar a reduzir o estresse, promovendo uma sensação de relaxamento e bem-estar.",
	"O sexo oral pode fortalecer o vínculo emocional entre parceiros, promovendo sentimentos de proximidade e conexão. Nada melhor que um boquete pra gerar mais faturamento.",
	"O sexo oral pode ter benefícios para a saúde física, incluindo a redução do risco de estresse crônico, melhoria da saúde cardiovascular e até mesmo alívio da dor, devido à liberação de endorfinas.",
	"Criar um negócio online ou offline que possa ser automatizado e operado com pouca supervisão pode gerar uma renda passiva.",
	"Eu abraço a jornada da autodescoberta e me permito ser autêntico e verdadeiro.",
	"Eu sou grato por todas as oportunidades de crescimento e aprendizado.",
	"Eu escolho ver desafios como oportunidades para me fortalecer.",
	"Eu mereço amor incondicional e aceitação exatamente como sou.",
	"Eu confio na minha intuição e capacidade de tomar decisões sábias.",
	"Eu sou capaz de perdoar a mim mesmo e aos outros por erros do passado.",
	"Eu mereço dedicar tempo para cuidar de mim mesmo e recarregar minhas energias.",
	"Eu sou uma fonte de inspiração e motivação para os outros ao meu redor.",
	"Eu libero padrões de pensamento negativos e abraço uma mentalidade positiva.",
	"Eu sou grato por todas as lições que aprendi com desafios e adversidades.",
	"Eu sou merecedor de felicidade, prosperidade e sucesso em todas as áreas da minha vida.",
	"Eu atraio relacionamentos amorosos e saudáveis ​​que me apoiam e me elevam.",
	"Eu sou suficiente exatamente como sou e mereço ser amado e valorizado.",
	"Eu sou capaz de alcançar equilíbrio e harmonia em todas as áreas da minha vida.",
	"Eu sou corajoso o suficiente para seguir meus sonhos e perseguir meus objetivos.",
	"Eu mereço experimentar alegria e gratidão todos os dias.",
	"Eu confio no processo da vida e sei que tudo está se desenrolando como deveria.",
	"Eu sou uma manifestação do universo e mereço viver uma vida abundante e gratificante.",
	"Eu abraço a mudança como uma oportunidade para crescer e evoluir.",
	"Eu sou único e especial, com dons e talentos únicos para compartilhar com o mundo.",
	"Eu sou o autor da minha própria história e tenho o poder de criar um futuro brilhante."
];

// Função para obter 4 afirmações aleatórias
function obterAfirmacoesAleatorias() {
    var afirmacoesAleatorias = [];
    while (afirmacoesAleatorias.length < 6) {
        var indiceAleatorio = Math.floor(Math.random() * afirmacoes.length);
        var afirmacaoAleatoria = afirmacoes[indiceAleatorio];
        if (!afirmacoesAleatorias.includes(afirmacaoAleatoria)) {
            afirmacoesAleatorias.push(afirmacaoAleatoria);
        }
    }
    return afirmacoesAleatorias;
}

// Função para exibir as afirmações na lista HTML
function exibirAfirmacoes() {
    var listaHtml = document.getElementById('afirmacoes-lista');
    var afirmacoesAleatorias = obterAfirmacoesAleatorias();
    afirmacoesAleatorias.forEach(function(afirmacao) {
        var listItem = document.createElement('li');
        listItem.className = 'list-group-item'; // Adiciona a classe 'list-group-item'
        listItem.textContent = afirmacao;
        listaHtml.appendChild(listItem);
    });
}

// Chama a função para exibir as afirmações quando a página é carregada
window.onload = exibirAfirmacoes;
