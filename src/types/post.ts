export type Tag = {
	id: string;
	label: string;
};
export type Post = {
	id: string;
	title: string;
	content: string;
	author?: {
		id: string;
		displayName: string;
	};
	likesCount?: number;
	commentsCount?: number;
	tags?: Tag[];
	imageUrl?: string;
	createdAt: string;
};
