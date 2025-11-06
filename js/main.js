document.addEventListener('DOMContentLoaded', function () {

    // --- Controle do Menu Mobile ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- Controle do Scroll Suave e Fechamento do Menu ---
    // (Esta é a lógica de deslizamento que foi adicionada)
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // 1. Previne o comportamento padrão (o "salto" imediato)
            e.preventDefault();

            // 2. Obtém o ID da âncora (ex: "#sobre")
            const targetId = this.getAttribute('href');

            // Ignora links que são apenas "#" (como o link do logo)
            if (targetId === '#') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                // Fecha o menu mobile se estiver aberto
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
                return;
            }

            // 3. Encontra o elemento de destino
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // 4. Rola suavemente até o elemento
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Alinha ao topo da seção
                });
            }

            // 5. Fecha o menu mobile (se estiver aberto)
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    });


    // --- Dados do Portfólio e Experiência ---
    const portfolioData = [
        {
            title: "DockSafe",
            category: "software",
            description: "Sistema de dupla checagem do carregamento visando reduzir o custo gerado por envio de cargas erradas. Resultado: Redução de 50% dos custos relacionados a erro na expedição.",
            tags: [
                "Python",
                "Django",
                "Pandas",
                "Streamlit",
                "PyQt6",
                "PostgresSQL",
                "HTML/CSS",
                "Javascript"
            ]
        },
        {
            title: "EtiquetasLOSS",
            category: "software",
            description: "Agilizar o processo de impressão de etiquetas na impressora Zebra. Resultado: Mais agilidade na criação de etiquetas para o estoque.",
            tags: [
                "Python",
                "PyQt6",
                "Pandas",
                "ZPL"
            ]
        },
        {
            title: "Velocidade de Entrega",
            category: "dados",
            description: "Projeto para garantir entregas em até dois dias. Resultado: Aumento de produtividade do setor de faturamento e eliminação da necessidade de gerar relatórios manualmente.",
            tags: [
                "Python",
                "Pandas",
                "VBS",
                "SAP",
                "Tableau"
            ]
        },
        {
            title: "Tracking de Caixas",
            category: "dados",
            description: "Sistema para localizar rapidamente volumes dentro do CD. Resultado: Disponibilização da informação da localização de todas as caixas na linha de produção.",
            tags: [
                "Python",
                "VBS",
                "SAP",
                "Tableau"
            ]
        },
        {
            title: "HeadControl",
            category: "software",
            description: "Controlar a localização dos HCs (Headcounts) nas estações produtivas, permitindo medir com eficácia o IHH.",
            tags: [
                "Python",
                "Django",
                "HTML/CSS",
                "Javascript",
                "VBS",
                "SAP",
                "PyautoGui",
                "Selenium",
                "PostgreSQL"
            ]
        },
        {
            title: "Maestro",
            category: "software",
            description: "Orquestrador para execução de scripts, centralizando a execução das automações (RPA) e permitindo executar várias janelas do mesmo aplicativo.",
            tags: [
                "Python",
                "Django",
                "SQLite",
                "APIs",
                "PyWinAuto",
                "Playwright"
            ]
        },
        {
            title: "Tarjex",
            category: "software",
            description: "Sistema para controle de processo interno.",
            tags: [
                "Python",
                "Django",
                "HTML/CSS",
                "Javascript",
                "HTMX"
            ]
        },
        {
            title: "Dashboard de Conferência",
            category: "software",
            description: "Dashboard para dar visibilidade ao que está na conferência.",
            tags: [
                "Python",
                "Django Rest Framwork",
                "PostgreSQL",
                "React",
                "Vitejs",
                "Typescript"
            ]
        },
        {
            title: "Sistema de Gestão de Dados (Carajás)",
            category: "dados",
            description: "Desenvolvimento de um sistema de gestão de dados para tratar informações do TOTVS Protheus. Resultados: Melhoria de 90% no tempo de análise de ocorrências, implementação de 4 painéis gerenciais em Power Bi.",
            tags: [
                "GitHub",
                "Automação",
                "Power Bi"
            ]
        },
        {
            title: "Publicação Acadêmica: Metodologías activas",
            category: "conteudo",
            description: "Coautoria em artigo sobre 'Metodologías activas y multiliteraturas en los procesos de formación inicial del profesorado'.",
            tags: [
                "Pesquisa",
                "Escrita Acadêmica",
                "Educação"
            ]
        }
    ];

    const experienceData = [
        {
            role: "Analista de desenvolvimento de sistemas",
            company: "TPC Logística Inteligente",
            period: "setembro de 2024 - Present (1 ano 2 meses)",
            description: "Desenvolvimento de sistemas personalizados com Python para otimizar processos produtivos e integração com SAP. Destaque para o projeto DockSafe, que reduziu em 50% os custos de erro na expedição."
        },
        {
            role: "Analista de Planejamento Logístico Sênior",
            company: "Carajás Home Center",
            period: "fevereiro de 2024 - agosto de 2024 (7 meses)",
            description: "Desenvolvi um sistema de gestão de dados (TOTVS Protheus) e automatizei processos, resultando em 90% de melhoria no tempo de análise de ocorrências e 4 painéis em Power Bi."
        },
        {
            role: "Analista Computacional I",
            company: "Eyelaser Center",
            period: "março de 2022 - fevereiro de 2024 (2 anos)",
            description: "Forneci suporte técnico, desenvolvi dashboards para diretoria e gerenciei manutenção de equipamentos (TI e médicos). Reduzi em 15% o tempo de resolução de problemas."
        },
        {
            role: "CEO",
            company: "Maceió TI",
            period: "maio de 2021 - agosto de 2022 (1 ano 4 meses)",
            description: "Gerenciei todas as operações da loja, incluindo atendimento, manutenção e projetos. Desenvolvi o sistema de gestão interno e criei estratégias de webmarketing."
        },
        {
            role: "Gerente de TI",
            company: "EPST Empresa prestadora de serviços de transporte",
            period: "abril de 2012 - maio de 2021 (9 anos 2 meses)",
            description: "Liderei a gestão de TI de 5 filiais, fornecendo suporte ao ERP e conduzindo projetos de implantação (CTe, MDFe). Alcancei 30% de aumento na disponibilidade dos servidores."
        },
        {
            role: "Coordenador de TI",
            company: "Norvinco - Industria de Embalagem do Nordeste LTDA",
            period: "agosto de 2011 - abril de 2012 (9 meses)",
            description: "Definição e acompanhamento de metas e indicadores (BSC, SWOT) e apresentação de resultados. Implementei melhorias que aumentaram a eficiência dos sistemas em 50%."
        },
        {
            role: "Tecnico de Informática",
            company: "I.Soluções Informática e Tecnologia",
            period: "julho de 2010 - março de 2011 (9 meses)",
            description: "Atuei como Tech Lead, gerenciando configuração e documentação de rede, garantindo qualidade nas entregas. Melhorei em 30% a eficiência e confiabilidade das redes dos clientes."
        },
        {
            role: "Suporte",
            company: "Saturno Tecnologia",
            period: "fevereiro de 2009 - julho de 2009 (6 meses)",
            description: "Forneci suporte telefônico e remoto aos usuários do ERP, realizando implantações e treinamentos dos módulos do sistema."
        }
    ];

    // --- Seletores de Elementos ---
    const portfolioGrid = document.getElementById('portfolio-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const experienceContainer = document.querySelector('.timeline-path');

    // --- Renderização do Portfólio ---
    function renderPortfolio(filter = 'all') {
        if (!portfolioGrid) return; // Proteção caso o elemento não exista
        portfolioGrid.innerHTML = '';
        const filteredData = (filter === 'all') ? portfolioData : portfolioData.filter(item => item.category === filter);

        filteredData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'bg-white rounded-lg shadow-md overflow-hidden card-hover'; // 'card-hover' precisa ser definido no CSS
            card.innerHTML = `
<a href="projetos/${item.title.replaceAll(" ", "-")}.html">
<div class="p-6">
<h3 class="text-xl font-bold text-gray-800 mb-2">${item.title}</h3>
<p class="text-gray-600 mb-4">${item.description}</p>
<div class="flex flex-wrap gap-2">
${item.tags.map(tag => `<span class="bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-1 rounded-full">${tag}</span>`).join('')}
</div>
</div>
</a>
`;
            portfolioGrid.appendChild(card);
        });
    }

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active-filter', 'bg-gray-800', 'text-white')); // Ajuste para classes de filtro ativo
                button.classList.add('active-filter', 'bg-gray-800', 'text-white');
                const filter = button.getAttribute('data-filter');
                renderPortfolio(filter);
            });
        });
    }

    // --- Renderização da Experiência ---
    function renderExperience() {
        if (!experienceContainer) return; // Proteção
        experienceContainer.innerHTML = '';
        experienceData.forEach(job => {
            const item = document.createElement('div');
            item.className = 'mb-8 relative pl-8 timeline-item'; // 'timeline-item' precisa ser definido no CSS
            item.innerHTML = `
<h3 class="text-xl font-bold text-gray-800">${job.role}</h3>
<p class="text-md font-semibold text-gray-700">${job.company}</p>
<p class="text-sm text-gray-500 mb-2">${job.period}</p>
<p class="text-gray-600 leading-relaxed">${job.description}</p>
`;
            experienceContainer.appendChild(item);
        });
    }

    // --- Renderização Inicial ---
    renderPortfolio();
    renderExperience();

    // --- Gráfico de Habilidades (Chart.js) ---
    const ctxElement = document.getElementById('skillsChart');
    if (ctxElement) {
        try {
            const ctx = ctxElement.getContext('2d');
            const skillsChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Python', 'Django & REST Framework', 'PyQt', 'SQL & Bancos de Dados', 'Gestão de Projetos', 'Infraestrutura de TI', 'Análise de Dados'],
                    datasets: [{
                        label: 'Nível de Proficiência',
                        data: [95, 90, 80, 85, 90, 80, 75],
                        backgroundColor: 'rgba(55, 65, 81, 0.8)',
                        borderColor: 'rgba(55, 65, 81, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    indexAxis: 'y',
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            beginAtZero: true,
                            max: 100,
                            grid: {
                                display: false
                            }
                        },
                        y: {
                            grid: {
                                display: false
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            enabled: true,
                            backgroundColor: '#111827',
                            titleFont: {
                                size: 14,
                                weight: 'bold'
                            },
                            bodyFont: {
                                size: 12
                            },
                            callbacks: {
                                label: function (context) {
                                    let label = context.dataset.label || '';
                                    if (label) {
                                        label += ': ';
                                    }
                                    if (context.parsed.x !== null) {
                                        label += context.parsed.x + '%';
                                    }
                                    return label;
                                }
                            }
                        }
                    }
                }
            });
        } catch (e) {
            console.error("Erro ao renderizar o Chart.js:", e);
            ctxElement.parentElement.innerHTML = '<p class="text-center text-red-500">Erro ao carregar o gráfico.</p>';
        }
    }

});

