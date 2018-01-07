import fgInput from './components/shared/inputs/formGroupInput.vue'
import DropDown from './components/shared/Dropdown.vue'
import PaperTable from './components/shared/PaperTable.vue'

// Custom
import Well from './components/shared/well.vue'
import PlainCard from './components/shared/cards/PlainCard.vue'

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install (Vue) {
    Vue.component('fg-input', fgInput)
    Vue.component('drop-down', DropDown)
    Vue.component('PaperTable', PaperTable)

    Vue.component('SavageWell', Well)
    Vue.component('PlainCard', PlainCard)
  }
}

export default GlobalComponents
