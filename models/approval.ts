const mongoose = require('mongoose');
import joi from 'joi'

export const CreateApprovalSchema = joi.object({
    approved: joi.boolean().required(),
    comment: joi.string().required()
}).required()

export const UpdateApprovalSchema = joi.object({
    approved: joi.boolean().optional(),
    comment: joi.string().required()
}).required()

const approvalSchema = new mongoose.Schema({
    modelId: { 
        type: String, required: true 
    },
    artistId: { 
        type: String, required: true 
    },
    managerId: { 
        type: String, required: true 
    },
    approved: { 
        type: String,
        enum: ['approved', 'rejected'],
        required: true
    },
    comment: { 
        type: String 
    }
}, { timestamps: true });

export const Approval = mongoose.model('Approval', approvalSchema);
