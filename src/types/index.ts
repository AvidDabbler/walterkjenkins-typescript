export interface LessonType {
	id:              string;
	tags:            string[];
	link:            string;
	technology:      string[];
	experience:      string;
	author:          string[];
	file_under:    string;
	path: string[];
	name:            string;
}


export interface SelectOption {
	value: string | number;
	label: string | number;
	color: string;
}