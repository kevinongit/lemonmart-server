import { Request, Response, Router } from 'express'
import { ObjectID } from 'mongodb'

import { Role } from '../../models/enums'
import { IUser, User, UserCollection } from '../../models/user'
import { authenticate } from '../../services/authServivce'
import { createNewUser } from '../../services/userService'

const router = Router()
router.get('/', async (req: Request, res: Response) => {

})

router.post('/', async (req: Request, res: Response) => {
    const userData = req.body as IUser
    const success = await createNewUser(userData)

    if (success instanceof User) {
        res.send(success)
    } else {
        res.status(400).send({ message: 'Failed to create user.' })
    }
})

/**
 * @swagger
 * /v2/users/{id}:
 *   get:
 *     description: Gets a `User` object by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User's unique id
 *     responses:
 *        '200':
 *           description: OK
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/User'
 */
router.get(
  '/:userId',
  authenticate({
    requiredRole: Role.Manager,
    permitIfSelf: {
      idGetter: (req: Request) => req.body._id,
      requiredRoleCanOverride: true,
    },
  }),
  async (req: Request, res: Response) => {
    const user = await UserCollection.findOne({ _id: new ObjectID(req.params.userId) })
    if (!user) {
      res.status(404).send({ message: 'User not found.' })
    } else {
      res.send(user)
    }
  }
)

router.put('/:userId', async (req: Request, res: Response) => {

})

export default router