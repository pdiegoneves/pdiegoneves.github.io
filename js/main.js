document.addEventListener('DOMContentLoaded', () => {

    // =====================
    // MOBILE MENU
    // =====================
    const mobileBtn   = document.getElementById('mobile-menu-button');
    const mobileMenu  = document.getElementById('mobile-menu');
    const iconMenu    = document.getElementById('icon-menu');
    const iconClose   = document.getElementById('icon-close');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            const open = !mobileMenu.classList.contains('hidden');
            mobileMenu.classList.toggle('hidden', open);
            iconMenu.classList.toggle('hidden', !open);
            iconClose.classList.toggle('hidden', open);
        });
    }

    document.querySelectorAll('.nav__mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            iconMenu.classList.remove('hidden');
            iconClose.classList.add('hidden');
        });
    });

    // =====================
    // SMOOTH SCROLL
    // =====================
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const id = link.getAttribute('href');
            if (id === '#') { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
            const target = document.querySelector(id);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // =====================
    // ACTIVE NAV LINK
    // =====================
    const sections  = document.querySelectorAll('main section[id]');
    const navLinks  = document.querySelectorAll('.nav__link');
    const navH      = 68; // matches --nav-h in CSS

    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                navLinks.forEach(l => l.classList.remove('active'));
                const active = document.querySelector(`.nav__link[href="#${e.target.id}"]`);
                if (active) active.classList.add('active');
            }
        });
    }, { rootMargin: `-${navH}px 0px -55% 0px` });

    sections.forEach(s => sectionObserver.observe(s));

    // =====================
    // SCROLL REVEAL
    // =====================
    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                revealObserver.unobserve(e.target);
            }
        });
    }, { rootMargin: '0px 0px -60px 0px', threshold: 0.05 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // Double rAF: after first paint, initial IntersectionObserver callbacks
    // have already fired for in-viewport elements — safe to enable animations
    requestAnimationFrame(() => requestAnimationFrame(() => {
        document.documentElement.classList.add('js-ready');
    }));

    // =====================
    // COUNTER ANIMATION
    // =====================
    function animateCounter(el) {
        const target   = parseInt(el.dataset.target, 10);
        const duration = 2000;
        const steps    = 60;
        const stepMs   = duration / steps;
        let   current  = 0;
        const inc      = target / steps;

        const timer = setInterval(() => {
            current += inc;
            if (current >= target) {
                el.textContent = target;
                clearInterval(timer);
            } else {
                el.textContent = Math.floor(current);
            }
        }, stepMs);
    }

    const counterObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                animateCounter(e.target);
                counterObserver.unobserve(e.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

    // =====================
    // SKILL BARS
    // =====================
    const barObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.style.width = e.target.dataset.width + '%';
                barObserver.unobserve(e.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.skill-bar__fill').forEach(el => barObserver.observe(el));

    // =====================
    // PORTFOLIO DATA
    // =====================
    const portfolioData = [
        {
            title: 'DockSafe',
            category: 'software',
            description: 'Sistema de dupla checagem do carregamento para eliminar erros na expedição de cargas.',
            result: 'R$ 16M economizados',
            tags: ['Python', 'Django', 'PyQt6', 'PostgreSQL', 'Streamlit'],
            link: 'projetos/DockSafe.html'
        },
        {
            title: 'Sistema de Gestão (Carajás)',
            category: 'dados',
            description: 'Gestão de dados do TOTVS Protheus com implementação de 4 painéis gerenciais em Power BI.',
            result: '90% ↑ análise',
            tags: ['Python', 'Power BI', 'GitHub', 'Automação'],
            link: null
        },
        {
            title: 'Velocidade de Entrega',
            category: 'dados',
            description: 'Projeto para garantir entregas em até dois dias, eliminando relatórios manuais no faturamento.',
            result: '100% automação',
            tags: ['Python', 'Pandas', 'SAP', 'Tableau', 'VBS'],
            link: 'projetos/Velocidade-de-Entrega.html'
        },
        {
            title: 'Maestro',
            category: 'automacao',
            description: 'Orquestrador centralizado para execução de automações RPA, com múltiplas janelas simultâneas.',
            result: null,
            tags: ['Python', 'Django', 'PyWinAuto', 'Playwright', 'APIs'],
            link: null
        },
        {
            title: 'HeadControl',
            category: 'software',
            description: 'Controle de headcounts nas estações produtivas com medição eficaz do IHH.',
            result: null,
            tags: ['Python', 'Django', 'SAP', 'Selenium', 'PostgreSQL'],
            link: null
        },
        {
            title: 'Dashboard de Conferência',
            category: 'software',
            description: 'Dashboard em tempo real para visibilidade completa do que está em conferência.',
            result: null,
            tags: ['Django REST', 'React', 'TypeScript', 'PostgreSQL', 'Vite'],
            link: null
        },
        {
            title: 'Tracking de Caixas',
            category: 'dados',
            description: 'Sistema para localizar volumes dentro do CD em tempo real via integração SAP.',
            result: null,
            tags: ['Python', 'SAP', 'Tableau', 'VBS'],
            link: null
        },
        {
            title: 'EtiquetasLOSS',
            category: 'automacao',
            description: 'Automação do processo de impressão de etiquetas Zebra (ZPL) para controle de estoque.',
            result: null,
            tags: ['Python', 'PyQt6', 'Pandas', 'ZPL'],
            link: null
        },
        {
            title: 'Tarjex',
            category: 'software',
            description: 'Sistema web para controle de processos internos com interface reativa.',
            result: null,
            tags: ['Python', 'Django', 'HTMX', 'HTML/CSS', 'JavaScript'],
            link: null
        }
    ];

    const grid    = document.getElementById('portfolio-grid');
    const filters = document.querySelectorAll('.filter-btn');

    function renderPortfolio(filter = 'all') {
        if (!grid) return;
        const items = filter === 'all'
            ? portfolioData
            : portfolioData.filter(p => p.category === filter);

        grid.innerHTML = '';

        items.forEach((item, i) => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.style.animationDelay = `${i * 0.06}s`;

            const resultBadge = item.result
                ? `<span class="project-card__result">${item.result}</span>`
                : '';

            const linkEl = item.link
                ? `<a href="${item.link}" class="project-card__link">Ver projeto &rarr;</a>`
                : '';

            card.innerHTML = `
<div class="project-card__body">
    <div class="project-card__header">
        <h3 class="project-card__title">${item.title}</h3>
        ${resultBadge}
    </div>
    <p class="project-card__desc">${item.description}</p>
    <div class="project-card__tags">
        ${item.tags.map(t => `<span>${t}</span>`).join('')}
    </div>
    ${linkEl}
</div>`;

            grid.appendChild(card);
        });
    }

    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            filters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderPortfolio(btn.dataset.filter);
        });
    });

    renderPortfolio();

    // =====================
    // TIMELINE
    // =====================
    const experienceData = [
        {
            role: 'Analista de Desenvolvimento de Sistemas',
            company: 'TPC Logística Inteligente',
            period: 'setembro 2024 — presente',
            desc: 'Desenvolvimento de sistemas personalizados com Python para otimizar processos produtivos e integração com SAP. Destaque para o DockSafe: 50% de redução nos erros de expedição.'
        },
        {
            role: 'Analista de Planejamento Logístico Sênior',
            company: 'Carajás Home Center',
            period: 'fevereiro 2024 — agosto 2024',
            desc: 'Sistema de gestão de dados (TOTVS Protheus) com 90% de melhoria no tempo de análise de ocorrências e 4 painéis em Power BI.'
        },
        {
            role: 'Analista Computacional I',
            company: 'Eyelaser Center',
            period: 'março 2022 — fevereiro 2024 · 2 anos',
            desc: 'Dashboards para diretoria, suporte técnico e gestão de equipamentos de TI e médicos. Redução de 15% no tempo de resolução de problemas.'
        },
        {
            role: 'CEO',
            company: 'Maceió TI',
            period: 'maio 2021 — maio 2026 · 5 anos',
            desc: 'Gestão de todas as operações, sistema interno de gestão e estratégias de webmarketing.'
        },
        {
            role: 'Gerente de TI',
            company: 'EPST',
            period: 'abril 2012 — maio 2021 · 9 anos',
            desc: 'Gestão de TI de 5 filiais, suporte a ERP e implantação de CTe/MDFe. Aumento de 30% na disponibilidade dos servidores.'
        },
        {
            role: 'Coordenador de TI',
            company: 'Norvinco Indústria de Embalagem',
            period: 'agosto 2011 — abril 2012',
            desc: 'Definição de metas (BSC, SWOT) e melhoria de 50% na eficiência dos sistemas.'
        },
        {
            role: 'Técnico de Informática',
            company: 'I.Soluções',
            period: 'julho 2010 — março 2011',
            desc: 'Tech Lead em configuração e documentação de redes. 30% de melhoria em eficiência e confiabilidade.'
        }
    ];

    const timeline = document.getElementById('timeline');
    if (timeline) {
        timeline.innerHTML = '';
        experienceData.forEach((job, i) => {
            const el = document.createElement('div');
            el.className = 'timeline-item reveal';
            el.style.setProperty('--delay', `${i * 0.08}s`);
            el.innerHTML = `
<p class="timeline-item__role">${job.role}</p>
<p class="timeline-item__company">${job.company}</p>
<p class="timeline-item__period">${job.period}</p>
<p class="timeline-item__desc">${job.desc}</p>`;
            timeline.appendChild(el);

            revealObserver.observe(el);
        });
    }

});
