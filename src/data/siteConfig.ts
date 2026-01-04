/**
 * Centralized site configuration and copy for Mascotiva landing page
 */

export const siteConfig = {
  name: 'Mascotiva',
  url: 'https://mascotiva.cl',
  email: 'hola@mascotiva.cl',

  seo: {
    title: 'Mascotiva - Software Veterinario para Clínicas Modernas',
    description: 'Gestiona tu clínica veterinaria con Mascotiva. Agenda, fichas clínicas, vacunas y recordatorios en una sola plataforma. Diseñado para veterinarios en Latinoamérica.',
    ogImage: '/images/og-image.png',
  },

  navbar: {
    links: [
      { label: 'Funcionalidades', href: '#funcionalidades' },
      { label: 'Cómo funciona', href: '#como-funciona' },
      { label: 'Contacto', href: '#contacto' },
    ],
    cta: {
      label: 'Solicitar demo',
      href: '#demo',
    },
  },

  hero: {
    badge: 'Software veterinario para clínicas modernas',
    title: 'Gestiona tu clínica veterinaria con orden y eficiencia',
    subtitle: 'Agenda, fichas clínicas, vacunas y recordatorios en una sola plataforma. Diseñado para veterinarios independientes y clínicas que buscan profesionalizar su operación.',
    primaryCta: {
      label: 'Solicitar demo',
      href: '#demo',
    },
    secondaryCta: {
      label: 'Ver funcionalidades',
      href: '#funcionalidades',
    },
    microcopy: 'Sin compromiso · Configuración asistida · Soporte en español',
    image: {
      src: '/images/hero-dashboard.png',
      alt: 'Interfaz del dashboard de Mascotiva mostrando agenda veterinaria, lista de pacientes y estado de vacunaciones',
    },
  },

  socialProof: {
    items: [
      {
        icon: 'lock',
        text: 'Datos seguros',
      },
      {
        icon: 'headset',
        text: 'Soporte local',
      },
      {
        icon: 'shield-check',
        text: 'Tus datos son tuyos',
      },
    ],
  },

  features: {
    sectionTitle: 'Todo lo que necesitas para gestionar tu clínica',
    items: [
      {
        title: 'Agenda inteligente',
        description: 'Organiza citas, bloqueos y disponibilidad. Visualiza el día, semana o mes de tu equipo en un solo lugar.',
        image: '/images/feature-agenda.png',
      },
      {
        title: 'Fichas clínicas digitales',
        description: 'Historial completo de cada paciente: consultas, diagnósticos, tratamientos y archivos adjuntos.',
        image: '/images/feature-ficha.png',
      },
      {
        title: 'Control de vacunaciones',
        description: 'Calendario de vacunas con alertas automáticas. Nunca pierdas un refuerzo importante.',
        image: '/images/feature-vacunas.png',
      },
      {
        title: 'Recordatorios automáticos',
        description: 'Envía avisos de citas y vacunas por WhatsApp o correo sin esfuerzo manual.',
        image: null,
      },
      {
        title: 'Gestión de inventario',
        description: 'Controla medicamentos y productos. Recibe alertas de stock bajo y vencimientos.',
        image: null,
      },
      {
        title: 'Reportes y métricas',
        description: 'Visualiza ingresos, citas y rendimiento. Toma decisiones basadas en datos reales.',
        image: null,
      },
    ],
  },

  benefits: {
    sectionTitle: '¿Por qué elegir Mascotiva?',
    items: [
      {
        title: 'Menos papel, más tiempo',
        description: 'Digitaliza tu operación y dedica más minutos a lo que importa: tus pacientes.',
        icon: 'clock',
      },
      {
        title: 'Clientes que vuelven',
        description: 'Los recordatorios automáticos mejoran la adherencia a tratamientos y vacunas.',
        icon: 'repeat',
      },
      {
        title: 'Todo en un solo lugar',
        description: 'Olvídate de hojas de cálculo, cuadernos y sistemas dispersos.',
        icon: 'layers',
      },
      {
        title: 'Decisiones informadas',
        description: 'Accede a métricas claras para entender y mejorar tu negocio.',
        icon: 'chart',
      },
    ],
  },

  howItWorks: {
    sectionTitle: 'Cómo funciona',
    sectionSubtitle: 'Tres pasos simples para transformar tu clínica',
    steps: [
      {
        number: 1,
        title: 'Agenda tu demo',
        description: 'Conversamos sobre tu clínica y te mostramos la plataforma en vivo.',
        icon: 'demo',
      },
      {
        number: 2,
        title: 'Configuramos juntos',
        description: 'Importamos tus datos y personalizamos Mascotiva para tu flujo de trabajo.',
        icon: 'setup',
      },
      {
        number: 3,
        title: 'Comienza a operar',
        description: 'Usa la plataforma con soporte continuo en español.',
        icon: 'launch',
      },
    ],
  },

  trust: {
    sectionTitle: 'Tu información, protegida',
    items: [
      {
        icon: 'lock',
        title: 'Datos seguros',
        description: 'Infraestructura con cifrado y respaldos automáticos.',
      },
      {
        icon: 'map-pin',
        title: 'Soporte local',
        description: 'Equipo en Chile, atención en tu horario y tu idioma.',
      },
      {
        icon: 'download',
        title: 'Tus datos son tuyos',
        description: 'Exporta tu información cuando quieras, sin restricciones.',
      },
    ],
  },

  finalCta: {
    title: '¿Listo para ordenar tu clínica?',
    subtitle: 'Agenda una demostración personalizada y descubre cómo Mascotiva puede ayudarte.',
    cta: {
      label: 'Solicitar demo',
      href: '#demo',
    },
    microcopy: 'Respuesta en menos de 24 horas hábiles',
  },

  footer: {
    columns: [
      {
        title: 'Producto',
        links: [
          { label: 'Funcionalidades', href: '#funcionalidades' },
          { label: 'Cómo funciona', href: '#como-funciona' },
          { label: 'Precios', href: '#', comingSoon: true },
        ],
      },
      {
        title: 'Empresa',
        links: [
          { label: 'Sobre nosotros', href: '#sobre-nosotros' },
          { label: 'Contacto', href: '#contacto' },
          { label: 'Blog', href: '#', comingSoon: true },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Términos de uso', href: '/terminos' },
          { label: 'Política de privacidad', href: '/privacidad' },
        ],
      },
    ],
    copyright: '© 2025 Mascotiva. Todos los derechos reservados.',
  },
};

export type SiteConfig = typeof siteConfig;
