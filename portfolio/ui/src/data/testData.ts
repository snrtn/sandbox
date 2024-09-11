export interface Post {
	id: number;
	title: string;
	tags: string[];
	imgSrc: string;
	content: string;
}

export const posts: Post[] = [
	{
		id: 1,
		title: 'Développement',
		tags: ['JavaScript'],
		imgSrc:
			'https://images.unsplash.com/photo-1718571702272-1b0f9009d97c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		content:
			'Article sur le développement JavaScript. Cet article couvre les concepts de base de JavaScript et les dernières tendances.',
	},
	{
		id: 2,
		title: 'Étude',
		tags: ['Éducation'],
		imgSrc:
			'https://images.unsplash.com/photo-1718571781336-12a2a318ae91?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		content:
			"Article sur l'éducation. Cet article discute des méthodes d'apprentissage efficaces et de l'importance de l'éducation.",
	},
	{
		id: 3,
		title: 'Création de site',
		tags: ['Développement Web'],
		imgSrc:
			'https://images.unsplash.com/photo-1701078360294-0b77aca5fb5a?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		content:
			'Article sur le développement web. Cet article explique le processus de création de sites web et les technologies clés.',
	},
	{
		id: 4,
		title: 'Divers',
		tags: ['Divers'],
		imgSrc:
			'https://images.unsplash.com/photo-1701005259800-a54508d52ed5?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		content: 'Article sur divers sujets. Cet article aborde divers sujets intéressants.',
	},
	{
		id: 5,
		title: 'Programmation',
		tags: ['Codage'],
		imgSrc:
			'https://images.unsplash.com/photo-1700566089371-bc5e26511e84?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		content: 'Article sur la programmation. Cet article discute de divers langages et techniques de programmation.',
	},
	{
		id: 6,
		title: 'Conception',
		tags: ['Design Graphique'],
		imgSrc:
			'https://images.unsplash.com/photo-1692954721427-81206ca8d809?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		content:
			'Article sur le design graphique. Cet article couvre les principes de conception et les dernières tendances en design.',
	},
	{
		id: 7,
		title: 'Base de données',
		tags: ['SQL'],
		imgSrc:
			'https://images.unsplash.com/photo-1688417143774-23e29359f465?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		content:
			'Article sur les bases de données et SQL. Cet article explique les concepts de base de SQL et la gestion des bases de données.',
	},
	{
		id: 8,
		title: 'Cloud',
		tags: ['AWS'],
		imgSrc:
			'https://images.unsplash.com/photo-1683656017639-bc622715c153?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		content:
			'Article sur le cloud computing et AWS. Cet article couvre les principaux services AWS et les avantages du cloud computing.',
	},
];
