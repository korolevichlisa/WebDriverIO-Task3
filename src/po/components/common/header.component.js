export class HeaderComponent{
    get name() {
        return $('div.TDbJKc')
    }

    item(param) {
        const selectors = {
            googleIcon:'div.xfOwYc',
            navigation:'div.QI6NKc',
            search: 'div.YSM5S',
            docs: 'div.wAkt4d',  
        }
        return $(`div.TDbJKc ${selectors[param.toLowerCase()]}`)
    }
}