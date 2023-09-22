
import mongoose, {Schema, Model} from "mongoose";


interface creditInterface{
    name: string,
    value: number
}

interface debitInterface{
    name: string,
    value: number,
    status?: 'PAGO' | 'PENDENTE' | 'AGENDADO'
}

interface billingCycleInterface{
    name: string,
    month: number,
    year: number,
    credits: [creditInterface]
    debts: [debitInterface]
}

const creditSchema = new Schema<creditInterface>({
    name: {type: String, required: true }, 
    value: {type: Number, min: 0, required: true}
})

const debitSchema = new Schema<debitInterface>({
    name: {type: String, required: true }, 
    value: {type: Number, min: 0, required: true},
    status: {type: String, required: false, uppercase: true, enum: ["PAGO", 'PENDENTE', 'AGENDADO'] }
});

const billingCycleSchema = new Schema<billingCycleInterface>({
    name: {type: String, required: true },
    month: {type: Number, min:1, max:12, required: true},
    year: {type: Number, min: 1970, max:2100, required: true},
    credits: [creditSchema],
    debts: [debitSchema]
});

const billingCycleModel = mongoose.model('billingCycleModel', billingCycleSchema);

export default billingCycleModel;