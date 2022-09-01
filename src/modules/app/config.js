//export const API_URL = "http://192.168.0.108:3010/";
 export const API_URL = "https://js.amatak.net/";


export const LOGO_IMAGE_URL = 'https://www.amatak.net/admin_/files/logo/'

export const PROUDCT_THUMBNAIL_URL_IMAGE = 'https://www.amatak.net/admin_/files/products/th/'
export const PROUDCT_URL_IMAGE = 'https://www.amatak.net/admin_/files/products/'
export const PRODUCT_MORE_URL_IMAGE = 'https://www.amatak.net/admin_/files/product-images/'
export const PRODUCT_THUMBNAIL_MORE_URL_IMAGE = 'https://www.amatak.net/admin_/files/product-images/th/'

export const CATEGORIES_URL_IMAGE = 'https://www.amatak.net/admin_/files/categories/'
export const CATEGORIES_THUMBNAIL_URL_IMAGE = 'https://www.amatak.net/admin_/files/categories/th/'

export const STORE_URL_IMAGE = 'https://www.amatak.net/admin_/files/stores/'

export const BRAND_URL_IMAGE = 'https://www.amatak.net/admin_/files/brands/'
export const BRAND_THUMBNAIL_URL_IMAGE = 'https://www.amatak.net/admin_/files/brands/th/'

export const SLIDE_URL_IMAGE = 'https://www.amatak.net/admin_/files/slides/'

export const MEMBER_URL_IMAGE = 'https://www.amatak.net/admin_/files/members/'
export const MEMBER_THUMBNAIL_URL_IMAGE = 'https://www.amatak.net/admin_/files/members/th/'

// gE26bfcUqSfBJ5KcB42r



// export function* product(payload){
//     try {
//         const homeProduct = yield call(axios.get, "stores/followed/"+payload.payload);
//         console.log('store', nomalize(homeProduct));
//         yield put({
//             type: success(HOME_PRODUCT),
//             payload:{
//                 dataHomeProduct:nomalize(homeProduct)
//             }
//         })
//     } catch (e) {
//         const parseError = yield JSON.parse(JSON.stringify(e));
//         const message = parseError.data || parseError.response
//         console.log('store error', message)
//         yield put({
//             type:error(HOME_PRODUCT),
//             payload:'error'
//         })
//     }
// }