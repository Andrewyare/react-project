import * as PostActionCreators from './post';
import * as UserActionCreators from "./users";
import * as CommentActionCreators from "./comment";
import * as TodoActionCreators from './todo'

export default {
	...PostActionCreators,
	...UserActionCreators,
	...CommentActionCreators,
	...TodoActionCreators,
}