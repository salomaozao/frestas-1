import { NextApiRequest, NextApiResponse } from "next";
import { query as q } from 'faunadb'
import { fauna } from '../../../utils/fauna'


export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { 
        name, socialName, phone, cpf, birth, school, ethnicity, gender,
        state, city, email, socialMedia, howKnow,
        haveDeficit, whatDeficit, accessibilityFeature, course, paymentStatus
    } = req.body

    console.log(req.body)
  
    try {
      await fauna.query(
        q.Create(q.Collection('users'), {
          data: {
            name, socialName, phone, cpf, 
            birth, school, ethnicity, gender,
            state, city, email, socialMedia, howKnow,
            haveDeficit, whatDeficit, accessibilityFeature, 
            courses:{
                course:{
                  name: course,
                  paymentStatus          
                }
            }
          },
        })
      );
      res.status(200).end();
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  };



