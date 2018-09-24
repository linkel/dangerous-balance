import Typography from "typography"
import deyoung from "typography-theme-de-young"
deyoung.overrideThemeStyles = ({ rhythm }, options) => ({

    'blockquote': {
      fontStyle: 'normal',
    }
})

const typography = new Typography(deyoung)

export default typography
export const rhythm = typography.rhythm