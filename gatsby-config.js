module.exports = {
  siteMetadata: {
    title: {
      kr: '테라다 단테의 블로그',
      jp: 'Terada DanteノBlog'
    },
    home: {
      kr: '홈',
      jp: 'Home'
    },
    category: {
      kr: '카테고리',
      jp: 'Category'
    },
    about: {
      kr: '어바웃',
      jp: 'About'
    },
    description: {
      kr: '풍요롭고 간편한 세상을 위해 상상하는 테라다의 기술 블로그',
      jp: '楽な世界を作ろう🔥'
    },
    author: {
      name: {
        kr: '테라다 단테',
        jp: 'Terada Dante'
      },
      location: {
        kr: '후쿠오카',
        jp: '福岡'
      },
      email: {
        kr: 'terada.syun.kim@gmail.com',
        jp: 'terada.syun.kim@gmail.com'
      },
      word: {
        kr: '세상은 상상하는 것으로부터',
        jp: '創造は想像から'
      }
    },
    siteUrl: `https://terada-dante.netlify.com`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "테라다 단테의 기술 블로그",
        short_name: "테라다 블로그",
        description: "풍요롭고 간편한 세상을 위해 상상하는 테라다의 기술 블로그. 자바스크립트에서 웹 해킹까지",
        start_url: "/",
        lang: `kr`,
        //background_color: "#6b37bf",
        //theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "static/favicon.jpg", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        //crossOrigin: `use-credentials`,
        localize: [
          {
            start_url: `/jp/`,
            lang: `jp`,
            name: `Terada Dante ノ Blog`,
            short_name: `Terada Blog`,
            description: `創造は想像から, 楽な世界のためにjavascriptからhackingまで`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src/posts`,
        // Default : `${__dirname}/src/`
        // posts 내 Markdwon에 적용하기 위함
        path: `${__dirname}/src/posts/`,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://terada-dante.netlify.com',
        sitemap: 'https://terada-dante.netlify.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `@raae/gatsby-remark-oembed`,
            options: {
              // usePrefix defaults to false
              // usePrefix: true is the same as ["oembed"]
              usePrefix: ["oembed", "video"],
              providers: {
                // Important to exclude providers
                // that adds js to the page.
                // If you do not need them.
                // exclude: ["Reddit"]
              }
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (e.g. <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (e.g. for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: "language-",
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in gatsby-browser.js
              // right after importing the prism color scheme:
              //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: false,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
              // This adds a new language definition to Prism or extend an already
              // existing language definition. More details on this option can be
              // found under the header "Add new language definition or extend an
              // existing language" below.
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              // Customize the prompt used in shell output
              // Values below are default
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              // By default the HTML entities <>&'" are escaped.
              // Add additional HTML escapes by providing a mapping
              // of HTML entities and their escape value IE: { '}': '&#123;' }
              escapeEntities: {},
            },
          },
          `gatsby-remark-autolink-headers`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `terada-dante`
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /icons/
        }
      }
    }
  ],
}