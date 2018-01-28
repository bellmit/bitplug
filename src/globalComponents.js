import fgInput from './components/shared/inputs/formGroupInput.vue'
import DropDown from './components/shared/Dropdown.vue'
import PaperTable from './components/shared/PaperTable.vue'

// Custom
import Well from './components/shared/well.vue'
import PlainCard from './components/shared/cards/PlainCard.vue'

import SavageDropzone from './plugins/savage_dropzone/index.vue'
import BannerError from './components/shared/bannerError'
import BannerSuccess from './components/shared/bannerSuccess'
import FetchError from './components/shared/fetchError'
import FieldError from './components/shared/fieldError'
import NoContentError from './components/shared/noContentError'
import LoadingBar from './components/shared/loading'
import LoadingButton from './components/shared/loadingButton'

// Helper functions
import {
  closeModal,
  cheekyReloadStore,
  redirectLoginNoBack,
  redirectLogin,
  redirectHome,
  destroyedHook,
  getUserTypeName,
  getUserStatusName,
  getUserStatusMessage,
  isUserSuspended,
  isUserDeleted
} from '@/helpers'
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

    Vue.component('SavageDropzone', SavageDropzone)
    Vue.component('BannerError', BannerError)
    Vue.component('BannerSuccess', BannerSuccess)
    Vue.component('FetchError', FetchError)
    Vue.component('FieldError', FieldError)
    Vue.component('NoContentError', NoContentError)
    Vue.component('LoadingBar', LoadingBar)
    Vue.component('LoadingButton', LoadingButton)

    // helper functions
    Vue.prototype.$_$closeModal = closeModal
    Vue.prototype.$_$cheekyReloadStore = cheekyReloadStore
    Vue.prototype.$_$destroyedHook = destroyedHook
    Vue.prototype.$_$redirectLoginNoBack = redirectLoginNoBack
    Vue.prototype.$_$redirectLogin = redirectLogin
    Vue.prototype.$_$redirectHome = redirectHome

    Vue.prototype.$_$getUserTypeName = getUserTypeName
    Vue.prototype.$_$getUserStatusName = getUserStatusName
    Vue.prototype.$_$getUserStatusMessage = getUserStatusMessage

    Vue.prototype.$_$isUserSuspended = isUserSuspended
    Vue.prototype.$_$isUserDeleted = isUserDeleted
  }
}

export default GlobalComponents
