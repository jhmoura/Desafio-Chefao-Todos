import { Request, Response } from "express";
import { condicaoService } from '../services'

export const CondicaoController = {
    async create(req, res) {
        try {
            const novaCondicao = await condicaoService.cadastrarCondicao(req.body);
            return res.status(201).json(novaCondicao);
        } catch (error) {
            return res.status(500).json(error);
        }
    },


    async update(req, res) {
        try {
            const updateCondicao = await condicaoService.alterarCondicao(req.body, req.params, req.auth);
            return res.status(200).json(updateCondicao);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    async delete(req, res) {
        try {
            const deletarCondicao = await condicaoService.excluirCondicao(req.params, req.auth);
            return res.sendStatus(204).json(deletarCondicao)
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    async getAll(req, res) {
        try {
            const condicao = await condicaoService.todasCondicoes();
            return res.json(condicao);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    async getOne(req, res) {
        try {
            const condicao = await condicaoService.umaCondicao(req.params);
            return res.json(condicao);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
};