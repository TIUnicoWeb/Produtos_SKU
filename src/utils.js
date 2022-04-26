
//adiciona zeros a esquerda
Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
}

const isEmpty = (test) => {

    if (test === null || test === undefined) return true

    if(typeof test === 'string') return test.trim() === ''

    if(typeof test === 'object') {

        if(Array.isArray(test)) return test.length === 0

        return Object.keys(test).length === 0

    }

    return false;

}

const where = (object, params) => {

    if(Object.keys(params).length === 0) return object
    else {
        return object.filter((o) => {

            //Se algum parametros de filtro não existe no objeto, então não retorna ele
            Object.keys(params).every(pKey => {
                return o[pKey] !== undefined;
            })

            //
            return Object.keys(params).every(key => params[key] == o[key])
        })
    }

}

const mergeByKey = (destination, source, key) => {

    destination = destination.map(obj => {

        const finded = source.find((i) => i[key] === obj[key])

        if(finded) obj = {...obj, ...finded}

        return obj

    })

    return destination;

}


const money = val => {
    const props = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' };

    return val ? val.toLocaleString("pt-BR", props) : 'R$ 0,00'
}

const productsQuantity = products => {
    return products.reduce((acc, product) => acc + (product.QUANTIDADE || 0), 0)
}

const valueOfProducts = products => {
    return products.reduce((acc, product) => acc + ((product.PRECO_CUSTO || product.CUSTO || 0) * product.QUANTIDADE), 0.0)
}

const valueOfRoyalties = products => {
    return products.reduce((acc, product) => acc + ((product.ROYALTS || 0) * product.QUANTIDADE), 0.0)
}

const discountValue = (products, paymentConfig) => {
    return (valueOfProducts(products) + valueOfRoyalties(products)) *  ((paymentConfig.discount || 0)/100)
}

const bruteValue = (products) => {
    return valueOfProducts(products) + valueOfRoyalties(products)
}

const liquidValue = (products, paymentConfig) => {
    return valueOfProducts(products) + valueOfRoyalties(products) - discountValue(products, paymentConfig)
}

module.exports = { where, isEmpty, mergeByKey, money, productsQuantity, valueOfProducts, valueOfRoyalties, discountValue, bruteValue, liquidValue }

