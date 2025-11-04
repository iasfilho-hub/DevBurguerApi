import * as Yup from 'yup';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import authConfig from './../../config/auth.js'

class SessionController {
	async store(req, res) {
		const Schema = Yup.object({ 
			email: Yup.string().email().required(),
			password: Yup.string().min(6).required(),
		});

		const isValid = await Schema.isValid(req.body, { strict: true });
''
		const emailOrPasswordIncorrect = () => {
			return res.status(400).json({ error: 'Email or password incorrect' });
		};

		if (!isValid) {
			emailOrPasswordIncorrect();
		}

		const { email, password } = req.body;

		const existingUser = await User.findOne({
			where: {
				email,
			},
		});

		if (!existingUser) {
			emailOrPasswordIncorrect();
		}

		const isPasswordCorrect = await bcrypt.compare(
			password,
			existingUser.password_hash,
		);

		if (!isPasswordCorrect) {
			emailOrPasswordIncorrect();
		}
		
		const token = jwt.sign({
			id: existingUser.id, admin: existingUser.admin, name: existingUser.name}, 
			authConfig.secret, {
			expiresIn: authConfig.expiresIn,
		})

		return res.status(200).json({
			id: existingUser.id,
			nome: existingUser.name,
			email: existingUser.email,
			admin: existingUser.admin,
			token,
		});
	}
}

export default new SessionController();
