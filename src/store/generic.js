import { getErrMsg, postErrMsg, deleteErrMsg, idNotFound, authErrMsg, isAuthErr, isVerificationErr, calcItemsWorth } from '../helpers';
import store from '@/store/store'
// Data Helpers

// export const asyncLoader = {
//     load (dargs) {
//         let commit = dargs.commit
//         let dispatch = dargs.dispatch
//         // console.log(store, 'async me')
//         if (dargs.noLoad !== true) {
//             commit('loading')
//         } else if (dargs.loader) {
//             commit('bgloading')
//         let load = dargs.loader.load
//             dispatch(load.namespace, load.args, {root: true}).then(function () {
//             });
//         }
//     },
//     stopLoading (dargs) {
//         let commit = dargs.commit
//         let dispatch = dargs.dispatch

//         if (dargs.noLoad !== true) {
//             commit('notLoading')
//         } else if (dargs.loader) {
//             let load = dargs.loader.stopLoading
//             dispatch(load.namespace, load.args, {root: true}).then(function () {
//         });
//         }
//     }
// }
// EG USE
// asyncLoader.load({
//     noLoad: dargs.noLoad,
//     loader: dargs.loader,
//     commit: commit,
//     dispatch: dispatch,
// })
// asyncLoader.stopLoading({
//     noLoad: dargs.noLoad,
//     loader: dargs.loader,
//     commit: commit,
//     dispatch: dispatch,
// })
