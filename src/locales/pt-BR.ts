const ptBR = {
    loading: {
        text: "Oi, eu sou..."
    },
    navigation: {
        about: "QUEM EU SOU",
        professional: "PROFISSIONAL",
        portfolio: "PORTFÓLIO",
        contact: "CONTATO",
    },

    section: {
        welcome: {
            subtitle: {
                h1: "Criando inovações que moldam o",
                strong: "futuro..."
            }
        },
        about: {
            hello: "Oi!",
            whoami: "Sou Leonardo, desenvolvedor Full-Stack, mas isso você já sabe, também sou fã do universo Pokémon, seja nos jogos clássicos, TCG ou o Go, quando não estou desenvolvendo algum próximo software que vai mudar o mundo (pelo menos o meu), estou curtindo a companhia do meu gatinho Pastrami ou jogando algum indie game promissor.",
            steve_jobs: "Você pode encarar um erro como uma besteira a ser esquecida ou como um resultado que aponta uma nova direção.",
            goal: {
                title: "Meu objetivo",
                content: "Apaixonado por tecnologia e sempre em busca da próxima grande ideia, meu objetivo é muito mais do que apenas escrever código. Quero criar soluções backend robustas, escaláveis e inteligentes que não só resolvam problemas, mas também tornem a vida mais fácil e os negócios mais ágeis. Cada desafio é uma chance de inovar, aprender e construir um futuro mais tecnológico.",
            },
            occupation: {
                title: "Ocupações Atuais",
                content: "Desenvolvedor Full-Stack & Freelancer"
            },
            curriculum: {
                title: "Meu Currículo",
                button: "Visualizar"
            },
            hard_skills: {
                title: "Principais Tecnologias",
            }
        },
        professional_skills: {
            h1: "Visão Profissional",
            clean_code: {
                title: "Código Limpo",
                text: "Priorizo boas práticas, como modularização, nomeação clara de variáveis e reutilização de componentes, garantindo que cada linha de código seja um investimento no futuro do projeto. Afinal, código bom não é só o que funciona, mas o que qualquer desenvolvedor consegue entender e aprimorar.",
            },
            modern_development: {
                title: "Desenvolvimento Moderno",
                text: "Tecnologia está sempre evoluindo, e eu também! Utilizo as melhores ferramentas e frameworks do momento para criar soluções ágeis, performáticas e escaláveis. De metodologias ágeis a tecnologias como React, Laravel e PHP, estou sempre atualizado para entregar sistemas robustos e preparados para o futuro.",
            },
            problem_solving: {
                title: "Resolução de Problemas",
                text: "Resolver problemas é o que me motiva. Seja otimizando um sistema lento, corrigindo bugs críticos ou criando soluções do zero, minha abordagem é analítica e focada em resultados. Não importa o tamanho da complexidade, sempre há um jeito inteligente de resolver",
            },
            planning: {
                title: "Planejamento",
                text: "Código bom começa antes mesmo da primeira linha ser escrita. Acredito que um projeto bem planejado economiza tempo, evita retrabalho e garante um resultado final mais sólido. Desde a arquitetura do sistema até a definição de prazos realistas, cada etapa é pensada para que o desenvolvimento aconteça de forma organizada e eficiente."
            }
        },
        portfolio: {
            h1: "Portfólio",
            h2: "Meu crescimento profissional fazendo o que mais curto.",

            project: {
                nimbus: "Nimbus é uma plataforma de gestão de incentivos fiscais e culturais. Contribuí na criação de questionários dinâmicos para o cadastro de projetos, utilizando Laravel para rotas, lógica e validações, Blade para renderização dinâmica, JavaScript e jQuery para interações em tempo real, e MySQL para estruturar perguntas e respostas. O sistema é escalável, permitindo adicionar novos formulários sem alterar o código.",
                lcdesigns: "Galeria web para apresentar as artes de um Designer de forma dinâmica e responsiva. Utilizei NextJS e ReactJS com TypeScript para performance e organização. ReactHookForm e EmailJS para o envio de mensagens. Swiper para carrosséis interativos. Estilização com Sass e Emotion. Ícones com React Icons e FontAwesome. Conteúdo dinâmico via GraphCMS, integrado com Apollo e GraphQL.",
                bagdexapi: "BagdexAPI é um projeto em desenvolvimento, inspirado na PokéAPI, focado em fornecer uma RESTful API construída com Laravel. O objetivo é oferecer informações detalhadas sobre o universo do jogo Bagdex, incluindo dados dos Bagmons e outros elementos do jogo. A API será estruturada para facilitar o acesso a essas informações, promovendo uma integração simples e eficiente.",
                button: {
                    go_to_project: "Acessar projeto",
                    development: "Em desenvolvimento",
                    more_about: "Saiba mais",

                }
            }

        },


    },

    footer: {
        created_by: "criado por",
        social_media: "Redes Sociais",
        contact_me: "Entre em contato",
        end: "Fim.",

        contact: {
            title: "Bora conversar?",
            description: "Se ficou alguma dúvida, é só preencher os campos abaixo e clicar em enviar! Te respondo o mais rápido possível.",
            form: {
                name: "Seu nome",
                email: "Seu email",
                message: "Escreva sua mensagem...",

                status: {
                    send: "Enviar",
                    sending: "Enviando...",
                    success: "Mensagem enviada com sucesso!",
                    error: "Ocorreu um problema ao enviar sua mensagem",
                    server_error: "Erro ao conectar com o servidor.",
                },
                validation: {
                    invalid_mail: "Por favor, insira um email válido."
                }
            }
        }
    }
};

export default ptBR;
