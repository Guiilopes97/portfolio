// Sistema de Tradução
const translations = {
    pt: {
        // Navegação
        nav: {
            inicio: "Início",
            sobre: "Sobre",
            projetos: "Projetos",
            habilidades: "Habilidades",
            experiencia: "Experiência",
            contato: "Contato",
            idioma: "Idioma"
        },
        
        // Hero Section
        hero: {
            greeting: "Olá, eu sou",
            name: "Guilherme Lopes",
            title: "Desenvolvedor Backend",
            subtitle: "Criando soluções robustas e escaláveis",
            description: "Especializado em desenvolvimento de Sistemas Web, APIs, Web Scraping e Análise de Dados. Com mais de 4 anos de experiência.",
            location: "Guarujá, São Paulo, Brasil",
            locationText: "Localização",

            cta1: "Ver Projetos",
            cta2: "Entrar em Contato"
        },
        
        // About Section
        about: {
            title: "Sobre Mim",
            description1: "Desenvolvedor Backend formado em Sistemas de Informação com mais de 4 anos de experiência em desenvolvimento de APIs, web scraping e análise de dados.",
            description2: "Especialista em Python, PHP, JavaScript, Power BI e Bancos de Dados SQL, com foco em criar soluções robustas e escaláveis para empresas.",
            description3: "Proativo e orientado à melhoria contínua, busco transformar dados em resultados estratégicos que gerem impacto positivo para as organizações.",
            highlights: {
                backend: {
                    title: "Desenvolvimento Backend",
                    description: "APIs REST, Python, PHP, Laravel, Node.js, Web Scraping com Playwright"
                },
                database: {
                    title: "Bancos de Dados & ETL",
                    description: "MySQL, SQL Server, PostgreSQL, SQLite, Processos ETL"
                },
                analytics: {
                    title: "Análise & Visualização",
                    description: "Power BI, Excel, Dashboards Interativos, Business Intelligence"
                }
            }
        },
        
        // Projects Section
        projects: {
            title: "Projetos em Destaque",
            subtitle: "Conheça alguns dos projetos que desenvolvi, demonstrando minhas habilidades técnicas e capacidade de criar soluções inovadoras.",
            project1: {
                title: "APIs de Integração",
                description: "Desenvolvimento de APIs robustas utilizando Node.js, PHP e Python para integração segura entre sistemas corporativos.",
                technologies: "Tecnologias",
                features: {
                    1: "Segurança",
                    2: "Escalabilidade",
                    3: "Performance"
                },
                codeButton: "Código"
            },
            project2: {
                title: "Sistema de Web Scraping",
                description: "Implementação de solução automatizada para coleta e processamento de dados com Python, otimizando processos de negócio.",
                features: {
                    1: "Automação",
                    2: "ETL",
                    3: "Integridade de Dados"
                },
                codeButton: "Código"
            },
            project3: {
                title: "Dashboards Analíticos",
                description: "Criação de relatórios interativos e dashboards em Power BI integrados com SQL para suporte à decisão estratégica.",
                features: {
                    1: "Visualização",
                    2: "BI",
                    3: "Tomada de Decisão"
                },
                codeButton: "Código"
            }
        },
        
        // Skills Section
        skills: {
            title: "Habilidades Técnicas",
            subtitle: "Um conjunto abrangente de tecnologias e ferramentas que domino para criar soluções robustas e escaláveis.",
            categories: {
                backend: "Linguagens & Frameworks",
                database: "Bancos de Dados",
                tools: "Ferramentas & Infraestrutura",
                others: "Técnicas & Metodologias"
            }
        },
        
        // Experience Section
        experience: {
            title: "Experiência Profissional",
            subtitle: "Minha trajetória profissional demonstra crescimento constante e especialização em desenvolvimento backend.",
            current: "Atual",
            jobs: {
                juniorDev: {
                    title: "Desenvolvedor Júnior",
                    company: "DeltaFox Consultoria",
                    period: "Junho 2023 - Setembro 2025 (2 anos 4 meses)",
                    responsibilities: [
                        "Manutenção e otimização de site desenvolvido em WordPress, assegurando desempenho e usabilidade",
                        "Desenvolvimento de sistemas web utilizando PHP e JavaScript, com foco em funcionalidades robustas e escaláveis",
                        "Criação e manutenção de APIs utilizando Node.js, PHP e Python, garantindo integração segura e eficiente entre sistemas",
                        "Implementação de web scraping com Python para coleta automatizada e processamento de dados",
                        "Administração e otimização de bancos de dados MySQL para garantir integridade e desempenho",
                        "Gerenciamento de servidores Linux e Windows, assegurando alta disponibilidade e segurança dos ambientes",
                        "Desenvolvimento de relatórios analíticos e dashboards interativos utilizando Power BI para suporte à tomada de decisão"
                    ]
                },
                intern: {
                    title: "Estagiário",
                    company: "DeltaFox Consultoria",
                    period: "Fevereiro 2022 - Junho 2023 (1 ano 5 meses)",
                    responsibilities: [
                        "Manutenção e atualização de site desenvolvido em WordPress, garantindo a funcionalidade e desempenho",
                        "Desenvolvimento e manutenção de APIs utilizando Node.js, PHP e Python, focando em integridade, segurança e eficiência",
                        "Implementação de web scraping com Python para coleta automatizada de dados e integração com sistemas internos"
                    ]
                },
                dataAnalyst: {
                    title: "Assistente de Análise de Dados",
                    company: "Grupo Verreschi",
                    period: "Setembro 2021 - Fevereiro 2022 (6 meses)",
                    responsibilities: [
                        "Realização de análises de dados aprofundadas e desenvolvimento de relatórios precisos e visualmente impactantes utilizando Excel e Power BI",
                        "Integração eficiente a bancos de dados SQL para suporte a tomadas de decisão estratégicas"
                    ]
                },
                misIntern: {
                    title: "Estagiário de MIS",
                    company: "Grupo Verreschi",
                    period: "Julho 2021 - Setembro 2021 (3 meses)",
                    responsibilities: [
                        "Realização de análises de dados detalhadas e desenvolvimento de relatórios de alta qualidade utilizando Excel e Power BI",
                        "Integração direta a bancos de dados SQL para garantir precisão e eficiência na apresentação das informações"
                    ]
                }
            }
        },
        
        // Education Section
        education: {
            title: "Formação & Certificações",
            academic: {
                title: "Formação Acadêmica",
                degree: "Bacharelado em Sistemas de Informação",
                university: "Universidade Santa Cecília",
                period: "2020 - 2023"
            },
            certifications: {
                title: "Certificações",
                showMore: "Ver mais",
                showLess: "Ver menos",
                list: [
                    "Descubra o Power BI",
                    "White Belt",
                    "Administrando Banco de Dados",
                    "Implementação de Banco de Dados",
                    "Node.js",
                    "Criando projeto com interface gráfica Python",
                    "Estratégia de Negócios",
                    "Inovando com CSS"
                ]
            }
        },
        
        // Contact Section
        contact: {
            title: "Entre em Contato",
            subtitle: "Vamos conversar sobre como posso contribuir para o sucesso do seu próximo projeto.",
            subtitle2: "Informações de Contato",
            email: "Email",
            phone: "Telefone",
            linkedin: "LinkedIn",
            github: "GitHub"
        },
        
        // Footer
        footer: {
            rights: "Todos os direitos reservados.",
            developed: "Desenvolvido com ❤️ por Guilherme Lopes"
        },
        
        // Language Selector
        language: {
            title: "Idioma"
        }
    },
    
    en: {
        // Navigation
        nav: {
            inicio: "Home",
            sobre: "About",
            projetos: "Projects",
            habilidades: "Skills",
            experiencia: "Experience",
            contato: "Contact",
            idioma: "Language"
        },
        
        // Hero Section
        hero: {
            greeting: "Hello, I'm",
            name: "Guilherme Lopes",
            title: "Backend Developer",
            subtitle: "Creating robust and scalable solutions",
            description: "Specialized in Web Systems development, APIs, Web Scraping and Data Analysis. With over 4 years of experience.",
            location: "Guarujá, São Paulo, Brazil",
            locationText: "Location",
            cta1: "View Projects",
            cta2: "Get in Touch"
        },
        
        // About Section
        about: {
            title: "About Me",
            description1: "Backend Developer with a degree in Information Systems and over 4 years of experience in API development, web scraping, and data analysis.",
            description2: "Specialist in Python, PHP, JavaScript, Power BI, and SQL Databases, focused on creating robust and scalable solutions for companies.",
            description3: "Proactive and continuous improvement-oriented, I seek to transform data into strategic results that generate positive impact for organizations.",
            highlights: {
                backend: {
                    title: "Backend Development",
                    description: "REST APIs, Python, PHP, Laravel, Node.js, Web Scraping with Playwright"
                },
                database: {
                    title: "Databases & ETL",
                    description: "MySQL, SQL Server, PostgreSQL, SQLite, ETL Processes"
                },
                analytics: {
                    title: "Analysis & Visualization",
                    description: "Power BI, Excel, Interactive Dashboards, Business Intelligence"
                }
            }
        },
        
        // Projects Section
        projects: {
            title: "Featured Projects",
            subtitle: "Check out some of the projects I've developed, showcasing my technical skills and ability to create innovative solutions.",
            project1: {
                title: "Integration APIs",
                description: "Development of robust APIs using Node.js, PHP, and Python for secure integration between corporate systems.",
                technologies: "Technologies",
                features: {
                    1: "Security",
                    2: "Scalability",
                    3: "Performance"
                },
                codeButton: "Code"
            },
            project2: {
                title: "Web Scraping System",
                description: "Implementation of automated solution for data collection and processing with Python, optimizing business processes.",
                features: {
                    1: "Automation",
                    2: "ETL",
                    3: "Data Integrity"
                }
            },
            project3: {
                title: "Analytical Dashboards",
                description: "Creation of interactive reports and dashboards in Power BI integrated with SQL for strategic decision support.",
                features: {
                    1: "Visualization",
                    2: "BI",
                    3: "Decision Making"
                }
            }
        },
        
        // Skills Section
        skills: {
            title: "Technical Skills",
            subtitle: "Technologies and tools I master to create efficient and innovative solutions.",
            categories: {
                backend: "Backend",
                database: "Database",
                tools: "Tools",
                others: "Techniques & Methodologies"

            }
        },
        
        // Experience Section
        experience: {
            title: "Professional Experience",
            subtitle: "My professional journey demonstrates constant growth and specialization in backend development.",
            current: "Current",
            jobs: {
                juniorDev: {
                    title: "Junior Developer",
                    company: "DeltaFox Consultoria",
                    period: "June 2023 - September 2025 (2 years 4 months)",
                    responsibilities: [
                        "Maintenance and optimization of WordPress-developed website, ensuring performance and usability",
                        "Development of web systems using PHP and JavaScript, focusing on robust and scalable functionalities",
                        "Creation and maintenance of APIs using Node.js, PHP and Python, ensuring secure and efficient integration between systems",
                        "Implementation of web scraping with Python for automated data collection and processing",
                        "Administration and optimization of MySQL databases to ensure integrity and performance",
                        "Management of Linux and Windows servers, ensuring high availability and security of environments",
                        "Development of analytical reports and interactive dashboards using Power BI for decision-making support"
                    ]
                },
                intern: {
                    title: "Intern",
                    company: "DeltaFox Consultoria",
                    period: "February 2022 - June 2023 (1 year 5 months)",
                    responsibilities: [
                        "Maintenance and updating of WordPress-developed website, ensuring functionality and performance",
                        "Development and maintenance of APIs using Node.js, PHP and Python, focusing on integrity, security and efficiency",
                        "Implementation of web scraping with Python for automated data collection and integration with internal systems"
                    ]
                },
                dataAnalyst: {
                    title: "Data Analysis Assistant",
                    company: "Grupo Verreschi",
                    period: "September 2021 - February 2022 (6 months)",
                    responsibilities: [
                        "Conducting in-depth data analysis and development of precise and visually impactful reports using Excel and Power BI",
                        "Efficient integration with SQL databases to support strategic decision-making"
                    ]
                },
                misIntern: {
                    title: "MIS Intern",
                    company: "Grupo Verreschi",
                    period: "July 2021 - September 2021 (3 months)",
                    responsibilities: [
                        "Conducting detailed data analysis and development of high-quality reports using Excel and Power BI",
                        "Direct integration with SQL databases to ensure accuracy and efficiency in information presentation"
                    ]
                }
            }
        },
        
        // Education Section
        education: {
            title: "Academic Background",
            subtitle: "My educational foundation and professional certifications.",
            academic: {
                title: "Academic Background",
                degree: "Bachelor's Degree in Information Systems",
                university: "Santa Cecília University",
                period: "2020 - 2023"
            },
            certifications: {
                title: "Certifications",
                showMore: "Show more",
                showLess: "Show less",
                list: [
                    "Discover Power BI",
                    "White Belt",
                    "Database Administration",
                    "Database Implementation",
                    "Node.js",
                    "Creating Python GUI Project",
                    "Business Strategy",
                    "Innovating with CSS"
                ]
            }
        },
        
        // Contact Section
        contact: {
            title: "Get in Touch",
            subtitle: "Let's talk about how I can help your project grow.",
            subtitle2: "Contact Information",
            email: "Email",
            phone: "Phone",
            linkedin: "LinkedIn",
            github: "GitHub"
        },
        
        // Footer
        footer: {
            rights: "All rights reserved.",
            developed: "Developed with ❤️ by Guilherme Lopes"
        },
        
        // Language Selector
        language: {
            title: "Language"
        }
    }
};

// Função para obter tradução
function getTranslation(key, lang = 'pt') {
    const keys = key.split('.');
    let translation = translations[lang];
    
    for (const k of keys) {
        if (translation && translation[k]) {
            translation = translation[k];
        } else {
            console.warn(`Translation not found for key: ${key} in language: ${lang}`);
            return key;
        }
    }
    
    return translation;
}

// Função para traduzir elementos
function translateElement(element, lang = 'pt') {
    const dataTranslate = element.getAttribute('data-translate');
    if (dataTranslate) {
        const translation = getTranslation(dataTranslate, lang);
        element.textContent = translation;
    }
}

// Função para traduzir toda a página
function translatePage(lang = 'pt') {
    // Traduzir elementos com data-translate
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    elementsToTranslate.forEach(element => {
        translateElement(element, lang);
    });
    
    // Traduzir elementos específicos
    const specificElements = {
        // Hero Section
        'hero-greeting': `hero.greeting`,
        'hero-name': `hero.name`,
        'hero-title': `hero.title`,
        'hero-subtitle': `hero.subtitle`,
        'hero-cta1': `hero.cta1`,
        'hero-cta2': `hero.cta2`,
        
        // About Section
        'about-title': `about.title`,
        'about-desc1': `about.description1`,
        'about-desc2': `about.description2`,
        'about-desc3': `about.description3`,
        'about-backend-title': `about.highlights.backend.title`,
        'about-backend-desc': `about.highlights.backend.description`,
        'about-database-title': `about.highlights.database.title`,
        'about-database-desc': `about.highlights.database.description`,
        'about-analytics-title': `about.highlights.analytics.title`,
        'about-analytics-desc': `about.highlights.analytics.description`,
        
        // Projects Section
        'projects-title': `projects.title`,
        'projects-subtitle': `projects.subtitle`,
        'project1-title': `projects.project1.title`,
        'project1-desc': `projects.project1.description`,
        'project1-tech': `projects.project1.technologies`,
        'project1-1': `projects.project1.features.1`,
        'project1-2': `projects.project1.features.2`,
        'project1-3': `projects.project1.features.3`,
        'project1-code': `projects.project1.codeButton`,
        'project2-title': `projects.project2.title`,
        'project2-desc': `projects.project2.description`,
        'project2-1': `projects.project2.features.1`,
        'project2-2': `projects.project2.features.2`,
        'project2-3': `projects.project2.features.3`,
        'project3-title': `projects.project3.title`,
        'project3-desc': `projects.project3.description`,
        'project3-1': `projects.project3.features.1`,
        'project3-2': `projects.project3.features.2`,
        'project3-3': `projects.project3.features.3`,
        
        // Skills Section
        'skills-title': `skills.title`,
        'skills-subtitle': `skills.subtitle`,
        
        // Experience Section
        'experience-title': `experience.title`,
        'experience-subtitle': `experience.subtitle`,
        'experience-current': `experience.current`,
        'experience-junior-title': `experience.jobs.juniorDev.title`,
        'experience-junior-company': `experience.jobs.juniorDev.company`,
        'experience-junior-period': `experience.jobs.juniorDev.period`,
        'experience-intern-title': `experience.jobs.intern.title`,
        'experience-intern-company': `experience.jobs.intern.company`,
        'experience-intern-period': `experience.jobs.intern.period`,
        'experience-analyst-title': `experience.jobs.dataAnalyst.title`,
        'experience-analyst-company': `experience.jobs.dataAnalyst.company`,
        'experience-analyst-period': `experience.jobs.dataAnalyst.period`,
        'experience-mis-title': `experience.jobs.misIntern.title`,
        'experience-mis-company': `experience.jobs.misIntern.company`,
        'experience-mis-period': `experience.jobs.misIntern.period`,
        
        // Responsabilidades - Desenvolvedor Júnior
        'experience-junior-resp1': `experience.jobs.juniorDev.responsibilities.0`,
        'experience-junior-resp2': `experience.jobs.juniorDev.responsibilities.1`,
        'experience-junior-resp3': `experience.jobs.juniorDev.responsibilities.2`,
        'experience-junior-resp4': `experience.jobs.juniorDev.responsibilities.3`,
        'experience-junior-resp5': `experience.jobs.juniorDev.responsibilities.4`,
        'experience-junior-resp6': `experience.jobs.juniorDev.responsibilities.5`,
        'experience-junior-resp7': `experience.jobs.juniorDev.responsibilities.6`,
        
        // Responsabilidades - Estagiário
        'experience-intern-resp1': `experience.jobs.intern.responsibilities.0`,
        'experience-intern-resp2': `experience.jobs.intern.responsibilities.1`,
        'experience-intern-resp3': `experience.jobs.intern.responsibilities.2`,
        
        // Responsabilidades - Assistente de Análise de Dados
        'experience-analyst-resp1': `experience.jobs.dataAnalyst.responsibilities.0`,
        'experience-analyst-resp2': `experience.jobs.dataAnalyst.responsibilities.1`,
        
        // Responsabilidades - Estagiário de MIS
        'experience-mis-resp1': `experience.jobs.misIntern.responsibilities.0`,
        'experience-mis-resp2': `experience.jobs.misIntern.responsibilities.1`,
        
        // Education Section
        'education-title': `education.title`,
        'education-subtitle': `education.subtitle`,
        'certifications-title': `education.certifications.title`,
        'certifications-show-more': `education.certifications.showMore`,
        'certifications-show-less': `education.certifications.showLess`,
        
        // Certificações individuais
        'cert-1': `education.certifications.list.0`,
        'cert-2': `education.certifications.list.1`,
        'cert-3': `education.certifications.list.2`,
        'cert-4': `education.certifications.list.3`,
        'cert-5': `education.certifications.list.4`,
        'cert-6': `education.certifications.list.5`,
        'cert-7': `education.certifications.list.6`,
        'cert-8': `education.certifications.list.7`,
        
        // Contact Section
        'contact-title': `contact.title`,
        'contact-subtitle': `contact.subtitle`,
        'contact-email': `contact.email`,
        'contact-phone': `contact.phone`,
        'contact-linkedin': `contact.linkedin`,
        'contact-github': `contact.github`,
        
        // Footer
        'footer-rights': `footer.rights`,
        'footer-developed': `footer.developed`,
        
        // Language Selector
        'language-title': `language.title`
    };
    
    // Aplicar traduções específicas
    Object.entries(specificElements).forEach(([id, key]) => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = getTranslation(key, lang);
        }
    });
    
    // Traduzir elementos de navegação
    const navElements = {
        'nav-inicio': `nav.inicio`,
        'nav-sobre': `nav.sobre`,
        'nav-projetos': `nav.projetos`,
        'nav-habilidades': `nav.habilidades`,
        'nav-experiencia': `nav.experiencia`,
        'nav-contato': `nav.contato`,
        'nav-mobile-inicio': `nav.inicio`,
        'nav-mobile-sobre': `nav.sobre`,
        'nav-mobile-projetos': `nav.projetos`,
        'nav-mobile-habilidades': `nav.habilidades`,
        'nav-mobile-experiencia': `nav.experiencia`,
        'nav-mobile-contato': `nav.contato`
    };
    
    Object.entries(navElements).forEach(([id, key]) => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = getTranslation(key, lang);
        }
    });
}

// Exportar para uso global
window.translations = translations;
window.getTranslation = getTranslation;
window.translatePage = translatePage;
