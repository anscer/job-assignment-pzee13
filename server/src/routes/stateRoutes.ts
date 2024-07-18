import { Router } from 'express';
import { createState, getStates, updateState, deleteState } from '../controller/stateController';
import { authenticateJWT } from '../middleware/auth';

const stateRoutes = Router();

stateRoutes.post('/createState', authenticateJWT, createState);
stateRoutes.get('/getState', authenticateJWT, getStates);
stateRoutes.put('/:id', authenticateJWT, updateState);
stateRoutes.delete('/:id', authenticateJWT, deleteState);

export default stateRoutes;