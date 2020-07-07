export class Post {
	userId: Number;
	id: Number;
	title: String;
	body: String;
}

export class SinglePost {
	userId: Number;
	id: Number;
	title: String;
	body: String;
}

export class Comment {
	postId: Number;
	id: Number;
	name: String;
	email: String;
	body: String;
}
