/**
 * This file was auto-generated by Fern from our API Definition.
 */
import express from "express";
import { ImdbService } from "./api/resources/imdb/service/ImdbService";
export declare function register(expressApp: express.Express | express.Router, services: {
    imdb: ImdbService;
}): void;
