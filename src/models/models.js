
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = 

/***********************
*  lojas
***********************/
[

    {
        name: 'Dashboard',
        schema: {

            shop: {
                type: Schema.ObjectId,
                ref: 'Shop',
                required: true 
            },

            general: {
                type: Array,
            },

            zeroed: {
                type: Array,
            },

            lowExposure: {
                type: Array,
            },

            barGraph: {
                type: Array,
            },

            pieGraph: {
                type: Array,
            },

            table: {
                type: Array,
            },

            stockSales: {
                type: Array,
            },

            tableStockInfo: {
                type: Object,
            },

            tableStockNegative: {
                type: Object,
            },

            tableStockNoSpinning: {
                type: Object,
            },

            tablePercentualSupply: {
                type: Object,
            },

        }
    },
    {
        name: 'Supplier',
        schema: {

            name: 
            {
                type: String, 
                required: true
            },
            
            code: 
            {  
                type: String, 
                required: true 
            },

            minimumOrder:
            {
                type: Number,
                default: 0
            },

            consultApproval:
            {
                type: Boolean
            },

            users: 
            [
                {
                    type: String
                }
            ]
        }
    },
    {
        name: 'Shop',
        schema: {

            code: 
            {  
                type: String, 
                required: true 
            },

            name:
            {
                type: String,
                required: true
            },

            type: 
            {
                type: String,
                required: true,
                enum: ['IMAGINARIUM','MIND','LUDI']
            },

            initials: 
            {
                type: String,
                required: true,
                enum: ['IMG','MND','LUD']
            },

            intConsultant: 
            {
                type: String,
            },

            extConsultant: 
            {
                type: String,
            },

            seqOrder: 
            {  
                type: Number, 
                required: true,
                default: 0
            }, 

            createdDate: 
            { 
                type: Date, 
                default: Date.now 
            }, 

            cnpj: 
            { 
                type: String, 
                required: true
            }, 

            ie: 
            { 
                type: String
            },

            active: 
            { 
                type: Boolean,
                required: true
            },

            socialName: 
            { 
                type: String, 
                required: true
            }, 

            address:
            { 
                street:
                {
                    type: String
                },
                number:
                {
                    type: String
                },
                district:
                {
                    type: String
                },
                city: 
                {
                    type: String
                },
                uf:
                {
                    type: String
                },
                cep:
                {
                    type: String
                }
            }, 

            phones: 
            [
                {
                    type: String,
                }
            ],

            targets: [
                {
                    month: 
                    {
                        type: Number,
                        required: true
                    },
                    year: 
                    {
                        type: Number,
                        required: true
                    },
                    img:
                    {
                        type: Number,
                        required: true
                    },
                    third:
                    {
                        type: Number,
                        required: true
                    }
                }
            ]

        }

    }, 

    {
        name: 'Header',
        schema: {

            shop: 
            {  
                type: Schema.ObjectId,
                ref: 'Shop',
                required: true 
            }, 

            createdBy: 
            {  
                type: String, 
                required: true
            }, 

            createdDate: 
            { 
                type: Date, 
                default: Date.now 
            }, 

            lastModifiedBy: 
            { 
                type: String, 
                required: true
            }, 

            lastModifiedDate: 
            { 
                type: Date, 
                default: Date.now 
            }, 

            orderState:
            { 
                type: String, 
                required: true,
                enum: ['edit', 'finished']
            }, 

            orders: 
            [
                {
                    type: Schema.ObjectId,
                    ref: 'Order'
                }
            ],

            calc: 
            {
                type: Schema.ObjectId,
                ref: 'Calc',
                required: true
            }
        }

    }, 
    
    /***********************
    *  calculo do pedido 
    ***********************/
    {

        name: 'Calc',
        schema: {

            seq: 
            {  
                type: String
            }, 
            
            dashboard: 
            {  
                type: Schema.ObjectId,
                ref: 'Dashboard'
            },

            shop: 
            {  
                type: Schema.ObjectId,
                ref: 'Shop',
                required: true 
            }, 

            createdBy: 
            {  
                type: String, 
                required: true
            }, 

            createdDate: 
            { 
                type: Date, 
                default: Date.now 
            }, 

            status:
            {  
                type: String, 
                required: true,
                enum: ['calculating', 'calculated', 'error', 'completed', 'cancelled', 'recalculating', 'recalculated']
            },

            error:
            {
                date: 
                {
                    type: Date,
                },
                reason: 
                {
                    type: String
                }
            },


            data: 
            [
                {
                    PRODUTO:
                    {  
                        type: String, 
                        required: true
                    },
                    PRECO_CUSTO:
                    {  
                        type: Number, 
                        required: true
                    },
                    SUGESTAO:
                    {  
                        type: Number
                    },
                    ESTOQUE_LOJA_FISICO:
                    {  
                        type: Number, 
                    },
                    ESTOQUE_LOJA_TRANSITO:
                    {  
                        type: Number, 
                    },
                    ESTOQUE_SEGURANCA:
                    {  
                        type: Number, 
                    },
                    PREVISAO:
                    {  
                        type: Number, 
                    },
                    VENDA_60_DIAS:
                    {  
                        type: Number, 
                    },
                    VENDA_30_DIAS:
                    {  
                        type: Number, 
                    },
                    DIAS_EM_ESTOQUE:
                    {  
                        type: Number, 
                    },
                    COBERTURA:
                    {  
                        type: String, 
                    },
                    COBERTURA_DIAS:
                    {  
                        type: Number, 
                    },
                    LANCAMENTO:
                    {  
                        type: Boolean
                    },
                    ROYALTS:
                    {
                        type: Number
                    },
                    PRAZO_DE_ENTREGA:
                    {  
                        type: String, 
                    },
                    FABRICANTE:
                    {  
                        type: String, 
                    },
                    LEADTIME:
                    {  
                        type: Number, 
                    },
                    PONTO_PEDIDO:
                    {  
                        type: Number, 
                    },
                    MARKUP:
                    {  
                        type: Number, 
                    },
                    MARGEM:
                    {  
                        type: Number, 
                    },
                    SAZONALIDADE: 
                    {
                        type: Number,
                    },
                    CURVA_ABC_LOJA: {

                        type: String
                    },
                    RANKING_ABC_LOJA : {

                        type: Number
                    },
                    DATA_ULTIMO_INVENTARIO: {

                        type: Date
                    },
                    FLAG_ESTOQUE_TRANSITO: {

                        type: String
                    },
                    FLAG_ESTOQUE_FISICO: {
                        
                        type: String
                    },
                    SUGERIDO_ANTECIPADO: {
                        
                        type: Number
                    },
                    SUGERIDO_TOTAL: {
                        
                        type: Number
                    }
                }
            ]

        }

/***********************
*  pedidos da loja  
***********************/

    }, {
        name: 'Order',
        schema: {

            id: 
            { 
                type: String, 
                required: true
            },

            orderOrigin: 
            { 
                type: String, 
                required: false,
                default : null
            },

            version: { 
                type: Number,
                default: 0
            },
            
            createdDate: 
            { 
                type: Date, 
                default: Date.now
            },
            
            createdBy:
            {
                type: String
            }, 

            lastModifiedDate: { 
                type: Date, 
                default: Date.now 
            },

            lastModifiedBy: { 
                type: String
            },
            
            shop: 
            {  
                type: Schema.ObjectId,
                ref: 'Shop',
                required: true 
            },
            
            supplier: 
            {  
                type: Schema.ObjectId,
                ref: 'Supplier',
                required: true 
            },

            isOpen:
            {
                type: Boolean, 
                default: true
            },

            status:
            { 
                type: String, 
                required: true,
                enum: ['Em confecção', 'Em análise consultor','Em análise franqueado', 'Liberado financeiro', 'Liberado fornecedor', 'Cancelado', 'Dividido', 'Em produção', 'Reprovado financeiro', 'Aguardando embarque', 'Em trânsito', 'Concluído', 'Aguardando liberação' ], 
            },

            integrated: 
            {
                type: Boolean,
                default: false
            },

            splited:
            {
                type: Boolean,
                default: false
            },

            splitedIn:
            {
                type: Date
            },

            integrateIn: 
            {
                type: Date
            },

            totalValue: 
            {
                type: Number,
                default: 0
            },

            totalQty: 
            {
                type: Number,
                default: 0
            },
            
            config: {
                discount: 
                { 
                    type: Number,
                    // required: true
                }, 
                discountPercent: 
                { 
                    type: Number,
                    // required: true
                }, 
                paymentMethod: { 
                    type: String,
                    // required: true
                }, 
                operation: { 
                    type: String,
                    // required: true 
                }, 
                obs: { 
                    type: String,
                }, 
                conference: { 
                    type: Boolean,
                    // required: true
                }
            },
                
            products:
            [
                {
                    PRODUTO: 
                    { 
                        type: String,
                        required: true
                    }, 
                    QUANTIDADE: 
                    { 
                        type: Number,
                        required: true
                    }, 
                }
            ],

            history: 
            [
                {
                    origin:  
                    { 
                        type: String,
                        required: true
                    },
                    type:  
                    { 
                        type: String,
                        required: true
                    },
                    data:  
                    {
                        ref: {
                            type: Schema.ObjectId,
                            ref: 'OrderChanges'
                        }, 
                        item: 
                        { 
                            type: String,
                        },
                        user: 
                        { 
                            type: String,
                        },
                        value:  
                        { 
                            type: String,
                        },
                        message:  
                        { 
                            type: String,
                        },
                    },
                    date:  
                    { 
                        type: Date,
                        default: Date.now
                    },
                    
                }
            ],

            shipment : {
                invoice: { 
                    type: String,
                    default: ''
                },
                carrying: { 
                    type: String,
                    default: ''
                },
                billingDate: { 
                    type: Date,
                    default: null
                },
                shipmentDate: { 
                    type: Date,
                    default: null
                },
                internalID: { 
                    type: String,
                    default: ''
                },
                externalID: { 
                    type: String,
                    default: ''
                },
            }

            
        }
    },

    /***********************
    *  alterações de pedidos
    ***********************/
    {
        name: 'OrderChanges',
        schema: {
            ref: {
                type: Schema.ObjectId,
                ref: 'Order',
                required: true
            },
            user: {
                type: String,
                required: true
            },
            changeDate: {
                type: Date,
                default: Date.now
            },
            order: {
                type: Object,
                required: true
            }

        }
    },

    /***********************
    *  Métodos de pagamento
    ***********************/
    {
        name: 'Payments',
        schema: {
            id: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            enabled: {
                type: Boolean,
                required: true
            },
            valid: {
                type: Boolean,
                required: true
            },
            allowedForExternalSuppliers: {
                type: Boolean
            },
            allowedForInternalSuppliers: {
                type: Boolean
            },
            restrict: {
                type: Boolean
            }

        }
    },

    /***********************
    *  Produtos  
    ***********************/
    {
        name: 'Products',
        schema: {
            key: {
                type: String,
                required: true,
                unique: true
            },
            enabled: {
                type: Boolean,
                default: true
            },
            createdDate: {
                type: Date,
                default: Date.now
            },
            lastModifiedDate: { 
                type: Date, 
                default: Date.now 
            },
            data: {
                PRODUTO: {
                    type: String,
                    required: true
                },
                DESC_PRODUTO: {
                    type: String,
                    required: true
                },
                FABRICANTE: {
                    type: String,
                    required: true
                },
                GRUPO_PRODUTO: {
                    type: String
                },
                SUBGRUPO_PRODUTO: {
                    type: String
                },
                GRIFFE: {
                    type: String,
                    required: true
                },
                LINHA: {
                    type: String
                },
                CURVA_ABC: {
                    type: String
                },
                RANKING_ABC : {
                    type: Number
                },
                IMG_VOLTAGEM: {
                    type: String 
                },
                QTDE_PACK: {
                    type: Number
                },
                PRECO_VENDA: {
                    type: Number
                },
                ESTOQUE_CD: {
                    type: Number
                },
                CAMPANHA: {
                    type: String
                },
                GRADE: {
                    type: String
                },
                EMBALAGEM: {
                    type: String
                },
                MATERIA_PRIMA: {
                    type: String
                },
                PROFUNDIDADE: {
                    type: String
                },
                FUNCAO_PRIMARIA: {
                    type: String
                },
                DESC_COMPLETA: {
                    type: String
                },
                FUNCAO: {
                    type: String
                },
                DATA_LANCAMENTO: {
                    type: Date
                },
                ACAO_PONTA: {
                    type: String
                }

            }
        }
    }
    
];
