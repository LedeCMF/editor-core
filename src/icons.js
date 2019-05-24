import bold from '@mdi/svg/svg/format-bold.svg'
import italic from '@mdi/svg/svg/format-italic.svg'
import underline from '@mdi/svg/svg/format-underline.svg'
import strike from '@mdi/svg/svg/format-strikethrough.svg'

import align_right from '@mdi/svg/svg/format-align-right.svg'
import align_left from '@mdi/svg/svg/format-align-left.svg'
import align_center from '@mdi/svg/svg/format-align-center.svg'
import align_justify from '@mdi/svg/svg/format-align-justify.svg'

import heading from '@mdi/svg/svg/format-header-pound.svg'
import bullet_list from '@mdi/svg/svg/format-list-bulleted.svg'
import ordered_list from '@mdi/svg/svg/format-list-numbered.svg'

import paragraph from '@mdi/svg/svg/format-paragraph.svg'
import paragraph2 from '@mdi/svg/svg/format-pilcrow.svg'
import blockquote from '@mdi/svg/svg/format-quote-open.svg'
import outdent from '@mdi/svg/svg/format-indent-decrease.svg'
import indent from '@mdi/svg/svg/format-indent-increase.svg'

import merge from '@mdi/svg/svg/format-align-middle.svg'
import clean from '@mdi/svg/svg/eraser-variant.svg'
import trash from '@mdi/svg/svg/trash-can.svg'
import image from '@mdi/svg/svg/image-outline.svg'
import link from '@mdi/svg/svg/link-variant.svg'

import close from '@mdi/svg/svg/close.svg'
import check from '@mdi/svg/svg/check.svg'
import add from '@mdi/svg/svg/plus-circle.svg'
import hr from '@mdi/svg/svg/minus.svg'



import select_up from '@mdi/svg/svg/select-drag.svg'
import resize from '@mdi/svg/svg/resize.svg'
import label from '@mdi/svg/svg/label.svg'
import insert_above from '@mdi/svg/svg/arrow-expand-up.svg'
import insert_below from '@mdi/svg/svg/arrow-expand-down.svg'

const defaults = {
    bold,
    italic,
    underline,
    strike,
    align_center,
    align_justify,
    align_left,
    align_right,
    heading,
    ordered_list,
    bullet_list,
    paragraph,
    paragraph2,
    blockquote,
    outdent,
    indent,
    merge,
    clean,
    image,
    link,
    close,
    check,
    hr,
    trash,
    select_up,
    resize,
    label,
    add,
    insert_above,
    insert_below,

}

class Icons {
    
    constructor() {
        this._icons = defaults
    }
    
    get(name) {
        return this._icons[name]
    }
    
    set(name, icon) {
        this._icons[name] = icon
        return this
    }
    
    has(name) {
        return Object.keys(this._icons).indexOf(name) !== -1
    }
    
    all() {
        return this._icons
    }
    
    names() {
        return Object.keys(this._icons)
    }
}

export default new Icons()
