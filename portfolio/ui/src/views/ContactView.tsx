import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';
import {
	ContactOuterContainer,
	ContactFormContainer,
	ContactForm,
	ContactTextField,
	ContactButton,
	ContactTitle,
	ContactLoaderContainer,
	ContactSpinner,
	ContactStyledImage,
} from './contactView.styles';

interface IFormInput {
	name: string;
	email: string;
	subject: string;
	message: string;
}

const ContactView: React.FC = () => {
	const { t } = useTranslation();
	const [loading, setLoading] = useState(false);
	const [sent, setSent] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInput>();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const onSubmit: SubmitHandler<IFormInput> = (data) => {
		if (
			!process.env.REACT_APP_EMAILJS_SERVICE_ID ||
			!process.env.REACT_APP_EMAILJS_TEMPLATE_ID ||
			!process.env.REACT_APP_EMAILJS_USER_ID ||
			!process.env.REACT_APP_EMAILJS_TO_EMAIL
		) {
			console.error('Missing EmailJS environment variables');
			return;
		}

		setLoading(true);

		emailjs
			.send(
				process.env.REACT_APP_EMAILJS_SERVICE_ID!,
				process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
				{
					from_name: data.name,
					from_email: data.email,
					to_email: process.env.REACT_APP_EMAILJS_TO_EMAIL,
					subject: data.subject,
					message: data.message,
				},
				process.env.REACT_APP_EMAILJS_USER_ID!,
			)
			.then((response) => {
				console.log('SUCCESS!', response.status, response.text);
				setLoading(false);
				setSent(true);
			})
			.catch((error) => {
				console.error('FAILED...', error);
				setLoading(false);
			});
	};

	if (loading) {
		return (
			<ContactLoaderContainer>
				<ContactSpinner />
			</ContactLoaderContainer>
		);
	}

	if (sent) {
		return (
			<ContactOuterContainer>
				<ContactFormContainer>
					<ContactStyledImage src='./assets/sent.svg' alt='Thank you' />
				</ContactFormContainer>
			</ContactOuterContainer>
		);
	}

	return (
		<ContactOuterContainer>
			<ContactFormContainer>
				<ContactTitle variant='h6'>{t('contact.title')}</ContactTitle>
				<ContactForm onSubmit={handleSubmit(onSubmit)}>
					<ContactTextField
						label={t('contact.name')}
						{...register('name', { required: true })}
						error={!!errors.name}
						helperText={errors.name ? t('contact.nameError') : ''}
					/>
					<ContactTextField
						label={t('contact.email')}
						{...register('email', { required: true, pattern: /^\S+@\S+$/i })}
						error={!!errors.email}
						helperText={errors.email ? t('contact.emailError') : ''}
					/>
					<ContactTextField
						label={t('contact.subject')}
						{...register('subject', { required: true })}
						error={!!errors.subject}
						helperText={errors.subject ? t('contact.subjectError') : ''}
					/>
					<ContactTextField
						label={t('contact.message')}
						multiline
						rows={4}
						{...register('message', { required: true })}
						error={!!errors.message}
						helperText={errors.message ? t('contact.messageError') : ''}
					/>
					<ContactButton color='primary' type='submit'>
						{t('contact.button')}
					</ContactButton>
				</ContactForm>
			</ContactFormContainer>
		</ContactOuterContainer>
	);
};

export default ContactView;
