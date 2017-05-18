import express = require('express');
import {API} from './aPI/aPI';

let api = new API(express(), normalizePort(process.env.PORT || 3000));
api.run();


function normalizePort(val: number|string): number|string|boolean {
  let port: number = (typeof val === 'string') ? parseInt(val, 10) : val;
  if (isNaN(port)) return val;
  else if (port >= 0) return port;
  else return false;
}

