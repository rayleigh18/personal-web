import date25 from '../../assets/date25.png';
import javaJazz from '../../assets/java-jazz.png';
export const questions: {
	question: string;
	answers: {
		text: string;
		correct: boolean;
		wrongAnswer?: string;
	}[];
	imageLink?: string;
	youtubeId?: string;
	additionalInfo?: {
		link: string;
		text: string;
	};
}[] = [
	{
		question: 'Do you know who this majestic creature is?',
		answers: [
			{ text: 'Yes', correct: true },
			{ text: 'Noo', correct: false, wrongAnswer: 'Psst, her name is laufey' }
		],
		imageLink:
			'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2022-11/Laufey-5-te-221108-0188d2.jpg'
	},
	{
		question: 'What do you think about this song?',
		answers: [
			{ text: 'I love it', correct: true },
			{ text: 'No', correct: false, wrongAnswer: 'You should listen to it' }
		],
		youtubeId: 'tyKu0uZS86Q'
	},
	{
		question: 'Do you know about java jazz?',
		additionalInfo: {
			link: 'https://www.javajazzfestival.com/',
			text: 'Check here'
		},
		imageLink: javaJazz,
		answers: [
			{ text: 'Yes', correct: true },
			{ text: 'No', correct: false, wrongAnswer: 'You should check it out' }
		]
	},
	{
		question: 'Do you have time for 25 May 2024?',
		answers: [
			{ text: 'Yes, I have free time', correct: true },
			{ text: 'No, sorry', correct: false, wrongAnswer: 'You should make time' }
		],
		imageLink: date25
	},
	{
		question: 'And, come with me?',
		answers: [
			{ text: 'Yes', correct: true },
			{ text: 'No', correct: false, wrongAnswer: 'Sadge' }
		]
	}
];
