import { Request, Response } from 'express';
import StateModel from '../models/stateModel';
import UserModel from '../models/userModel'; 

export const createState = async (req: Request, res: Response) => {
    try {
        const { name, description, status } = req.body;

        console.log("body",req.body)

        const userId = (req.user as { userId: string }).userId

        
        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

       
        const state = new StateModel({ name, description, status, createdBy: user.userName });
        await state.save();

        res.status(201).json(state);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};

export const getStates = async (req: Request, res: Response) => {
    try {
        const states = await StateModel.find();
        res.status(200).json(states);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};

export const updateState = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        console.log(req.params.id);
        const { name, description, status } = req.body;
        console.log(req.body)
        const state = await StateModel.findByIdAndUpdate(id, { name, description, status }, { new: true });
        res.status(200).json(state);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};

export const deleteState = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await StateModel.findByIdAndDelete(id);
        res.status(204).end();
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};



  


export const getStateSummary = async (req: Request, res: Response) => {
    try {
      const summary = await StateModel.aggregate([
        {
          $project: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" },
            day: { $dayOfMonth: "$createdAt" },
            hour: { $hour: "$createdAt" },
            status: "$status",
          },
        },
        {
          $facet: {
            byHour: [
              {
                $group: {
                  _id: { year: "$year", month: "$month", day: "$day", hour: "$hour", status: "$status" },
                  count: { $sum: 1 },
                },
              },
            ],
            byDay: [
              {
                $group: {
                  _id: { year: "$year", month: "$month", day: "$day", status: "$status" },
                  count: { $sum: 1 },
                },
              },
            ],
            byMonth: [
              {
                $group: {
                  _id: { year: "$year", month: "$month", status: "$status" },
                  count: { $sum: 1 },
                },
              },
            ],
          },
        },
      ]);
  
      res.status(200).json(summary);
    } catch (error) {
      console.error('Error in getStateSummary:', error);
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred' });
      }
    }
  };