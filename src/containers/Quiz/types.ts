export interface IQuestions {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export interface IScore {
  answer: string | null;
  question: string | null;
}
