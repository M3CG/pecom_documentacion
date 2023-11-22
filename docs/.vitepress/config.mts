import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'es-ES',
  title: "Pecom",
  description: "documentación técnica",
  themeConfig: {

    siteTitle: 'Pecom',
    // logo: '/AAALogo_escala_grises_Positivo_con_Endoso.svg',
    nav: [
      { text: 'Inicio', link: '/' },
      // { text: 'Guia', link: '/guia' },
      { text: 'Estandares', link: '/disciplinas/movimiento_de_suelos' },
      // { text: 'Planificación', link: '/planificacion' }
    ],

    sidebar: [
      {
        text: 'Disciplinas principales',
        items: [
          { text: 'Movimiento de suelo', link: '/disciplinas/movimiento_de_suelos' },
          { text: 'Obra civil', link: '/disciplinas/obra_civil' },
          { text: 'Arquitectura', link: '/disciplinas/arquitectura' },
          { text: 'Estructuras metálicas', link: '/disciplinas/estructuras_metalicas' },
          { text: 'Montaje mecánico', link: '/disciplinas/montaje_mecanico' },
          { text: 'Piping', link: '/disciplinas/piping' },
          { text: 'Electricidad', link: '/disciplinas/electricidad' },
          { text: 'Instrumentos', link: '/disciplinas/instrumentos' },
          { text: 'Pintura y aislación', link: '/disciplinas/pintura_y_aislacion' },
          { text: 'Precomisionado', link: '/disciplinas/precomisionado' }

        ]
      }
    ],

    outline: {
      label: "En esta pagina",
      level: "deep",
    },

    docFooter: {
      prev: "Anterior",
      next: "Siguiente"
    },

    footer: {
      message: 'El contenido de esta página está licenciado bajo la Licencia MIT.',
      // copyright: 'Copyright © 2023 - Mario E. Colombres Garmendia para Pecom'
    },

    // aside: 'left',

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Buscar'
          },
          modal: {
            noResultsText: 'No se encontro:',
            displayDetails: 'vista detallada',
            backButtonTitle: 'atras',
            resetButtonTitle: 'borrar',
            footer: {
              selectText: 'seleccionar',
              navigateText: 'para navegar',
              navigateUpKeyAriaLabel: 'anterior',
              navigateDownKeyAriaLabel: 'siguiente',
              closeKeyAriaLabel: 'cerrar',
              closeText: 'cerrar'
            }
          }
        }
      }
    },

    notFound: {
      title: 'Pagina no encontrada',
      quote: '',
      linkText: 'Volver al inicio'
    }
  }
})
