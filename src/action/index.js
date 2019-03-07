import {productKeys} from "../constant"

const addAttributes = (data) =>({
    type: productKeys.ADD_ATTRIBUTES,
    data
})

export{
    addAttributes
}