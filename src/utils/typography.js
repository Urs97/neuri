import Typography from "typography"

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: '1.33',
  headerColor: '#FFFFFF',
  bodyColor: '#eff6ff',
  headerFontFamily: ['National Bold', 'Roboto', 'Helvetica', 'sans-serif'],
  bodyFontFamily: ['National Regular', 'Roboto', 'Helvetica', 'serif'],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    'h1, h2, h3, h4, h5, h6': {
      marginBottom: '0',
      textShadow: '1px 1px #000000'
    },
    'a': {
      textDecoration: 'none'
    },
    'p': {
      fontWeight: '300',
      marginBottom: '0'
    },
    blockquote: {
      color: '#FFFFFF'
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
  })
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography

// oceanBeachTheme.baseFontSize = "18px"
// oceanBeachTheme.baseLineHeight = "1.60"
// oceanBeachTheme.bodyWeight = "300"
// oceanBeachTheme.bodyGray = "9"

// oceanBeachTheme.overrideThemeStyles = ({ rhythm }, options, styles) => ({
//   a: {
//     backgroundImage: "none",
//     textShadow: "none",
//   },
//   hr: {
//     background: "none",
//   },
//   blockquote: {
//     borderColor: "#2EA3F2 !important",
//     marginLeft: "0 !important",
//   },
// })